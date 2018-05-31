"ui"
 var PL=new (function(){
    this.LOG=[];
    this.p={
    "name":"PLExample",
    "auther":"npofsi",
    "versionName":"0.0.1",
    "version":"0x00000001",
    "entrance":["main"],
    "loader":"PowerLauncher",
    "ajmode":"ui",
    "logLevel":"dev",
    "dumpKey":"0x10101111"
};
    this.a=function(fn){//return ByteArray
        return android.util.Base64.decode(this.Data(fn),0)
    };
    this.Data=function(fn){
        var dname=["test.txt", "icon/icon.png"]
        var data=["5rWL6K+V5oiQ5Yqf77yB\n", "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAARlJREFU\nWIXtlt0NgzAMhO2qu3SObsNG7QqdgjmYxn0g4cfYsU1CUSVO4oUgvrvYDgBc+pUISLp9PwO6FB4O\nxjKjrYEAuK2BHeCsYg9QJ9cQ3wnCwNQBRROZTTjBmDF8zeAQsafR9BPRZWBNHhMjAhIASeYicL+B\nihqX4D4DGV4LFuAAADcV2jq1AJcN8MQCnDqj/j2RtuVccwkcifNYmvACmIb0jgcIU6CknZY1cIZ+\n0rITbko7iDbwZEB7ngagfPG1+Ndw2dVZhTpbqX0GONRorCW4BPcZcHZzFJwlnwN8jHYk9jbaegf4\nqeVoQt5Y7g7fGGiw1a6pUQ044VaNzX+IGmmzXKNQYoB4jXcbiI5TUx2x1f8Bv3SGvpuTq5R2qo2v\nAAAAAElFTkSuQmCC\n"]
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
    switch("dev"){
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
        var enames=["main"]
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
        var cname=["main", "head/init"]
        var code=["print(\"\"+PL.r(\"head/init\").a) ", "PL.icon=PL.a(\"icon/icon.png\")\nexports.a=PL.t(\"test.txt\")\n//\n\n\n "]
        
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