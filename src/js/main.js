document.addEventListener('DOMContentLoaded', () => {

  new TypeIt(".animated", {
    speed: 500,
    waitUntilVisible: true,
    loop: true,
  }).type("É prático!").delete(10).type("É rápido!").delete(10).type("É seguro").go();
})




