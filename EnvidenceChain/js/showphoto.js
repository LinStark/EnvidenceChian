var showphoto={
    up_load:function (obj,flag) {
        var file = obj.files[0];
        console.log(obj);console.log(file);
        console.log("file.size = " + file.size);
        var reader = new FileReader();
        reader.onloadstart = function (e) {
            console.log("开始读取....");
        }
        reader.onprogress = function (e) {
            console.log("正在读取中....");
        }
        reader.onabort = function (e) {
            console.log("中断读取....");
        }
        reader.onerror = function (e) {
            console.log("读取异常....");
        }
        reader.onload = function (e) {
            console.log("成功读取....");
            if(flag ==0)
            {
                var img = document.getElementById("front1");
            }
            else if(flag==1)
            {
                var img = document.getElementById("back1");
            }
            else if(flag==2)
            {
                var img = document.getElementById("take1");
            }
            img.src = this.result;
            //或者 img.src = this.result;  //e.target == this
        }
        reader.readAsDataURL(file);
    }
}