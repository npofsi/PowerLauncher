var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var dexpath="/storage/emulated/0/___/stackblur.jar.dex"
var sopath="/storage/emulated/0/___/arm64-v8a/libblur.so"
var jnipath=ctx.getDir("libs", android.app.Activity.MODE_PRIVATE);
var dirpath=ctx.getDir("dex", android.app.Activity.MODE_PRIVATE).getAbsolutePath();
copy(sopath, new java.io.File(jnipath, "libblur.so").getAbsolutePath());


var dcl=PL.x("stackblur","stackblur")//new Packages.dalvik.system.DexClassLoader(dexpath, dirpath, jnipath, java.lang.ClassLoader.getSystemClassLoader());

var cls=dcl.loadClass("com.enrique.stackblur.StackBlurManager")

var api=cls.newInstance()

ctx.runOnUiThread(creatView)

function creatView(){
	var img = new android.widget.ImageView(ctx);
	var bmp = android.graphics.BitmapFactory.decodeByteArray(PL.a("3.jpg"),0,PL.a("3.jpg").length);
	api.setBitmap(bmp);
	var t=new Date().getTime();
	var bmp2=api.processNative(50)
	print(new Date().getTime()-t)
	img.setImageBitmap(bmp2)
	var window = new android.widget.PopupWindow(img, 600, 1200);
	window.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER, 0, 0);
}

function copy(f, t){
	var fip = new java.io.FileInputStream(f).getChannel();
	var fop = new java.io.FileOutputStream(t).getChannel();
	fip.transferTo(0, fip.size(), fop);
	fip.close();fop.close();
}
