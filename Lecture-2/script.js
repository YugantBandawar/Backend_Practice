// const fs=require('fs');
// fs.writeFile("hey.txt","hey How are you?",function(err){
//     if(err){console.log(err);}
//     else{console.log("done");}
// })
//callback-function
//fs.appendfile(path,data,callback)
// fs.appendFile("hey.txt","I am fine",function(err){
//     if(err){console.log(err);}
//     else{console.log("done");}

//Rename-fs.rename(name,newname,callback)
// fs.rename("hey.txt","hello.txt",function(err){
//     if(err) {
//         console.log(err);
//     }
//     else{
//         console.log("done");
//     }

//fs.copyfile(scr,dest,callback)

// fs.copyFile("hello.txt","./copy/fil.txt",function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("done");

//Remove the file

// fs.unlink("hello.txt",function(err){
//     if(err){
//         console.log.error(err);
//     }
//     else{
//         console.log("removed");
//     }


//Remove the Directory:forcefully removed directory

// fs.rm("./copy",{recursive:true},function(err){
//     if(err){
//         console.error(err);
//     }
//     else{
//         console.log("removed");
//     }
// })

// http
// protocol-rules

const http=require('http');

const server=http.createServer(function(req,res){
      res.end("hello world");
})
server.listen(3000);