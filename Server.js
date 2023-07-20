/*var http =require('http')

var fs =require('fs')*/

/*http.createServer((request,response)=>{
    console.log ("Listening on port 4000....")
   response.write('Welcome to backend development')
   response.end()
}).listen(4000)*/

//console.log(http)
/*var Server =http.createServer((req, res)=>{
    console.log('request made....')
    console.log(req.method,req.url)
    res.setHeader('Content-Type', 'text/plain')

    fs.readFile('./views/index.html',(error, data)=>{
     if (error){
        console.log(error.message)
        res.end(error.message)
     }
     res.end(data)
    })
})*/
     
    /*res.write('<h2>This is plain text sent from my localhost server...</h2>')
    res.write('<p>Welcome to brss</p>')
    res.end()
})*/

/*Server.listen(4000, 'localhost',()=>{
    console.log('listening on port 4000...')
})
*/










     var http=require('http')
var fs=require('fs')

//console.log(http)
var server=http.createServer((req,res)=>
{
    console.log("request made.....")
    console.log(req.method,req.url)// req.methid ma yo value kasri aayo get ho ki input ho ki
     res.setHeader('Content-Type','text/html')


     //use req.url 

     //index.html
     //about.html
     //404.html

     //switch(req.url)
     //case"/"=>index.html
     //case "/about"=>about.html
     //case default!=> 404.html
 var path ="./views/"
     switch(req.url)  {  
        case "/": 
        path =path +'index.html'
        res.statuscode =200 //successful response

        break;
       

        case "/about":
            path=path+'about.html'
            res.statuscode =200 //successful response
            break;
        
        default:
            path=path+'404.html'
            res.statuscode =404 //not found

            break;
        }

//npm =node package manager
//third party package

    
     fs.readFile (path,(error,data)=>{
     if(error){
        console.log(error.message)
        res.end(error.message)
     }
    // res.write(data)
     res.end(data) // if single write garana xa vanay re.end(data) garanays
     })
}) 
server.listen(4000,'localhost',()=>{}) // ()=>{}local call balck function
console.log("listening on port 4000....")
// file system
//sconst fs=require('fs') 
// importing the file system package from node js
 //     res.setHeader('Content-Type','text/plain')

   /*  res.write("<h2>this is palin text sent from my localhost server.....</h2>")
     res.write('wlecome to brss')
     res.end()*/