

function fibbonacci(num){
    if(num == 1){
        return 0;
    }
    else if(num ==2){
        return 1;
    }
    else{
        return fibbonacci(num-1)+fibbonacci(num-2);
    }
}

console.log(fibbonacci(7));