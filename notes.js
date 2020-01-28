const fs=require('fs')
const chalk=require('chalk')
const getNotes=()=>{
    return 'your notes'
}
const addNotes=(title,body)=>
{
const notes=loadNotes()
const duplicateNotes=notes.filter((note)=>note.title===title)
if (duplicateNotes.length===0)
{
notes.push({
    title: title,
    body:body
})
saveNotes(notes)
console.log(chalk.white.bgGreen('new note added!'))
}
else{
    console.log(chalk.white.bgRed('Note title taken!'))
}

}
const removeNotes=(title)=>{
    console.log("have to remove note")
    const notes=loadNotes()
    const duplicateNotes=notes.filter((note)=>note.title!==title)
    if(duplicateNotes.length===notes.length)
    {
        console.log(chalk.white.bgRed("title not found"))
    }
else{
    console.log(chalk.white.bgGreen("Removed"))
    saveNotes(duplicateNotes)
}}
const saveNotes=(notes)=>{
const dataJSON=JSON.stringify(notes)
fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes=()=>{
try{
    const dataBuffer=fs.readFileSync('notes.json')
    const dataJSON=dataBuffer.toString()
    return JSON.parse(dataJSON)
}
catch(e){
    return []
}
}
const listNotes=()=>{
    const notes=loadNotes()
    console.log(chalk.white.bgBlue.inverse("Your Notes"))
    notes.forEach(
        (l)=>console.log(l.title)
    )
}
const readNotes=(title)=>{
    const notes=loadNotes()
    //console.log(notes)
    const thatnote=notes.find((note)=>note.title==title)
    if(thatnote)
    {
        console.log(thatnote.title+" : "+thatnote.body)
    }
    else{
        console.log("not found")
    }

}
module.exports=
{
    readNotes:readNotes,
    addNotes:addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes
}