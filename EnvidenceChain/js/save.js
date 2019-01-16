
var save = {
    data:{
        url:"",
        enviname:"",
        username:"",
        time:"",
        description:"",
        userid:"",
        path:""
    },
    save_envidence:function () {
        var photo1 = document.getElementById('photo');
        $(photo1).html('');
        var me = save;
        var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDcyMjc5NzEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1NDcxOTE5NzF9.G7q00B2nh7-WMEh3CZbRRP4mTC4Y7kN3dRhB1biBIkw";
        var aToken = "Bearer "+token;
        me.data.userid = document.getElementById('userid').value;
        me.data.enviname = document.getElementById('enviname').value;
        me.data.url = document.getElementById('url').value;
        me.data.description = document.getElementById('description').value;
        me.data.time = new Date();
        me.data.username = 'lin';
        me.data.path = 'png/' + me.data.userid + '.png';
        var port='http://localhost:4000/setpng';
        var data = me.data;
        var json = JSON.stringify(data);
        console.log(json);
        $.ajax({
            url: port,
            type: 'POST',
            data: json,
            timeout: 50000,
            dataType: "json",
            jsonp: 'callback',
            contentType: "application/json",
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", aToken);
            },
            success: function (data2) {
                console.log(data2);
            },
            error: function (aCallbackData) {
                var aResult = {State: 0, Datas: aCallbackData.statusText};
                console.log(aCallbackData.responseText);
                var pngpath = '../../img/png/'+ me.data.userid +'.png';
                console.log(pngpath);
                window.sessionStorage.setItem('path',pngpath);
                var photo = document.getElementById('photo');
                $(photo).html('');
                console.log('i am here');
                $(photo).html('<img src="'+pngpath+'" style="width: 100%">');
                $('#modal-default').modal();
            }
        });
    }

}