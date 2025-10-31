const myBtns = document.querySelectorAll('.btn');

myBtns.forEach(btn => {

  btn.addEventListener('click', () => {

    const allCols = document.querySelectorAll('.colContent');

    allCols.forEach(col =>{
      if(col.dataset.col === btn.id) {
        col.classList.add('colVisible');
      } else {
        col.classList.remove('colVisible');
      }
    })
  })
});