var PL=new (function(){
    this.p={{MANIFEST}};
    this.a=function(fn){//return ByteArray
        return android.util.Base64.decode(this.Data(fn),0)
    };
    this.Data=function(fn){
        var dname={{FILENAME}}
        var data={{DATA}}
        if((dname.indexOf(fn)==dname.lastIndexOf(fn))&&(dname.indexOf(fn)!=-1))return data[dname.indexOf(fn)]
        return (new Error("findFileError:"+fn+" cannot be found."));
    };
    this.i=function(pn,field){
        var f=new Function(pn,PL.Script(pn))
        return f;
    };
    this.r=function(){
    //for(var i in PL.CTX)print(i+":"+PL.CTX[i])
        var enames={{ENTRANCE}}
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
        var cname={{CODENAME}}
        var code={{CODE}}
        return code[cname.indexOf(pn)]
        //var pubkey="{{PUBKEY}}"
    },
    this.CTX=null
})
PL.CTX=this;
//print(PL.r())
eval(PL.r())