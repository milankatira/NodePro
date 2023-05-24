const { exec } = require('child_process')

function uniswap() {
  console.log('⏳ Uniswap App Loading')

  console.log('⏳ Creating Next App...')
  console.log('Smash that 👍 button while you wait...')

  exec(
    `git clone -b cli-starter https://github.com/CleverProgrammers/uniswap-clone-infura-youtube.git`,
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

      console.log('✅ Creating App...')
      console.log('⏳ Running Scripts...')

      exec(
        'cd uniswap-clone-infura-youtube && npm install --force',
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
          console.log('⏳ Installing Dependencies...')

          exec(
            'cd uniswap-clone-infura-youtube && cd uniswap-app && npm install --force',
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
              console.log('✅ Dependencies')
              console.log('⏳ Opening VS Code...')

              exec(
                'cd uniswap-clone-infura-youtube && code .',
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
  uniswap,
}
