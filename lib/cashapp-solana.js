const { exec } = require('child_process')

function cashAppSolana() {
  console.log('⏳ Solidity Blog App Loading')

  console.log('⏳ Creating Next App...')
  console.log('Smash that 👍 button while you wait...')

  exec(
    `git clone -b cli-starter https://github.com/CleverProgrammers/cashapp-solana-youtube.git`,
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
        'cd cashapp-solana-youtube && cd frontend && npm install --force',
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

          console.log('[1/1] Success')

          console.log('✅ Project Setup Complete')
          console.log('⏳ Opening VS Code...')

          exec(
            'cd cashapp-solana-youtube && code .',
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
  cashAppSolana,
}
