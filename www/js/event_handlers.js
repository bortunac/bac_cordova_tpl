event_handlers = {
    scanQR: () => {
        var scanning = true;
        // totul se memoreaza {user:email,host:ne.myadr.ro,port:8888,token:'12A45t'} in LocalStorage  // recuperare obtinere token ????? --  SMS pe un NR asociat mail + CNP
        cordova.plugins.barcodeScanner.scan(
            function (result) {
                scanning = false;
                if (result.cancelled === false) {
                    alert(atob(result.text));

                } else {
                    console.log("canceled");
                }
            },
            function (error) {
                scanning = false;
                alert("Scanning failed: " + error);
            }, {
            _preferFrontCamera: true,
            _showFlipCameraButton: true,
            _showTorchButton: true,
            torchOn: false,
            saveHistory: true,
            prompt: "Place a barcode inside the scan area",
            resultDisplayDuration: 500,
            formats: "QR_CODE,PDF_417",
            _orientation: "landscape",
            _disableAnimations: true,
            disableSuccessBeep: false,
            AbortController: true
        }
        );
    }
}