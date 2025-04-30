// Inicializar AOS (Animate on Scroll)
AOS.init({
  duration: 800,
  once: true
});

// Función para mostrar el spinner al enviar el formulario
document.addEventListener('DOMContentLoaded', function() {
  const submitButton = document.getElementById('submitButton');
  const spinner = document.getElementById('spinner');
  
  submitButton.addEventListener('click', (e) => {
    e.preventDefault(); // Evita el envío automático del formulario
    spinner.style.display = 'block'; // Muestra el spinner

    // Simula un proceso de envío de datos (2 segundos)
    setTimeout(() => {
      spinner.style.display = 'none'; // Oculta el spinner
      alert('¡Cuenta creada con éxito!'); // Muestra mensaje de éxito
      // Aquí podrías redirigir al usuario a un dashboard u otra página
    }, 2000);
  });
});

// Inicializa Google Identity Services
google.accounts.id.initialize({
  client_id: "676544046017-sd497p0gqgr75v2pa53al6qt3posrohi.apps.googleusercontent.com",
  callback: (response) => {
    console.log("Token de Google:", response.credential);
    alert('Inicio de sesión exitoso con Google.');
  }
});

// Renderiza el botón de Google Sign-In
google.accounts.id.renderButton(
  document.getElementById("googleSignInButton"),
  { theme: "outline", size: "large" }
);
