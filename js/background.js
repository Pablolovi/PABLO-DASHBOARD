//URL imagenes de fondo
document.addEventListener("DOMContentLoaded", function() {
    function changeBackground() {
        const backgroundImages = [
            'https://images.pexels.com/photos/29764256/pexels-photo-29764256/free-photo-of-paisaje-geometrico-surrealista-con-reflejos.jpeg?auto=compress&cs=tinysrgb&w=600',  // Imagen 1
                'https://images.pexels.com/photos/29764257/pexels-photo-29764257/free-photo-of-formas-geometricas-tridimensionales-dinamicas-con-colores-vibrantes.jpeg?auto=compress&cs=tinysrgb&w=600',  // Imagen 2
                'https://images.pexels.com/photos/29764260/pexels-photo-29764260/free-photo-of-diseno-de-arte-abstracto-geometrico-3d-vibrante.jpeg?auto=compress&cs=tinysrgb&w=600',  // Imagen 3
                'https://images.pexels.com/photos/29703882/pexels-photo-29703882.jpeg?auto=compress&cs=tinysrgb&w=600',  // Imagen 4
                'https://images.pexels.com/photos/29703884/pexels-photo-29703884.jpeg?auto=compress&cs=tinysrgb&w=600',  // Imagen 5
                'https://images.pexels.com/photos/29708305/pexels-photo-29708305/free-photo-of-arte-abstracto-dinamico-con-movimiento-fluido-en-tonos-rojos.jpeg?auto=compress&cs=tinysrgb&w=600',  // Imagen 6
                'https://images.pexels.com/photos/29708311/pexels-photo-29708311.jpeg?auto=compress&cs=tinysrgb&w=600',  // Imagen 7
                'https://images.pexels.com/photos/6985048/pexels-photo-6985048.jpeg?auto=compress&cs=tinysrgb&w=600',  // Imagen 8
                'https://images.pexels.com/photos/7135037/pexels-photo-7135037.jpeg?auto=compress&cs=tinysrgb&w=600',  // Imagen 9
                'https://images.pexels.com/photos/4252667/pexels-photo-4252667.jpeg?auto=compress&cs=tinysrgb&w=600'   // Imagen 10
            ];

            const randomIndex = Math.floor(Math.random() * backgroundImages.length);
            const selectedImage = backgroundImages[randomIndex];
            
            const mainContainer = document.querySelector('.main-container');
            
            if (mainContainer) {
                mainContainer.style.backgroundImage = `url('${selectedImage}')`;
                mainContainer.style.backgroundSize = 'cover';
                mainContainer.style.backgroundPosition = 'center';
                mainContainer.style.backgroundRepeat = 'no-repeat';
            } else {
                document.body.style.backgroundImage = `url('${selectedImage}')`;
                document.body.style.backgroundSize = 'cover';
                document.body.style.backgroundPosition = 'center';
                document.body.style.backgroundRepeat = 'no-repeat';
            }

            console.log(`background cambió a: ${selectedImage}`)
    }

    //cambia la imagen al cargar la página
    changeBackground();

    //Cambiar la imagen cada 15 segundos
    setInterval(changeBackground, 15000);
});