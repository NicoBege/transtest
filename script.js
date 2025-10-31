

if(window.matchMedia) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.style.setProperty("color-scheme", "dark");
  } else {
        document.documentElement.style.setProperty("color-scheme", "light");
  }
}
else {
    document.documentElement.style.setProperty("color-scheme", "light");
}


const timelineWrapper = document.querySelector('.timeline');
const tiles = document.querySelectorAll('button.tl_year');



timelineWrapper.addEventListener('scroll', () => { 

    const tileWidth = tiles[0].offsetWidth;
    
    tiles.forEach(tile => {
        const index = Array.from(tiles).indexOf(tile);
        const posTile = (index) * tileWidth;
        const endTile = posTile + tileWidth;
        const imgSelect = document.querySelector('img[data-year="' + tile.id + '"]');
        const legendSelect = document.querySelector('.tl_legende[data-year="' + tile.id + '"]');
        const credSelect = document.querySelector('.cred[data-cred="' + tile.id + '"]');

        if((timelineWrapper.scrollLeft >= posTile - 10) && (timelineWrapper.scrollLeft < endTile - 10)) {
            tile.classList.add('date_active');
            imgSelect.classList.add('tl_LegImgVisible');
            imgSelect.setAttribute('aria-hidden', false);
            legendSelect.classList.add('tl_LegImgVisible');
            legendSelect.removeAttribute('inert');
            credSelect.classList.add('credShow');            
        }
        else {
            tile.classList.remove('date_active');
            imgSelect.classList.remove('tl_LegImgVisible');
            imgSelect.setAttribute('aria-hidden', true);
            legendSelect.classList.remove('tl_LegImgVisible');
            legendSelect.setAttribute('inert', true); 
            credSelect.classList.remove('credShow');  
        }
    })
});


function clicDate(dateCible) {
    dateCible.scrollIntoView({ behavior: 'smooth', inline: "center" });
}



const firstTile = document.getElementById('firstTile');
const lastTile = document.getElementById('lastTile');


const checkFirst = new IntersectionObserver (entries => {
        entries.forEach(entry => {
                if (entry.isIntersecting) {
                    document.querySelector('.tl_wrapper').classList.add('leftHidden');
                }
                else {
                    document.querySelector('.tl_wrapper').classList.remove('leftHidden');
                }
            }
        );
    }, {threshold: 0.75}
);

const checkLast = new IntersectionObserver (entries => {
        entries.forEach(entry => {
                if (entry.isIntersecting) {
                    document.querySelector('.tl_wrapper').classList.add('rightHidden');
                }
                else {
                    document.querySelector('.tl_wrapper').classList.remove('rightHidden');
                }
            }
        );
    }, {threshold: 0.75}
);

checkFirst.observe(firstTile);
checkLast.observe(lastTile);



let popTop = document.querySelector('.tl_moreInfo').getBoundingClientRect().bottom;
const popups = document.querySelectorAll('.pop_leg');

popups.forEach(popup => {
    popup.style.top = popTop + "px";
});

window.addEventListener('resize', () => {
    popTop = document.querySelector('.tl_moreInfo').getBoundingClientRect().bottom;
    popups.forEach(popup => {
        popup.style.top = popTop + "px";
    });
});


const allPops = document.querySelectorAll('.pop_leg');
allPops.forEach(el => el.addEventListener('beforetoggle', event => {
    const btnCible = document.querySelector("[popovertarget=" + CSS.escape(el.id) + "]").querySelector('.tl_moreInfo');
    if (event.newState === "open") {
    btnCible.querySelector('path').setAttribute('d', "M0 16q0 3.264 1.28 6.208t3.392 5.12 5.12 3.424 6.208 1.248 6.208-1.248 5.12-3.424 3.392-5.12 1.28-6.208-1.28-6.208-3.392-5.12-5.088-3.392-6.24-1.28q-3.264 0-6.208 1.28t-5.12 3.392-3.392 5.12-1.28 6.208zM4 16q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016-1.6 6.048-4.384 4.352-6.016 1.6-6.016-1.6-4.384-4.352-1.6-6.048zM8 16q0 0.832 0.576 1.44t1.44 0.576h12q0.8 0 1.408-0.576t0.576-1.44-0.576-1.408-1.408-0.576h-12q-0.832 0-1.44 0.576t-0.576 1.408z");
    } 
    else {
    btnCible.querySelector('path').setAttribute('d', "M0 16q0 3.264 1.28 6.208t3.392 5.12 5.12 3.424 6.208 1.248 6.208-1.248 5.12-3.424 3.392-5.12 1.28-6.208-1.28-6.208-3.392-5.12-5.088-3.392-6.24-1.28q-3.264 0-6.208 1.28t-5.12 3.392-3.392 5.12-1.28 6.208zM4 16q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016-1.6 6.048-4.384 4.352-6.016 1.6-6.016-1.6-4.384-4.352-1.6-6.048zM8 16q0 0.832 0.576 1.44t1.44 0.576h4v4q0 0.832 0.576 1.408t1.408 0.576 1.408-0.576 0.608-1.408v-4h4q0.8 0 1.408-0.576t0.576-1.44-0.576-1.408-1.408-0.576h-4v-4q0-0.832-0.608-1.408t-1.408-0.608-1.408 0.608-0.576 1.408v4h-4q-0.832 0-1.44 0.576t-0.576 1.408z");
    }
}));


