// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.


//seleziono ul nell'html
const listaUl = document.getElementById("listaspesa");

//creo la lista della spesa
const arrayspesa = ["proteine","carboidrati","grassi","frutta"];

//scorro la lista della spesa


//creo un flag e la imposto su zero come punto di partenza
let i = 0;

//finche la flag e minore di arrayspesa allora:
while (i < arrayspesa.length) {

    //creo una variabile che aumenta aumenta ogni volta che aumenta anche la flag 
    let itemspesa = arrayspesa[i];

    //la flag incrementa
    i++;

    //stampo in console la lista spesa ogni giro di flag
    console.log(itemspesa);

    //creo l'elemento li
    const elementLi = document.createElement("li");

    //dentro questo elemento ci appendo gli oggetti della spesa
    elementLi.append(itemspesa);

    //dopo di che appendo gli elementi li dentro l'ul
    listaUl.append(elementLi); 

}


                       //BONUS//

//aggiungo un bottone che mi aggiunge ogetti alla lista della spesa
const sendButton = document.getElementById("send");

sendButton.addEventListener("click",

    function(){

        //input oggetto
        const inputitem = document.getElementById("type");
        console.log("oggetto inserito:", inputitem.value);

        //creo l'elemento li
        const elementLi = document.createElement("li");

        //dentro questo elemento ci appendo gli oggetti della spesa
        elementLi.append(inputitem.value);

        //dopo di che appendo gli elementi li dentro l'ul
        listaUl.append(elementLi); 
        
        }

);


   