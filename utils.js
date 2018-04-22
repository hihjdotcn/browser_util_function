/*- 前缀标识 Fn 为可调用的方法 -*/
/*- 前缀标识 Demo 为补充的案例 -*/


//Fn  1.侦听javascript文件加载完成的状态，加载完成后执行回调函数
function loadScript(jsFileUrl, callback){
    var script = document.createElement("script");
    script.type = "text/javascript";

    if(script.readyState){ //IE
        script.onreadystatechange = function(){
            if(script.readyState =="loaded" || script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    }else{ //other browser
        script.onload = function(){
            callback();
        };
    }
    script.src = jsFileUrl;
    document.getElementsByTagName("head")[0].appendChild(script);
}
//Demo 2.按顺序加载js文件
loadScript("file1.js",function(){
    loadScript("file2.js",function(){
        loadScript("file3.js",function(){
            alert('All files are loaded!');
        });
    });
});