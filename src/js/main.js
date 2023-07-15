document.addEventListener('DOMContentLoaded', () => {

  new TypeIt(".animated", {
    speed: 200,
    waitUntilVisible: true,
    loop: true,
  }).type("É prático!  ").delete(14).type("É rápido!  ").delete(14).type("É seguro!  ").go();
})




