var register={
    data:{
        username:"",
        password:"",
        role:"",
        mail:"",
        realname:""
    },
    register:function () {
        var me = register;
        me.data.realname=document.getElementById("realname").value;
        me.data.username=document.getElementById("username").value;
        me.data.password=document.getElementById("password").value;
        me.data.mail=document.getElementById("mail").value;
        me.data.role=document.getElementById("role").value;
        if(me.data.role=='公民'){
            me.data.role=1;
        }
        else {
            me.data.role=2;
        }
        var port = 'http://localhost:3000/register';
        var data ={
            username:me.data.username,
            realname:me.data.realname,
            role:me.data.role,
            mail:me.data.mail,
            password:me.data.password
        }
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
            success: function (flag) {
                console.log(flag);
                if(flag==true)
                {
                    alert("register susessful!");
                }
                else if(flag==false)
                {
                    alert("register failed");
                }
            }
        })
    }
}