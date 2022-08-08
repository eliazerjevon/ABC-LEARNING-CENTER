var users = localStorage.getItem("elStrorage3"); 
$(function () {
    users = JSON.parse(users); // Convert String as an Object
    if (users === null) // If there is nothing intialize
        users = [];
    });

function formValidation() {
    // Get the HTML elements
    var userName = document.registration.user_name;
    var gender = document.registration.gender;
    var email = document.registration.email;
    var password = document.registration.pwd;
    var contact = document.registration.contact;
    var course = document.registration.course;


    if (isValidUserName(userName, 6, 20))
        if (isValidEmail(email))
            if (isValidContact(contact, 8, 13)){
            

                var user = JSON.stringify({
                    user_name: $("#user_name").val(),
                    email: $("#email").val(),
                    password: $("#pwd").val(),
                    contact: $("#contact").val(),
                    gender: gender.value,
                    course: $("#course").val(),
                  });

                 users.push(user);
                 localStorage.setItem("elStrorage3", JSON.stringify(users)); 
                return true;
            }

                
    return false;
}
function isValidUserName(userName, minLen, maxLen) {
    var userNameLength = userName.value.length;
    if (userNameLength == 0 || userNameLength > maxLen || userNameLength < minLen) { // || - Or operator
        alert("User Name should not be empty / length must be between " + minLen + " to " + maxLen);
        userName.focus();
        return false;
    } else if (!isAlpha(userName)) {        //! - Not operator
        alert("Enter alphabets only");
        userName.focus();
        return false;
    }
    return true;
}

function isValidEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        return true;
    }
    else {
        alert("Enter valid email address!");
        email.focus();
        return false;
    }
}


function isValidContact(contact, minLen, maxLen) {
    var contactLength = contact.value.length;
    if (contactLength == 0 || contactLength > maxLen) {
        alert("Contact should not be empty / length must be between " + minLen + " to " + maxLen);
        contact.focus();
        return false;
    } else if (!isNumber(contact)) {
        alert("Enter Numbers only");
        contact.focus();
        return false;
    }
    return true;
}


function isAlpha(input) {
    var characters = /^[#.a-zA-Z\s,-]+$/; // Regular Expression [ ] - Options , A-Z - A,B, C ... Z, ^ - Any 
    if (input.value.match(characters)) {
        return true;
    }
    return false;
}

function isNumber(input) {
    var characters = /^[0-9{8}]+$/;
    if (input.value.match(characters)) {
        return true;
    }
    return false;
}

function isAlphaNumeric(input) {
    var characters = /^[0-9A-Za-z]+$/;
    if (input.value.match(characters)) {
        return true;
    }
    return false;
}


