const auction=(a)=>{
    var basicprice = 10000
    var minute = 0
    do {
        minute++
        if(minute%4==0){
            basicprice+=Math.ceil(basicprice*0.10)  
        }else{
            basicprice+= Math.ceil(basicprice*0.20)
        }
        if(basicprice>=30000000){
            return `the items were sold`
        }  
    } while (minute<a);
    return basicprice
}
console.log(auction(2))
console.log(auction(50))
console.log(auction(49))