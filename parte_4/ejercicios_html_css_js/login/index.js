function mostrarPorConsola(){
    let formulario = document.forms['login'];
    let datos = `Correo = ${formulario['email'].value} \nContaseña = ${formulario['password'].value}`;
    alert(datos);
}