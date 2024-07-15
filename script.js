/* Boton claro-oscuro */
document.addEventListener('DOMContentLoaded', function() {
  var darkModeToggle = document.getElementById('dark-mode-toggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function() {
      /*console.log("Botón clickeado");  // Confirmación en la consola
      alert("Botón clickeado");  // Confirmación visible */
      document.body.classList.toggle('dark-mode');
      document.querySelector('.container__principal').classList.toggle('dark-mode');
    });
  } else {
    console.log("El botón no fue encontrado");
    alert("El botón no fue encontrado");
  }
});


const colors = ["#F8F6F4", "#E3F4F4", "#D2E9E9", "#C4DFDF", "#B3C8CF", "#BED7DC", "#F1EEDC", "#E5DDC5"];

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }


  const divs = document.getElementsByClassName("skills__box");

// console.log("divs", divs);


// window.onload = function() {
//     for (let item of divs) {
//             console.log("entro for each");
//         console.log(item);
//         item.querySelector('ul').style.background = getRandomColor();
//     }
//   }

/*
    (function() {
        emailjs.init("service_x98fezc"); // Replace 'your-user-id' with your EmailJS user ID
    })();
    
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_x98fezc', 'your-template-id', this)
            .then(function() {
                alert('Mensaje enviado con éxito!');
            }, function(error) {
                alert('Error al enviar el mensaje: ' + error.text);
            });
    });
*/


