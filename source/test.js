var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var dcl=PL.x("stackblur","stackblur");
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
