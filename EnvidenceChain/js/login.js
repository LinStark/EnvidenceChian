var login =
    {
        data:{
            username:"",
            password:"",
        },
        login:function()
        {
            var me = login;
            me.data.username=document.getElementById('username').value;
            me.data.password=document.getElementById('password').value;
            var data = {
                username:me.data.username,
                password:me.data.password
            }
            var url = "http://10.41.46.184:3000/login"
            var json = JSON.stringify(data);
            $.ajax({
                type: 'POST',
                data: json,
                jsonp: 'callback',
                url: url,
                contentType: "application/json",
                dataType: 'json',
                timeout: 50000,
                success: function (flag) {
                   if(flag==true){
                       console.log('hello');
                       window.location.href='../user.html';
                   }
                   else{
                       window.location.href='../user.html';
                   }
                },
            })
        }

    }