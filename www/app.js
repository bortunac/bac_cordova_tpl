// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope



(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    var A_VAR = "fufu";


    /* ---------------------------------  DEVICE_READY  ALL PLUGINS LOADED -------------------------------- */
    document.addEventListener('deviceready', function () {
        if (navigator.notification && cordova.platformId !== 'browser') {
            window.alert = function (message) {
                navigator.notification.alert(
                    message,    // message
                    null,       // callback
                    "APP_NAME", // title
                    'OK'        // buttonName
                );
            };
        }

      
       

        console.log("---------DEVICE READY " + cordova.platformId + " --------------");
    }, false);



    /*-------------------------------------Imediate Functions && EVENTS ------------------------ */

     // jquery
     $("#btn1").on("click", (ev) => {
        Q("#head1").css("color:" + random_rgba());
        ev.target.tmpA("disabled", 500);
    })
    // aha
    Q("#btn2").on("click", (ev) => event_handlers.scanQR(), false); 
    function random_rgba() {
        var o = Math.round,
            r = Math.random,
            s = 255;
        return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
    }

    FastClick.attach(document.body);
    

    /*----------dynamic module loading ---------------------------------------------*/
    import("./js/dyn_module.js").then(r => { r.foo() });
    (async function () {
        let M = await import("./js/dyn_module.js");
        M.foo();
    })();



}());