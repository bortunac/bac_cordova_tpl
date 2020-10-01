// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope

(function () {


    /* ---------------------------------- Local Variables ---------------------------------- */



    /* --------------------------------- Event Registration -------------------------------- */

    $("#btn1").on("click", (ev) => {
        Q("#head1").css("color:" + random_rgba());
        ev.target.tmpA("disabled", 500);
    })

    document.addEventListener('deviceready', function () {
        console.log("---------DEVICE READY " + cordova.platformId + " --------------");


        Q("#head1").css("color:" + random_rgba());
        Q("#btn2").on("click", (ev) => event_handlers.scanQR(), false)

        ////



    }, false);

    /*-------------------------------------Imediate Functions ------------------------ */
    function random_rgba() {
        var o = Math.round,
            r = Math.random,
            s = 255;
        return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
    }

    FastClick.attach(document.body);


}());