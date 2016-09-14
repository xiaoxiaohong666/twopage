/**
 * Created by qi on 2016/8/30.
 */
function getParams(url) {
    // alert( url.indexOf('?')==-1);
    if(url === undefined || typeof(url) != 'string'|| url.indexOf('?')==-1){
        return true;
    }else{
        items = url.split('?')[1].split('&');
        var json = {};
        for(var i=0; i< items.length;i++) {
            var item = items[i].split('=');
            var jsonName=(item[1]);
            json[item[0]] = item[1];
        }
        return jsonName;
    }
}
var url=document.location.href;
var jsonname =  getParams(url);
//  console.log(jsonname);

$(document).ready(function(){
    if(jsonname=="Media"){
        menujsonMedia(1);
    }else if(jsonname=="Client"){
        menujsonClient(1);
    }else if(jsonname=="Run"){
        menujsonRun(1);
    }else if(jsonname==true){
        menujson(1);
    }
});