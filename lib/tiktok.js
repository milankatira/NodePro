const { exec } = require('child_process')

async function tiktok() {
  console.log(`
⏳ TikTok Clone Loading

⏳ Creating Next App...
Smash that 👍 button while you wait...

⚠️ Please make sure you have the following dependencies installed:
  - rustc 1.60.0 (7737e0b5c 2022-04-04)
  - solana 1.9.1 (src:b66e2ae3; feat:4100269022)
  - anchor 0.24.2 \n
  `)

  exec(
    `git clone -b cli-starter https://github.com/CleverProgrammers/tiktok-clone-youtube.git`,
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

      console.log('✅ Frontend')

      console.log('⏳ Installing dependencies...')

      exec(
        'cd tiktok-clone-youtube && cd frontend && yarn install',
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

          console.log('⏳ Creating Anchor Project...')
          console.log('Now you might as well subscribe to the channel 😉')

          exec(
            'cd tiktok-clone-youtube && cd tiktok-clone && yarn install',
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
              console.log('✅ Anchor Project')
              console.log('🚀 Starting VS Code...')

              exec(
                'cd tiktok-clone-youtube && code .',
                (error, stdout, stderr) => {
                  if (error) {
                    console.log(`error: ${error.message}`)
                    return
                  }

                  if (stderr) {
                    console.log(`stderr: ${stderr}`)
                    return
                  }
                },
              )
            },
          )
        },
      )
    },
  )
}

module.exports = {
  tiktok,
}
