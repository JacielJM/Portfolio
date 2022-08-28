// alert("Bienvenido a mi portfolio");
const email = document.querySelector('#email');

if (email.value != '') {
	validarEmail(email.value);
}

function validarEmail(campo) {
	const mensaje = campo.value;

	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (re.test(mensaje.toLowerCase())) {
		campo.style.borderBottomColor = 'green';
		campo.classList.remove('error');
	} else {
		campo.style.borderBottomColor = 'red';
		campo.classList.add('error');
	}
}
