const WA_NUMBER='1809489865';
let cart=[];
try{cart=JSON.parse(localStorage.getItem('compuredy_cart')||'[]');}catch(e){cart=[];}

function saveCart(){localStorage.setItem('compuredy_cart',JSON.stringify(cart));}
function addToCart(name,desc,price,label){
  if(cart.some(i=>i.name===name)){renderCart();openCart();toast('Ese plan ya está en tu carrito');return;}
  cart.push({name,desc,price,label});saveCart();renderCart();openCart();
}
function removeFromCart(i){cart.splice(i,1);saveCart();renderCart();}
function renderCart(){
  const body=document.getElementById('cartBody');
  document.getElementById('cartCount').textContent=cart.length;
  document.getElementById('cartTotal').textContent=cart.length;
  if(!cart.length){body.innerHTML='<div class="cs-empty"><i class="fas fa-cart-shopping" style="font-size:2.5rem;color:var(--line);margin-bottom:12px"></i><p>Tu carrito está vacío.<br>Agrega un plan para comenzar.</p></div>';return;}
  body.innerHTML=cart.map((it,i)=>`<div class="cs-item"><div class="cs-ic"><i class="fas fa-cube"></i></div><div class="cs-info"><b>${it.name}</b><span>${it.label}</span></div><button class="cs-rm" onclick="removeFromCart(${i})"><i class="fas fa-trash"></i></button></div>`).join('');
}
function openCart(){document.getElementById('cartSide').classList.add('open');document.getElementById('cartOverlay').classList.add('open');}
function closeCart(){document.getElementById('cartSide').classList.remove('open');document.getElementById('cartOverlay').classList.remove('open');}
function openCheckout(){
  if(!cart.length){toast('Agrega al menos un plan al carrito');return;}
  document.getElementById('orderItems').value=cart.map(i=>i.name+' ('+i.label+')').join(' | ');
  document.getElementById('checkoutForm').style.display='block';
  document.getElementById('successMsg').style.display='none';
  document.getElementById('checkoutModal').classList.add('open');
  document.getElementById('modalOverlay').classList.add('open');
}
function closeCheckout(){document.getElementById('checkoutModal').classList.remove('open');document.getElementById('modalOverlay').classList.remove('open');}
function orderByWhatsApp(){
  const f=document.getElementById('orderForm');
  const n=f.Nombre.value||'';const e=f.Empresa.value||'';const t=f.Telefono.value||'';const m=f.Email.value||'';const c=f.Comentario.value||'';
  let msg='Hola, quiero solicitar los siguientes planes:%0A';
  cart.forEach(i=>{msg+='- '+i.name+' ('+i.label+')%0A';});
  msg+='%0ANombre: '+n;if(e)msg+='%0AEmpresa: '+e;msg+='%0ATeléfono: '+t+'%0ACorreo: '+m;if(c)msg+='%0AComentario: '+c;
  window.open('https://wa.me/'+WA_NUMBER+'?text='+encodeURIComponent(decodeURIComponent(msg)),'_blank');
}
// interceptamos el submit para mostrar el mensaje de éxito y limpiar el carrito
document.getElementById('orderForm').addEventListener('submit',function(ev){
  // FormSubmit necesita el POST real; usamos fetch para no cambiar de página
  ev.preventDefault();
  const fd=new FormData(this);
  fetch(this.action,{method:'POST',body:fd,headers:{'Accept':'application/json'}})
    .then(()=>onOrderDone()).catch(()=>onOrderDone());
});
function onOrderDone(){
  document.getElementById('checkoutForm').style.display='none';
  document.getElementById('successMsg').style.display='block';
  cart=[];saveCart();renderCart();
}
// toast
function toast(t){
  let el=document.getElementById('toast');
  if(!el){el=document.createElement('div');el.id='toast';el.style.cssText='position:fixed;bottom:100px;left:50%;transform:translateX(-50%);background:var(--navy);color:#fff;padding:13px 24px;border-radius:100px;z-index:1000;font-weight:600;font-size:.9rem;box-shadow:var(--shadow-lg);opacity:0;transition:.3s';document.body.appendChild(el);}
  el.textContent=t;el.style.opacity='1';el.style.bottom='110px';
  clearTimeout(window._tt);window._tt=setTimeout(()=>{el.style.opacity='0';el.style.bottom='100px';},2600);
}
// FAQ
document.querySelectorAll('.faq-q').forEach(q=>{
  q.addEventListener('click',()=>{
    const f=q.parentElement;const a=f.querySelector('.faq-a');const open=f.classList.contains('open');
    document.querySelectorAll('.faq').forEach(x=>{x.classList.remove('open');x.querySelector('.faq-a').style.maxHeight=null;});
    if(!open){f.classList.add('open');a.style.maxHeight=a.scrollHeight+'px';}
  });
});
// cerrar menú móvil al clic
document.querySelectorAll('#menu a').forEach(a=>a.addEventListener('click',()=>document.getElementById('menu').classList.remove('open')));
renderCart();
