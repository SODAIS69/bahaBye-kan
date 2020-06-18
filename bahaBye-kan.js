// ==UserScript==
// @name         bahaBye-kan - 巴哈掰簡
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  💡過濾巴哈姆特動畫瘋簡體字彈幕用腳本⚾
// @author       sodais69
// @match        https://ani.gamer.com.tw/animeVideo.php*
// @grant        GM_log
// @require      https://greasyfork.org/scripts/405629-simplist/code/simpList.js?version=817690
// ==/UserScript==

window.addEventListener('load', function() {
    GM_log('hello world');

   var self  = animefun;
  while(self.danmuLoaded!=true){
  GM_log('waiting');
    }
  var danmu=self.danmu;


  GM_log('subs length:'+danmu.length);
for(var i=0;i<danmu.length;i++){
  var innersub=danmu[i]['text'];

    //GM_log('i='+i+':'+innersub);

    Object.keys(TongWen_st).every(key=>{
       var searchResult=innersub.indexOf(key);
      if(searchResult!=-1){
          GM_log('Simplified Chinese found! content:'+innersub+" Bingo one:"+innersub.substr(searchResult,1));

        return false;
      }else{
        return true;
      }
  });
}
}, false);
