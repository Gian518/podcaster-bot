import { IService } from "./types"

/*
 * Here you can list all the services which hosts your podcast. Feel free to remove or add anything you want.
 * Every service must have a name, a link to the podcast page (url) and and emoji to show in inline buttons.
 * You can safely remove the example file after postinstall.
 * N.B.: services.ts is not synced with git. If you want to modify this behaviour, remember to edit the .gitignore.
 */
const services: IService[] = [
    {
        name: "Spotify",
        url: "<Your podcast URL here>",
        emoji: "🟢"
    },
    {
        name: "Apple Podcast",
        url: "<Your podcast URL here>",
        emoji: "🟣"
    },
    {
        name: "Google Podcast",
        url: "<Your podcast URL here>",
        emoji: "🟡"
    },
    {
        name: "Amazon Music",
        url: "<Your podcast URL here>",
        emoji: "🔵"
    },
    {
        name: "Bullhorn",
        url: "<Your podcast URL here>",
        emoji: "🔴"
    },
    {
        name: "Castbox",
        url: "<Your podcast URL here>",
        emoji: "🟠"
    },
    {
        name: "Overcast",
        url: "<Your podcast URL here>",
        emoji: "⚪️"
    },
    {
        name: "Castro",
        url: "<Your podcast URL here>",
        emoji: "⚫️"
    },
    {
        name: "Player FM",
        url: "<Your podcast URL here>",
        emoji: "🔺"
    },
    {
        name: "Podcast Addict",
        url: "<Your podcast URL here>",
        emoji: "🔸"
    },
    {
        name: "Podbean",
        url: "<Your podcast URL here>",
        emoji: "🟢"
    },
    {
        name: "Podhero",
        url: "<Your podcast URL here>",
        emoji: "🔹"
    },
    {
        name: "Podcast Guru",
        url: "<Your podcast URL here>",
        emoji: "🟤"
    },
    {
        name: "Podcast Republic",
        url: "<Your podcast URL here>",
        emoji: "🔘"
    },
    {
        name: "Podfriend",
        url: "<Your podcast URL here>",
        emoji: "🟦"
    },
    {
        name: "RadioPublic",
        url: "<Your podcast URL here>",
        emoji: "🟥"
    },
    {
        name: "Sonnet",
        url: "<Your podcast URL here>",
        emoji: "🟨"
    },
    {
        name: "Subscribe on Android",
        url: "<Your podcast URL here>",
        emoji: "🤖"
    }
]

export default services