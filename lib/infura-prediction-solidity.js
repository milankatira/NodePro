const { exec } = require('child_process')
const open = require('open')

function InfuraPrediction() {
  console.log('⏳ Infura Instagram App Loading')

  console.log('⏳ Creating Next App...')
  console.log('Smash that 👍 button while you wait...')

  open(
    'https://www.infura.io/?utm_source=cleverprogrammer&utm_medium=influencer&utm_campaign=2022_May__acquisition_none',
  )

  exec(
    `git clone -b cli-starter https://github.com/CleverProgrammers/solidity-prediction-youtube.git`,
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
        'cd solidity-prediction-youtube && npm install --force',
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
            'cd solidity-prediction-youtube && npm install --force',
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
                'cd solidity-prediction-youtube && code .',
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
  InfuraPrediction,
}
