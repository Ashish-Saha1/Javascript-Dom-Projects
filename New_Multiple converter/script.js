
//Global Variable



window.onload = function(){
    main()
}

 function main(){
    let converter = {
        length:{
            name : "Length",
            units:  {
                kilometer:{ name: "Kilometer"},
                meter: {name: "Meter"},
                centimeter: {name: "Centimeter"},
                millimeter: {name: "Millimeter"},
                micrometer: {name: "Micrometer"},
                nenometer: {name: "Nenometer"},
                mile: {name: "Mile"},
                yard: {name: "Yard"},
                foot: {name: "Foot"},
                inch: {name: "Inch"},
                nauticalMile: {name: "NauticalMile"}
            }

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

    // const area = {
    //     squareKilometer:{ name: "Square Kilometer"},
    //     squareMeter: {name: "Square Meter"},
    //     squareMile: {name: "Square Mile"},
    //     squareyard: {name: "Square Yard"},
    //     squareFoot: {name: "Square Foot"},
    //     hectare: {name: "Hectare"},
    //     acre: {name: "Acre"}
    // }

   

  
    
    let selectCategoryFirst = document.getElementById('category-select');
        deletePreviousOptionsFromHtml(selectCategoryFirst)
       
    let converterKeys = Object.keys(converter).sort();  
        converterKeys.forEach(item=>{
                //below function call like an object because option.text is like an object
            addOptions(selectCategoryFirst, {value: item, text: converter[item].name});
            
        })




      let subOptionsLeftInput = document.getElementById('left-input_select')
        console.log(converter.length.units)
        console.log(Object.values(converter.length.units))



        parent.addEventListener('change', function(event){
  
            if(event.target.value === "length"){
                lengthKeys.forEach(item=>{
                addOptions(subOptionsLeftInput, {value: item, text: length[item].name});
                
            })
            }
            
            
            
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

            createOptionDomElement.setAttribute('value', option.value)
            parent.appendChild(createOptionDomElement)
          
        }


    function deletePreviousOptionsFromHtml(parent){
        let child = parent.lastElementChild;
   
       while(child){
            parent.removeChild(child);
            child =parent.lastElementChild;
       }

    }
       

    
