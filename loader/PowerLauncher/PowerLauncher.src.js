"{{AJMODE}}"
 var PL=new (function(){
    this.LOG=[];
    
    this.p={{MANIFEST}};
    
    this.b64d=function(data){//return ByteArray
        return android.util.Base64.decode(data,0)
    };
    this.a=function(fn){//return ByteArray
        return this.b64d(this.Data(fn))
    };
    this.Data=function(fn){
        var dname={{FILENAME}}
        var data={{DATA}}
        if((dname.indexOf(fn)==dname.lastIndexOf(fn))&&(dname.indexOf(fn)!=-1))return data[dname.indexOf(fn)]
        throw (new Error("findFileE : <"+fn+"> cannot be found."));
    };
    this.CopyFile=function(f, t){
       	var fip = new java.io.FileInputStream(f).getChannel();
       	var fop = new java.io.FileOutputStream(t).getChannel();
       	fip.transferTo(0, fip.size(), fop);
	       fip.close();fop.close();
    };
    this.WriteBinArray=function(path,byteArray){
        var fop=new java.io.FileOutputStream(new java.io.File(path));
        fop.write(byteArray,0,byteArray.length);
    };
    this.Libs=function(ln,t){
        
        var dexname={{DEXNAME}}
        var soname={{SONAME}}
        var dexb64={{DEXB64}}
        var sob64={{SOB64}}
        if(t=="dex"){
          var name=PL.libcon[t][ln]
          if(name!=null){
            pos=dexname.indexOf(name)
            if(pos!=-1){
              return this.b64d(dexb64[pos])
            }else{
              throw (new Error("dexFileE : <"+name+"> cannot be found."));
            }
          }else{
            throw (new Error("dexLabelE : <"+ln+"> cannot be found."));
          }
        }else if(t=="so"){
          var name=PL.libcon[t][ln]
          if(name!=null){
            pos=soname.indexOf(name)
            if(pos!=-1){
              return this.b64d(sob64[pos])
            }else{
              throw (new Error("soFileE : <"+name+"> cannot be found."));
            }
          }else{
            throw (new Error("soLabelE : <"+ln+"> cannot be found."));
          }
        }else{
          throw (new Error("libTypeE : <"+t+"> cannot be found."));
        }
    };
    this.x=function(dexlabel,solabel){
        var jnipath=ctx.getDir("libs", android.app.Activity.MODE_PRIVATE);
        var dirpath=ctx.getDir("dex", android.app.Activity.MODE_PRIVATE).getAbsolutePath();
        var sf=new java.io.File(jnipath, PL.libcon["so"][solabel]);
        sf.getParentFile().mkdirs();
        sf.createNewFile();
        this.WriteBinArray(sf.getAbsolutePath(),this.Libs(solabel,"so"));
        var dexpath="/sdcard/.PowerLauncher/cache";
        var f=new java.io.File(dexpath);
        f.getParentFile().mkdirs();
        f.createNewFile();
        this.WriteBinArray(dexpath,this.Libs(dexlabel,"dex"));
        return new Packages.dalvik.system.DexClassLoader(dexpath, dirpath, jnipath, java.lang.ClassLoader.getSystemClassLoader());
    };
    this.d=function(fn){
        var drawable=PL.a(fn);
        return (new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(drawable,0,drawable.length)));
    };
    this.i=function(pn){
        var f=new Function(PL.Script(pn))
        return f;
    };
    this.r=function(pn){
        var f=new Function("var exports={};"+PL.Script(pn)+";return exports;");
        return f();
    };
    this.t=function(fn){
        var t=new java.lang.String(PL.a(fn))
        return ""+t
    };
    this.l=function(t){
    switch("{{LOGLEVEL}}"){
        case "dev":{
            try{
               print(t)
            }catch(e){
            try{
               console.log(t)
            }catch(e){
              
            }
            };
            PL.LOG.push(t);
            break;
            }
        case "rel":{
             PL.LOG.push(t);
             break;
             }
         default:{
             break;
             }
        }
    };
    this.Start=function(){
    //for(var i in PL.CTX)print(i+":"+PL.CTX[i])
        var enames={{ENTRANCE}}
        var estr=""
        for(var i=enames.length;i>0;i--){
            var code="PL.c(\""+enames[i-1]+"\")"
            estr+="eval("+code+");\n"
        }
        PL.libcon={{LIBCON}}
        
        return estr
    };
    this.c=function(pn){
        return PL.Script(pn)
    },
    this.Script=function(pn){
        var cname={{CODENAME}}
        var code={{CODE}}
        
        if(cname.indexOf(pn)!=-1){
            PL.l("@"+pn+">")
            return code[cname.indexOf(pn)]
        }
        throw (new Error("findScriptE : <"+pn+"> can't be found."))
        //var pubkey="{{PUBKEY}}"
    },
    this.CTX=null
})
PL.CTX=this;
//print(PL.r())
PL.l("@script~>")
eval(PL.Start())