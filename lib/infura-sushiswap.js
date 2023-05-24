const { exec } = require('child_process')
const open = require('open')

function InfuraSushiSwap() {
  console.log('⏳ Infura SushiSwap App Loading')

  console.log('⏳ Creating Next App...')
  console.log('Smash that 👍 button while you wait...')

  open(
    'https://www.infura.io/?utm_source=cleverprogrammer&utm_medium=influencer&utm_campaign=2022_May__acquisition_none',
  )

  exec(
    `git clone -b cli-starter https://github.com/CleverProgrammers/sushiswap-infura-youtube.git`,
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
        'cd sushiswap-infura-youtube && npm install --force',
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
          console.log('⏳ Opening VS Code...')

          exec(
            'cd sushiswap-infura-youtube && code .',
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
}

module.exports = {
  InfuraSushiSwap,
}
