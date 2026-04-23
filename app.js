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
    
    // Inicializar event listeners después de renderizar
    initializeEventListeners();
}

/**
 * initializeEventListeners()
 * 
 * Configura todos los event listeners de la aplicación.
 */
function initializeEventListeners() {
    // Botones de navegación
    const navButtons = document.querySelectorAll('.nav-btn[data-section]');
    navButtons.forEach(button => {
        button.addEventListener('click', handleNavigation);
    });
    
    // Botones de selección de precios
    const buyButtons = document.querySelectorAll('.buy-btn[data-plan-name]');
    buyButtons.forEach(button => {
        button.addEventListener('click', handlePlanSelection);
    });
    
    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    console.log('✅ Event listeners inicializados correctamente');
}

/**
 * handleNavigation(event)
 * 
 * Maneja la navegación suave a las secciones.
 */
function handleNavigation(event) {
    const sectionId = event.target.dataset.section;
    const section = document.getElementById(sectionId);
    
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        console.log(`📍 Navegando a: ${sectionId}`);
    }
}

/**
 * handlePlanSelection(event)
 * 
 * Maneja la selección de un plan de precios.
 */
function handlePlanSelection(event) {
    const planName = event.target.dataset.planName;
    event.target.textContent = '✓ ¡Plan seleccionado!';
    event.target.disabled = true;
    event.target.style.backgroundColor = '#10b981';
    event.target.style.color = 'white';
    
    console.log(`💳 Plan seleccionado: ${planName}`);
    
    // Mostrar notificación
    showNotification(`¡Plan "${planName}" seleccionado! Te contactaremos pronto.`, 'success');
    
    // Restaurar botón después de 3 segundos
    setTimeout(() => {
        event.target.textContent = 'Seleccionar Plan';
        event.target.disabled = false;
        event.target.style.backgroundColor = '';
        event.target.style.color = '';
    }, 3000);
}

/**
 * handleContactForm(event)
 * 
 * Maneja el envío del formulario de contacto.
 */
function handleContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const inputs = form.querySelectorAll('input, textarea');
    
    // Simular envío del formulario
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '⏳ Enviando...';
    submitBtn.disabled = true;
    
    // Simular delay de envío
    setTimeout(() => {
        showNotification('✅ ¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.', 'success');
        form.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        console.log('📧 Formulario de contacto enviado');
    }, 1500);
}

/**
 * showNotification(message, type)
 * 
 * Muestra una notificación temporal en pantalla.
 */
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 0.5rem;
        font-weight: 600;
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    `;
    
    // Añadir keyframes si no existen
    if (!document.querySelector('style[data-notification]')) {
        const style = document.createElement('style');
        style.setAttribute('data-notification', 'true');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remover notificación después de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease-out reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Ejecutar main cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', main);
} else {
    main();
}

