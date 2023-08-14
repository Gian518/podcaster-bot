const fs = require('fs')
const { exec } = require('child_process')

// Create build directory
exec('mkdir build')
// Create history file
fs.writeFileSync('build/history.json', '[]')
console.log('> History file created')
// Create .env file
fs.writeFileSync('build/.env', 'TELEGRAM_TOKEN='+
    '\n# To retrieve your channel ID (private or public), access the channel from web.telegram.org, copy the number after \"/#-\" and add \"-100\" as prefix' +
    '\nCHANNEL_ID=' +
    '\nRSS_URL=' +
    '\nLISTEN_URL='
)
console.log("> .env file created, compile it in \"build\" folder")
// Create services list file by copying the example one
fs.copyFileSync('src/services-example.ts', 'src/services.ts')
console.log("> Services list file created")
console.log('> Install complete')