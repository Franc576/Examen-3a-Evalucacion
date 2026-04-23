import { renderBienvenida } from './Componentes/Bienvenida/Bienvenida.js';

/**
 * main()
 * 
 * Función principal de la aplicación.
 */
function main() {
    console.log('🚀 Iniciando aplicación de Piscina Escolar con Arquitectura Modular...');
    
    const appContainer = document.getElementById('app');
    
    if (!appContainer) {
        console.error('❌ Error: No se encontró el elemento #app en el HTML');
        return;
    }
    
    // El componente se encarga de inyectar sus propios estilos y devolver el HTML
    appContainer.innerHTML = renderBienvenida();
    
    console.log('✅ Aplicación modular renderizada correctamente');
}

// Ejecutar main cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', main);
} else {
    main();
}

