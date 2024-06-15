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
  const keysArray = Object.keys(data.groups);
  keysArray.forEach((ele) => new Group(ele, data) )
}

function loadCss() {
  new Css("styles.css");
}

async function fetchdata() {
  const response = await fetch(`data/teams.json`);
  const data = await response.json();
  return data;
}