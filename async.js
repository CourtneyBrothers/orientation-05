#!/usr/bin/env node 

//Asynchronous file reading
const fileArg = process.argv[2]; 
const util = require('util');

const {
    readFile
} = require("fs"); //all methods on fs module 

// const asyncFile = util.promisify(readFile);


if (fileArg){
        try{
            const data = readFile(fileArg, (err, data) => {
                if (err) throw err; //always assumes the error is first 
                console.log(data);
                process.stdout.write(data.toString());
              });
               //this is synchronous so all forward process will stop here until entire file is read and saved into the variable 
            
    
        }catch(error){ //if there is an error reading or writing the file
            console.log("error",error);
        }
        
     }else{ //if we pass in no file at all 
         console.log("please pass in a file to read");
         process.exit();
     }