class Login {
  userEl;
  emailEl;
  passwordEl;
  confirmPasswordEl;
  constructor() {

    //Ausgeführt wenn neues Objekt erstellt
    //Divs anzeigen
    this.renderSignIn();
  }

  renderSignIn() {
    new Div("login", "Login-con", "login-con")
    new Span("Login-con", "Login-span", "login-headline", " Login ")
    this.createInputImgField("Login-con", "username", "Benutzername", "text", "./image/username");
    docID('Login-input-username').value ="Test";
    docID('Login-input-username').disabled = true;
    this.createInputImgField("Login-con", "email", "Email", "email", "./image/username");
    this.createInputImgField("Login-con", "password", "Passwort", "password", "./image/username");
    this.createInputImgField("Login-con", "confirm-password", "Bestätige dein Passwort", "password", "./image/username");
    new Div("Login-con", "Login-button-con");
    new Button("Login-button-con", "Login-Button-Login","", this.checkLogin, "Login");
    new Button("Login-button-con", "Login-Button-Cancel","",  "");
    new Button("Login-button-con", "Login-Button-SignIn","",  "");
  }

  createInputImgField(parent, name, text, type, src) {
    let elementName;
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

 async checkLogin(){
  let userV = docID(`Login-input-username`).value;
  let emailV = docID(`Login-input-email`).value;
  let passwordV = docID(`Login-input-password`).value;
  let confirmPasswordV = docID(`Login-input-confirm-password`).value;

if((userV && emailV && passwordV && confirmPasswordV) != ""){
    users = await getItem("users");
    let emailList = users.filter((user) => {
      return user.mail === emailV
    });
    if(emailList.length === 1 && emailList[0].password === passwordV){
      loadPageTable("main");
      user = emailList[0];
    }else{
      docID(`Login-input-email`).value = "";
      docID(`Login-input-password`).value = "";
      alert("Falsche Mail oder Passwort, Bitte erneut eingeben");
    }
  }else{
    alert("Formular nicht gesendet, bitte alle Felder ausfüllen");
  }
}

  createUser(){}
  updateUsers(){}

 /**
 * Loads users from storage and parses them into an object.
 *
 * @return {Promise<void>} A promise that resolves when the users are loaded and parsed.
 */
  async loadUsers() {
    users = await getItem("users");
  }
  
  loadCurrentUser(){
  }
}
