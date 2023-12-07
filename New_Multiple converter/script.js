
//Global Variable



window.onload = function(){
    main()
}

 function main(){
    const options = {
        length:{
            name : "Length"
            },

        time:{
            name: "Time"
            },

        weight: {
            name: "Weight"
            },

        dataTransferRate:{
            name: "Data Transfer Rate"
            }
    }
       
    
    let selectCategoryFirst = document.getElementById('category-select');


    addOptions(selectCategoryFirst, options);
       
    }


  
    // function addOptions(parent, option){
    //     let optionsNameArr = Object.values(option);
    //     let optionsValueArr = Object.keys(option);

    //     for(let optionName of optionsNameArr){
    //         let createOptionDomElement = document.createElement('option');
    //         createOptionDomElement.innerHTML = optionName.name;
    //         parent.appendChild(createOptionDomElement)
    //         }
    //         //createOptionDomElement.setAttribute('values', Object.keys(option))  
          
    //     }
    
   

    function addOptions(parent, option){
        let optionsNameArr = Object.values(option);
        let optionsValueArr = Object.keys(option);

        optionsNameArr.map(value, index, arr){
            console.log(value);
            
        }
          
        }



 