window.onload = function(){
    main()
}


const converter = {
    area: {
        name: "Area",
        units: {
            squareKm: 'Square Kilometer',
            squareM: 'Square Meter',
            squareMile: 'Square MIle',
            squareYard: "Square Yard",
            squareFoot: "Square Foot"
        }
    },

    mass: {
        name: "Mass",
        units: {
            tonne: "Tonne",
            kilogram: "Kilogram",
            gram: "Gram",
            milligram: "Milligram",
            microgram: "Microgram",
            pound: "Pound",
            ounce: "Ounce", 
        }
    },

    length: {
        name: "Length",
        units:  {
            kilometer: "Kilometer",
            meter: "Meter",
            centimeter: "Centimeter",
            millimeter: "Millimeter",
            micrometer: "Micrometer",
            nenometer: "Nenometer",
            mile: "Mile",
            yard: "Yard",
            foot: "Foot",
            inch: "Inch",
            nauticalMile: "NauticalMile"
        }
    },

    time: {
        name: "Time",
        units:  {
            nanosecond: "Nanosecond",
            microsecond: "Microsecond",
            millisecond: "Millisecond",
            second: "Second",
            minute: "Minute",
            hour: "Hour",
           
        }
    },

    dataTransferRate: {
        name: "Data Transfer Rate",
        units:  {
            bitePerS: "Bit per second",
            kilobitePerS: "Kilobite per second",
            megabitePerS: "Megabyte per second",
            gigabitePerS: "Gigabyte per second",
            terabitePerS: "Terabyte per second", 
        }
    }
}


let lastLeftSelectedValue = "";
let lastRightSelectedValue = "";

function main(){
    let inputCategory = document.getElementById('category-select');
    let leftSelect = document.getElementById('left-input_select');
    let rightSelect = document.getElementById('right-input_select');
        removeAllChild(inputCategory)
    let converterKeys = Object.keys(converter).sort();
        converterKeys.forEach((item)=>{
            addOptionsInCategory(inputCategory, {value: item, text: converter[item].name})
        })

       updateInputCategoryChange(inputCategory,leftSelect,rightSelect)
        
        inputCategory.addEventListener('change', function(){
            updateInputCategoryChange(inputCategory,leftSelect,rightSelect)
        })    
    
    
        leftSelect.addEventListener('change', function(event){
            if(event.target.value === rightSelect.value){
            
                const options = rightSelect.getElementsByTagName('option');
                for(let i = 0; i<options.length; i++){
                    if(lastLeftSelectedValue === options[i].value){
                     console.log(lastLeftSelectedValue, options[i].value,lastRightSelectedValue);
                     
                        options[i].selected = 'selected';
                        //below line is for update lastRightSelectedValue like lastLeftSelectedValue 
                        lastRightSelectedValue = options[i].value;
                        console.log(lastRightSelectedValue)
                        break;
                    }
                }
            }
           
            
            lastLeftSelectedValue = event.target.value;
       
        })


        rightSelect.addEventListener('change', function(event){
            if(event.target.value === leftSelect.value){                 

                const options = leftSelect.getElementsByTagName('option');
                for(let i = 0; i<options.length; i++){
                    if(lastRightSelectedValue === options[i].value){
                        console.log(lastRightSelectedValue, options[i].value,options[i]);
                        options[i].selected = 'selected';
                        //lastLeftSelectedValue = options[i].value;
                        break;
                    }
                }
            }
            lastRightSelectedValue = event.target.value;
        })

}


function addOptionsInCategory(parent, option){
    let createOptions = document.createElement('option');
    createOptions.setAttribute('value', option.value);
    createOptions.innerText = option.text;

    parent.appendChild(createOptions);


}


function removeAllChild(parent){    
    while(parent.firstChild){
        //Both way you have executed to remove child element
            //parent.removeChild(parent.firstChild)
            parent.firstChild.remove()
    }
}

   
function updateInputCategoryChange(inputCategory,leftSelect,rightSelect){
    let converterCategoryName = inputCategory.value;
    let units = converter[converterCategoryName].units;
    let options = Object.keys(units) 

    //Left Handler
        removeAllChild(leftSelect)         
        options.forEach((item)=>{
            addOptionsInCategory(leftSelect, {value: item, text: units[item] })
        })  
        
        lastLeftSelectedValue = leftSelect.value;
        
    //Right Handler
         removeAllChild(rightSelect)     
         options.forEach((item)=>{
                 addOptionsInCategory(rightSelect, {value: item, text: units[item] });
                
             })
    // for right side input field selected value no -2
        rightSelect.getElementsByTagName('option')[1].selected = "selected";

        lastRightSelectedValue = rightSelect.value;
}



