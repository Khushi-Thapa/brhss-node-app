//modules =pieces
//const student =['ram','shyam','hari']

//console.log(student)
//console.log ('this is the code for student.js')

//var abc ="Exported value"
//module.exports =abc


/*var user ={
name: 'Khushi123',
password: '09876'
}
var abc ='text from student.js'*/

var myUserName ='Khushi123'
var myPassword ='09876'

var user ={name:myUserName,password:myPassword}
var abc ="this is message from student.js"


console.log (user)
module.exports ={user, message: abc}
