// npm install chalk@4.1.2
// npm install inquirer@8.1.2

// modulos externos 
const inquirer = require("inquirer")

const chalk = require("chalk")

// modulos internos
const fs  = require("fs")

operation()

function operation(){
    inquirer.prompt([{
        type:"list",
        name: "action",
        message: "O que voce deseja fazer ?",
        choices: ['Criar Conta','Consultar Saldo','Depositar','Sacar','Sair']
    }
    ]).then((answer) => {
        const action = answer['action']
        
        if(action == 'Criar Conta'){
            CreateAccount()
        }
    }).catch((err) => console.log(err))
}

// Create an Account

function CreateAccount(){
    console.log(chalk.bgGreen.black("Parabens por escolher nosso banco!"))
    console.log(chalk.green("Defina as opções da sua conta a seguir"))

    buildAccount()
}

function buildAccount(){
    inquirer.prompt([
        {name: 'accountName',
         message: 'Digite um nome para sua conta:'   
        }
    ]).then((answer) => {

        const accountName = answer['accountName']

        console.info(accountName)

        if(!fs.existsSync('accounts')){
            fs.mkdirSync('accounts')
        }

        if(fs.existsSync(`accounts/${accountName}.json`)){
            console.log(chalk.bgRed.black("Essa conta já existe escolha outro nome!"))

            buildAccount()
            return
        }

        fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}', function(err){
            console.log(err)
        })

        console.log(chalk.green("Parabens a sua conta foi criada com sucesso!"))

        operation()
    }).catch((err) => console.log(err))
}