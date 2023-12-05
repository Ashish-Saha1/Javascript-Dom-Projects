
//Global Variable

let counter = 0;

window.onload = function(){
    main()
}

 function main(){
   let resultShow = document.querySelector('.result-show');
   let incrementInput = document.getElementById('increment-input');
   let decrementInput = document.getElementById('decrement-input');
   let incrementBtn = document.querySelector('.increment-btn');
   let decrementBtn = document.querySelector('.decrement-btn');
       
    
    // incrementBtn.addEventListener('click', function(){       
    //     if(incrementInput.value === ""){
    //         alert('First input any number')
    //     }else{
    //         result.innerHTML = parseInt(incrementInput.value) + parseInt(result.innerHTML)
    //     }
        
    // })


    // decrementBtn.addEventListener('click', function(){       
    //     if(decrementInput.value === ""){
    //         alert('First input any number')
    //     }else{
    //         if(parseInt(result.innerHTML) - parseInt(decrementInput.value) < 0){
    //             result.innerHTML = 0;
    //         }else{
    //             result.innerHTML = parseInt(result.innerHTML) - parseInt(decrementInput.value)
    //         }
    //     }
        
    // })



    display(resultShow)

    incrementBtn.addEventListener('click', function(){
        let increment = parseInt(incrementInput.value);
        counter += increment;
        display(resultShow) 
        
    })



    decrementBtn.addEventListener('click', function(){
        let decrement = parseInt(decrementInput.value);
        counter -= decrement;
        display(resultShow) 
        
    })

    
 }




 function display(resultShow){
    let finaleResult = counter;
        if(counter < 10){           
            finaleResult = `0${counter}`          
        }
        resultShow.innerText = finaleResult;
    }

 