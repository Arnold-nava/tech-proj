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


const user = JSON.parse(localStorage.getItem("userDB")) || [
    {
    username: "Admin",
    password: "admin",
    email: "Admin@try.com"}
];

function login(e) {
    e.preventDefault(); // prevent form submission


    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    // Check credentials: username OR email AND password
    if (usernameInput === "" || passwordInput === "")
    {
        alert("Please enter username or password!");
    }
    
    const find = user.find(i => i.username === usernameInput || i.email === usernameInput && i.password === passwordInput) 
    if (find) {
        window.alert("Login successfully.")
        window.location.href = "../../../index.html";
    } 
    else
    {
        alert("incorrect username or password!");
    }

};

function signup(e) {
    e.preventDefault()

    const username = document.querySelector(`.sign-user`).value;
    const email = document.querySelector(`.sign-mail`).value;
    const password = document.querySelector(`.sign-pass`).value;

    const newUser = {
    username: username,
    password: password,
    email: email
    };

    user.push(newUser)
    localStorage.setItem("userDB", JSON.stringify(user));

    if (user) {
        window.alert("Successfully signed up")
    }
    window.location.href = "../../../index.html";
};