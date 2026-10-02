(function(){
'use strict';
document.documentElement.classList.add('js');
var nav=document.getElementById('nav'),burger=document.getElementById('burger'),menu=document.getElementById('menu');
function onScroll(){nav.classList.toggle('scrolled',window.scrollY>12)}
window.addEventListener('scroll',onScroll,{passive:true});onScroll();
function setMenu(open){menu.classList.toggle('open',open);burger.setAttribute('aria-expanded',open);burger.setAttribute('aria-label',open?'Close menu':'Open menu')}
burger.addEventListener('click',function(){setMenu(!menu.classList.contains('open'))});
menu.addEventListener('click',function(e){if(e.target.closest('a'))setMenu(false)});
document.addEventListener('keydown',function(e){if(e.key==='Escape')setMenu(false)});
/* scroll reveal */
var items=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
  items.forEach(function(el){io.observe(el)});
}else{items.forEach(function(el){el.classList.add('in')})}
/* before/after slider */
var box=document.getElementById('ba-box'),h=document.getElementById('ba-h'),dragging=false;
function setPos(pct){pct=Math.max(0,Math.min(100,pct));box.style.setProperty('--p',pct+'%');h.setAttribute('aria-valuenow',Math.round(pct))}
function fromEvent(e){var r=box.getBoundingClientRect();setPos((e.clientX-r.left)/r.width*100)}
box.addEventListener('pointerdown',function(e){dragging=true;h.classList.add('drag');box.setPointerCapture(e.pointerId);fromEvent(e)});
box.addEventListener('pointermove',function(e){if(dragging)fromEvent(e)});
['pointerup','pointercancel'].forEach(function(t){box.addEventListener(t,function(){dragging=false;h.classList.remove('drag')})});
h.addEventListener('keydown',function(e){var v=parseFloat(h.getAttribute('aria-valuenow'));
  if(e.key==='ArrowLeft'){setPos(v-5);e.preventDefault()}else if(e.key==='ArrowRight'){setPos(v+5);e.preventDefault()}
  else if(e.key==='Home'){setPos(0)}else if(e.key==='End'){setPos(100)}});
/* contact form: opens email app. For Formspree, set action to your endpoint and remove data-mailto. */
var form=document.getElementById('form'),note=document.getElementById('fnote');
form.addEventListener('submit',function(e){
  if(!form.hasAttribute('data-mailto'))return;
  e.preventDefault();
  var d=new FormData(form),g=function(k){return (d.get(k)||'').toString().trim()};
  var body='Name: '+g('name')+'\nEmail: '+g('email')+'\nPhone: '+g('phone')+'\nBusiness: '+g('company')+'\nNeed: '+g('need')+'\n\n'+g('message');
  window.location.href='mailto:naz.digital.ag@outlook.com?subject='+encodeURIComponent('New enquiry from '+g('name'))+'&body='+encodeURIComponent(body);
  note.textContent='Your email app should open with the message ready to send. If it doesn’t, email us at naz.digital.ag@outlook.com.';
});
})();
