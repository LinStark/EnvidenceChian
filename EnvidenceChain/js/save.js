
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
        var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDc2NjcwOTQsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1NDc2MzEwOTR9.ECQDM59WaS4LN_hKKutrZqHuBINyIqehti4ijbpYgB4";
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
                var path = 'png/'+me.data.userid+'.png';
                var pngpath = '../../img/png/'+ me.data.userid +'.png';
                console.log(pngpath);
                window.sessionStorage.setItem('pngpath',pngpath);
                window.sessionStorage.setItem('path',path);
                window.location.href='snapshot.html';
            }
        });
    }

}