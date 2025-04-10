import components from './components.mjs';

function renderComponentList(componentList) {
    const outputElement = document.querySelector('.component-container');

    if (!outputElement) {
        console.error("Output element not found.");
        return;
    }

    const componentHTML = componentList.map(component => componentTemplate(component)).join('');
    outputElement.innerHTML = componentHTML;
}

function componentTemplate(component) {
    return `<figure class="component">
        <img src="${component.image}" alt="${component.name}" />
        <figcaption>
            <h2>${component.name}</h2>
            <p>${component.description}</p>
            <ul>${component.tags.map(tag => `<li>${tag}</li>`).join('')}</ul>
        </figcaption>
    </figure>`;
}

function searchHandler(event) {
    event.preventDefault();
    const query = document.querySelector('#search').value.toLowerCase();
    const filteredComponents = filterComponents(query);
    renderComponentList(filteredComponents);
}

function filterComponents(query) {
    return components.filter(component =>
        component.name.toLowerCase().includes(query) ||
        component.description.toLowerCase().includes(query) ||
        component.tags.some(tag => tag.toLowerCase().includes(query))
    );
}

document.querySelector('.search-button').addEventListener('click', searchHandler);

// Initial render
renderComponentList(components);