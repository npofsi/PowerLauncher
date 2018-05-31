"{{AJMODE}}"
 var PL=new (function(){
    this.LOG=[];
    this.p={{MANIFEST}};
    this.a=function(fn){//return ByteArray
        return android.util.Base64.decode(this.Data(fn),0)
    };
    this.Data=function(fn){
        var dname={{FILENAME}}
        var data={{DATA}}
        if((dname.indexOf(fn)==dname.lastIndexOf(fn))&&(dname.indexOf(fn)!=-1))return data[dname.indexOf(fn)]
        throw (new Error("findFileE : <"+fn+"> cannot be found."));
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