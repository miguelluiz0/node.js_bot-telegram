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
// 0 = Escolher raça,
// 1 = action_elfo,
// 2 = action_anao,
// 3 = action_orc,
// 4 = action_hobbit,
// 5 = action_mago = Escolher raça,
// 6 = action_troll

//---------------------
//      ACOES
//---------------------

//ACOES DE START:
bot.action('mago', async (ctx)=>{
    vContador_raca = 0;
    ctx.deleteMessage();
    await ctx.reply('Ora, o último mago com quem falei salvou minha vida e meu Reino!!');
    ctx.reply('Tome um presente: histórias antigas dizem que magos conseguem trocar de raça, tente!! quem sabe é seu dia de sorte.')
    return(vContador_raca);
})

bot.action('elfo', async (ctx)=>{
    vContador_raca = 1;
    ctx.deleteMessage();
    await ctx.reply('A Eruchîn, ú-dano i faelas a hyn an uben tanatha le faelas.')
    await ctx.reply('Agora saia da minha seção, orelha pontuda.')
    ctx.reply('/comando');
    return(vContador_raca);
})

bot.action('anao', (ctx)=>{
    vContador_raca = 2;
    ctx.deleteMessage();
    ctx.reply('Então somos quase irmãos. \nOlhe, jovem Anão, se vir um dragão por aí, me avise.');
    return(vContador_raca);
}) 

bot.action('orc', (ctx)=>{
    vContador_raca = 3;
    ctx.deleteMessage();
    ctx.reply('Suma!! Suma da minha seção. Agora!!');
    return(vContador_raca);
})
bot.action('hobbit', (ctx)=>{
    vContador_raca = 4;
    ctx.deleteMessage();
    ctx.reply('Ora, ora, já o considero um grande amigo. \nApareça outro dia, vou te contar sobre o lendário Hobbit que conseguia montar um cavalo.');
    return(vContador_raca);
})

bot.action('troll', async (ctx)=>{
    vContador_raca = 5;
    ctx.deleteMessage();
    await ctx.reply('Um Troll nem sequer saber ler. Jamais escolheria corretamente.');
    await ctx.reply('Ou está mentindo para mim, ou é o Troll mais inteligente de toda a história.');
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
        await ctx.reply('Já lhe adianto que não dividirei meu ouro. \nPrincipalmente caso seja um dragão');
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
    else if(vContador_raca == 1){
        await ctx.reply('O que foi, elfo? Já lhe disseram que a raça não pode ser alterada?');
        ctx.reply('Gloria somente aos anões!!');
    }
    else if(vContador_raca == 2){
        ctx.reply('Por sermos irmãos irei perdoar a tentativa de traição');
        ctx.reply('Esqueça essa ideia e use /signos \nPor lá anões ganham armaduras de ouro!! hahahaha!!');
    }
    else if(vContador_raca == 3){
        ctx.reply('Já lhe disse, Orc, suma daqui!! Procure outro comando.');
    }
    else if(vContador_raca == 4){
        ctx.reply('Um Hobbit é o que é. Não o que deseja ser.');
    }
    else if(vContador_raca == 5){
        ctx.reply('Então o humano achou que ia me enganar e agora quer trocar de raça? <b>NEGATIVO</b>. \nSuma antes que eu te parta ao meio com meu machado!', 
        {
            parse_mode: 'HTML'
        });
        ctx.reply('Confesse, você nem sequer sabe que Easter Egg é esse.');
    }
    else{
        ctx.reply('Se chegou até aqui, você fez algo de muito errado.');
    }
});

//Imagens de cada signo.
let vSigno_aquario_img = './imgs_signos/aquario.jpg';
let vSigno_aries_img = './imgs_signos/aries.jpg';
let vSigno_cancer_img = './imgs_signos/cancer.jpg';
let vSigno_escorpiao_img = './imgs_signos/escorpiao.jpg';
let vSigno_gemeos_img = './imgs_signos/gemeos.jpg';
let vSigno_leao_img = './imgs_signos/leao.jpg';
let vSigno_libra_img = './imgs_signos/libra.jpg';
let vSigno_peixes_img = './imgs_signos/peixes.jpg';
let vSigno_sagitario_img = './imgs_signos/sagitario.jpg';
let vSigno_touro_img = './imgs_signos/touro.jpg';
let vSigno_virgem_img = './imgs_signos/virgem.jpg';
//fonte imgs signos: https://santosenlatados.blogspot.com/

bot.command('signos', async (ctx)=>{
    
    //tratando o texto do usuário
    let vSigno_nome = ctx.message.text;
    vSigno_nome = vSigno_nome.split(' ');
    vSigno_nome.shift();
    vSigno_nome = vSigno_nome.join(' ');
    vSigno_nome = vSigno_nome.toLowerCase();
    vSigno_nome = vSigno_nome.normalize("NFD").replace(/[^a-zA-Zs]/g, "");
    console.log(vSigno_nome);

    //respostas:
    if(vSigno_nome == ''){
        ctx.reply('Para usar esta função digite /signos SeuSigno')
        ctx.reply('Ex.: /signos gêmeos')
    }
    else if(vSigno_nome == 'virgem'){
        await ctx.replyWithPhoto({source: vSigno_virgem_img});
        await ctx.reply('Seu guardião é <b>Shaka</b>', 
            {
                parse_mode: 'HTML'
            });
        ctx.reply('As flores nascem e depois murcham... \nAs estrelas brilham, mas algum dia se extinguem... \nComparado com isso, a vida do homem não é nada mais do que um simples piscar de olhos, um breve momento.')
    }
    else{
        ctx.reply('Quê?\nVocê digitou algo errado, tente novamente.')
    
    }
})


bot.help((ctx)=>{
    ctx.reply('<b><i>Tá perdido, né? Tão toma o tutorial aí:</i></b>' + 
    `${comandos_atuais}`,
    {
        parse_mode: 'HTML',
    })
})


bot.launch();

