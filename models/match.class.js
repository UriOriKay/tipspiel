class Match {
  gameResult;
  constructor(parent, gameId, teams, game) {
    this.gameResult = !(game["goalsHome"] === null)
      ? `${game["goalsHome"]}:${game["goalsAway"]}`
      : "";

    new Span(parent, `game-home${gameId}`, `game-home`, `${teams[game["homeTeam"] - 1].name}`);
    new Span(parent, `game-minus${gameId}`, "game-minus", ":");
    new Span(parent, `game-away${gameId}`, `game-away`, `${teams[game["awayTeam"] - 1].name}`);
    new Span(parent, `game-result${gameId}`, "game-result", this.gameResult);
    new Span(parent, `bet-kay${gameId}`,"bet-kay",game.tips.user1[0] === null ? "" : `${game.tips.user1[0]}:${game.tips.user1[1]}` );
    new Span(parent, `bet-mina${gameId}`,"bet-mina", game.tips.user2[0] === null ? "" : `${game.tips.user2[0]}:${game.tips.user2[1]}` );
    new Span(parent, `bet-stefan${gameId}`, "bet-stefan", game.tips.user3[0] === null ? "" : `${game.tips.user3[0]}:${game.tips.user3[1]}`);
  }
}
