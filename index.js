// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];
//1
let mainEl = document.querySelector('main');
//2
mainEl.style.backgroundColor = "var(--main-bg)";
//3 
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
//4
mainEl.classList.add("flex-ctr");
//part two
//1
let topMenuEl = document.querySelector('nav');
//2
topMenuEl.style.height = '100%';
//3
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
//4
topMenuEl.classList.add("flex-around");
//part three
// Iterate over the entire menuLinks array and for each "link" object:
// Create an <a> element.
// On the new element, add an href attribute with its value set to the href property of the "link" object.
// Set the new element's content to the value of the text property of the "link" object.
// Append the new element to the topMenuEl element.
//Iterate over the entire menuLinks
for (i = 0; i < menuLinks.length; i++) {
    const aTag = document.createElement('a')
    aTag.setAttribute('href', menuLinks[i].href);
    aTag.innerText = menuLinks[i].text;
    document.getElementById("top-menu").appendChild(aTag);
}