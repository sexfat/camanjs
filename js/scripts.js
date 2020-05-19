$(function () {


    function refreash() {
        var hux = $('#hux').slider("value"),
            contrast = $('#contrast').slider("value"),
            brightness = $('#brightness').slider("value"),
            scale = $('#scale').slider("value");
            Caman('#stamp', function () {
                this.revert(false);
                this.hue(hux)
                this.brightness(brightness);
                this.contrast(contrast);
                this.render();
            })
            $('#stamp').css('width' , scale +100 +'%');
    }
    $('#hux ,#contrast , #brightness , #exposure , #scale').slider({
        range: "min",
        min: -100,
        slide: refreash,
        change: refreash
    });



})