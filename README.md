# PowerLauncher-Example
A framework for rhino.

## Get start

```
git clone https://github.com/npofsi/PowerLauncher.git
cd PowerLauncher
```

Now,you can write your own JS file in `./source` and put assets in `./assets`

Then build it and get Release Edition from `./release`

## Build

#### Createjs:

[LingSaTuo/Createjs](https://github.com/LingSaTuo/CreateJS)

[Download It](https://github.com/npofsi/PowerLauncher/blob/master/docs/CreateJS_build22.apk?raw=true)

tap ./build.js in FileManager(app)

>Maybe you need to choose createjs

run

#### Autojs:

[hyb1996/Autojs](https://github.com/hyb1996/Auto.js)

tap ./build.js in FileManager(app)

>Maybe you need to choose autojs

run

#### Output:

./release/Name-versionName.js

Certainly,you can pack it into an apk with createjs|autojs.

## Doc

>**important**
>
> Please write " `//`" at the end of .js files to avoid illegal character exception.


### Document structure:

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

### Framework API:

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
PL.i("init")()  //no ".js"
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
Use dexClass( 感谢 @那个谁 的帮助 ):
Place dex file in  `./libs/dex/` .
Place so file in  `./libs/so/` .
Edit  `libs.json` to set label for dex&so file.

```
var DexClassLoader=PL.x(DexLabel,SoLabel);
var Class=DexClassLoader.loadClass("ClassName");
```

Logger:
rewrite the `logLevel : dev` to `logLevel : rel` to close logger.

```
PL.l("Log")
```

Adapt to autojs:
rewrite the package.json

```
{
   ...
   "ajmode":"ui"
   ...
}
```


