//CONEXÃO COM BOT
const { Telegraf } = require('telegraf');
Bot_token = ''
const bot = new Telegraf(Bot_token);



// COMANDOS
bot.start((ctx) =>{
    ctx.reply('Olá, comando de teste');
});


bot.launch();