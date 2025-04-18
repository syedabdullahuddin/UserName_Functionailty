
document.addEventListener('DOMContentLoaded', function() {
    const usernameForm = document.getElementById('usernameForm');
    const usernameInput = document.getElementById('username');
    const validationMessage = document.getElementById('validationMessage');
    
    
    usernameInput.addEventListener('input', function() {
        validateUsername(this.value);
    });
    

    usernameForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = usernameInput.value.trim();
        
        if (isValidUsername(username)) {
            
            Swal.fire({
                title: "Valid username!",
                text: "Your account has been created successfully.",
                icon: "success",
                draggable: true,
                confirmButtonColor: "#4a6cf7"
            });
            
            // Reset form
            usernameForm.reset();
            validationMessage.textContent = '';
            validationMessage.className = 'validation-message';
        } else {
            // Show error and shake the input
            validationMessage.textContent = "Invalid username! You must include at least one of these special characters: @, ., !, ,";
            validationMessage.className = 'validation-message error';
            
            usernameInput.classList.add('shake');
            setTimeout(() => {
                usernameInput.classList.remove('shake');
            }, 600);
        }
    });
    
    // Function to validate username
    function validateUsername(username) {
        if (username.trim() === '') {
            validationMessage.textContent = '';
            validationMessage.className = 'validation-message';
            return;
        }
        
        if (isValidUsername(username)) {
            validationMessage.textContent = "Username is valid!";
            validationMessage.className = 'validation-message success';
        } else {
            validationMessage.textContent = "Username must include at least one special character: @, ., !, ,";
            validationMessage.className = 'validation-message error';
        }
    }
    
    
    function isValidUsername(username) {
        return (
            username.includes("@") ||
            username.includes(".") ||
            username.includes("!") ||
            username.includes(",")
        );
    }
    
    
    usernameInput.addEventListener('focus', function() {
        const specialChars = document.querySelectorAll('.special-char');
        specialChars.forEach(char => {
            char.style.backgroundColor = '#4a6cf7';
            char.style.color = 'white';
        });
    });
    
    usernameInput.addEventListener('blur', function() {
        const specialChars = document.querySelectorAll('.special-char');
        specialChars.forEach(char => {
            char.style.backgroundColor = '#f0f0f0';
            char.style.color = 'inherit';
        });
    });
});
