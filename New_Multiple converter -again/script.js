window.onload = function(){
    main()
}


const converter = {
    area: {
        name: "Area",
    },
    mass: {
        name: "Mass",
    },
    length: {
        name: "Length",
    },
    volume: {
        name: "Volume",
    },
    time: {
        name: "Time",
    },
    dataTransferRate: {
        name: "Data Transfer Rate"
    }
}




function main(){
 
    let x = Object.keys(converter)

    

    for(let i=0; i<x.length; i++){
        console.log(converter[x[i]].name);
        console.log(x[i]);
        
    }
    

}


function addCategory(){
    let inputCategory = document.getElementById('category-select');
   
    let x = Object.keys(converter)
    let converterName = Object.values(converter)
    for(let i = 0; i<converterName.length; i++){
       let createDivElement  = document.createElement('option');
        createDivElement.innerHTML = converterName[i].name;
        createDivElement.value = x[i];
        
        

        inputCategory.appendChild(createDivElement)
    }

   
    
    
    
}



