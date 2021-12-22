function arraymax(){
    numbers=[3,5,7,6];
    numbers.sort(function(x,y){
        return y-x;
    });
    console.log("The greatest number is " + numbers[0]);
}

arraymax();