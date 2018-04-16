const rctx=this;
var MFW;
//print(true)
function main(){
    UI(()=>{
        MFW=new FloatWindow();
    },false);
    newLevel.p(()=>{
        Log("levelLoaded");
        UI(()=>{
            MFW.show();
            
        },false)
    });
    leaveGame.p(()=>{
        UI(()=>{
            MFW.dismiss();
        },false)
    });
}
function FloatWindow(){
    this.size=35;
    this.x=DATA.Width;
    this.y=50*dip;    
    this.layout = new _LinearLayout(ctx);
    this.layout.setOrientation(0);
    this.layout.setGravity(_Gravity.CENTER);
    this.text = new _TextView(ctx);
    //print(D.getdb("icon","error"))
    this.drawable=ba//D.b64d(D.getdb("icon","error"))//PL.a("icon/icon.png");
    this.text.setBackground(new _BitmapDrawable(_BitmapFactory.decodeByteArray(this.drawable,0,this.drawable.length)));
    this.text.setWidth(this.size*dip);
    this.text.setHeight(this.size*dip);
    this.layout.addView(this.text);
    this.mX=0;
    this.mY=0;
    this.pop = new _PopupWindow(this.layout,_ViewGroup.LayoutParams.WRAP_CONTENT, _ViewGroup.LayoutParams.WRAP_CONTENT);
    this.tpx = this.x;
    this.tpy = this.y;
    //this.pop.setFocusable(true);
    this.pop.setTouchable(true);
    this.text.setOnClickListener(new _View.OnClickListener((v)=>{
        return true;
    }));
    this.text.setOnTouchListener(new _View.OnTouchListener((v,e)=>{
          switch(e.getAction())
            {
              case 0:
                //mX = e.getRawX();
                
                this.mY = e.getRawY();
              break;
              case 1:
              break;
              case 2:
                //tpx += parseInt(e.getRawX() - mX);
                this.tpy += parseInt(e.getRawY() - this.mY);
                //mX = e.getRawX();
                this.mY = e.getRawY();
                this.pop.update(parseInt(this.tpx), parseInt(this.tpy), -1, -1);
              break;
              default:
              break;
            }
        return false;
    }));
    this.text.setOnLongClickListener(new _View.OnLongClickListener((v)=>{
        Log("LongClick")
        return true;
    }));
    this.show=function(){
        this.pop.showAtLocation(ctx.getWindow().getDecorView(), _Gravity.LEFT | _Gravity.TOP, this.tpx, this.tpy);
    }
    this.dismiss=function(){
        this.pop.dismiss();
    }
}
PowerLauncher:{  
    try{
        const ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        const dip = ctx.getResources().getDisplayMetrics().density;
        const BUILD={
        "name":"VoxelBrush",
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
               }//F.write(path,"{\"init\":1}");
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
               return _Base64.encode(byteArray,0);
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
           read:function(path,buf){
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
D.setdb("icon","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\nBoPBYCTy/5ZrHOIyPranAAAAAElFTkSuQmCC\n");



var callbacks={
  "leaveGame":[],
  "attackHook":["attacker"," victim"],
  "chatHook":["str"],
  "continueDestroyBlock":["x"," y"," z"," side"," progress"],
  "destroyBlock":["x"," y"," z"," side"],
  "projectileHitEntityHook":["projectile"," targetEntity"],
  "eatHook":["hearts"," saturationRatio"],
  "entityAddedHook":["entity"],
  "entityHurtHook":["attacker"," victim"," halfhearts"],
  "entityRemovedHook":["entity"],
  "explodeHook":["entity"," x"," y"," z"," power"," onFire"],
  "serverMessageReceiveHook":["str"],
  "deathHook":["attacker"," victim"],
  "playerAddExpHook":["player"," experienceAdded"],
  "playerExpLevelChangeHook":["player"," levelsAdded"],
  "redstoneUpdateHook":["x"," y"," z"," newCurrent"," someBooleanIDontKnow"," blockId"," blockData"],
  "screenChangeHook":["screenName"],
  "newLevel":[],
  "startDestroyBlock":["x"," y"," z"," side"],
  "projectileHitBlockHook":["projectile"," blockX"," blockY"," blockZ"," side"],
  "modTick":[],
  "useItem":["x"," y"," z"," itemid"," blockid"," side"," itemDamage"," blockDamage"]
}
var callbackStore={};
init:{
    for(var key in callbacks){
        callbackStore[key]=[];
        //rctx[key]=null;
        rctx[key]=new Function("var args=arguments;callbackStore[\""+key+"\"].forEach((value)=>{value.apply(null,args)})");
        rctx[key].p=new Function("func","callbackStore[\""+key+"\"].push(func)");
    }
};
main.call(this);//