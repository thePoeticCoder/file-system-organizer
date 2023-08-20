function treefn (dirPath)
{

    if(dirPath ==undefined){
        
        treeHelper(process.cwd() , "");
        return ;
    }else {
        let doesExist =fs.existsSync(dirPath);
     if(doesExist) // // 2. create -> organized files -> directory 
     {
         treeHelper(dirPath);
     }
     else {
         console.log("kindly enter thecorrect path");
         return ;
     }
    }
}
function treeHelper(dirPath , indent)
{
                                      //is File or Folder 
   let isFile =fs.lstatSync(dirPath).isFile();
   if(isFile==true)
   {
      let fileName = path.basename(dirPath);
      console.log(indent +"------>"+fileName);
   } else {
       let dirName =path.basename(dirPath);
       console.log(indent +"----<"+ dirName);
       let children = fs.readdirSync(dirPath);
       for(let i=0; i<children.length; i++)
       {
         let childKaPath=  path.join(dirPath,children[i]);
           treeHelper(childKaPath,indent+"\t");
       }
   }                                
}
module.exports={
    treeKey:treefn
}