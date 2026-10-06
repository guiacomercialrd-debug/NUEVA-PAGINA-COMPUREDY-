// Compuredy - navegación móvil y año dinámico
(function(){
  // marcar enlace activo según la página actual
  var path=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.menu>li>a').forEach(function(a){
    var href=a.getAttribute('href');
    if(href===path) a.classList.add('active');
  });
  var burger=document.querySelector('.burger');
  var menu=document.querySelector('.menu');
  if(burger&&menu){
    burger.addEventListener('click',function(){menu.classList.toggle('open');});
    menu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click',function(){ if(window.innerWidth<=900 && !a.closest('.has-sub')) menu.classList.remove('open'); });
    });
  }
  var y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
  // formulario de contacto -> abrir correo
  var f=document.getElementById('contactForm');
  if(f){
    f.addEventListener('submit',function(e){
      e.preventDefault();
      var n=encodeURIComponent(f.nombre.value||'');
      var em=encodeURIComponent(f.email.value||'');
      var tel=encodeURIComponent(f.telefono.value||'');
      var ser=encodeURIComponent(f.servicio.value||'');
      var m=encodeURIComponent(f.mensaje.value||'');
      var body='Nombre: '+n+'%0D%0ACorreo: '+em+'%0D%0ATeléfono: '+tel+'%0D%0AInterés: '+ser+'%0D%0A%0D%0A'+m;
      window.location.href='mailto:inversionescompuredysrl@compuredy.com?subject=Solicitud%20desde%20la%20web%20-%20'+ser+'&body='+body;
    });
  }
})();
