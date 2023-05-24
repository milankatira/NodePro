const { exec } = require('child_process')

function solidityBlog() {
  console.log('⏳ Solidity Blog App Loading')

  console.log('⏳ Creating Next App...')
  console.log('Smash that 👍 button while you wait...')

  exec(
    `git clone -b cli-starter https://github.com/CleverProgrammers/solidity-blog-youtube.git`,
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
        'cd solidity-blog-youtube && npm install --force',
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
            'cd solidity-blog-youtube && cd app && npm install --force',
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
              console.log('✅ Project Setup Complete')
              console.log('⏳ Opening VS Code...')

              exec(
                'cd solidity-blog-youtube && code .',
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
  solidityBlog,
}
