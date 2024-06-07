
//function for the message form on Contact page
function submitMessage() {
    document.getElementById('fbox').value = "";
    document.getElementById('lbox').value = "";
    document.getElementById('emailbox').value = "";
    document.getElementById('msgbox').value = "";
    window.confirm("Your message has been submitted. Please check your email for updates.");
}

//event listeners for each of the check boxes edisplay a time and date selector if the service is selected
document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById('individual');
    var hiddenElement = document.getElementById('indDate');

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            hiddenElement.style.display = 'block';
        } else {
            hiddenElement.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById('group');
    var hiddenElement = document.getElementById('groupDate');

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            hiddenElement.style.display = 'block';
        } else {
            hiddenElement.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById('home');
    var hiddenElement = document.getElementById('homeDate');

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            hiddenElement.style.display = 'block';
        } else {
            hiddenElement.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById('groom');
    var hiddenElement = document.getElementById('groomDate');

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            hiddenElement.style.display = 'block';
        } else {
            hiddenElement.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById('trips');
    var hiddenElement = document.getElementById('tripDate');

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            hiddenElement.style.display = 'block';
        } else {
            hiddenElement.style.display = 'none';
        }
    });
});

//clears all fields after the appointment is "submitted"
function submitAppointment() {
    
    var confirmation = generateBooking();
    document.getElementById('bookingNo').innerText = "Your booking confirmation number is: " + confirmation + ". Please check your email for more details. Feel free to contact us if you have any concerns.";
    
    //Clear check boxes
    document.getElementById('individual').checked = false;
    document.getElementById('indDate').style.display = 'none';
    document.getElementById('group').checked = false;
    document.getElementById('groupDate').style.display = 'none';
    document.getElementById('home').checked = false;
    document.getElementById('homeDate').style.display = 'none';
    document.getElementById('groom').checked = false;
    document.getElementById('groomDate').style.display = 'none';
    document.getElementById('trips').checked = false;
    document.getElementById('tripDate').style.display = 'none';

    document.getElementById('fbox').value = "";
    document.getElementById('lbox').value = "";
    document.getElementById('emailbox').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('address').value = "";
    document.getElementById('city').value = "";
    document.getElementById('province').value = "default";
}

//function to generate a booking confirmation for the user
function generateBooking() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    
    var result = '';
    
    for (let k = 0; k < 3; k++) {
        const randomLetter = letters.charAt(Math.floor(Math.random() * letters.length));
        const randomNumber = numbers.charAt(Math.floor(Math.random() * numbers.length));
        
        result += randomLetter + randomNumber;
    }
    return result;
}