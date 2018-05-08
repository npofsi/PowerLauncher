"ui";
var path=null;
try{
    path=""+libs_inthis.getIntent().getStringExtra("path");
}catch(err){

try{
    path=""+engines.myEngine().getSource();
}catch(err){

}
    //path=""//write your current abs path（no last '/')
}
//console.log(path)
path=""+path
path=path.replace(/\/build.js$/,"")
//print(path)
var manifest=JSON.parse(""+read(path+"/package.json"));
var code=read(path+"/loader/"+manifest.loader+"/"+manifest.loader+".dev.js");

code=String(code
.replace("{{PATH}}",""+path)
.replace("\u200B","")).toString()
//print(code)
this.eval(code)

function read(path){
               try{
                   var str="";
                   var file=new java.io.File(path);
                   var reader =  new  java.io.FileReader(file);
                   var buffer =  java.lang.reflect.Array.newInstance(java.lang.Character.TYPE,file.length());
                   var  charread =  0;
                   reader.read(buffer)
                   str=(new java.lang.String(buffer)).toString();
                   reader.close();
                   return str;
               }catch(e){
                   print(e.toString());
               }
           }

//main()