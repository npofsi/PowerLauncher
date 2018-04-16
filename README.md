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

./assets/*(name)
         icon/icon.png|
         src.mp4      |}PL.a(name)
         ...          |

./source/*(name)(.js)
         init(.js)|
         main(.js)|}PL.i(name)&PL.c(name)
         ...      |

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


