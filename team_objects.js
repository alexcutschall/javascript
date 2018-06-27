let team = {
  _players: [
    {firstName: 'Pablo',
		lastName: 'Sanchez',
		age: 11},
    {firstName: 'Alex',
		lastName: 'Cutschall',
		age: 25},
    {firstName: 'Jimmy',
		lastName: 'Nelson',
		age: 28}],

  _games:
   [ {opponent: 'Broncos',
     teamPoints: 42,
     opponentPoints: 27},
    {opponent: 'Falcons',
     teamPoints: 1,
     opponentPoints: 90},
    {opponent: 'Vikings',
     teamPoints: 12,
     opponentPoints: 25}],

  get players() {
    this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(firstName, lastName, age) {
    let player = {firstName: firstName, lastName: lastName, age: age}
    this._players.push(player);
  },

  addGame(opponentName, yourTeamPoints, oppTeamPoints) {
    let game = {opponentName, yourTeamPoints, oppTeamPoints}
    this._games.push(game);
  }
};

team.addPlayer("Rick", "Moranez", 24);
team.addGame("Wullabys", 24, 10);
team.addGame("Rick", 72, 5);
team.addGame("Steelers", 55, 10);
console.log(team.games);
