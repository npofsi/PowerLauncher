PowerLauncher:{  
    try{
        const ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        const dip = ctx.getResources().getDisplayMetrics().density;
        const BUILD={
        "name":"PowerLauncher",
        "version":0x00000001,
        "versionName":"0.0.1",
        "frameworkName":"PowerLauncher",
        "frameworkVersion":0x00000001
        };
        
        var DATA={};
        var Height = ctx.getWindowManager().getDefaultDisplay().getHeight();
        var Width = ctx.getWindowManager().getDefaultDisplay().getWidth();
        DATA.Height=Height>Width?Width:Height;
        DATA.Width=Height>Width?Height:Width;
        DATA.Color={
        "primary":"#00000000",
        "primaryDark":"#00000000",
        "accent":"#00000000"
        };
    function toast(str,time){ 
            ctx.runOnUiThread(new java.lang.Runnable(()=>{ 
                if(str!=null){android.widget.Toast.makeText(ctx,str,time?time:0).show()}else{return};
            }));
            return str;
       };
    function _import() {
          for (var i in arguments)
              try {
                  Object.defineProperty(this,"_"+String(arguments[i]).split(".").pop().replace(/]/,""),{value:(arguments[i]), writable:false,enumerable:false,configurable:false});
              } catch (err) {return err;};
          return true;
        };
    var err;
    toast(err=_import(
    //import java packages
    java.io.RandomAccessFile,
    java.io.FileReader,
    java.io.File,
    java.io.FileOutputStream,
    java.io.FileInputStream,
    java.io.PrintWriter,
    java.io.BufferedWriter,
    java.io.FileWriter,
    java.net.URL,
    java.nio.FileChannel,
    java.nio.charset.Charset,
    java.nio.ByteBuffer,
    java.lang.String,
    java.lang.Char,
    java.lang.reflect.Array,
    java.lang.Runnable,
    java.lang.Thread,
    java.lang.Handle,
    java.lang.Character,
    java.lang.Byte,
    java.util.Stack,
    //import android packages
    android.media.MediaPlayer,
    android.media.AudioManager,
    android.os.Build,
    android.os.Environment,
    android.os.Handler,
    android.R,
    android.app.AlertDialog,
    android.view.View,
    android.view.View.OnClickListener,
    android.view.View.OnTouchListener,
    android.view.View.OnLongClickListener,
    android.view.Gravity,
    android.view.ViewGroup,
    android.widget.SeekBar,
    android.widget.EditText,
    android.widget.ProgressBar,
    android.widget.Toast,
    android.widget.TextView,
    android.widget.PopupWindow,
    android.widget.RelativeLayout,
    android.widget.LinearLayout,
    android.widget.ScrollView,
    android.widget.HorizontalScrollView,
    android.widget.Button,
    android.webkit.WebView,
    android.webkit.WebViewClient,
    android.webkit.WebChromeClient,
    android.webkit.DownloadListener,
    android.content.DialogInterface,
    android.content.Context,
    android.util.Base64,
    android.graphics.Color,
    android.graphics.BitmapFactory,
    android.graphics.drawable.ColorDrawable,
    android.graphics.drawable.BitmapDrawable,
    android.view.animation.AnimationSet,
    android.view.animation.AlphaAnimation,
    android.view.animation.TranslateAnimation,
    android.view.animation.ScaleAnimation,
    android.view.animation.RotateAnimation
    )===true?null:"❌Import ERROR:"+err.toString());
    delete err;
    
       function UI(func,postOrRun){
           postOrRun?ctx.postOnUiThread(new _Runnable(()=>{try{func()}catch(e){Log(e.toString(),"Error").send()}})):ctx.runOnUiThread(new _Runnable(()=>{try{func()}catch(e){Log(e.toString(),"Error").send()}}));
       }
       function Log(str,type){
           this.str=str;
           this.max=7;
           this.e=function(){};
           this.send=function(time){toast(this.str,time!=null?time:2000)};
           var typeChars={
               "Error":"❌",
               "TestError":"⚫",
               "TestPass":"⚪",
               "DataError":"⬛",
               "DataPass":"⬜",
               "Exception":"❎",
               "TaskStart":"▶",
               "TaskPass":"✚",
               "TaskError":"▷"
           };
           var typeChar=typeChars[type!=null?type:"TaskPass"];
           F.write(FILE_LOG,(new Date()).getHours()+":"+(new Date()).getMonth()+":"+(new Date()).getSeconds()+":"+typeChar+" "+str+"\n",true,2);
           return this;
       };
       //const print=toast;
       const C={
           CHARSET:[
               "UTF-8",
               "UTF-16"
           ],
           createChar:function(code,charset){
               return String.fromCharCode(code);
           }
       }
       const D={
           set:function(name,data,path){
               path=path!=null?path:FILE_SET;
               if(!F.exist(path)){
                   F.write(path,"{}");
               }//
               var obj=JSON.parse(F.read(path));
               //print(F.read(path));
               obj[name]=data;
               //print(JSON.stringify(obj,null,4));
               F.write(path,""+JSON.stringify(obj,null,4))
                   
                   
               return data;
           },
           get:function(name,errValue,path){
               path=path!=null?path:FILE_SET;
               var obj=JSON.parse(F.read(path));
               temp=obj[name];
               
               return temp!=null?temp:errValue;
           },
           mset:function(name,value){
               DATA[name]=value;
           },
           mget:function(name,back){
               return DATA[name]!=null?DATA[name]:back;
           },
           b64d:function(b64){
               return _Base64.decode(b64,0);
           },
           b64e:function(byteArray){
               return new _String(_Base64.encode(byteArray,0));
               
           },
           setdb:function(id,data,table){
               var T=table?table:"main"
               var P=DIC_DATABASE+"/"+T+".json";
               return this.set(id,data,P);
           },
           getdb:function(id,data,table){
               var T=table?table:"main"
               var P=DIC_DATABASE+"/"+T+".json";
               return this.get(id,data,P);
           }
       };
       const F={
           exist:function(path){
               var f=new _File(path);
               return f.exists();
           },
           isFile:function(path){
               var f=new _File(path);
               return f.isFile();
           },
           read:function(path){
               try{
                   var str="";
                   var file=new _File(path);
                   var reader =  new  _FileReader(file);
                   var buffer =  _Array.newInstance(_Character.TYPE,file.length());
                   var  charread =  0;
                   reader.read(buffer)
                   str=(new _String(buffer)).toString();
                   reader.close();
                   return str;
               }catch(e){
                   return "";
               }
           },
           readbin:function(path){
               try{
                   var bin;
                   
                   var file=new _File(path);
                   file.setReadable(true);
                   var reader =  new  _FileInputStream(file);
                   var buffer =  _Array.newInstance(_Byte.TYPE,file.length());
                   var  charread =  0;
                   reader.read(buffer)
                   bin=buffer;
                   reader.close();
                   return bin;
               }catch(e){
                   Log(e)
                   return null;
               }
           },
           write:function(url,str,bl){
               try{
                F.createFile(url);
                var th=new _FileWriter(url,Boolean(bl));
                var strb=new _String(str);
                //print(url+"#"+str)
                th.write(strb,0,strb.length());
                th.close();
                return true;
               }catch(e){
                return e.toString();
               }
            },
            createFile:function(url){
                var f=new _File(url);
                f.getParentFile().mkdirs();
                f.createNewFile();
            },
            inputTo:function(is,tpath,bufsize,progressCallBack){
               try{
                   F.createFile(tpath);
                   var os=new _FileOutputStream(tpath);
                   var buffer=new _Array.newInstance(_Byte.TYPE,bufsize?bufsize:64);
                   var m=0;
                   while((m=is.read(bufsize?bufsize:64))!=-1){
                       os.write(bs,0,m);
                       if(!!progressCallBack){
                           progressCallBack(is.getChannel().size(),os.getChannel().size());
                       }
                   };
                   return os;
                }catch(err){return err}
            }
       };
       const N={
           url:function(url){
               return new _URL(url);
           },
           connect:function(url,btime){
               if(url!=null){
                   url=(typeof url)!="string"?url:new _URL(url);
                   var con=url.openConnection();
                   con.setConnectTimeout(btime?btime:1 * 1000); 
                   return con;
               }else{
                   return null;
               }
           },
           download:function(con,tpath,bufsize,progressCallBack){
               try{
                   var is=con.getInputStream();
                   F.createFile(tpath);
                   var os=new _FileOutputStream(tpath);
                   var buffer=new _Array.newInstance(_Byte.TYPE,bufsize?bufsize:4096);
                   var m=0;
                   while((m=is.read(bufsize?bufsize:4096))!=-1){
                       os.write(bs,0,m);
                       if(!!progressCallBack){
                           progressCallBack(con.getContentLength(),os.getChannel().size());
                       }
                   };
                   return os;
               }catch(err){return err}
           }
       };
       const P={
           include:function(name,code){
               D.mset(name,code);
               eval(code);
           }
       };
       const R={
           Thread:function(func){
               var th=new _Thread(new _Runnable(func));
               th.start();
               return th;
           },
           UiThread:UI,
           Try:function(func){
               try{
                   func();
               }catch(err){Log(err.toString())}
           }
       }
       const S={
           WebView:function(loadedCallBack,downloadListener,webviewClient,chromeClient,jsEnable){
               var mWebView;
               UI(()=>{
                   mWebView=new _WebView(ctx);
                   var settings = mWebView.getSettings();
                   settings.setJavaScriptEnabled(!!jsEnable);
                   downloadListener!=null?mWebView.setDownloadListener(downloadListener):null;
                   mWebView.setWebViewClient(webviewClient?webviewClient:new _WebViewClient());
                   mWebView.setWebChromeClient(chromeClient?chromeClient:new _WebChromeClient());
                   loadedCallBack(mWebView,settings);
               });
               return mWebView;
           },
           EditText:function(hint,str,size,color,bg){
               var mEditText=new _EditText(ctx);
               UI(()=>{
                   mEditText.setHint(hint+"");
                   mEditText.setText(str+"");
                   mEditText.setTextSize(size?size:16);
                   if(color!=null)mEditText.setTextColor(color);
                   if(bg!=null)mEditText.setBackground(bg);
               });
               return mEditText;
           },
           TextView:function(str,size,color,bg){
               var mTextView=new _TextView(ctx);
               UI(()=>{
                   mTextView.setText(str+"");
                   mTextView.setTextSize(size?size:16);
                   if(color!=null)mTextView.setTextColor(color);
                   if(bg!=null)mTextView.setBackground(bg);
               });
               return mTextView;
           },
           Button:function(str,size,color,bg){
               var mButton=new _Button(ctx);
               UI(()=>{
                   mButton.setText(str+"");
                   mButton.setTextSize(size?size:16);
                   if(color!=null)mButton.setTextColor(color);
                   if(bg!=null)mButton.setBackground(bg);
               });
               return mButton;
           },
           ScrollView:function(views){
               var mScrollView=new _ScrollView(ctx);
               UI(()=>{
                   views.forEach((view)=>mScrollView.addView(view));
               });
               return mScrollView;
           },
           HorizontalScrollView:function(views){
               var mHScrollView=new _HorizontalScrollView(ctx);
               UI(()=>{
                   views.forEach((view)=>mHScrollView.addView(view));
               });
               return mHScrollView;
           },
           LinearLayout:function(views,ori,bg){
               var mLinearLayout=new _LinearLayout(ctx);
               UI(()=>{
                   views.forEach((view)=>mLinearLayout.addView(view));
                   mLinearLayout.setOrientation(ori!=null?ori:1);
                   if(bg!=null)mLinearLayout.setBackground(bg);
               });
               return mLinearLayout;
           },
           PopupWindow:function(view,w,h,g,x,y,bg){
               var mPopupWindow=new _PopupWindow(w!=null?w:_LayoutParam.WRAP_CONTENT,h!=null?h:_LayoutParam.WRAP_CONTENT);
               UI(()=>{
                   mPopupWindow.setContentView(view);
                   mPopupWindow.setBackgroundDrawable(bg!=null?bg:new _ColorDrawable(_Color.TRANSPARENT));
                   mPopupWindow.showAtLocation(ctx.getWindow().getDecorView(), g!=null?g:_Gravity.CENTER, x!=null?x:0, y!=null?y:0);
               });
               return mPopupWindow;
           },
           Dialog:function(view,title,fullScreen,butN,but0,but1,but2){
               var mDialog=new _AlertDialog.Builder(ctx);
               UI(()=>{
                   mDialog.setTitle(title?title:"");
                   if(view)mDialog.setView(view);
                   if(but0)mDialog.setNegativeButton(butN[0]+"",_DialogInterface.OnClickListener(but0));
                   if(but1)mDialog.setNeutralButton(butN[1]+"",_DialogInterface.OnClickListener(but1));
	                  	if(but2)mDialog.setPositiveButton(butN[2]+"",_DialogInterface.OnClickListener(but2));
	                  mDialog=mDialog.show();
	                  	if(fullScreen){
	                  	     var para=mDialog.getWindow().getAttributes();
                        para.height = DATA.Height;
                        para.width = DATA.Width;
                        mDialog.getWindow().setAttributes(para);
	                  	}
                   
               });
               return mDialog;
           }
       }
       const V={
           createAtCtx:function(name,octx,value){
               octx[name]=value;
           },
           set:function(name,value){
               rctx[name]=value;
           },
           get:function(name){
               return rctx[name];
           },
           source:function(value){
               var type=typeof value;
               if(type=="object"||type=="string"||type=="array")
               return value.toSource();
           }
       }
    values:{
        const DIC_EXSD=_Environment.getExternalStorageDirectory();
        const DIC_DATA=DIC_EXSD+"/."+BUILD.name;
        const DIC_USER=DIC_EXSD+"/"+BUILD.name;
        const DIC_DATABASE=DIC_DATA+"/Database";
        const FILE_EXE=DIC_DATA+"/Exec/exes.txt";
        const FILE_SET=DIC_DATA+"/Setting/settings.txt";
        const FILE_LOG=DIC_DATA+"/Log/log.txt";
    }
    }catch(e){
        Log("frameworkError-"+e.toString(),"Error");
    }
}