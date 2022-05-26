const poker = require('poker');
const PokerPlayer = require('./PokerPlayer');

const maxSeats = 2;

class PokerTable {
    cosntructor(socketio, tableId) {
        this.socketio = socketio;

        this.tableId = tableId;
        this.players = [];

        this.table = new poker.Table({
            ante: 0,
            smallBlind: 10,
            bigBlind: 20,

        })


    }

}


let joinTable = PokerPlayer => {
    if (this.players.length < maxSeate) {

        this.player.push(PokerPlayer);
        return true;

    }
    return false;


}


let updatePlayers = () => {
    var { table, socketio } = this;

    var tabledata = {
        seats: table.seats();


    }
    this.player.forEwach(player => {
        if (player.currentSeat !== undefined && player.user) {
            tableData.seats[player.currentSeat].name = player.user.name;
            tableData.seats[player.currentSeat].image = player.user.image;
            tableData.seats[player.currentSeat].socketId = player.user.socketId;

        }

    })

    if (table.isHandInProgress()) {
        tableData['cards'] = table.holeCards();
        tableData['round'] = table.roundOfBetting();

        tableData['commmunity'] = table.communityCards();

        tableData['pot'] = table.pots()[0].size;

        if (table.isBettingRoundInProgress()) {

            tableData['active']
        }
    }

}
