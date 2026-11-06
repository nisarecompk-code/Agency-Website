const menu=document.querySelector('.menu'),nav=document.querySelector('.navlinks');
if(menu&&nav){menu.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',nav.classList.contains('open')?'true':'false')})}
document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());
document.querySelectorAll('form[data-mailto]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(f);const s=encodeURIComponent('Business enquiry — SPEAR MARKETING');const b=encodeURIComponent(`Name: ${d.get('name')}\nBusiness: ${d.get('business')}\nEmail: ${d.get('email')}\nService: ${d.get('service')}\nMessage: ${d.get('message')}`);location.href=`mailto:nisarecom.pk@gmail.com?subject=${s}&body=${b}`}));
