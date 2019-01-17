var showdata = {
    getdata: function (acallback) {
        var username = window.sessionStorage.getItem('username');
        var data={
            username:username
        }
        var json = JSON.stringify(data);
        var port='http://10.41.46.184:3000/getdata';
        var data1 = document.getElementById('tables');
        console.log(data1);
        $.ajax({
            url: port,
            type: 'POST',
            data: json,
            timeout: 50000,
            dataType: "json",
            jsonp: 'callback',
            contentType: "application/json",
            success:function (callbackdata) {
                console.log(callbackdata);
                for (var i = 0; i < callbackdata.length; i++) {
                    var trow = showdata.getDataRow(callbackdata[i]); //定义一个方法,返回tr数据
                    data1.appendChild(trow);
                }
            }
        })



        // var socket1 = io.connect('http://10.41.46.184:3000');
        // socket1.on('message', function(data) {
        //     console.log(data.text);
        // });
        // var user = window.sessionStorage.getItem('userinfo');
        // var user = JSON.parse(user);
        // socket1.emit('senddata',{
        //     username:user.username});
        // socket1.on('send',function (data2) {
        //         console.log(data2)
        //         var result = data2.data;
        //         var data = document.getElementById('tables');
        //         var length = result.length;
        //         console.log(length);
        //         for (var i = 0; i < length; i++) {
        //             var trow = showdata.getDataRow(result[i]); //定义一个方法,返回tr数据
        //             data.appendChild(trow);
        //         }
        //     }
        // )

    },
    getDataRow: function (h) {
        console.log(h);
        var row = document.createElement('tr'); //创建行
        var idCell = document.createElement('td'); //创建第一列id
        idCell.innerHTML = h.userid; //填充数据
        row.appendChild(idCell); //加入行  ，下面类似

        var useridCell = document.createElement('td');//创建第二列url
        useridCell.innerHTML = h.url;
        row.appendChild(useridCell);

        var DesCell = document.createElement('td');//创建第三列job
        DesCell.innerHTML = h.time;
        row.appendChild(DesCell);

        var urlCell = document.createElement('td');//创建第三列job
        urlCell.innerHTML = h.description;
        row.appendChild(urlCell);

        // var pathCell = document.createElement('td');//创建第三列job
        // pathCell.innerHTML = h.path;
        // row.appendChild(pathCell);

        //到这里，json中的数据已经添加到表格中，下面为每行末尾添加删除按钮

        var showCell = document.createElement('td');//创建第四列，操作列
        row.appendChild(showCell);
        var btnDel = document.createElement('input'); //创建一个input控件
        btnDel.setAttribute('type', 'button'); //type="button"
        btnDel.setAttribute('value', '显示证据');

        //显示操作
        btnDel.onclick = function () {
            var photo = document.getElementById('photo');
            $(photo).html('');
            $(photo).html('<img style="width:100%;" src="../../../'+h.path+'">');
            $('#myModal').modal('show');
        }
        showCell.appendChild(btnDel);  //把删除按钮加入td，别忘了
        return row; //返回tr数据
    }
}