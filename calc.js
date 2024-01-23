

let bg_input = document.getElementById('bg_input')
let sm_input = document.getElementById('sm_input')
let shouldClear = false
let first_value,operator=''
let isequal= false


function btn(number) {
    //    let bg_input= document.getElementById('bg_input')
    if (shouldClear == true) {
        bg_input.innerHTML = ''
        shouldClear = false
    }
    bg_input.innerHTML += number;
    
}

function copyto(opr) {
    // let sm_input= document.getElementById('sm_input')
    
    if (operator) {
    equals()
    
   }
   
    sm_input.innerHTML = bg_input.innerHTML + opr;
    shouldClear = true
    operator=opr
    first_value=bg_input.innerHTML
  
 
   
           

}

function equals(){
    sm_input.innerHTML= first_value+operator+bg_input.innerHTML 
    
       
    if (operator=='-') {

       bg_input.innerHTML= Number(first_value)-Number(bg_input.innerHTML) 
       
       
    }
    if (operator=='+') {
        bg_input.innerHTML=Number(first_value)+Number(bg_input.innerHTML )
    }
    if (operator=='x') {
        bg_input.innerHTML=Number(first_value)*Number(bg_input.innerHTML )
    }
    if (operator=='/') {
        bg_input.innerHTML=Number(first_value)/Number(bg_input.innerHTML )
        
    }
   
   
}

function powerr(){
    bg_input.innerHTML=Number(bg_input.innerHTML)**2
}
function divideByOne(){
    bg_input.innerHTML= 1/Number(bg_input.innerHTML)
}

function squaree(){
    bg_input.innerHTML= Math.sqrt(Number(bg_input.innerHTML))
}

function clearit() {
    bg_input.innerHTML = '';
    sm_input.innerHTML = '';
    operator='';
}
function ce() {
    bg_input.innerHTML = '';
    operator='';
}


function deletee(){
  bg_input.innerHTML= bg_input.innerHTML.slice(0, -1)

}


