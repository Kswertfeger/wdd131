const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('Menu');
const gallery = document.querySelector('.gallery');

menuButton.addEventListener('click', function() {
    if (menu.classList.contains('hide')) {
        menu.classList.remove('hide');
    } else {
        menu.classList.add('hide');
    }
});

function handleResize() {
    if (window.innerWidth < 1000) {
        menuButton.classList.remove("hide");
        menu.classList.add("hide")
    } else {
        menuButton.classList.add("hide");
        menu.classList.remove("hide")
    }
}

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`
}

function viewHandler(event) {
    // create a variable to hold the element that was clicked on from event.target
    const element = event.target;
    // get the src attribute from that element and 'split' it on the "-"
    if (element.tagName === 'IMG') {
        const src = element.getAttribute('src');
        const alt = element.getAttribute('alt');
        // construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
        const newSrc = src.split('-')[0] + '-full.jpeg'; 
        // insert the viewerTemplate into the top of the body element
	    // (element.insertAdjacentHTML("afterbegin", htmltoinsert))
        const viewerHtml = viewerTemplate(newSrc, alt);
        document.body.insertAdjacentHTML('afterbegin', viewerHtml);
        // add a listener to the close button (X) that calls a function called closeViewer when clicked
        document.querySelector('.close-viewer').addEventListener('click', function() {
            document.querySelector('.viewer').remove();
        });
    }
}

window.addEventListener("resize", handleResize);
gallery.addEventListener('click', viewHandler)