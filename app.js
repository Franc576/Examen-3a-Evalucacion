import { renderBienvenida } from './Componentes/Bienvenida/Bienvenida.js';

/**
 * main()
 * 
 * Función principal de la aplicación.
 * Renderiza la página y activa la navegación funcional.
 */
function main() {
    console.log('🚀 Iniciando aplicación de Piscina Escolar con Arquitectura Modular...');

    const appContainer = document.getElementById('app');

    if (!appContainer) {
        console.error('❌ Error: No se encontró el elemento #app en el HTML');
        return;
    }

    // Renderizar todos los componentes
    appContainer.innerHTML = renderBienvenida();

    // Activar navegación con scroll suave
    initNavigation();

    console.log('✅ Aplicación modular renderizada correctamente');
}

/**
 * initNavigation()
 * 
 * Añade event listeners a los botones del nav para
 * hacer scroll suave hacia las secciones correspondientes.
 */
function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn[data-target]');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                console.warn(`⚠️ Sección #${targetId} no encontrada`);
            }
        });
    });
}

// Ejecutar main cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', main);
} else {
    main();
}
