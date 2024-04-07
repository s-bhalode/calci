let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let output = "";

let arr = Array.from(buttons);


arr.forEach(button => {
    button.addEventListener('click', (eventResponse) => {
        if(eventResponse.target.innerHTML == '='){
            output = eval(output);
            input.value = output;
        }else if(eventResponse.target.innerHTML == 'AC'){
            output = "";
            input.value = output;
        }else if(eventResponse.target.innerHTML == 'DEL'){
            output = output.substring(0, output.length-1);
            input.value = output;
        }else{
            output = output + eventResponse.target.innerHTML;
            input.value = output;
        }
    })
})