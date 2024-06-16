class Login {
    constructor(){
        //Ausgeführt wenn neues Objekt erstellt
        //Divs anzeigen
        this.renderSignIn();
    }

    renderSignIn(){
        new Div("main", "Login-con", "", "");

        
        
        new Elements('label', 'Login-con', "Login-label-vorname", "");
        new Elements('label', 'Login-con', "Login-label-nachname", "");
        new Elements('label', 'Login-con', "Login-label-adresse", "");
        
        new Input("Login-con", "Login-input-vorname", "", "text");
        new Input("Login-con", "Login-input-nachname", "", "text");
        new Input("Login-con", "Login-input-adresse", "", "text");
        
        docID("Login-label-vorname").for = "Login-input-vorname";
        docID("Login-label-vorname").textContent = "Vorname: ";
        docID("Login-label-nachname").for = "Login-input-nachname";
        docID("Login-label-nachname").textContent = "Nachname: ";
        docID("Login-label-adresse").for = "Login-input-adresse";
        docID("Login-label-adresse").textContent = "Adresse: ";

        
     

    }
}