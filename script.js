// const myBtns = document.querySelectorAll('.btn');

// myBtns.forEach(btn => {

//   btn.addEventListener('click', () => {

//     const allCols = document.querySelectorAll('.colContent');

//     allCols.forEach(col =>{
//       if(col.dataset.col === btn.id) {
//         col.classList.add('colVisible');
//       } else {
//         col.classList.remove('colVisible');
//       }
//     })
//   })
// });

const wrapper = document.querySelector('.spreadsheet');
const cols = document.querySelectorAll('.btn');


wrapper.addEventListener('scroll', () => {

    const colWidth = cols[2].offsetWidth;
    console.log('col = ' + colWidth);
    console.log('scrolled:' + wrapper.scrollLeft);

    cols.forEach(col => {
        const index = Array.from(cols).indexOf(col);
        const debCol = (index-2) * colWidth;
        const endCol = debCol + colWidth;
        // console.log(debCol);
        const selectContent = document.querySelector('.colContent[data-col="' + col.id + '"]');
        const selectLeg = document.querySelector('.colLeg[data-col="' + col.id + '"]');
        // console.log(selectContent);
        if(selectContent) {
            // console.log(selectContent);
            if((wrapper.scrollLeft >= debCol - 10) && (wrapper.scrollLeft < endCol - 10)) {
                selectContent.classList.add('colVisible');
                selectLeg.classList.add('colVisible');
            } else {
                selectContent.classList.remove('colVisible');
                selectLeg.classList.remove('colVisible');
            }
        }
    })

});


function jumpTo(targetBtn) {
    targetBtn.scrollIntoView({ behavior: 'smooth', inline: "center" });
}