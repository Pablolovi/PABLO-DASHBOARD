//DOM
document.addEventListener('DOMContentLoaded', function () {
    const linkTitleInput = document.getElementById('link-title');
    const linkUrlInput = document.getElementById('link-url');
    const addLinkButton = document.getElementById('add-link');
    const linksList = document.getElementById('links-list');

    //Función para añadir un enlace al DOM
    function addLinkToDom(title, url) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = url;
        a.textContent = title;
        a.target = '_blank';
        li.appendChild(a);

        //Verificar adición al DOM
        console.log(`Añadiendo enlace al DOM: ${title} - ${url}`);

        //Botón para eliminar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = function () {
            li.remove();
            removeLinkFromLocalStorage(title);
        };
        li.appendChild(deleteButton);
        linksList.appendChild(li);
    }

  // Función para guardar enlaces en LocalStorage
  function saveLinkToLocalStorage(title, url) {
    const links = JSON.parse(localStorage.getItem('links')) || [];
    links.push({ title, url });
    localStorage.setItem('links', JSON.stringify(links));

    //Verificar guardado en LocalStorage
    console.log(`Guardando enlace en LocalStorage: ${title} - ${url}`);
  }

  //Función para eliminar enlaces de LocalStorage
  function removeLinkFromLocalStorage(title) {
    let links = JSON.parse(localStorage.getItem('links')) || [];
    links = links.filter(link => link.title !== title);
    localStorage.setItem('links', JSON.stringify(links));
    
    //Verificar eliminación en LocalStorage
    console.log(`Enlace eliminado de LocalStorage: ${title}`);
  }

  //Cargar enlaces desde LocalStorage al cargar página
  function loadLinksFromLocalStorage() {
    const links = JSON.parse(localStorage.getItem('links')) || [];
    links.forEach(link => {
        addLinkToDom(link.title, link.url);
    });

    //Verificar enlaces cargados desde LocalStorage
    console.log(`Enlaces cargados desde LocalStorage: ${links}`);
  }

  //Event Listener para nuevos enlaces
  addLinkButton.addEventListener('click', function () {
    const title = linkTitleInput.value;
    const url = linkUrlInput.value;
    if (title && url) {
        addLinkToDom(title, url);
        saveLinkToLocalStorage(title, url);
        linkTitleInput.value = '';
        linkUrlInput.value = '';

        // Console log para verificar que el enlace se ha añadido
        console.log(`Enlace añadido: ${title} - ${url}`);
      } else {
        // Console log para verificar cuando no se añade un enlace por inputs vacíos
        console.log('El título o la URL están vacíos. No se añadió ningún enlace.');
      }
    });

  //Cargar enlaces guardados al inicio
  loadLinksFromLocalStorage();
});