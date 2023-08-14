import { ChatType, InlineKeyboardButton, InlineKeyboardMarkup } from "node-telegram-bot-api"
import * as dotenv from 'dotenv'
import { ILocalization, IService } from "./types"
import services from "./services"
import T from "./T"

// Get env process
dotenv.config()
const env = process.env

const printButton = (service: IService): InlineKeyboardButton => {
    return {
        text: service.emoji + ' ' + service.name,
        url: service.url
    }
}

const divideInRows = (allButtons: IService[], n: number): IService[][] => {
    const size = Math.ceil(allButtons.length / n)
    return Array.from({ length: n }, (v, i) =>
        allButtons.slice(i * size, i * size + size)
    )
}

const getMainServices = (lang: ILocalization, chatType: ChatType = 'channel'): InlineKeyboardMarkup => {
    const t = new T(lang)
    const mainServices = services.slice(0, 4)

    return {
        'inline_keyboard': [
            // Retrive the first for podcast services
            ...divideInRows(mainServices, 2).map(line => {
                return line.map(service => printButton(service))
            }),
            // Last line - Main button
            [{
                'text': t.r('discoverMore'),
                'url': env.LISTEN_URL
            }]
        ]
    }
}

const getInlineButtons = (lang: ILocalization, chatType: ChatType = 'channel'): InlineKeyboardMarkup => {
    const t = new T(lang)

    return {
        'inline_keyboard': [
            // Line 1 - Main button
            [{
                'text': t.r('listenPodcast'),
                'url': env.LISTEN_URL
            }],
            // Buttons are divided in different lines, following the number of elements per row
            ...divideInRows(services, 9).map(line => {
                return line.map(service => printButton(service))
            })
        ]
    }
}

export {
    getMainServices,
    getInlineButtons
}