

class UserResults {
   games;
   kay = "user1";
   mina = "user2"; 
   stefan = "user3"; 
    constructor(data){
       this.games = data.games;
       this.getGameResult(this.games[1]);
       this.getUserTipAllPoints(this.kay);
       this.getUserTipAllPoints(this.mina);
       this.getUserTipAllPoints(this.stefan);
    }

    getGameResult(game){
      game.goalsHome != null ? console.log("game.goalsHome: ", game.goalsHome) : console.log("noch nicht gespielt");
      game.goalsAway != null ? console.log("game.goalsAway: ", game.goalsAway) : console.log("noch nicht gespielt");
    }

    compareTip(game, userTip){
      let result = [game.goalsHome,game.goalsAway];
      let userPoints = 0; 
      
     if(game.goalsHome != null){
       //Richtiger Sieger

       userPoints = (result[0] > result[1] && userTip[0] > userTip[1]) ? userPoints+2 : userPoints;
       userPoints = (result[0] < result[1] && userTip[0] < userTip[1]) ? userPoints+2 : userPoints;
       userPoints = (result[0] == result[1] && userTip[0] == userTip[1]) ? userPoints+2 : userPoints;
 
       //Richtige Toranzahl pro Mannschaft
       userPoints = (result[0] == userTip[0]) ? userPoints+1 : userPoints;
       userPoints = (result[1] == userTip[1]) ? userPoints+1 : userPoints;
       //Richtige Tordifferenz
       userPoints = (result[0]-result[1] == userTip[0]-userTip[1]) ? userPoints+1 : userPoints;
     }
      return userPoints;
    }
   
    //user = "user1"
   getUserTipAllPoints(user){
    let userAllPointsArray = [];
    let userAllPoints=0;
    let playedgames = 0;
    this.games.forEach(game => {
    if(game.goalsHome != null){
      userAllPointsArray.push(this.compareTip(game, game.tips[`${user}`])) ;
    userAllPoints = userAllPointsArray.reduce((partialSum, a) => partialSum + a, 0);
    playedgames++;
    }
});
console.log(`Spielanzahl: ${playedgames}, User: ${user}, Array: ${userAllPointsArray}, Gesamtsumme: ${userAllPoints}`);
   }


   getUserTipPerGame(){

   }
}