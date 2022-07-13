const team = {
    _players: [
      {firstName: 'Leia', lastName: 'Organa', age: 18},
      {firstName: 'Luke', lastName: 'Skywalker', age: 18},
      {firstName: 'Han', lastName: 'Solo', age: 28}
    ],
    _games: [
      {opponent: 'Grand Moff Tarkin', teamPoints: 1, opponentPoints: 0},
      {opponent: 'Darth Vader', teamPoints: 2, opponentPoints: 1},
      {opponent: 'Jabba the Hutt', teamPoints: 1, opponentPoints: 1}
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      /*if (typeof newFirstName === 'string' || typeof newLastName === 'string' || typeof newAge === 'number') {*/
      let player = {
        firstName: newFirstName, 
        lastName: newLastName, 
        age: newAge
      }
        this._players.push(player);
      },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      }
      this._games.push(game);
    } 
  }
  
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players);
  team.addGame('Titans', 100, 98);
  console.log(team.games);