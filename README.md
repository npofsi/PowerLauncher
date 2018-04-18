# PowerLauncher-Example
A packager for rhino.

## Init

```
git clone https://github.com/npofsi/PowerLauncher.git
cd PowerLauncher
rm -rf .git
```

## Build

#### Createjs:

tap ./build.js in FileManager(app)

>Maybe you need to choose createjs

run

#### Autojs:

tap ./build.js in FileManager(app)

>Maybe you need to choose autojs

run

## Doc

Please write '//' at the end of .js files to avoid illegal character exception.

```
./assets/*(name)
         icon/icon.png|
         src.mp4      |}PL.a(name)
         ...          |
```

```
./source/*(name)(.js)
         init(.js)|
         main(.js)|}PL.i(name)&PL.c(name)
         ...      |
```

Get byte array of file:

```
PL.a("icon/icon.png") 
```
Import script in function:

```
var init = PL.i("init")  //no ".js"
```
Run script in function:

```
PL.i("init")()//no ".js"
```

Get script source code:

```
var code=PL.c("init")//no ".js"
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
Adapt autojs:
rewrite the package.json
```
{
   ...
   "ajmode":"ui"
   ...
}
```


