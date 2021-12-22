function arraydesc(){
    numbers=[5,5,7,1,6];
    numbers.sort(function(x,y){
        return y-x;
    })

    console.log("The lis of numberd sorted in descendig order is" + numbers);
}
    arraydesc();