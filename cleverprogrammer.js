const inquirer = require('inquirer')
const { saveAnalytics } = require('./lib/handlers/analytics')

inquirer.registerPrompt('search-list', require('inquirer-search-list'))

async function init() {
  console.log(`
🔥 Initializing cleverprogrammer...
⚠️ You need Yarn globally installed to use cleverprogrammer.
ℹ️ To install Yarn, run 👉 npm install --global yarn \n
    `)

  await inquirer
    .prompt([
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
    ])
    .then(async ({ email, name }) => {
      await inquirer
        .prompt([
          {
            type: 'search-list',
            name: 'project',
            message:
              'What project would you like to initialize? (Type to search...)',
            choices: [
              'Solidity Prediction Dapp',
            ],
            default: 'Solidity SushiSwap',
          },
        ])
        .then(async ({ project }) => {
          saveAnalytics(name, email, project)
        })
        .catch(error => {
          console.log('❗ 404 Error not found 📚')

          // For development purposes
          // console.log(error)
          // console.log(error.message)

          process.exit(1)
        })
    })
    .catch(error => {
      console.log('❗ 404 Error not found 📚')

      // For development purposes
      // console.log(error)
      // console.log(error.message)

      process.exit(1)
    })
}

module.exports = {
  init,
}
