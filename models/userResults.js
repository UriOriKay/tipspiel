

class UserResults {
   games;
    constructor(data){
        this.games = data.games;
       this.test();
    }

     test(){
        console.log("Test: ", this.games);
    }

    getResult(){
       this.games.forEach(game => {
        if(game.goalsHome != null)
       });
    }

}