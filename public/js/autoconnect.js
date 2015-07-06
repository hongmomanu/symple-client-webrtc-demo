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
    },
    hideloading:function(){
        var e = $('#loading-call-modal');

        e.modal('hide');
    },
    rejectconnect:function(user){

        console.log("11111111");
        console.log(user);

        var url=CLIENT_OPTIONS.url;
        url=url.replace(/(:\d+)/g,":3001");
        url=url.replace("http","ws");
        var socket = new WebSocket(url);


        socket.onopen = function() {
            socket.send(JSON.stringify({
                type:"videoreject",
                userid:user
            }));
        };


        /*var app=parent.Globle_Variable.app;
        var mainController=app.getController('Main');
        mainController.*/
       /* var btn=autoconnect.parentobject.Ext.Viewport.down('#closechatwin');
        btn._handler();*/



    },

    showconnectingdialog:function(touser){

        var e = $('#loading-call-modal');
        e.find('.caller').text('@' + touser);

        e.modal('show');
    },
    makeconnect:function(touser){

        var elemets=angular.element('b[class=ng-binding]');

        //console.log(elemets.length);

        if(elemets.length>=2){
            for(var i=0;i<elemets.length;i++){


                if($(elemets[i]).html()==("@"+touser)){
                    angular.element('.videochat'+touser).triggerHandler('click');
                }

            }


        }

    }


}


$(document).ready(function() {

    //setTimeout(init,3000);
    var touser=autoconnect.getUrlParam("touser");
    //var from=autoconnect.getUrlParam("from");

    if(touser){
        autoconnect.showconnectingdialog(touser);
    }



});
