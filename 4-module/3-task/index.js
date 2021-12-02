function highlight(table) {
let tableBody = table.getElementsByTagName('tbody')[0];
 let tableRows = tableBody.getElementsByTagName('tr');

for (let i = 0; i < tableRows.length; i++ ){

    let staTus = tableRows[i].cells[3];

    if(staTus.getAttribute('data-available')=== 'true'){
        tableRows[i].classList.add('available');
    }
    if(staTus.getAttribute('data-available')=== 'false'){
        tableRows[i].classList.add('unavailable');
    }
    if(!staTus.hasAttribute('data-available')){
        tableRows[i].setAttribute('hidden','');
    }

    let GenDer = tableRows[i].cells[2];

    if(GenDer.innerHTML === 'm'){
        tableRows[i].classList.add('male');
    }
    if(GenDer.innerHTML === 'f'){
        tableRows[i].classList.add('female');
    }

    let aGe = tableRows[i].cells[1];

    if(+aGe.innerHTML < 18){
        tableRows[i].style.textDecoration = "line-through";
    }
}

}


