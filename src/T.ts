// Import your static resources, with your translations, here
import it from './it'
import en from './en' 

// This will create a "typeof" TypeScript version
const languages = ['it', 'en'] as const
type Supported = (typeof languages)[number]
const TStypeof = (x: any): x is Supported => languages.includes(x)

class T {
    // Default language is english
    private lang: Supported = 'en'

    // The constructor will set the instance language
    constructor(code: string){
        if(TStypeof(code)){
            this.lang = code
        }
    }

    /**
     * This function take the right string from the right localization file
     * @param {string} text The requested string
     * @returns {string} The translated string
     */
    public r = (text: string): string => {
        let translated: string = ''
        switch (this.lang) {
            case 'it':
                translated = it[text]
                break;
            case 'en':
                translated = en[text]
        
            default:
                break;
        }

        return translated
    }
}

export default T