//var validator = require('validator')
//const chalk = require('chalk');
 
//console.log(chalk.white.bgRed.bold('success'))
//console.log(chalk.inverse.bold('kishore'))
//const jj=require('./notes.js')


//console.log(jj(9))
//console.log(validator.isEmail('gmail.com'))
//console.log(validator.isURL('https://www.gmail.com'))
const yargs=require('yargs')
const notes=require('./notes.js')
//console.log(command)
yargs.command(
    {
        command: 'add',
        describe:'Add a new note',
        builder:{
            title:{
                describe:'Note title',
                demandOption:true,
                type:'string'
            },
            body:{
                describe:'Note body',
                demandOption:true,
                type:'string'
            }
        },
        handler(argv){
            //console.log(notes)
            notes.addNotes(argv.title,argv.body)
        }
    }
)
yargs.command(
    {
        command: 'remove',
        describe:'remove a note',
        builder:{
            title:{
                describe:'Note title',
                demandOption:true,
                type:'string'
            },
            body:{
                describe:'Note body',
                demandOption:false,
                type:'string'
            }
        },
        handler(argv){
            notes.removeNotes(argv.title)
        }
    }
)
yargs.command(
    {
        command: 'read',
        describe:'read a note',
        builder:{
            title:{
                describe:'Note title',
                demandOption:false,
                type:'string'
            },
            body:{
                describe:'Note body',
                demandOption:false,
                type:'string'
            }
        },
        handler(argv){
            notes.readNotes(argv.title)
        }
    }
)
yargs.command(
    {
        command: 'list',
        describe:'list all note',
        builder:{
            title:{
                describe:'Note title',
                demandOption:false,
                type:'string'
            },
            body:{
                describe:'Note body',
                demandOption:false,
                type:'string'
            }
        },
        handler(){
            notes.listNotes()
        }
    }
)
yargs.parse()