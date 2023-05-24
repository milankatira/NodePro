const { exec } = require('child_process')

function phantomTwitter() {
  console.log('⏳ Loading Solana Lottery Clone')
  console.log('⚠️ You need Yarn for this project.')

  console.log('⏳ Creating Next App...')
  console.log('Smash that 👍 button while you wait...')

  exec(
    `git clone -b cli-starter https://github.com/CleverProgrammers/twitter-phantom-youtube.git`,
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
      console.log('[1/2] Success')

      exec('cd twitter-phantom-youtube && yarn', (error, stdout, stderr) => {
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

        console.log('✅ Project Setup Complete')
        console.log('⏳ Opening VS Code...')

        exec(
          'cd twitter-phantom-youtube && code .',
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
      })
    },
  )
}

module.exports = {
  phantomTwitter,
}
