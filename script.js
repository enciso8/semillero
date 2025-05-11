
// Menú desplegable:

        const menuLines = document.getElementById('menu-lines');
        const menuDrop = document.querySelector('.menu-drop');


        menuDrop.style.display = 'none';


        menuLines.addEventListener('click', function() {
            if (menuDrop.style.display === 'none' || menuDrop.style.display === '') {
                menuDrop.style.display = 'block';
            } else {
                menuDrop.style.display = 'none';
            }
        });


        document.addEventListener('click', function(event) {

            if (!menuDrop.contains(event.target) && !menuLines.contains(event.target)) {
                menuDrop.style.display = 'none';
            }
        });




// Imágenes Promociones:

        const imagePaths = [
            'imagenes/Ice Cream Fiesta.jpg',
            'imagenes/Restaurante La Nueva.png',
            'imagenes/Fast Food.jpg',
            'imagenes/Pizza.png',
            'imagenes/Bembos.jpg',
            'imagenes/Baskin Robbins.jpg',
            'imagenes/La Frida.png',
            'imagenes/Helados.jpg',
            'imagenes/Burger.png'
        ];


        document.addEventListener('DOMContentLoaded', () => {
            const container = document.getElementById('scrollContainer');

            function getCompanyNameFromPath(path) {
                const fileName = path.split('/').pop(); // Ej: "imagen-1.jpg"
                const namePart = fileName.split('.')[0]; // Ej: "imagen-1"
                const companyName = namePart.replace(/imagenes/, 'Empresa '); // Ej: "Empresa 1"
                return companyName.charAt(0).toUpperCase() + companyName.slice(1); // Capitaliza
            }


            imagePaths.forEach((path, index) => {
                const imageSection = document.createElement('div');
                imageSection.classList.add('image-section');

//  ENCABEZADO por imagen
                const topBar = document.createElement('div');
                topBar.classList.add('top-bar');
                topBar.innerHTML = `
    <div class="company-info">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
        </svg>&nbsp;&nbsp;
        <span class="company-name">${getCompanyNameFromPath(path)}</span>
    </div>
    <div class="favorite-icon icon-star" id="favoriteIcon-${index}">
        ⭐ <span class="favorite-count" id="favoriteCount-${index}">0</span>
        <span class="favorite-label">Calificar</span>
    </div>
`;



                imageSection.appendChild(topBar);

                const favoriteIcon = topBar.querySelector(`#favoriteIcon-${index}`);
                const favoriteCount = topBar.querySelector(`#favoriteCount-${index}`);
                const favoriteKey = `image-${index}-favorite`;
                let favClicks = parseInt(localStorage.getItem(favoriteKey)) || 0;
                favoriteCount.textContent = favClicks;

                favoriteIcon.addEventListener('click', () => {
                    favClicks++;
                    favoriteCount.textContent = favClicks;
                    localStorage.setItem(favoriteKey, favClicks);
                });



                const img = document.createElement('img');
                img.src = path;
                img.alt = `Imagen ${index + 1}`;
                imageSection.appendChild(img);


                const menuLike = document.createElement('div');
                menuLike.classList.add('menu-like');


                // ['like', 'dislike', 'contact'].forEach(type => {
                //   const button = document.createElement('div');
                //   button.classList.add(`${type}-btn`);
                //   button.innerHTML = `
                //     <div class="icon-row">
                //       <span class="icon">${type === 'like' ? '❤️' : type === 'dislike' ? '👎🏻' : '📱'}</span>
                //       <span class="count">0</span>
                //     </div>
                //     <div class="label">${type === 'like' ? 'Me gusta' : type === 'dislike' ? 'No me gusta' : 'Contactar'}</div>
                //   `;
                //   button.addEventListener('click', () => increment(button, type, index));
                //   menuLike.appendChild(button);
                // }); 



                ['like', 'dislike', 'contact'].forEach(type => {
                    const key = `image-${index}-${type}`;
                    const savedCount = localStorage.getItem(key) || 0;

                    const button = document.createElement('div');
                    button.classList.add(`${type}-btn`);
                    button.innerHTML = `
                <div class="icon-row">
                <span class="icon">${type === 'like' ? '❤️' : type === 'dislike' ? '👎🏻' : `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" class="bi bi-whatsapp" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                    </svg>`}</span>
                <span class="count">${savedCount}</span>
                </div>
                <div class="label">${type === 'like' ? 'Me gusta' : type === 'dislike' ? 'No me gusta' : 'Contactar'}</div>
            `;
                    button.addEventListener('click', () => increment(button, type, index));
                    menuLike.appendChild(button);
                });




                imageSection.appendChild(menuLike);
                container.appendChild(imageSection);
            });


            // Espacio final:

            const scrollSpacer = document.createElement('div');
            scrollSpacer.style.height = '140px';
            scrollSpacer.style.flexShrink = '0';
            container.appendChild(scrollSpacer);

        });

        function increment(button, type, index) {
            const countDiv = button.querySelector('.count');
            let current = parseInt(countDiv.textContent, 10);
            current++;
            countDiv.textContent = current;

            const key = `image-${index}-${type}`;
            localStorage.setItem(key, current);
        }







// Menú


            document.getElementById('categoriaLink').addEventListener('click', function(e) {
            e.preventDefault(); // Evita la navegación
            const submenu = this.parentElement.querySelector('.dropdown-content');

        // Oculta otros submenús si están abiertos
            document.querySelectorAll('.dropdown-content').forEach(menu => {
                if (menu !== submenu) {
                    menu.classList.remove('show');
                }
            });

        // Alterna visibilidad del submenú actual
            submenu.classList.toggle('show');
        });

        // Cierra submenús al hacer clic fuera
            document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
                    document.querySelectorAll('.dropdown-content').forEach(menu => {
                    menu.classList.remove('show');
                });
            }
        });



// Menú / Categorías

function mostrarCategorias() {
      const lista = document.getElementById("categorias");
      lista.style.display = (lista.style.display === "block") ? "none" : "block";
    }

    


    /// Login / Iniciar Sesion


 
    const usuarioCorrecto = "admin";
    const claveCorrecta = "1234";

    document.getElementById("loginForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const usuario = document.getElementById("usuario").value;
      const clave = document.getElementById("clave").value;

      if (usuario === usuarioCorrecto && clave === claveCorrecta) {
        alert("¡Login exitoso!");
        window.location.href = "index.html";
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    })
