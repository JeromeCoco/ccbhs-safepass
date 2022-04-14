var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { 
        fps: 10, 
        qrbox: 250,
        disableFlip: true,
    }
);
        
function onScanSuccess(decodedText, decodedResult) {
    alert(`Scan result: ${decodedText}`, decodedResult);

    var array_scanned = decodedResult.split(","),
        name = array_scanned[0],
        grade = array_scanned[1],
        section = array_scanned[2];

    $.ajax({
        type : 'get',
        url : 'https://regardable-passivat.000webhostapp.com/logbook.php', 
        data: {name, grade, section}, 
        success:function(data) {     
            alert(data);
        },
        error: function(xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });
}

function onScanError(errorMessage) {
    // handle on error condition, with error message
}


html5QrcodeScanner.render(onScanSuccess, onScanError);