document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById("userList");
    const userDetails = document.getElementById("userDetails");
    const addUserBtn = document.getElementById("addUserBtn");
    const addUserModal = document.getElementById("addUserModal");
    const saveUserBtn = document.getElementById("saveUserBtn");
    const cancelBtn = document.getElementById("cancelBtn");

    const users = JSON.parse(localStorage.getItem("Users")) || [];

    const firstPageUser = JSON.parse(localStorage.getItem("FirstPageUser"));
    if (firstPageUser) {
        users.push(firstPageUser);
        localStorage.setItem("Users", JSON.stringify(users));
        localStorage.removeItem("FirstPageUser");
    }

    function displayUsers() {
        userList.innerHTML = "<h3>User List</h3>";
        users.forEach((user, index) => {
            const userName = document.createElement("h3");
            userName.className = "user-name";
            userName.textContent = user.name;
            userName.dataset.index = index;
            userList.appendChild(userName);
        });
    }

    userList.addEventListener("mouseover", (event) => {
        if (event.target.classList.contains("user-name")) {
            const userIndex = event.target.dataset.index;
            const user = users[userIndex];
            userDetails.innerHTML = `
                <p>Name: ${user.name}</p>
                <p>Age: ${user.age}</p>
                <p>Family Name: ${user.familyName}</p>
            `;
        }
    });

    userList.addEventListener("mouseout", () => {
        userDetails.textContent = "Hover over a name to see details here.";
    });

    addUserBtn.addEventListener("click", () => {
        addUserModal.style.display = "block";
    });

    cancelBtn.addEventListener("click", () => {
        addUserModal.style.display = "none";
    });

    saveUserBtn.addEventListener("click", () => {
        const name = document.getElementById("newUserName").value;
        const age = document.getElementById("newUserAge").value;
        const familyName = document.getElementById("newUserFamilyName").value;

        if (!name || !age || !familyName) {
            alert("Please fill out all fields.");
            return;
        }

        const userExists = users.some(user => user.name.toLowerCase() === name.toLowerCase());

        if (userExists) {
            alert("This user is already registered.");
            return;
        }

        const newUser = {
            name: name,
            age: age,
            familyName: familyName,
        };

        users.push(newUser);
        localStorage.setItem("Users", JSON.stringify(users));

        addUserModal.style.display = "none";
        displayUsers();

        document.getElementById("newUserName").value = "";
        document.getElementById("newUserAge").value = "";
        document.getElementById("newUserFamilyName").value = "";
    });

    displayUsers();
});
