document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;

    var users = JSON.parse(sessionStorage.getItem('users')) || [];
    var found = false;

    for (var i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            found = true;
            break;
        }
    }

    if (found) {
        sessionStorage.setItem('loggedInUser', username);
        window.location.href = 'dashboard.html';
    } else {
        alert('User not found. Please register first.');
    }
});
