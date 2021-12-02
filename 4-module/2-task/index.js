function makeDiagonalRed(table) {

  let tBody = table.firstElementChild;
 for(i = 0; i < tBody.rows.length; i++){
     let row = tBody.rows[i];
     row.cells[i].style.backgroundColor = 'red';
 }

}
