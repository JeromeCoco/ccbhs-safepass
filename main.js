var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { 
        fps: 10, 
        qrbox: 250,
        disableFlip: true,
    }
);
        
function onScanSuccess(decodedText, decodedResult) {
    // Handle on success condition with the decoded text or result.
    alert(`Scan result: ${decodedText}`, decodedResult);
}

function onScanError(errorMessage) {
    // handle on error condition, with error message
}


html5QrcodeScanner.render(onScanSuccess, onScanError);