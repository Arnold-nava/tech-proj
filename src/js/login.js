const toggle = document.getElementById("toggle");  // eye icon
const pass = document.getElementById("password");

toggle.addEventListener("click", () => {
    if (pass.type === "password") {
        pass.type = "text";
        toggle.classList.replace("fa-eye", "fa-eye-slash");
        toggle.title = "Hide password";
    } else {
        pass.type = "password";
        toggle.classList.replace("fa-eye-slash", "fa-eye");
        toggle.title = "Show password";
    }
});



function login(e) {
    e.preventDefault(); // prevent form submission

    const user = {
        username: "Admin",
        password: "admin",
        email: "Admin@try.com"
    };

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check credentials: username OR email AND password
    if (username === user.username || username === user.email && password === user.password) {
        // Redirect to home page
        window.location.href = "../pages/home.html";
    } 
    else if (username === "" || password === "")
    {
        alert("Please enter username or password!");
    }
    else
    {
        alert("incorrect username or password!");
    }
}