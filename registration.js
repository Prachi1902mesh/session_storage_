document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var mobileNo = document.getElementById('mobileNo').value;
    var username = document.getElementById('username').value;

    var user = {
        fullName: fullName,
        email: email,
        mobileNo: mobileNo,
        username: username
    };

    var users = JSON.parse(sessionStorage.getItem('users')) || [];
    users.push(user);
    sessionStorage.setItem('users', JSON.stringify(users));

    document.getElementById('registrationForm').reset();

    alert('Registration Successful!');
});
