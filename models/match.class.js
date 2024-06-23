class Match {
  gameResult;
  constructor(parent, gameId, teams, game) {
    this.gameResult = !(game["goalsHome"] === null)
      ? `${game["goalsHome"]}:${game["goalsAway"]}`
      : "";
    new Div(parent, `game-div${gameId}`, `game-div`);
    new Span(`game-div${gameId}`, `game-home${gameId}`, 'game-home', teams[game["homeTeam"] - 1] ? teams[game["homeTeam"] - 1].name : game.homeTeam);
    new Span(`game-div${gameId}`, `game-minus${gameId}`, "game-minus", ":");
    new Span(`game-div${gameId}`, `game-away${gameId}`, `game-away`, teams[game["awayTeam"] - 1]? teams[game["awayTeam"] - 1].name : game.awayTeam);
    new Span(`game-div${gameId}`, `game-result${gameId}`, "game-result", this.gameResult);
    new Span(`game-div${gameId}`, `bet-kay${gameId}`,"bet-kay",game.tips.user1[0] === null ? "" : `${game.tips.user1[0]}:${game.tips.user1[1]}` );
    new Span(`game-div${gameId}`, `bet-mina${gameId}`,"bet-mina", game.tips.user2[0] === null ? "" : `${game.tips.user2[0]}:${game.tips.user2[1]}` );
    new Span(`game-div${gameId}`, `bet-stefan${gameId}`, "bet-stefan", game.tips.user3[0] === null ? "" : `${game.tips.user3[0]}:${game.tips.user3[1]}`);
  }
}
