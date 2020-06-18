// ==UserScript==
// @name         bahaBye-kan
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://ani.gamer.com.tw/animeVideo.php*
// @grant        none
// @require      https://greasyfork.org/scripts/405629-simplist/code/simpList.js?version=817690
// ==/UserScript==



var subs=document.getElementsByClassName('sub_content');
for(var i=0;i<subs<subs.length;i++){
    var innersub=subs[i].innerHTML;
    
    TongWen_st.forEach(function(key){
        if(innersub.indexOf(key)!=-1){
            innersub.empty();
        }
    });
}