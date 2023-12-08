
//Global Variable



window.onload = function(){
    main()
}

 function main(){
    let converter = {
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
            },

        area: {
            name: 'Area'
        },

        speed: {
            name: "Speed"
        }

    }

  
    
    let selectCategoryFirst = document.getElementById('category-select');

    deletePreviousOptionsFromHtml(selectCategoryFirst)
       

    // addOptions(selectCategoryFirst, converter);

        let converterKeys = Object.keys(converter).sort();
        
        converterKeys.forEach(item=>{
                //below function call like an object because option.text is like an object
            addOptions(selectCategoryFirst, {value: item, text: converter[item].name});
            
        })



        
    }


   
/**
 * 1st obj is a parent div element
 * 2nd obj is a option element of select category
 * @param {object} parent 
 * @param {object} option 
 * function descripption -
 * The function is to add an option element dynamically into a select element
 * option parameter is call like an object such as option.text
 */
    function addOptions(parent, option){
           
        let createOptionDomElement = document.createElement('option');
            createOptionDomElement.innerText = option.text;

            createOptionDomElement.setAttribute('values', option.value)
            parent.appendChild(createOptionDomElement)
          
        }



    function deletePreviousOptionsFromHtml(parent){
        let child = parent.lastElementChild;
   
       while(child){
            parent.removeChild(child);
            child =parent.lastElementChild;
       }

    }
       