//CONEXÃO COM BOT
const { Telegraf } = require('telegraf');
Bot_token = '2023853122:AAF5D5DzuAeDlVOyWfIpzJSD7nhyi_AoP3U'
const bot = new Telegraf(Bot_token);


//VARIAVEIS GERAIS
let comandos_atuais = `
<b>/start</b>:  Inicio,
<b>/help</b>:  Ajuda e referências
`



// COMANDOS
bot.start(async (ctx) =>{
    ctx.reply('Olá, ' + ctx.from.first_name);
    await ctx.reply('Eu sou <b>Thorin</b>, filho de Thrain, filho de Thror.', 
        {
            parse_mode: 'HTML',
        }
    );
    await ctx.reply('Já lhe adianto que não dividirei meu ouro. Principalmente caso seja um dragão');
    ctx.reply('Diga-me, qual a sua raça?');
});

bot.help((ctx)=>{
    ctx.reply('<b><i>Tá perdido, né? Tão toma o tutorial aí:</i></b>' + 
    `${comandos_atuais}`, {
        parse_mode: 'HTML',
    })
})

bot.launch();