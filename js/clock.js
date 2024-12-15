window.onload = function() {
    // Todo el código aquí
};


//DOM
document.addEventListener('DOMContentLoaded', function() {
    let lastMessage = '';
    
    //Formatear números a dígitos
    function formatTime(num) {
        return num < 10 ? '0' + num : num;
    }

    //mostrar el mensaje en el popup
    function showPopup(message) {
        const popup = document.getElementById('popup-message');
        const popupText = document.getElementById('popup-text');
        
        if (popup && popupText) {
            popupText.textContent = message;
            popup.classList.add('show');
        } else {
            console.error("El popup o el texto del popup no se encontraron.");
        }
    }

    //Actualizar la hora, fecha y el mensaje
    function updateClock() {
        const now = new Date();
        const hours = formatTime(now.getHours());
        const minutes = formatTime(now.getMinutes());
        const seconds = formatTime(now.getSeconds());
        const date = formatTime(now.getDate()) + '/' + formatTime(now.getMonth() + 1) + '/' + now.getFullYear();

        //Hora y fecha en el DIV ID "current-time"
        const currentTimeElement = document.getElementById('current-time');
        currentTimeElement.textContent = `${hours}:${minutes}:${seconds}:${date}`;

        //Mensaje dependiendo de la hora
        let message = '';
        if (hours >= 0 && hours < 7) {
            message = 'Es hora de descansar. Apaga y sigue mañana';
        } else if (hours >= 7 && hours < 12) {
            message = 'Buenos días, desayuna fuerte y a darle al código';
        } else if (hours >= 12 && hours < 14) {
            message = 'Echa un rato más, pero no olvides comer';
        } else if (hours >= 14 && hours < 16) {
            message = 'Espero que hayas comido';
        } else if (hours >= 16 && hours < 18) {
            message = 'Buenas tardes, el último empujón';
        } else if (hours >= 18 && hours < 22) {
            message = 'Esto ya son horas extras... piensa en parar pronto';
        } else if (hours>= 22 && hours < 24) {
            message = 'Buenas noches, es hora de pensar en parar y descansar';
        }

        //Mostar en mensaje en popup solo si ha cambiado
        if (message !== lastMessage) {
            console.log(message);
            showPopup(message);
            lastMessage = message;
        }
    }

    //Actualizar el reloj cada segundo
    setInterval(updateClock, 1000);
    updateClock();
});