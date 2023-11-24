// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.


//seleziono ul
const listaUl = document.getElementById("listaspesa");

//creo la lista della spesa
const arrayspesa = ["proteine","carboidrati","grassi","frutta"];

//scorro la lista della spesa



i = 0;

//finche la i e minore di arrayspesa allora:
while (i < arrayspesa.length) {

    let itemspesa = arrayspesa[i];
    i++;
    console.log(itemspesa);
    const elementLi = document.createElement("li");
    elementLi.append(itemspesa);
    listaUl.append(elementLi); 
    
}



    

   