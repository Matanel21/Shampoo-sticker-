// הפונקציה שמטפלת בהעלאת התמונה
document.getElementById('uploadImage').addEventListener('change', function(event) {
    var file = event.target.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var uploadedImage = document.getElementById('uploadedImage');
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = 'block';  // הצגת התמונה שהועלתה
        };
        reader.readAsDataURL(file);
    }
});

// פונקציה לשלוח את הבקשה
document.getElementById('submitButton').addEventListener('click', function() {
    var uploadedImage = document.getElementById('uploadedImage').src;
    
    if (uploadedImage) {
        // כאן תוכל להוסיף פונקציה לשליחה למייל
        document.getElementById('successMessage').classList.remove('hidden');
    } else {
        document.getElementById('errorMessage').classList.remove('hidden');
    }
});
