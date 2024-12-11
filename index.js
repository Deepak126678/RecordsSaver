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

    
    localStorage.setItem("FirstPageUser", JSON.stringify(firstPageUser));

    
    window.location.href = "page2.html";
});
