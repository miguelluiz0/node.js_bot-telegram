//CONEXÃO COM BOT
const { Telegraf } = require('telegraf');
Bot_token = '2023853122:AAF5D5DzuAeDlVOyWfIpzJSD7nhyi_AoP3U'
const bot = new Telegraf(Bot_token);


//VARIAVEIS GERAIS
let comandos_atuais = `
<b>/start</b>:  Inicio,
<b>/help</b>:  Ajuda e referências
`

let vContador_raca = 0;

//ACOES

//ACOES DE START:
bot.action('elfo', (ctx)=>{
    ctx.deleteMessage();
    ctx.reply('A Eruchîn, ú-dano i faelas a hyn an uben tanatha le faelas.')
    ctx.reply('Agora saia da minha seção, orelha pontuda.')
    ctx.reply('/comando');
})

bot.action('anao', (ctx)=>{
    ctx.reply('');
})

bot.action('orc', (ctx)=>{
    ctx.deleteMessage();
    ctx.reply('Suma!! Suma da minha seção. Agora!!');
    vContador_raca = 1;
    return(vContador_raca);
})

// COMANDOS
bot.start(async (ctx) =>{
    if(vContador_raca == 0){
        ctx.reply('Olá, ' + ctx.from.first_name);
        await ctx.reply('Eu sou <b>Thorin</b>, filho de Thrain, filho de Thror.', 
            {
                parse_mode: 'HTML',
            }
        );
        await ctx.reply('Já lhe adianto que não dividirei meu ouro. Principalmente caso seja um dragão');
        ctx.reply('Diga-me, qual a sua raça?', {
            reply_markup:{
                inline_keyboard:[
                    [
                        {text: 'ELFO', callback_data:'elfo'},
                        {text: 'ANÃO', callback_data: 'anao'},
                        {text: 'ORC', callback_data: 'orc'}
                    ], 
                    [
                        {text: 'HOBBIT', callback_data:'hobbit'},
                        {text: 'MAGO', callback_data: 'mago'},
                        {text: 'TROLL', callback_data: 'troll'}
                    ]
                ]
            }
        })
    }
    else{
        ctx.reply('Já lhe disse, Orc, suma daqui!! Procure outro comando.')
    }
});



bot.help((ctx)=>{
    ctx.reply('<b><i>Tá perdido, né? Tão toma o tutorial aí:</i></b>' + 
    `${comandos_atuais}`,
    {
        parse_mode: 'HTML',
    })
})


bot.launch();