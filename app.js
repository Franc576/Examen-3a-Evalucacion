/**
 * APP.JS
 * ===============================================
 * Punto de entrada de la aplicación MVC
 * 
 * REGLA FUNDAMENTAL: Este es el ÚNICO archivo donde se puede:
 * - Usar document.querySelector / getElementById
 * - Usar innerHTML
 * - Usar appendChild
 * - Manipular el DOM en general
 * 
 * PROHIBIDO: Manipular el DOM en components.js o en cualquier otro lugar
 */


/**
 * main()
 * 
 * Función principal de la aplicación.
 * 
 * Responsabilidades:
 * 1. Obtener el contenedor principal (#app)
 * 2. Llamar a los componentes puros (que devuelven HTML como String)
 * 3. Insertar el HTML en el DOM usando innerHTML
 * 4. Gestionar eventos del DOM (clicks, cambios, etc.)
 * 
 * IMPORTANTE: main() es el guardián del DOM. Todo pasa por aquí.
 */
function main() {
    console.log('🚀 Iniciando aplicación de Piscina Escolar...');
    
    // Obtener el contenedor principal
    const appContainer = document.getElementById('app');
    
    // Validar que el contenedor existe
    if (!appContainer) {
        console.error('❌ Error: No se encontró el elemento #app en el HTML');
        return;
    }
    
    // Llamar al componente renderBienvenida() que devuelve HTML como String
    const htmlBienvenida = renderBienvenida();
    
    // Insertar el HTML en el DOM (esta es la ÚNICA manipulación del DOM)
    appContainer.innerHTML = htmlBienvenida;
    
    console.log('✅ Página de bienvenida renderizada correctamente');
    
    // Aquí irían los event listeners futuros
    // Ejemplo: appContainer.querySelector('button').addEventListener('click', handleClick);
}


/**
 * Evento de carga del documento
 * 
 * Cuando el HTML está completamente cargado, ejecutamos main()
 * Esto asegura que:
 * - Todos los scripts están cargados
 * - El DOM está disponible
 * - El #app existe
 */
document.addEventListener('DOMContentLoaded', function() {
    main();
});


/**
 * FLUJO DE LA APLICACIÓN:
 * 
 * 1. index.html carga en el navegador
 * 2. Se cargan components.js y app.js
 * 3. El evento DOMContentLoaded se dispara
 * 4. Se ejecuta main()
 * 5. main() llama a renderBienvenida() de components.js
 * 6. renderBienvenida() devuelve un String de HTML
 * 7. main() inserta ese String en el DOM usando innerHTML
 * 8. El usuario ve la página renderizada
 */
