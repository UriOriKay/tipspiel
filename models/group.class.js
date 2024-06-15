class Group {
    constructor(nr) {
        new Div("main", `Overview-Group-${nr}`, "overview-group");
        this.renderGroupMatches(nr);
        this.renderGroupTable(nr);
    }

    renderGroupMatches (nr) {
        data.groups[nr].forEach((ele) => {
          new Match(`Overview-Group-${nr}`, [ele - 1], teams, games[[ele - 1]]);
        });
      }

    renderGroupTable(nr) {
        let team_1 = {id: undefined, goals: 0, awaygoals: 0, pkt: 0};
        let team_2 = {id: undefined, goals: 0, awaygoals: 0, pkt: 0};
        let team_3 = {id: undefined, goals: 0, awaygoals: 0, pkt: 0};
        let team_4 = {id: undefined, goals: 0, awaygoals: 0, pkt: 0};

        data.groups[nr].forEach((ele) => {

            // console.log(games[ele - 1].homeTeam)
        })
    }
}

