const Discord = require("discord.js");
const client = new Discord.Client();

var request = require('request');
var mcCommand = '/minecraft'; // Command for triggering
var mcIP = 'mc.mcheaven.lt'; // Your MC server IP
var mcPort =  // Your MC server port

client.on('message', message => {
    if (message.content === mcCommand) {
        var url = 'http://mcapi.us/server/status?ip=' + mcIP + '&port=' + mcPort;
        request(url, function(err, response, body) {
            if(err) {
                console.log(err);
                return message.reply('Klaida nepavyko gauti serverio informacija');
            }
            body = JSON.parse(body);
            var status = '*Serveris yra offline busenoje*';
            if(body.online) {
                status = '**Minecraft** serveris yra **online**  -  ';
                if(body.players.now) {
                    status += '**' + body.players.now + '** žaidėjų žaidžia!';
                } else {
                    status += '*niekas nežaidžia*';
                }
            }
            message.reply(status);
        });
    }
});

client.login("NDU3NjE5NzIyMDgzNzYyMTc3.DgcBlQ.L5b8jq8SPwKJv7uAvqPf26DH-hY");
