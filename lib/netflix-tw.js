const { exec } = require('child_process')
const open = require('open')

function NetflixTw() {
  console.log('⏳ Web3 WhatsApp Clone with Thirdweb Loading...')
  console.log('Smash that 👍 button while you wait...')

  open('https://thirdweb.com/cleverprogrammer')

  exec(
    `git clone -b cli-starter https://github.com/CleverProgrammers/netflix-tw-youtube.git`,
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
        'cd netflix-tw-youtube && npm install --force',
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

          exec('cd netflix-tw-youtube && code .', (error, stdout, stderr) => {
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
  NetflixTw,
}
