"ui"
 var PL=new (function(){
    this.p={
    "name":"PLExample",
    "auther":"npofsi",
    "versionName":"0.0.1",
    "version":"0x00000001",
    "entrance":["main"],
    "loader":"PowerLauncher",
    "ajmode":"ui"
};
    this.a=function(fn){//return ByteArray
        return android.util.Base64.decode(this.Data(fn),0)
    };
    this.Data=function(fn){
        var dname=["test.txt", "icon/icon.png"]
        var data=["5rWL6K+V5oiQ5Yqf77yB\n", "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAARlJREFU\nWIXtlt0NgzAMhO2qu3SObsNG7QqdgjmYxn0g4cfYsU1CUSVO4oUgvrvYDgBc+pUISLp9PwO6FB4O\nxjKjrYEAuK2BHeCsYg9QJ9cQ3wnCwNQBRROZTTjBmDF8zeAQsafR9BPRZWBNHhMjAhIASeYicL+B\nihqX4D4DGV4LFuAAADcV2jq1AJcN8MQCnDqj/j2RtuVccwkcifNYmvACmIb0jgcIU6CknZY1cIZ+\n0rITbko7iDbwZEB7ngagfPG1+Ndw2dVZhTpbqX0GONRorCW4BPcZcHZzFJwlnwN8jHYk9jbaegf4\nqeVoQt5Y7g7fGGiw1a6pUQ044VaNzX+IGmmzXKNQYoB4jXcbiI5TUx2x1f8Bv3SGvpuTq5R2qo2v\nAAAAAElFTkSuQmCC\n"]
        if((dname.indexOf(fn)==dname.lastIndexOf(fn))&&(dname.indexOf(fn)!=-1))return data[dname.indexOf(fn)]
        return (new Error("findFileError:"+fn+" cannot be found."));
    };
    this.i=function(pn){
        var f=new Function(PL.Script(pn))
        return f;
    };
    this.t=function(fn){
        var t=new java.lang.String(this.a(fn))
        return ""+t
    };
    this.r=function(){
    //for(var i in PL.CTX)print(i+":"+PL.CTX[i])
        var enames=["main"]
        var estr=""
        for(var i=enames.length;i>0;i--){
            estr+="eval(PL.c('"+enames[i-1]+"'));"
        }
        return estr
    };
    this.c=function(pn){
        return PL.Script(pn)
    },
    this.Script=function(pn){
        var cname=["main", "head/init"]
        var code=["print(PL.t(\"test.txt\")) ", "PL.icon=PL.a(\"icon/icon.png\")\nreturn PL.a(\"test.txt\")\n//\n\n\n "]
        return code[cname.indexOf(pn)]
        //var pubkey="{{PUBKEY}}"
    },
    this.CTX=null
})
PL.CTX=this;
//print(PL.r())
eval(PL.r())