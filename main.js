#!/usr/bin/env node

let inputArary =process.argv.slice(2); //take input from users
console.log(inputArary);
                            // node main.js tree directory path
                            //node main.js oragnize "directory path"
                            // node main.js help
let command =inputArary[0];
let types ={ 
    media : ["mp4", "mkv"],
    archives : ['zip', '7z','rar','tar','gz','ar','iso',"xz"],
    documents:['docx','doc','pdf','xlsx','xlx','odt','ods','odp','odg','odf','txt','ps'],
    app:['exe','dmg','pkg',"deb"]
    
    }
    let fs = require('fs');
let path =require("path");
let treeObject =require ("./commands/tree");
let organizeObject =require("./commands/organize");
let helpObject =require("./commands/help");
switch (command)
{
    case  "tree" :
        treeObject.treeKey();
        break;
        case "organize":
            organizeObject.organizeKey();
            break;
            case "help" :
                helpObject.helpKey();
                break;
                default:
    console.log("Please 🤦‍♂️ Input Right Command");
}
