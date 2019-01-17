var snapshot={
    pngpath:"",
    set_img:async function () {
        var me = snapshot;
        me.pngpath=window.sessionStorage.getItem('pngpath');
        $('#target').attr("src",me.pngpath);
    }
}