import TelegramBot from 'node-telegram-bot-api'

// Third-party libraries
import * as dotenv from 'dotenv'
import Parser from 'rss-parser'
import { CronJob } from 'cron'

// Local libraries
import fs from 'fs'
import T from './T'
import { getMainServices } from './buttons'
import { ILocalization } from './types'

// Get env process
dotenv.config()
const env = process.env

// Get env values
const token = env.TELEGRAM_TOKEN
const channelID = Number(env.CHANNEL_ID)
const bot = new TelegramBot(token!, { polling: true })

// Set RSS reader
const parser = new Parser()

console.log("Bot started")

const getFeed = async (chatID: TelegramBot.ChatId): Promise<void> => {
    try {
        const admins = await bot.getChatAdministrators(chatID)
        const admin = admins.find(adm => adm.status == 'creator')
        const language = admin.user.language_code as ILocalization
        const chat = await bot.getChat(chatID)

        const t = new T(admin.user.language_code)
        const feed = await parser.parseURL(env.RSS_URL)

        let history:string[] = JSON.parse(fs.readFileSync('history.json', 'utf-8'))
        feed.items.forEach(async podcast => {
            const episodeURL = podcast.enclosure.url
            const episodeID = episodeURL.match(/(?<=\/play\/)(.*)(?=\/https)/gi)[0]
            if(episodeID && !history.includes(episodeID)){
                console.log("Episode " + episodeID + ' is not in history')
                
                // Send message
                bot.sendPhoto(chat.id, podcast.itunes.image, {
                    caption: '<b>' + podcast.title + '</b>' + '\n\n' + podcast.contentSnippet,
                    parse_mode: 'HTML',
                    reply_markup: getMainServices(language)
                })

                history.push(episodeID)
            }

        })

        fs.writeFileSync('history.json', JSON.stringify(history))
    } catch (error) {
        console.log("Error in getFeed:", error)
    }
}

const getPromotion = async (msg: TelegramBot.Message): Promise<void> => {
    try {
        const t = new T(msg.from.language_code)
        const feed = await parser.parseURL(env.RSS_URL)

        // Send message
        bot.sendPhoto(msg.chat.id, feed.image.url, {
            caption: '<b>' + feed.title + '</b>' + '\n\n' + feed.description,
            parse_mode: 'HTML',
            reply_markup: {
                'inline_keyboard' : [[
                    msg.chat.type == 'private'
                    ?
                    {
                        'text': t.r('listenPodcast'),
                        'web_app': {
                            'url': env.LISTEN_URL
                        }
                    }
                    :
                    {
                        'text': t.r('listenPodcast'),
                        'url': env.LISTEN_URL
                    }
                ]]
            }
        })

    } catch (error) {
        console.log("Error in getPromotion:", error)
    }
}

bot.onText(/\/start/, (msg, match) => {
    const t = new T(msg.from.language_code)
    getPromotion(msg)
})

// Cron job every minute
let cron = new CronJob(
    '* * * * *',
    () => getFeed(channelID),
    null,
    true,
    'Europe/Rome'
)