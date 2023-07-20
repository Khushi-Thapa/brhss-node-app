//var {message } =require('./student')
//console.log(abc)

//console.log(message )
  //File System
  const fs=require('fs')//import file system package from node.js

  /*fs.readFile('./docs/data.txt', (error,data)=>{
    if (error){
        console.log(error)
        return
    }
    console.log(data.toString())

  })*/
  //Write file to Storage.
  fs.writeFile('./docs/example.txt','This is written from node js.',()=>{
    console.log('Success....')

  })