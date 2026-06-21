const loadBtn = document.getElementById("loadUsers");
const userBody = document.getElementById("userBody");
const totalUsers = document.getElementById("totalUsers");
const searchInput = document.getElementById("searchInput");

let allUsers = [];

loadBtn.addEventListener("click", async () => {

    try {

        const response =
            await fetch("http://localhost:3000/users");

        const users = await response.json();

        allUsers = users;

        displayUsers(users);

    } catch(error){

        alert("Error loading users");

        console.log(error);
    }

});

function displayUsers(users){

    userBody.innerHTML = "";

    totalUsers.textContent = users.length;

    users.forEach(user => {

        userBody.innerHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
            </tr>
        `;
    });

}

searchInput.addEventListener("keyup", () => {

    const keyword =
        searchInput.value.toLowerCase();

    const filteredUsers =
        allUsers.filter(user =>
            user.name.toLowerCase()
            .includes(keyword)
        );

    displayUsers(filteredUsers);

});