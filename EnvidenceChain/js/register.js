var register={
    data:{
        username:"",
        password:"",
        role:"",
        mail:"",
    },
    register:function () {
        var me = register;

        me.data.username=document.getElementById("username").value;
        me.data.password=document.getElementById("password").value;
        me.data.mail=document.getElementById("mail").value;
        me.data.role=document.getElementById("role").value;
        me.data.role=1;

        var data =me.data;
        var json = JSON.stringify(data);
        console.log(json;
    }
}