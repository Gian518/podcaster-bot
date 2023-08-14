# Podcaster bot

A Telegram bot which automatically publish new podcast contents in a channel or group.

## Introduction

This bot can automatically handle new episodes from a podcast inside a Telegran channel or group. Add it as admin and it will do the work for you!

## Installation

1. Run `npm install` (or `npm i`) to install dependencies and to run the postinstall script (which will create some files).  
2. Open `build > .env` and populate **all** values with your data.  
3. Open `src > services.ts` and add your services (read below for more info).  
4. Run `npx tsc` to compile the project.

## Usage

Run `npm start` to automatically compile the project and start a local server to try it out. You can use this command whenever you edit code and you want to try it.  
The bot will use the `RSS_URL` in your `.env` file to retrive episodes and it will saves the episodes that have already been sent to Telegram in the `build > history.json` (history file is not synced with git. Note that there's an empty history file inside `src`, which is never used but useful to prevent TypeScript compiler errors).  
The main file is `src > index.ts`, where you can find the two "entry points": the */start* command (which is useful in a private chat between the user and the bot) and the cron job (which is the main part of this bot).  
Add services which hosts your podcast in the `src > services.ts` file (note that this file is not synced with git).  
**The entire `build` folder is not synced with git. If you plan to move your bot in another place, remember to save `history.json` and `.env`.**

### Run the bot

For production use, you have to run `build > index.js` with a process manager like [pm2](https://pm2.keymetrics.io/).

## The T library

*T* is a simple, lightweight, dependency free library which allows you to do localizations like *i18n*. Add your static strings inside language files in the `src` folder, then import them in the `T.ts` file (which is our library).  
In order to use the library, create an instance of the *T* class in your code and pass the language code to the constructor. Then, call the *r* function by passing the requested localization string as parameter to retrieve the current message.

```ts
import T from './T'

const t = new T('en')
console.log(t.r('helloWorld'))
// "Hello world!"
```

## To-do

- Improve documentation  
- Find a way to send episode file within the message (bots cannot send files larger than 50MB)

## Credits

A vacation job for [Lamentech Podcast](https://linktr.ee/lamentech) (which I co-host 😉).

- Code by me  
- Written in [TypeScript](https://www.typescriptlang.org)  
- Bot API by [Node.js Telegram Bot API](https://github.com/yagop/node-telegram-bot-api)  
- Env support by [dotenv](https://github.com/motdotla/dotenv)  
- Cron management by [node-cron](https://github.com/kelektiv/node-cron)  
- RSS parsing by [rss-parser](https://github.com/rbren/rss-parser)  

## License

[MIT](https://choosealicense.com/licenses/mit/)