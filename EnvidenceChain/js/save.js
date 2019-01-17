
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
        var token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDc3Mjc1NjAsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1NDc2OTE1NjB9.bh0P7O3g2cvmJlVY_XUs06Wl3KTWq-OXc98hKkfk_d4";
        var aToken = "Bearer "+token;
        me.data.userid = document.getElementById('userid').value;
        me.data.enviname = document.getElementById('enviname').value;
        me.data.url = document.getElementById('url').value;
        me.data.description = document.getElementById('description').value;
        me.data.time = new Date();
        me.data.username = 'lin';
        me.data.path = 'png/' + me.data.userid + '.png';
        var port='http://10.41.46.184:4000/setpng';
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
                // console.log(aCallbackData.responseText);
                // console.log(aCallbackData);
                var path = 'png/'+aCallbackData.responseText;
                var pngpath = '../../img/png/'+ aCallbackData.responseText;
                console.log(pngpath);
                window.sessionStorage.setItem('pngpath',pngpath);
                window.sessionStorage.setItem('path',path);
                window.sessionStorage.setItem('username',me.data.username);
                window.location.href='snapshot.html';
            }
        });
    }

}