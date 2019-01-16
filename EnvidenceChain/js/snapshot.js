var snapshot={
    pngpath:"",
    set_img:function () {
        var me = snapshot;
        me.pngpath=window.sessionStorage.getItem('path');
        console.log(me.pngpath);
    }
}