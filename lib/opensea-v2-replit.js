const { exec } = require('child_process')

async function openseaV2() {
  console.log('Opensea V2 Clone Loading ⏳')

  console.log('Creating Next App... ⏳')
  console.log('Smash that 👍 button while you wait...')

  exec(
    'wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash && export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" && [ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion" && nvm install --lts && nvm use --lts',
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`)
        return
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`)
        return
      }

      console.log('✅ Node updated')

      exec(
        `git clone -b cli-starter https://github.com/CleverProgrammers/opensea-v2-youtube.git`,
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

          console.log('✅ Looking good so far')

          console.log('⏳ Installing dependencies...')

          exec(
            'cd opensea-v2-youtube && yarn install',
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

              console.log('✅ Dependencies')

              console.log('Now you might as well subscribe to the channel 😉')
            },
          )
        },
      )
    },
  )
}

module.exports = {
  openseaV2,
}
