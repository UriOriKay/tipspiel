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
        let teams = []

        data.groups[nr].forEach((ele) => {
            let home = games[ele - 1].homeTeam;
            let away = games[ele - 1].awayTeam;
            let team_home = teams.find(({id}) => id === home);
            let team_away = teams.find(({id}) => id === away);
            let win_home = games[ele - 1].goalsHome > games[ele - 1].goalsAway ? 3 : games[ele - 1].goalsHome == games[ele - 1].goalsAway ? 1 : 0;
            let win_away =  games[ele - 1].goalsHome < games[ele - 1].goalsAway ? 3 : games[ele - 1].goalsHome == games[ele - 1].goalsAway ? 1 : 0;

            if(!(games[ele - 1].goalsHome === null)) {
                if(!team_home) {
                    team_home = {id: home, goals: 0, awaygoals: 0, pkt: 0, played: 0};
                    team_home = {...team_home, goals: games[ele - 1].goalsHome, awaygoals: games[ele - 1].goalsAway, played: 1, pkt: win_home };
                    teams.push(team_home)
                } else {
                    let dex = teams.indexOf(team_home);
                    console.log(team_home.goals)
                    team_home = {...team_home, goals: team_home.goals + games[ele - 1].goalsHome, awaygoals: team_home.awaygoals + games[ele - 1].goalsAway, played: team_home.played + 1, pkt: team_home.pkt + win_home };
                    teams[dex] = team_home;     
                }

                if(!team_away) {
                    team_away = {id: away, goals: 0, awaygoals: 0, pkt: 0, played: 0};
                    team_away = {...team_away, goals: games[ele - 1].goalsAway, awaygoals: games[ele - 1].goalsHome, played: 1, pkt: win_away };
                    teams.push(team_away)
                } else {
                    let dex = teams.indexOf(team_away);
                    console.log(team_away.goals)
                    team_away = {...team_away, goals: team_away.goals + games[ele - 1].goalsAway, awaygoals: team_away.awaygoals + games[ele - 1].goalsHome, played: team_away.played + 1, pkt: team_away.pkt + win_away };
                    teams[dex] = team_away;
                }
            }
            console.log(teams)
        })
    }
}

