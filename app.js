
const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");
const labelCompleted = document.getElementById("countComplete");

let indexItem = 0;
let indexComplete = 0;




button.addEventListener("click", function() {
    const text = input.value;

  
    if (text.length == 0) {
        document.querySelector("small").innerText = "Input must not be empty";
        
        return;
    } else {
        document.querySelector("small").innerText = "";
    };


    const item = document.createElement("li");
    list.appendChild(item);

 
    const itemlabel = document.createElement("span");
    itemlabel.innerText = text;
    item.appendChild(itemlabel);


    
  const trashcan = document.createElement('span');
  trashcan.innerHTML = '&#x1F5D1;';
  trashcan.setAttribute('class', 'trashcan');
  item.appendChild(trashcan);

  trashcan.addEventListener('click', function() {
    item.remove();
  });

  var List = document.getElementById('list');
  List.innerHTML = '';

   
    itemlabel.addEventListener("click", function() {
        if (item.getAttribute("class") == "completed") {
          
            item.setAttribute("class", "");

           
            indexComplete--;
        } else {
         
            item.setAttribute("class", "completed");

            indexComplete++;
        };
     
        labelCompleted.innerText = `${indexComplete} completed`;
    });


    

    indexItem++;
    labelItem.innerText = `${indexItem} item`;

  
    trashcan.addEventListener("click", function() {
       
        indexItem--;
        labelItem.innerText = `${indexItem} item`;

     
        arrayItem.pop();


        item.getAttribute("class") == "completed" ? indexComplete-- : "";
        labelCompleted.innerText = `${indexComplete} completed`;

        
        item.remove();
    });

 
    input.value = "";

});



  