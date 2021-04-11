const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type : 'list',
        name : 'option',
        message : 'Que desea saber?',
        choices: ['opt1', 'opt2', 'opt3']
    }
]

const inquirerMenu = async () => {
   
    console.log('============================'.green);
    console.log('      Seleccione opcion'.green)
    console.log('============================\n'.green);


    const opt = await inquirer.prompt(preguntas);

    return opt
}


module.exports = {
    inquirerMenu
}