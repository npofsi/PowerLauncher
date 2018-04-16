# PowerLauncher-Example
A packager for rhino.

## Init

```
git clone https://github.com/npofsi/PowerLauncher.git
cd PowerLauncher
rm -rf .git
```

## Build

Build project:

run ./build.js on createjs

## Doc

Please write '//' at the end of .js files to avoid illegal character exception.

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


