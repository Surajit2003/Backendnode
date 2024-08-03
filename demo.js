const fs = require('fs');

// write file
// fs.writeFile('hello.txt','welcome to node js',function(err) {
//     if(err)
//     console.error(err);
//     else
//     console.log('you are right');
// })

// append file

// fs.appendFile('hello.txt',' you are great',function (err) {
// if(err)
//     console.error(err);
// else
// console.log('done');    
// })

// rename file

// fs.rename('hello.txt','welcome.txt',function (err) {
//     if(err)
//         console.error(err);
//     else
//     console.log('done');
    
// })

// copy file

//  fs.copyFile('welcome.txt','demo.txt',function(err){
// if(err)
//     console.error(err);
// else
// console.log('copy file sucessfully');
//  })

 // remove file

//  fs.unlink('demo.txt',function (err) {
//     if(err)
//         console.error(err);
//     else
//     console.log('remove sucessfully');    
//  })

 // remove folder
 
 fs.rmdir('./hello',function (err) {
    if(err)
        console.error(err);
    else
    console.log('removed');
    
 })
