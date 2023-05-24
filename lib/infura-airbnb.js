const { exec } = require('child_process')
const open = require('open')

function InfuraAirbnb() {
  console.log('⏳ Infura AirBnb App Loading')

  console.log('⏳ Creating Next App...')
  console.log('Smash that 👍 button while you wait...')

  open(
    'https://www.infura.io/?utm_source=cleverprogrammer&utm_medium=influencer&utm_campaign=2022_May__acquisition_none',
  )

  exec(
    `git clone -b cli-starter https://github.com/CleverProgrammers/airbnb-infura-youtube.git`,
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
        'cd airbnb-infura-youtube/next-app && npm install --force',
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
            'cd airbnb-infura-youtube && code .',
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
  InfuraAirbnb,
}
