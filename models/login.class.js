class Login {
    
    constructor(){
        //Ausgeführt wenn neues Objekt erstellt
        //Divs anzeigen
        this.renderSignIn();
    }

    renderSignIn(){
        new Div("main", "Login-con", "", ""); 
        new Elements('label', 'Login-con', "Login-label-username", "login-label");
        docID("Login-label-username").for = "Login-input-username";
        docID("Login-label-username").textContent = "Benutzername: ";
        new Input("Login-con", "Login-input-username", "login-input", "text");
      
        new Elements('label', 'Login-con', "Login-label-email", "login-label");
        docID("Login-label-email").for = "Login-input-email";
        docID("Login-label-email").textContent = "Email: ";
        new Input("Login-con", "Login-input-email", "login-input", "email");

        new Elements('label', 'Login-con', "Login-label-password", "login-label");
        docID("Login-label-password").for = "Login-input-password";
        docID("Login-label-password").textContent = "Password: ";
        new Input("Login-con", "Login-input-password", "login-input", "password");

       
        }
    
        createInputField(name, text, type){
            
            new Elements('label', 'Login-con', `Login-label-${name}`, "login-label");
            docID(`Login-label-${name}`).for = "Login-input-adresse";
            docID(`Login-label-${name}`).textContent = `${text}: `;
            new Input("Login-con", `Login-input-${name}`, "login-input", type);
        }
}