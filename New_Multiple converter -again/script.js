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




function main(){
    let inputCategory = document.getElementById('category-select');
        removeAllChild(inputCategory)
    let converterKeys = Object.keys(converter).sort();
        converterKeys.forEach((item)=>{
            addOptionsInCategory(inputCategory, {value: item, text: converter[item].name})
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

   
    
    
    




