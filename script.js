function docID(id) {
  return document.getElementById(id);
}

let data;
let teams;
let games;
let logged = true;

async function init() {
  data = await fetchdata();
  teams = data.teams;
  games = data.games;
  new UserResults(data);
  loadCss();
  new Div("body", "main", "main", "");
  if(logged){
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