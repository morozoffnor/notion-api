import {Telegraf, Telegram} from 'telegraf'
import { default as config } from "./config.js"
import {addItem} from './notion.js'
const bot = new Telegraf(config.bot_key);


bot.on('text', (ctx) => {
  if (ctx.chat.id === config.user) {
    ctx.reply('adding it to the database')
    addItem(ctx.message.text)
  } else {
    ctx.reply('you are not authorized to use this bot')
  }
  
} )
bot.launch()
console.log('Notion database bot launched!')