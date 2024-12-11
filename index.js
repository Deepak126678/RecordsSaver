document.getElementById("submitBtn").addEventListener("click", () => {
    const name = document.getElementById("User").value;
    const age = document.getElementById("Age").value;
    const familyName = document.getElementById("FamilyName").value;

    if (!name || !age || !familyName) {
        alert("Please fill out all fields.");
        return;
    }

    const firstPageUser = {
        name: name,
        age: age,
        familyName: familyName,
    };

    // Store the first page user in localStorage
    localStorage.setItem("FirstPageUser", JSON.stringify(firstPageUser));

    // Redirect to the second page
    window.location.href = "page2.html";
});
