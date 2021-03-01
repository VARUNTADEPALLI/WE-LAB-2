let sumfun=()=>{
    let a=document.getElementById("number").value;
    let b=+a;
    if(isNaN(a)){
        alert("Not a number");
    }
    else{
        let sum=1;
        while(b!=1){
            sum=sum*b;
            b--;
        }
        document.getElementById("fact").value="The factorial of "+a+" is " +sum;
    }
}
sumfun();