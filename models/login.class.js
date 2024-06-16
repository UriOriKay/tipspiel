class Login {
  constructor() {
    //Ausgeführt wenn neues Objekt erstellt
    //Divs anzeigen
    this.renderSignIn();
  }

  renderSignIn() {
    new Div("login", "Login-con", "login-con")
    new Span("Login-con", "Login-span", "login-headline", " Login ")
    this.createInputImgField("Login-con", "username", "Benutzername", "text", "./image/username");
    this.createInputImgField("Login-con", "email", "Email", "email", "./image/username");
    this.createInputImgField("Login-con", "password", "Passwort", "password", "./image/username");
    this.createInputImgField("Login-con", "confirm-password", "Bestätige dein Passwort", "password", "./image/username");
  }

  createInputImgField(parent, name, text, type, src) {
    new Div(parent, `Login-input-${name}-con`, "login-input-con");
    new Elements("label", `Login-input-${name}-con`, `Login-label-${name}`, "login-label");
    docID(`Login-label-${name}`).for = `Login-input-${name}`;
    docID(`Login-label-${name}`).textContent = `${text}: `;
    new Div(`Login-input-${name}-con`, `Login-input-${name}-con-outline`, "login-input-con-outline");
    new Input( `Login-input-${name}-con-outline`, `Login-input-${name}`, "login-input", type );
    new Elements("img",`Login-input-${name}-con-outline`,`Login-input-${name}-image`,"login-input-image" );
    docID(`Login-input-${name}-image`).src = src;
    docID(`Login-input-${name}-image`).alt = name;
  }

  renderLogin(){

  }

  checkLogin(){

  }

  createUser(){}
  updateUsers(){}
  loadUsers(){}
  loadCurrentUser(){}
}
