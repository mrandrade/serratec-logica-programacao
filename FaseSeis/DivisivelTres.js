for (var i = 0; i < 10; i++){
    console.log("i: " + i);
    for (var j = 0; j < 10; j++){
        var mult = i * j;
        console.log("mult: " + mult);

        if (mult % 3 == 0) {
            break;
        }
    }
    console.log("fim do i " + i);
}