const { 
    Telegraf,
    Markup, 
    Context
} = require('telegraf')
require('dotenv').config()
const text = require('./const')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply(`Привет ${ctx.message.from.first_name ? ctx.message.from.first_name: `${ctx.from.username}`} !`))
bot.help((ctx) => ctx.reply(text.commands))
bot.command(`getInfo`, (ctx) => ctx.reply(`
username: ${ctx.message.from.username ? ctx.message.from.username: 'false'}
name: ${ctx.message.from.first_name}
last_name: ${ctx.message.from.last_name ? ctx.message.from.last_name: 'false'}
is bot: ${ctx.message.from.is_bot}
Id: ${ctx.message.from.id}
lang_code: ${ctx.message.from.language_code}
`))

bot.hears(text.badwords, async (ctx) => {
    try{
        await ctx.banChatMember(ctx.from.id) 
    } catch(e){
        console.error(e);
    }
})
bot.command('Developer', async (ctx) => {
    try{
     await ctx.replyWithHTML(`
Меня разработал Junior Front-End Developer Байэл
<a href="https://www.instagram.com/tv/CYtxJ4QI3fZbSuj-hj1wUJCwftEOeLUu8a1mlk0/?utm_medium=share_sheet">Instagram</a>
`)
    }catch(e){
        console.error(e);
    }
})
bot.hears(text.badwords, async (ctx) => {
    try{
    await ctx.deleteMessage(ctx.message.message_id, text.badwords)
    }catch(e){
        console.error(e);
    }
}) 
bot.command('aboutBot', (ctx) => {ctx.replyWithHTML(`
Я, Бот-модератор, разработанный для управления группами в которые меня добавляют.
Версия:2.1 Beta
Мой друг: <a href="@FIXPLAYBAIEL_bot">@FIXPLAYBAIEL_bot</a>
Инструменты создания:NodeJS,JavaScript,Telegraf,Git,Dotenv.
`)})
bot.on('new_chat_members', async (ctx) => {
    try{
        await ctx.reply(`Ура, новый участник ${ctx.message.new_chat_member.first_name ? ctx.message.new_chat_member.first_name: `${ctx.message.new_chat_member.username}`}😁`)
    }catch(e){
        console.error(e);
    }
})
bot.hears(text.hello, async (ctx) => {
    await ctx.reply(`Привет ${ctx.message.from.first_name ? ctx.message.from.first_name: `${ctx.from.username}`}!`)
})
// admin commands
bot.command('getChat', (ctx) => {
    const chatId = ctx.message.chat.id
    ctx.getChat(chatId)
    .then(chat => console.log(chat))
    .catch(err => console.error(err));
})
bot.command('Baiel', async (ctx) => {
 await   ctx.reply('17-16-13-21-25-10-20-30 1-5-14-10-15 ---> eng')
 await ctx.reply('17-16-13-21-25-10-20-30 25-1-20 ---> eng')
})
// admin commands
bot.command('getAdmin', (ctx) => {
    const chatId = ctx.message.chat.id
    ctx.getChatAdministrators(chatId)
    .then(chat => console.log(chat))
    .catch(err => console.error(err));
})
bot.command('also', async (ctx) => {
    try{
  await ctx.replyWithHTML('<b> Также </b>', Markup.inlineKeyboard(
        [
            [Markup.button.callback('Bot', 'btn_1'), Markup.button.callback('Gratitude', 'btn_2'),Markup.button.callback('9Б', 'btn_3')]
        ]
    ))
    } catch(e) {
        console.error(e)
    }
 } ) 
 function addActionBot(name, src, text) {
     bot.action(name, async (ctx) => {
    try{
 await ctx.answerCbQuery()
 if(src !== false){
     await ctx.replyWithPhoto({
         source: src
     })
 }
 await ctx.replyWithHTML(text, {
     disable_web_page_preview: true
 })
    } catch(e) {
        console.error(e);
    }
})
 }
 addActionBot('btn_1', './img/1.jpg', text.text1)
 addActionBot('btn_2', './img/2.jpg', text.text2)
 addActionBot('btn_3', './img/3.jpg', text.text3)




bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))


// bot_info



// {
//     message_id: 23,
//     from: {
//       id: 1004208848,
//       is_bot: false,
//       first_name: 'Байэл',
//       last_name: 'Молдошерипов',
//       language_code: 'ru'
//     },
//     chat: {
//       id: 1004208848,
//       first_name: 'Байэл',
//       last_name: 'Молдошерипов',
//       type: 'private'
//     },
//     date: 1643115129,
//     text: '/start',
//     entities: [ { offset: 0, length: 6, type: 'bot_command' } ]
//   }
  



// Context {
//     update: {
//       update_id: 693355215,
//       message: {
//         message_id: 6,
//         from: [Object],
//         chat: [Object],
//         date: 1643110607,
//         text: 'AGAMOTTO'
//       }
//     },
//     tg: Telegram {
//       token: '5299639354:AAHdpNYAHF3FaloGmi5LKsGz-c9iM-gXqKE',
//       response: undefined,
//       options: {
//         apiRoot: 'https://api.telegram.org',
//         apiMode: 'bot',
//         webhookReply: true,
//         agent: [Agent],
//         attachmentAgent: undefined
//       }
//     },
//     botInfo: {
//       id: 5299639354,
//       is_bot: true,
//       first_name: 'Moderator',
//       username: 'ninethB_bot',
//       can_join_groups: true,
//       can_read_all_group_messages: false,
//       supports_inline_queries: false
//     },
//     state: {}
//   }