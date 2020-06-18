import(simpList.js);
var subs=document.getElementsByClassName('sub_content');
for(var i=0;i<subs<subs.length;i++){
    var innersub=subs[i].innerHTML;
    
    TongWen_st.forEach(function(key){
        if(innersub.indexOf(key)!=-1){
            innersub.empty();
        }
    });
}