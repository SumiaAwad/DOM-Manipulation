// import "./style.css";
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