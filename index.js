function convertAllToHex(){
    let input = document.getElementById('rgbValue').value;
    let rgb = input.split(/,+/);

    if(rgb.length != 3 || checkValue(rgb[0]) || checkValue(rgb[1]) || checkValue(rgb[2])){
        document.getElementById('result').innerText = "Invalid value";
        return null;
    }
    let string = '#' + convertOneToHex(rgb[0]) + convertOneToHex(rgb[1]) + convertOneToHex(rgb[2]);
    document.getElementById('result').innerText = string;
}

function convertOneToHex(x){
    x = parseInt(x);
    let hex = x.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function checkValue(x){
    x = parseInt(x);
    return(x > 255 || x < 0);
}