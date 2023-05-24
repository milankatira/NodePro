const { exec } = require('child_process')

function moonbirds() {
  console.log('⏳ Loading Moonbirds Clone')

  console.log('⏳ Creating Next App...')
  console.log('Smash that 👍 button while you wait...')

  open(
    'https://www.infura.io/?utm_source=cleverprogrammer&utm_medium=influencer&utm_campaign=2022_May__acquisition_none',
  )

  exec(
    `git clone -b cli-starter https://github.com/CleverProgrammers/moonbirds-clone-youtube.git`,
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
        'cd moonbirds-clone-youtube && npm install --force',
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

          console.log('[1/3] Success')

          exec(
            'cd moonbirds-clone-youtube && cd truffle-app && npm install --force',
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

              console.log('[2/3] Success')

              exec(
                'cd moonbirds-clone-youtube && cd app && npm install --force',
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

                  console.log('[3/3] Success')
                  console.log('✅ Project Setup Complete')
                  console.log('⏳ Opening VS Code...')

                  exec(
                    'cd moonbirds-clone-youtube && code .',
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
    },
  )
}

module.exports = {
  moonbirds,
}
