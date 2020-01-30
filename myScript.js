console.log("just double checking");

function login() {
    var userName = document.getElementById('txtName').value;
    
    document.getElementById('welcomeMessage').textContent = "An email will be sent to your email shortly at" + " " + userName;
    
}
