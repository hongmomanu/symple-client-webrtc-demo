/**
 * Created by jack on 7/5/15.
 */
var autoconnect={
    getUrlParam:function(key){
        var url = location.search; //获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for(var i = 0; i < strs.length; i ++) {
                theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
            }
        }
        return theRequest[key];
    }


}

$(document).ready(function() {

    setTimeout(init,500);
    var handler=getHandleFromURL();
    var from=autoconnect.getUrlParam("from")
    function init(){
        //console.log(1111111111111);

        var elemets=angular.element('b[class=ng-binding]');

        //console.log(elemets.length);

        if(elemets.length>=2){
            for(var i=0;i<elemets.length;i++){
                if($(elemets[i]).html()==("@"+from)){
                    angular.element('.videochat'+from).triggerHandler('click');
                }

            }


        }


        console.log(2222222222222);

    }
    //console.log(getHandleFromURL());

    //angular.element('.videochatxim').triggerHandler('click');
    //alert(autoconnect.getUrlParam("name"));
    //$('input')[0].value=autoconnect.getUrlParam("name");
    //$('form')[0].value=autoconnect.getUrlParam("name");


});