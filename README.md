# PowerLauncher-Example
A packager for rhino.(run ./loader/PowerLauncher/PowerLauncher.dev.js)

Get byte array of file:
'''PL.a("icon/icon.png") 

Run script in function(){}:
'''PL.i("init")  //no ".js"

Run script in global field:
rewrite the package.json
{
   ...
   "entrance":["main","beforemain",beforebeforemain],
   ...
}

