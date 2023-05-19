function rounding(num, decPlaces) {
    
    if(decPlaces > 15) {
        decPlaces = 15;
    }

    let result = parseFloat(num.toFixed(decPlaces));
    console.log(result);
}

rounding(10.5, 3)