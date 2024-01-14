
//Global Variable

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
                formula: "multiply the area value by 1000000",
                calculation(n){
                    return n * 1000000;
                },
                calculationRevarse(n){
                    return n / 1000000;
                }
            },
            'squareKm:squareMile': {
                formula: "divide the area value by 2.59",
                calculation(n){
                    return n / 2.59;
                },
                calculationRevarse(n){
                    return n * 2.59;
                }
            },
            'squareKm:squareYard': {
                formula: "multiply the area value by 1196000",
                calculation(n){
                    return n * 1196000;
                },
                calculationRevarse(n){
                    return n / 1196000;
                }
            },
            'squareKm:squareFoot': {
                formula: "or an approximate result, multiply the area value by 10760000 ",
                calculation(n){
                    return n * 10760000;
                },
                calculationRevarse(n){
                    return n / 10760000;
                }
            },
            'squareM:squareKm': {
                formula: "divide the area value by 1000000",
                calculation(n){
                    return n / 1000000;
                },
                calculationRevarse(n){
                    return n * 1000000;
                }
            },
            'squareM:squareMile': {
                formula: "divide the area value by 2590000",
                calculation(n){
                    return n / 2590000;
                },
                calculation(n){
                    return n * 2590000;
                }
            },
            'squareM:squareYard': {
                formula: "multiply the area value by 1.196",
                calculation(n){
                    return n * 1.196;
                },
                calculationRevarse(n){
                    return n * 1.196;
                }
            },
            'squareM:squareFoot': {
                formula: "multiply the area value by 10.764",
                calculation(n){
                    return n * 10.764;
                },
                calculationRevarse(n){
                    return n / 10.764;
                }
            },
            'squareMile:squareKm': {
                formula: "multiply the area value by 2.59",
                calculation(n){
                    return n * 2.59;
                },
                calculationRevarse(n){
                    return n / 2.59;
                }
            },
            'squareMile:squareM': {
                formula: "multiply the area value by 25900000",
                calculation(n){
                    return n * 25900000;
                },
                calculationRevarse(n){
                    return n / 25900000;
                }
            },
            'squareMile:squareYard': {
                formula: "for an approximate result, multiply the area value by 3098000",
                calculation(n){
                    return n * 3098000;
                },
                calculationRevarse(n){
                    return n / 3098000;
                }
            },
            'squareMile:squareFoot': {
                formula: "for an approximate result, multiply the area value by 27880000",
                calculation(n){
                    return n * 27880000;
                },
                calculationRevarse(n){
                    return n / 27880000;
                }
            },
            'squareYard:squareKm': {
                formula: "divide the area value by 1196000",
                calculation(n){
                    return n / 1196000;
                },
                calculationRevarse(n){
                    return n * 1196000;
                }
            },
            'squareYard:squareM': {
                formula: "divide the area value by 1.196",
                calculation(n){
                    return n / 1.196;
                },
                calculationRevarse(n){
                    return n * 1.196;
                }
            },
            'squareYard:squareMile': {
                formula: "for an approximate result, divide the area value by 3.098e+6  ",
                calculation(n){
                    return n / new Number(3.098e+6);
                },
                calculationRevarse(n){
                    return n * new Number(3.098e+6);
                }
            },
            'squareYard:squareFoot': {
                formula: "multiply the area value by 9",
                calculation(n){
                    return n * 9;
                },
                calculationRevarse(n){
                    return n / 9;
                }
            },
            'squareFoot:squareKm': {
                formula: "for an approximate result, divide the area value by 1.076e+7 ",
                calculation(n){
                    return n / new Number(1.076e+7);
                },
                calculationRevarse(n){
                    return n * new Number(1.076e+7);
                }
            },
            'squareFoot:squareM': {
                formula: "divide the area value by 10.764 ",
                calculation(n){
                    return n / 10.764;
                },
                calculationRevarse(n){
                    return n * 10.764;
                }
            },
            'squareFoot:squareMile': {
                formula: "for an approximate result, divide the area value by 2.788e+7",
                calculation(n){
                    return n / new Number(2.788e+7);
                },
                calculationRevarse(n){
                    return n * new Number(2.788e+7);
                }
            },
            'squareFoot:squareYard': {
                formula: "divide the area value by 9",
                calculation(n){
                    return n / 9;
                },
                calculationRevarse(n){
                    return n * 9;
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
                formula: "multiply the mass value by 1000",
                calculation(n){
                    return n * 1000;
                },
                calculationRevarse(n){
                    return n / 1000;
                }
            },
            'tonne:gram': {
                formula: "multiply the mass value by 1000",
                calculation(n){
                    return n * 1000;
                },
                calculationRevarse(n){
                    return n / 1000;
                }
            },
            'tonne:pound': {
                formula: "for an approximate result, multiply the mass value by 2205",
                calculation(n){
                    return n * 2205;
                },
                calculationRevarse(n){
                    return n / 2205;
                }
            },
            'tonne:ounce': {
                formula: "for an approximate result, multiply the mass value by 35270",
                calculation(n){
                    return n * 35270;
                },
                calculationRevarse(n){
                    return n / 35270;
                }
            },
            'kilogram:tonne': {
                formula: "divide the mass value by 1000 ",
                calculation(n){
                    return n / 1000;
                },
                calculationRevarse(n){
                    return n * 1000;
                }
            },
            'kilogram:gram': {
                formula: "multiply the mass value by 1000   ",
                calculation(n){
                    return n * 1000;
                },
                calculationRevarse(n){
                    return n / 1000;
                }
            },
            'kilogram:pound': {
                formula: "for an approximate result, multiply the mass value by 2.205",
                calculation(n){
                    return n * 2.205;
                },
                calculationRevarse(n){
                    return n / 2.205;
                }
            },
            'kilogram:ounce': {
                formula: "multiply the mass value by 35.274 ",
                calculation(n){
                    return n * 35.27;
                },
                calculationRevarse(n){
                    return n / 35.27;
                }
            },
            'gram:tonne': {
                formula: "divide the mass value by 1e+6",
                calculation(n){
                    return n / new Number(1e+6);
                },
                calculationRevarse(n){
                    return n * new Number(1e+6);
                }
            },
            'gram:kilogram': {
                formula: "divide the mass value by 1000 ",
                calculation(n){
                    return n / 1000;
                },
                calculationRevarse(n){
                    return n * 1000;
                }
            },
            'gram:pound': {
                formula: "for an approximate result, divide the mass value by 453.6 ",
                calculation(n){
                    return n / 453.6;
                },
                calculationRevarse(n){
                    return n * 453.6;
                }
            },
            'gram:ounce': {
                formula: "for an approximate result, divide the mass value by 28.35 ",
                calculation(n){
                    return n / 28.35;
                },
                calculationRevarse(n){
                    return n * 28.35;
                }
            },
            'pound:tonne': {
                formula: "for an approximate result, divide the mass value by 2205",
                calculation(n){
                    return n / 2205;
                },
                calculationRevarse(n){
                    return n * 2205;
                }
            },
            'pound:kilogram': {
                formula: "for an approximate result, divide the mass value by 2.205 ",
                calculation(n){
                    return n / 2.205;
                },
                calculationRevarse(n){
                    return n * 2.205;
                }
            },
            'pound:gram': {
                formula: "for an approximate result, multiply the mass value by 453.6   ",
                calculation(n){
                    return n * 453.6;
                },
                calculationRevarse(n){
                    return n / 453.6;
                }
            },
            'pound:ounce': {
                formula: "multiply the mass value by 16 ",
                calculation(n){
                    return n * 16;
                },
                calculationRevarse(n){
                    return n / 16;
                }
            },
            'ounce:tonne': {
                formula: "for an approximate result, divide the mass value by 35270 ",
                calculation(n){
                    return n / 35270;
                },
                calculationRevarse(n){
                    return n * 35270;
                }
            },
            'ounce:kilogram': {
                formula: "divide the mass value by 35.274 ",
                calculation(n){
                    return n / 35.274;
                },
                calculationRevarse(n){
                    return n * 35.274;
                }
            },
            'ounce:gram': {
                formula: "for an approximate result, multiply the mass value by 28.35  ",
                calculation(n){
                    return n * 28.35;
                },
                calculationRevarse(n){
                    return n / 28.35;
                }
            },
            'ounce:pound': {
                formula: "divide the mass value by 16  ",
                calculation(n){
                    return n / 16;
                },
                calculationRevarse(n){
                    return n * 16;
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
            mile: "Mile",
        },

        variants: {
            'kilometer:meter':{
                formula: "multiply the length value by 1000 ",
                calculation(n){
                    return n * 1000;
                },
                calculationRevarse(n){
                    return n / 1000;
                }
            },
            'kilometer:centimeter':{
                formula: "multiply the length value by 100000 ",
                calculation(n){
                    return n * 100000;
                },
                calculationRevarse(n){
                    return n / 100000;
                }
            },
            'kilometer:mile':{
                formula: "for an approximate result, divide the length value by 1.609 ",
                calculation(n){
                    return n / 1.609;
                },
                calculationRevarse(n){
                    return n * 1.609;
                }
            },
            'meter:kilometer':{
                formula: "divide the length value by 1000   ",
                calculation(n){
                    return n / 1000;
                },
                calculationRevarse(n){
                    return n * 1000;
                }
            },
            'meter:centimeter':{
                formula: "multiply the length value by 100" ,
                calculation(n){
                    return n * 100;
                },
                calculationRevarse(n){
                    return n / 100;
                }
            },
            'meter:mile':{
                formula: "for an approximate result, divide the length value by 1609",
                calculation(n){
                    return n / 1609;
                },
                calculationRevarse(n){
                    return n * 1609;
                }
            },
            'centimeter:kilometer':{
                formula: 'divide the length value by 100000',
                calculation(n){
                    return n / 100000;
                },
                calculationRevarse(n){
                    return n * 100000;
                }
            },
            'centimeter:meter':{
                formula: "divide the length value by 100 ",
                calculation(n){
                    return n / 100;
                },
                calculationRevarse(n){
                    return n * 100;
                }
            },
            'centimeter:mile':{
                formula: "for an approximate result, divide the length value by 160900",
                calculation(n){
                    return n / 160900;
                },
                calculationRevarse(n){
                    return n * 160900;
                }
            },
            'mile:kilometer':{
                formula: "for an approximate result, multiply the length value by 1.609",
                calculation(n){
                    return n * 1.609;
                },
                calculationRevarse(n){
                    return n / 1.609;
                }
            },
            'mile:meter':{
                formula: " for an approximate result, multiply the length value by 1609",
                calculation(n){
                    return n * 1609;
                },
                calculationRevarse(n){
                    return n / 1609;
                }
            },
            'mile:centimeter':{
                formula: " for an approximate result, multiply the length value by 160900",
                calculation(n){
                    return n * 160900;
                },
                calculationRevarse(n){
                    return n / 160900;
                }
            },

        }
        
    },

    time: {
        name: "Time",
        units:  {
            second: "Second",
            minute: "Minute",
            hour: "Hour",          
        },

        variants: {
            'second:minute':{
                formula: "divide the time value by 60 ",
                calculation(n){
                    return n / 60;
                },
                calculationRevarse(n){
                    return n * 60;
                }
            },
            'second:hour':{
                formula: "divide the time value by 3600 ",
                calculation(n){
                    return n / 3600;
                },
                calculationRevarse(n){
                    return n * 3600;
                }
            },
            'minute:second':{
                formula: "multiply the time value by 60 ",
                calculation(n){
                    return n * 60;
                },
                calculationRevarse(n){
                    return n / 60;
                }
            },
            'minute:hour':{
                formula: "divide the time value by 60",
                calculation(n){
                    return n / 60;
                },
                calculationRevarse(n){
                    return n * 60;
                }
            },
            'hour:second':{
                formula: " multiply the time value by 3600 ",
                calculation(n){
                    return n * 3600;
                },
                calculationRevarse(n){
                    return n / 3600;
                }
            },
            'hour:minute':{
                formula: "multiply the time value by 60",
                calculation(n){
                    return n * 60;
                },
                calculationRevarse(n){
                    return n / 60;
                }
            },
         
        }
    },

    dataTransferRate: {
        name: "Data Transfer Rate",
        units:  {
            bitePerS: "Bit per second",
            kilobitePerS: "Kilobite per second",
            megabitePerS: "Megabyte per second",
        },

        variants: {
            'bitePerS:kilobitePerS':{
                formula: "divide the data transfer rate value by 1000 ",
                calculation(n){
                    return n / 1000;
                },
                calculationRevarse(n){
                    return n * 1000;
                }
            },
            'bitePerS:megabitePerS':{
                formula: "divide the data transfer rate value by 1e+6 ",
                calculation(n){
                    return n / new Number(1e+6);
                },
                calculationRevarse(n){
                    return n * new Number(1e+6);
                }
            },
            'kilobitePerS:bitePerS':{
                formula: "multiply the data transfer rate value by 1000 ",
                calculation(n){
                    return n * 1000;
                },
                calculationRevarse(n){
                    return n / 1000;
                }
            },
            'kilobitePerS:megabitePerS':{
                formula: "divide the data transfer rate value by 1000",
                calculation(n){
                    return n / 1000;
                },
                calculationRevarse(n){
                    return n * 1000;
                }
            },
            'megabitePerS:bitePerS':{
                formula: "multiply the data transfer rate value by 1e+6 ",
                calculation(n){
                    return n * new Number(1e+6);
                },
                calculationRevarse(n){
                    return n / new Number(1e+6);
                }
            },
            'megabitePerS:kilobitePerS':{
                formula: "multiply the data transfer rate value by 1000",
                calculation(n){
                    return n * 1000;
                },
                calculcalculationRevarseation(n){
                    return n / 1000;
                }
            },
           
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

    

  
    