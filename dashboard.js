function displayUserData() {
    var users = JSON.parse(sessionStorage.getItem('users')) || [];
    var tableBody = document.getElementById('userTableBody');
    tableBody.innerHTML = '';

    users.forEach(function(user, index) {
        var row = `<tr>
                       <td>${user.fullName}</td>
                       <td>${user.email}</td>
                       <td>${user.mobileNo}</td>
                       <td>${user.username}</td>
                       <td>
                           <button onclick="editUser(${index})">Edit</button>
                           <button onclick="deleteUser(${index})">Delete</button>
                       </td>
                   </tr>`;
        tableBody.innerHTML += row;
    });
}

function editUser(index) {
    var users = JSON.parse(sessionStorage.getItem('users')) || [];
    var user = users[index];
    var updatedName = prompt('Enter new full name:', user.fullName);
    if (updatedName !== null) {
        user.fullName = updatedName;
        users[index] = user;
        sessionStorage.setItem('users', JSON.stringify(users));
        displayUserData();
    }
}

function deleteUser(index) {
    var confirmDelete = confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
        var users = JSON.parse(sessionStorage.getItem('users')) || [];
        users.splice(index, 1);
        sessionStorage.setItem('users', JSON.stringify(users));
        displayUserData();
    }
}

displayUserData();
