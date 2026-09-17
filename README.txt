===========================================================
  SITIO WEB - INVERSIONES COMPUREDY S.R.L
  Estructura del proyecto e instrucciones
===========================================================

ESTRUCTURA
-----------------------------------------------------------
  mi-pagina/
   |- index.html            <-- Pagina principal (va en la RAIZ)
   |- README.txt            <-- Este archivo
   |- src/
       |- css/
       |    |- styles.css        <-- Estilos de la pagina
       |    |- fonts.css         <-- Tipografias (Inter y Sora)
       |    |- fontawesome.css   <-- Estilos de los iconos
       |- js/
       |    |- script.js         <-- Funciones (carrito, menu, FAQ)
       |- images/
       |    |- logo.png          <-- Logo de la marca
       |    |- favicon.jpeg      <-- Icono de la pestana
       |- fonts/                 <-- Archivos de tipografias (local)
       |- webfonts/              <-- Archivos de iconos (local)

  NOTA: 'fonts/' y 'webfonts/' son necesarios para que las
  tipografias y los iconos funcionen SIN internet. No los borres.


TODO ES LOCAL
-----------------------------------------------------------
  El diseno NO depende de internet: estilos, tipografias e
  iconos estan incluidos. Solo usan internet las acciones en
  linea (WhatsApp, boton de Prueba Gratis y envio de correos),
  lo cual es normal en cualquier sitio web.


SUBIR A VERCEL
-----------------------------------------------------------
  El error 404 ocurre si el index.html NO queda en la raiz.

  OPCION A (arrastrar y soltar):
    1. Descomprime este ZIP.
    2. Entra a la carpeta 'mi-pagina'.
    3. Selecciona index.html, README.txt y la carpeta 'src'
       (NO la carpeta 'mi-pagina' que los contiene).
    4. Arrastralos a Vercel (New Project > Deploy).

  OPCION B (GitHub):
    1. Sube index.html y la carpeta 'src' a la RAIZ del repo.
    2. Vercel > New Project > Framework Preset: "Other".
    3. Root Directory: "/". Sin comando de build. Deploy.

  Es un sitio estatico: no requiere build. Si pide
  "Output Directory", dejalo vacio o pon un punto (.).


SUBIR A UN HOSTING NORMAL (cPanel)
-----------------------------------------------------------
  Sube index.html y la carpeta 'src' completa dentro de
  'public_html', manteniendo la misma estructura.


CORREO DE COMPRAS Y FORMULARIOS
-----------------------------------------------------------
  Se envian con el servicio gratuito FormSubmit a:
  inversionescompuredysrl@compuredy.com
  La PRIMERA vez llegara un correo para CONFIRMAR la direccion
  (un clic, una sola vez). Despues llegan automaticamente.


DATOS CONFIGURADOS
-----------------------------------------------------------
  - Prueba Gratis  -> https://demo.contransporte.com
  - WhatsApp / chat en vivo -> numero configurado
  - Telefono -> +1 (809) 480 1818
  - Correos  -> inversionescompuredysrl@compuredy.com
                infocontransporte@gmail.com
===========================================================
