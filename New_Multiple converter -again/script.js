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
        },

        variants: {
            'squareKm:squareM': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'squareKm:squareMile': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'squareKm:squareYard': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'squareKm:squareFoot': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'squareM:squareKm': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'squareM:squareMile': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'squareM:squareYard': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'squareM:squareFoot': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'squareMile:squareKm': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'squareMile:squareM': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'squareMile:squareYard': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'squareMile:squareFoot': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'squareYard:squareKm': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'squareYard:squareM': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'squareYard:squareMile': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'squareYard:squareFoot': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'squareFoot:squareKm': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'squareFoot:squareM': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'squareFoot:squareMile': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'squareFoot:squareYard': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },

        }
    },

    mass: {
        name: "Mass",
        units: {
            tonne: "Tonne",
            kilogram: "Kilogram",
            gram: "Gram",
            pound: "Pound",
            ounce: "Ounce", 
        },

        variants: {
            'tonne:kilogram': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'tonne:gram': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'tonne:pound': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'tonne:ounce': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'kilogram:tonne': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'kilogram:gram': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'kilogram:pound': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'kilogram:ounce': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'gram:tonne': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'gram:kilogram': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'gram:pound': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'gram:ounce': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'pound:tonne': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'pound:kilogram': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'pound:gram': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'pound:ounce': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'ounce:tonne': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'ounce:kilogram': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'ounce:gram': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            'ounce:pound': {
                formula: "",
                calculation(n){
                    return n * 10;
                }
            },
            
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



