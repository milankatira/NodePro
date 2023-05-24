const { exec } = require('child_process')
const open = require('open')

function WhatsAppTw() {
  console.log('⏳ Web3 WhatsApp Clone with Thirdweb Loading...')

  console.log('Smash that 👍 button while you wait...')

  open('https://try.digitalocean.com/cleverprogrammer')
  open('https://thirdweb.com/cleverprogrammer')

  exec(
    `git clone -b cli-starter https://github.com/CleverProgrammers/whatsapp-tw-youtube.git`,
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`)
        return
      }
      if (stderr) {
        /**
         * For development purposes i'll just leave this here but in prod we'll ignore stderr
         */
        // console.log(`stderr: ${stderr}`)
        // return
      }

      console.log('⏳ Installing dependencies...')

      exec(
        'cd whatsapp-tw-youtube && cd next-app && npm install --force',
        (error, stdout, stderr) => {
          if (error) {
            console.log(`error: ${error.message}`)
            return
          }
          if (stderr) {
            /**
             * For development purposes i'll just leave this here but in prod we'll ignore stderr
             */
            // console.log(`stderr: ${stderr}`)
            // return
          }

          console.log('✅ Success')
          console.log('⏳ Opening VS Code...')

          exec('cd whatsapp-tw-youtube && code .', (error, stdout, stderr) => {
            if (error) {
              console.log(`error: ${error.message}`)
              return
            }
            if (stderr) {
              /**
               * For development purposes i'll just leave this here but in prod we'll ignore stderr
               */
              // console.log(`stderr: ${stderr}`)
              // return
            }

            console.log('✅ Ready')
          })
        },
      )
    },
  )
}

module.exports = {
  WhatsAppTw,
}
