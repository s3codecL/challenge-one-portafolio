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

document.getElementById('theme-toggle').addEventListener('click', function() {
  if (document.body.getAttribute('data-theme') === 'dark') {
      document.body.setAttribute('data-theme', 'light'); // Cambia a tema claro
  } else {
      document.body.setAttribute('data-theme', 'dark'); // Cambia a tema oscuro
  }
});

const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', function() {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeToggleButton.textContent = isDark ? 'Cambiar a Oscuro' : 'Cambiar a Claro';
});

// Al cargar la página, establece el tema desde el almacenamiento local
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light'; // Tema claro por defecto
  document.body.setAttribute('data-theme', savedTheme);
  themeToggleButton.textContent = savedTheme === 'dark' ? 'Cambiar a Claro' : 'Cambiar a Oscuro';
});

// Actualiza el botón y el almacenamiento local cuando se cambia el tema
themeToggleButton.addEventListener('click', function() {
  const isDark = document.body.getAttribute('data-theme') === 'dark';
  const newTheme = isDark ? 'light' : 'dark';
  document.body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  themeToggleButton.textContent = isDark ? 'Cambiar a Oscuro' : 'Cambiar a Claro';
});
