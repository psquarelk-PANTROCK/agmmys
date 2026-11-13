/* AGMMYS: mobile menu toggle and footer year */
const t=document.querySelector('.tg'),n=document.getElementById('nav');
t.addEventListener('click',()=>{const o=n.classList.toggle('open');t.setAttribute('aria-expanded',o)});
document.getElementById('yr').textContent=new Date().getFullYear();
