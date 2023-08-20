
function organizefn (dirPath)
{
    let destPath;
    //console.log("organize command implemented for ", dirPath);
    // 1 . input -> directory path given 
    // 2. craete -> organized files -> directory 
    //3. identify category 
    //4 copy /cut files to that oraganized directory  inside category folder
    //5 .agar aap path pass nhi karte ho to wo aAPKO UNDEFined de dega
    if(dirPath ==undefined){
        destPath=process.cwd();
        return ;
    }else {
        let doesExist =fs.existsSync(dirPath);
     if(doesExist) // // 2. create -> organized files -> directory 
     {
          destPath =path.join(dirPath ,"organized_files");
         if(fs.existsSync (destPath)==false)
         {
             fs.mkdirSync(destPath);
         }
     }
     else {
         console.log("kindly enter thecorrect path");
         return ;
     }
    }
    organizerHelper(dirPath ,destPath);

}
 
 function organizerHelper(src,dest)
 {
     //  identify categories of all the files present in that input directory 
     let childnames =fs.readdirSync(src);
     for(let i=0; i<childnames.length;i++)
     {
         let childAddress =path.join(src,childnames[i]);
         let isFile =fs.lstatSync(childAddress).isFile();
         if(isFile)
         {
             //console.log(childnames[i]);
             let category = getCategory(childnames[i]);
             console.log(childnames[i],"belongsTo -->" ,category);
             sendFiles(childAddress,dest,category);
         }
     }
 }

 function sendFiles(srcFilePath , dest, category)
 {
     let categoryPath =path.join(dest,category);
     if(fs.existsSync(categoryPath)==false)
     {
         fs.mkdirSync(categoryPath);
     }
     let fileName=path.basename(srcFilePath);
     let destFilePath =path.join(categoryPath,fileName);
     fs.copyFileSync(srcFilePath,destFilePath);
     fs.unlinkSync(srcFilePath);
     console.log(fileName,"copied to" ,category);
 }
 function getCategory(name)
 {
     let ext = path.extname(name);
     ext = ext.slice(1);
     //console.log(ext);
     for (let type in types )
     {
         let cTypeArray =types[type];
         for(let i=0; i<cTypeArray.length;i++)
         {
             if(ext==cTypeArray[i])
             {
                 return type;
             }
         }
     }
     return "others";
 }
 module.exports={
     organizeKey :organizefn
 }