function docID(id) {
  return document.getElementById(id);
}

let data;
let teams;
let games;

async function init() {
  
  data = await fetchdata();
  teams = data.teams;
  games = data.games;
  new UserResults(data);
  loadCss();
  new Div("body", "main", "main", "");
  if(user){
    new Div("main", "app", "app", "");
    const keysArray = Object.keys(data.groups);
    keysArray.forEach((ele) => new Group(ele, data) )
  }else{
    new Div("main", "login", "login", "");
    new Login();
  }
}

function loadCss() {
  new Css("styles.css");
  new Css("styles-login.css");
}

async function fetchdata() {
  const response = await fetch(`data/teams.json`);
  const data = await response.json();
  return data;
}

  function loadPageTable(id){
  docID(id).innerHTML ="";
  new Div("main", "app", "app", "");
  const keysArray = Object.keys(data.groups);
  keysArray.forEach((ele) => new Group(ele, data) )
  new Button("app", "app-button", "", loadPageLogin, "Button");
}

  function loadPageLogin(){
  docID("main").innerHTML ="";
  new Div("main", "login", "login", "");
  new Login();
  user = "";
}

