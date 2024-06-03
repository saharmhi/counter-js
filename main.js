const increment = document.getElementById('increment');
const reset = document.getElementById('reset');
const decrement = document.getElementById('decrement');
const resualt = document.getElementById('resualt')
let count = 0;

increment.addEventListener('click',function(){
    count+=1;
    resualt.textContent = count;
    if(count>0){
        resualt.style.color = "green";
    }if(count==0){
        resualt.style.color = "black";
    }
})

decrement.addEventListener('click',function(){
    count-=1;
    resualt.textContent = count;
    if(count<0){
        resualt.style.color = "red"
    }if(count==0){
        resualt.style.color = "black";
    }
})

reset.addEventListener('click',function(){
    count = 0;
    resualt.textContent = count;
    resualt.style.color= "black";
})