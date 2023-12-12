
//Global Variable

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
        name: "Time",
        units:  {
            nanosecond:{ name: "Nanosecond"},
            microsecond: {name: "Microsecond"},
            millisecond: {name: "Millisecond"},
            second: {name: "Second"},
            minute: {name: "Minute"},
            hour: {name: "Hour"},
           
        }
        },

    mass: {
        name: "mass",
        units:  {
            tonne:{ name: "Tonne"},
            kilogram: {name: "Kilogram"},
            gram: {name: "Gram"},
            milligram: {name: "Milligram"},
            microgram: {name: "Microgram"},
            pound: {name: "Pound"},
            ounce: {name: "Ounce"},
           
        }
        },

    dataTransferRate:{
        name: "Data Transfer Rate",
        units:  {
            bitePerS:{ name: "Bit per second"},
            kilobitePerS: {name: "Kilobite per second"},
            megabitePerS: {name: "Megabyte per second"},
            gigabitePerS: {name: "Gigabyte per second"},
            terabitePerS: {name: "Terabyte per second"},
           
        }
        
        },

    area: {
        name: 'Area',
        units: {
            squareKilometer:{ name: "Square Kilometer"},
            squareMeter: {name: "Square Meter"},
            squareMile: {name: "Square Mile"},
            squareyard: {name: "Square Yard"},
            squareFoot: {name: "Square Foot"},
            hectare: {name: "Hectare"},
            acre: {name: "Acre"}
        }
    },

    speed: {
        name: "Speed",
        units: {
            milePerS:{ name: "Mile per hour"},
            footPerS: {name: "Foot per second"},
            meterePerS: {name: "Meter per second"},
            kilometerePerS: {name: "Kilometer per hour"},
            knot: {name: "Knot"},
     
        }
    }

}

    let leftPreviousValue = "";
    let rightPreviousValue = "";




window.onload = function(){
    main()
}



 function main(){
    

    
    let selectCategoryFirst = document.getElementById('category-select');
    let subOptionsRightInput = document.getElementById('right-input_select')
    let subOptionsLeftInput = document.getElementById('left-input_select')
   
    deletePreviousOptionsFromHtml(selectCategoryFirst)
       
    let converterKeys = Object.keys(converter).sort();  
        converterKeys.forEach(item=>{
                //below function call like an object because option.text is like an object
            addOptions(selectCategoryFirst, {value: item, text: converter[item].name});
            
        })

            //Set default caregorty  units
        updateCategoryChange(selectCategoryFirst,subOptionsLeftInput,subOptionsRightInput)

            //set otpions in left & right category while change main category
        selectCategoryFirst.addEventListener('change',function(){
            updateCategoryChange(selectCategoryFirst,subOptionsLeftInput,subOptionsRightInput)
            
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
       

    function updateCategoryChange(selectCategoryFirst,subOptionsLeftInput,subOptionsRightInput){
        let selectCategoryFirstValue = selectCategoryFirst.value;        
        let units = converter[selectCategoryFirstValue].units;
        let unitOptions =  Object.keys(units) ;

        deletePreviousOptionsFromHtml(subOptionsLeftInput);

        unitOptions.forEach(item=>{
        addOptions(subOptionsLeftInput, {value: item, text: units[item].name});
        })


        deletePreviousOptionsFromHtml(subOptionsRightInput);

        unitOptions.forEach(item=>{
        addOptions(subOptionsRightInput, {value: item, text: units[item].name});
        
       })
        //to change the order of subOptionsRightInput children 
        subOptionsRightInput.value = subOptionsRightInput[1].value;


        //Same work for below two line
        //subOptionsRightInput.value = subOptionsRightInput[1].value;
    //   subOptionsRightInput.getElementsByTagName('option')[1].selected = 'selected'
    
    
    
    

        leftPreviousValue = subOptionsLeftInput.value;
        rightPreviousValue = subOptionsRightInput.value;

          
        subOptionsLeftInput.addEventListener('change', function(event){         
            if(event.target.value === subOptionsRightInput.value){
                subOptionsRightInput.value = leftPreviousValue;
            }

            leftPreviousValue = event.target.value;
        })   

            
             
        
     subOptionsRightInput.addEventListener('change', function(event){
        if(event.target.value === subOptionsLeftInput.value){
            subOptionsLeftInput.value = rightPreviousValue;
            console.log(subOptionsLeftInput.value = rightPreviousValue)
            console.log(subOptionsLeftInput.value,rightPreviousValue)
        }

        rightPreviousValue = event.target.value;
        }) 







    }

    

  
    