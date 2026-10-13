/* ENERSMART - comportamiento de la página */
(function () {
  "use strict";

  // 1. Datos de configuración (js/config.js)
  document.querySelectorAll("[data-app-link]").forEach(function (a) {
    a.href = ENERSMART.appUrl;
    a.target = "_blank";
    a.rel = "noopener";
  });
  var correo = document.getElementById("dato-correo");
  if (correo) correo.textContent = ENERSMART.correo;
  var ciudad = document.getElementById("dato-ciudad");
  if (ciudad) ciudad.textContent = ENERSMART.ciudad;
  if (ENERSMART.whatsapp) {
    var fila = document.getElementById("fila-wa");
    var wa = document.getElementById("dato-wa");
    fila.hidden = false;
    wa.href = "https://wa.me/" + ENERSMART.whatsapp;
    wa.target = "_blank";
    wa.rel = "noopener";
  }
  document.getElementById("anio").textContent = new Date().getFullYear();

  // 2. Menú en celular
  var boton = document.querySelector(".menu-boton");
  var menu = document.getElementById("menu");
  function cerrar() {
    menu.classList.remove("abierto");
    boton.setAttribute("aria-expanded", "false");
    boton.setAttribute("aria-label", "Abrir menú");
  }
  boton.addEventListener("click", function () {
    var abierto = menu.classList.toggle("abierto");
    boton.setAttribute("aria-expanded", String(abierto));
    boton.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
  });
  menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", cerrar); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") cerrar(); });

  // 3. Calculadora de la portada: kWh/mes = (W x horas x 30) / 1000
  var pw = document.getElementById("pw");
  var ph = document.getElementById("ph");
  var pp = document.getElementById("pp");
  function pesos(n) { return "$" + Math.round(n).toLocaleString("es-CO"); }
  function calcular() {
    var w = Math.max(parseFloat(pw.value) || 0, 0);
    var h = Math.min(Math.max(parseFloat(ph.value) || 0, 0), 24);
    var p = Math.max(parseFloat(pp.value) || 0, 0);
    var kwh = (w * h * 30) / 1000;
    var mes = kwh * p;
    document.getElementById("r-kwh").textContent = kwh.toLocaleString("es-CO", { maximumFractionDigits: 1 });
    document.getElementById("r-mes").textContent = pesos(mes);
    document.getElementById("r-anio").textContent = pesos(mes * 12);
  }
  [pw, ph, pp].forEach(function (el) { el.addEventListener("input", calcular); });
  calcular();

  // 4. Formulario: envía el mensaje a tu correo con Formspree
  var form = document.getElementById("formulario");
  var estado = document.getElementById("estado");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.nombre.value.trim() || !form.email.value.trim() || !form.mensaje.value.trim()) {
      estado.textContent = "Completa tu nombre, tu correo y tu mensaje para poder enviarlo.";
      return;
    }
    estado.textContent = "Enviando...";
    fetch(ENERSMART.formulario, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    }).then(function (r) {
      if (!r.ok) throw new Error();
      form.reset();
      estado.textContent = "¡Gracias! Recibimos tu mensaje y te responderemos pronto.";
    }).catch(function () {
      estado.textContent = "No se pudo enviar. Intenta de nuevo o escríbenos a " + ENERSMART.correo + ".";
    });
  });
})();
