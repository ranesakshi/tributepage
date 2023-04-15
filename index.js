
let screen = document.getElementById('screen');

let buttons = document.querySelectorAll('button');

let screenValue ='';

for(item of buttons){
    item.addEventListener('click',(e)=>{
        butonText = e.target.innerText;
        console.log('button text is', butonText);
        if(butonText=='X'){
            butonText ='*';
            screenValue += butonText;
            screen.value = screenValue;

        }
        else if (butonText =='C'){
            screenValue = "";
            screen.value = screenValue;

        }
        else if (butonText =='='){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += butonText;
            screen.value = screenValue;


        }

    })
}


