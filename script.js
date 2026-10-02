document.getElementById('yr').textContent=new Date().getFullYear();
var m=document.getElementById('menu'),l=document.getElementById('links');
m.onclick=function(){m.setAttribute('aria-expanded',l.classList.toggle('open'))};
l.onclick=function(){l.classList.remove('open');m.setAttribute('aria-expanded','false')};
var as=[].slice.call(l.querySelectorAll('a'));
as.forEach(function(a){var s=document.querySelector(a.getAttribute('href'));if(!s||!window.IntersectionObserver)return;
new IntersectionObserver(function(e){if(e[0].isIntersecting){as.forEach(function(x){x.classList.remove('on')});a.classList.add('on')}},{rootMargin:'-40% 0px -55% 0px'}).observe(s)});
