# PowerLauncher-Example
A packager for rhino.
##Init

git clone 

##Build

Build project:

run ./build.js on createjs

##Doc

Get byte array of file:

```
PL.a("icon/icon.png") 
```
Run script in function(){}:

```
PL.i("init")  //no ".js"
```
Run script in global field:
rewrite the package.json
```
{
   ...
   "entrance":["main","beforemain","beforebeforemain"],
   ...
}
```


