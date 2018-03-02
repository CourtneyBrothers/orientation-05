#!/usr/bin/env node 

const {
    createReadStream,
    createWriteSream,
    appendFile,
    writeFile
} = require("fs"); //all methods on fs module 

const{

    Transform, Writable  //classes to be instantiated
} = require("stream");

 const upperCasify =  Transform(); //method returns an object to us
 const writeStream = Writable();

 upperCasify._transform = (buffer, _, callback) => {
    callback(null, buffer.toString().toUpperCase());
}

writeStream._write = (buffer, _, next) => {
    writeFile("messageUppercase.text",buffer, (err) => { //callback accepts error if there is one, write file accepts file, buffer, and callback function 
        if (err) throw err;
        console.log('The data to write was added to the file!');
    });
    next();
};

createReadStream(fileArg)
.pipe(upperCasify)
.pipe(writeStream);

