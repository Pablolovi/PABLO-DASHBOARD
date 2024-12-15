//DOM
document.addEventListener('DOMContentLoaded', function () {
    const generateButton = document.getElementById('generate-password');
    const generatedPasswordElement = document.getElementById('generated-password');

    //Caracteres posibles
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()-_=+";

    //Función para generar la  contraseña
    function generatePassword(length) {
        if (length < 12 || length > 50) {
            console.log('La longitud debe ser entre 12 y 50 caracteres');
            return null;
        }

        let password = '';

        //Asegurar que contenga al menos un carácter de cada tipo
        password += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
        password += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
        password += numbers.charAt(Math.floor(Math.random() * numbers.length));
        password += symbols.charAt(Math.floor(Math.random() * symbols.length));

        //Generar el resto de la contraseña
        let allCharacters = uppercase + lowercase + numbers + symbols;
        for (let i = password.length; i < length; i++) {
            password += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
        }

        //Mezclar la contraseña para que no esté en un orden fijo
        password = password.split('').sort(() => Math.random() - 0.5).join('');
        return password;
    }

    //EventListener para el botón de generar contraseña
    generateButton.addEventListener('click', function () {
        const lengthInput = prompt('Introduce una secuencia de carácteres entre 12 y 50):');
        const length = parseInt(lengthInput, 10);

        // Validar que el input tiene al menos 12 y como máximo 50 caracteres
        if (!isNaN(length) && length >= 12 && length <= 50) {
            const password = generatePassword(length);  // Uso de la función correctamente

            if (password) {  // Verificar si la contraseña se generó correctamente
                console.log(`Contraseña generada: ${password}`);
                generatedPasswordElement.textContent = password;  // Mostrar la contraseña generada en el DOM
            }
        } else {
            console.log('Por favor, ingresa un número válido entre 12 y 50');
            generatedPasswordElement.textContent = 'Error: La longitud debe ser entre 12 y 50 caracteres';
        }
    });
});