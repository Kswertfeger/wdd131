const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const new_image = document.createElement("img");
new_image.setAttribute("src", "https://picsum.photos/200");
new_image.setAttribute("alt", "Random image from picsum.");
document.body.appendChild(new_image);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const new_section = document.createElement("section");
const new_h2 = document.createElement("h2");
new_h2.innerText = "DOM Basics";
new_section.appendChild(new_h2);
const new_p = document.createElement("p");
new_p.innerText = "This was added through Javascript";
new_section.appendChild(new_p);