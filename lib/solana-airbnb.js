const { exec } = require('child_process')
const open = require('open')

function solAirbnb() {
  console.log('⏳ Loading Solana Airbnb Clone')

  console.log('⏳ Creating Next App...')
  console.log('Sign up for QuickNode while you wait...')
  console.log(`Smash that 👍 button so Lance doesn't lose his job...`)

  open(
    'https://www.quicknode.com/?utm_source=cleverprog&utm_campaign=generic&utm_content=sign-up&utm_medium=cleverprog',
  )

  exec(
    `git clone -b cli-starter https://github.com/CleverProgrammers/airbnb-clone-youtube.git`,
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

      console.log('⏳ Running some scripts. Hang tight...')

      exec(
        'cd airbnb-clone-youtube && npm install --force',
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

          console.log('[1/2] Success')

          exec(
            'cd airbnb-clone-youtube && cd frontend && npm install --force',
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

              console.log('[2/2] Success')

              exec(
                'cd airbnb-clone-youtube && code .',
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

                  console.log('✅ Ready')
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
  solAirbnb,
}
