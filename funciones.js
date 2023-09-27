document.querySelector('.welcome-message').addEventListener('click', function() {
    this.classList.add('hidden');
    setTimeout(() => {
        this.style.display = 'none';
    }, 500); 
});

  
function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = "";
      muñeco.src = "encriptado.png";
    } else {
      muñeco.src = "NotFound.jpg";
      tituloMensaje.textContent = "Inserte un mensaje";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("ATENCION", "ingrese un texto", "warning");
    }
  }
  
  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "desencriptar.png";
      } else {
        muñeco.src = "NotFound.jpg";
        tituloMensaje.textContent = "Inserte un mensaje";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("ATENCION", "ingrese un texto", "warning");
      }
      
  }