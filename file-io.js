#!/usr/bin/env node 

//synchronously reading

// const fs = require('fs')
// const { readFileSync } = require("fs"); 

// const fileArg = process.argv[2]; 

// if (fileArg){
//         try{
//             const data = readFileSync(fileArg);  
//             process.stdout.write(data.toString());
    
//         }catch(error){
//             console.log("error",error);
//         }
        
//      }else{ 
//          console.log("please pass in a file to read");
//          process.exit();
//      }
    
//synchronously reading 2 files
//ask about this 
const fs = require('fs')
const { readFileSync } = require("fs"); 

const fileArg = process.argv[2]; 
const fileArg = process.argv[3]; 

if (fileArg){
        try{
            const data = readFileSync(fileArg);  
            process.stdout.write(data.toString());
            process.next();
        }catch(error){
            console.log("error",error);
        }
        
     }else{ 
         console.log("please pass in a file to read");
         process.exit();
     }
    