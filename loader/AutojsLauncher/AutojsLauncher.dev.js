var cp="{{PATH}}"
var ap=cp+"/assets"
var lp=cp+"/loader"
var sp=cp+"/source"
var rp=cp+"/release"
var pp=lp+"/AutojsLauncher"
var dp=pp+"/dist"
function main(){

}
function Lpath2Lfile(r,L){
    var l=[];
    //c=L;
    //o=c.replace('[','').replace(']','').split(",")
    for(var i in L){
        l.push(new java.io.File(r+"/"+L[i]))
        //print(L[i])
    }
    return l
}
main();