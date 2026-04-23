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
    
    // Después de renderizar, inicializar event listeners
    initializeEventListeners();
    
    console.log('✅ Aplicación modular renderizada correctamente');
}

/**
 * initializeEventListeners()
 * 
 * Configura los event listeners para los botones y elementos interactivos.
 */
function initializeEventListeners() {
    // Botones CTA de la sección de bienvenida
    const ctaBtns = document.querySelectorAll('.cta-btn');
    ctaBtns.forEach(btn => {
        btn.addEventListener('click', handleCTAClick);
    });

    // Botones de navegación
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', handleNavClick);
    });

    console.log('✅ Event listeners inicializados');
}

/**
 * handleCTAClick(event)
 * 
 * Maneja los clics en los botones de Call To Action.
 */
function handleCTAClick(event) {
    const btn = event.target;
    const text = btn.textContent;
    
    if (text.includes('Actividades')) {
        console.log('📋 Navegando a Actividades...');
        alert('📋 Sección de Actividades - Próximamente disponible');
    } else if (text.includes('Horarios')) {
        console.log('⏰ Navegando a Horarios...');
        alert('⏰ Sección de Horarios - Próximamente disponible');
    }
}

/**
 * handleNavClick(event)
 * 
 * Maneja los clics en los botones de navegación.
 */
function handleNavClick(event) {
    const btn = event.target;
    const text = btn.textContent.trim();
    
    console.log(`🔗 Click en navegación: ${text}`);
    
    switch(text) {
        case 'Horarios':
            alert('⏰ Sección de Horarios - Próximamente disponible\n\nLa tabla de horarios de la piscina estará aquí.');
            break;
        case 'Precios':
            alert('💰 Sección de Precios - Próximamente disponible\n\nConoce nuestras tarifas y planes de suscripción.');
            break;
        case 'Actividades':
            alert('🏊 Sección de Actividades - Próximamente disponible\n\nExplora nuestras clases de natación y actividades acuáticas.');
            break;
        case 'Contacto':
            alert('📞 Sección de Contacto - Próximamente disponible\n\nEnvíanos tus dudas: info@piscina-escolar.edu');
            break;
    }
}

// Ejecutar main cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', main);
} else {
    main();
}


