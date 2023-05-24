const { exec } = require('child_process')
const open = require('open')

function solanaTodo() {
  console.log('⏳ Solana Todo App Loading')

  console.log('⏳ Creating Next App...')
  console.log(`Smash that 👍 button so Lance doesn't lose his job...`)

  open(
    'https://www.quicknode.com/?utm_source=cleverprog&utm_campaign=generic&utm_content=sign-up&utm_medium=cleverprog',
  )

  exec(
    `git clone -b cli-start https://github.com/CleverProgrammers/solana-todo-app.git`,
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
      console.log(
        '⏳ Installing dependencies... (It will take between 1 to 3 minutes depending on your internet speed)',
      )

      exec(
        'cd solana-todo-app && cd app && npm install --force',
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

          exec('cd solana-todo-app && code .', (error, stdout, stderr) => {
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
  solanaTodo,
}
