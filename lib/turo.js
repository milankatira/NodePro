const { exec } = require('child_process')

function turo() {
  console.log('⏳ Turo App Loading')

  console.log('⏳ Creating Next App...')
  console.log('Smash that 👍 button while you wait...')

  exec(
    `git clone -b cli-starter https://github.com/CleverProgrammers/turo-clone-youtube.git`,
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
        'cd turo-clone-youtube && npm install --force',
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

          exec('cd turo-clone-youtube && code .', (error, stdout, stderr) => {
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
          })
        },
      )
    },
  )
}

module.exports = {
  turo,
}
