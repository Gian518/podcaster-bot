import { ILang } from './types'

/**
 * List your translations here as key: "value". You will catch your translation by calling the key as parameter.
 * E.g.: if you need the string with "welcome" as key, you need to take it with:
 * const t = new T('en')
 * t.r("welcome")
 */
const lang: ILang = {
    welcome: "Welcome in Podcaster Bot! Add me as admin in a channel and I'll post your podcast for you.",
    listenPodcast: "Listen last episode",
    discoverMore: "Show all"
}

export default lang