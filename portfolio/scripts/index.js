const menuBtn = document.getElementById('menu');
const closeBtn = document.getElementById('closeMenu');
const nav = document.getElementById('navWrapper');

menuBtn.addEventListener('click', ()=>{
    // nav.style.display = 'flex';
    nav.style.width = '100%';
});

closeBtn.addEventListener('click', ()=>{
    nav.style.width = '0';
    // nav.style.display = 'none';
})

const links = document.querySelectorAll('nav a');
if (window.innerWidth < 768) {
    links.forEach(link => {
        link.addEventListener('click', ()=>{
            nav.style.width = '0';
            // nav.style.display = 'none';
        })
    });
}