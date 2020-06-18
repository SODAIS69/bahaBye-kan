// ==UserScript==
// @name         bahaBye-kan - 巴哈8簡
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  💡過濾巴哈姆特動畫瘋簡體字彈幕用腳本⚾
// @author       sodais69
// @match        https://ani.gamer.com.tw/animeVideo.php*
// @grant        GM_log
// @require      https://greasyfork.org/scripts/405629-simplist/code/simpList.js?version=817690
// ==/UserScript==

//個人化設定

    //簡體字留言的處理方式
    /*
    如果修改 filterStyle 後面的數字成
        1   文字會改成「根據相關法律該留言已經被隱藏了。」
        2   文字會被消失
    */
    var filterStyle=1;




    var  filterStr=' ';
    if(filterStyle==1){
        filterStr='「⚠️根據相關法律該留言已經被隱藏了。⚠️」';
    }else{
        filterStr=' ';
    }
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
          GM_log('Simplified Chinese found! content:'+innersub+" Bingo word:"+innersub.substr(searchResult,1));
          danmu[i]['text']=filterStr;
        return false;
      }else{
        return true;
      }
  });
}
}, false);
