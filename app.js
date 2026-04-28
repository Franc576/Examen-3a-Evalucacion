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

    // Activar lógica de inscripción (Persona 3 - Aitor)
    initInscripcion();

    // Activar lógica de contacto
    initContacto();

    console.log('✅ Aplicación modular renderizada correctamente');
}

/**
 * initContacto()
 * 
 * Maneja el envío del formulario de contacto principal.
 */
function initContacto() {
    const form = document.getElementById('main-contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.contacto-submit');
        const successMsg = document.getElementById('contact-success');
        
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';

        // Simulación de envío
        setTimeout(() => {
            submitBtn.textContent = '¡Enviado!';
            successMsg.classList.remove('hidden');
            form.reset();

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                successMsg.classList.add('hidden');
            }, 3000);
        }, 1500);
    });
}

/**
 * initInscripcion()
 * 
 * Maneja la apertura del modal de inscripción, el cierre y el envío del formulario.
 */
function initInscripcion() {
    const modal = document.getElementById('inscripcion-modal');
    const closeBtn = document.getElementById('close-modal');
    const form = document.getElementById('inscripcion-form');
    const successMsg = document.getElementById('form-success');
    const activitySelect = document.getElementById('actividad-select');
    const inscripcionButtons = document.querySelectorAll('.actividad-btn');
    const planButtons = document.querySelectorAll('.buy-btn');

    if (!modal) return;

    // Abrir modal al pulsar en cualquier botón de actividad
    inscripcionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.actividad-card');
            const activityName = card.querySelector('.actividad-nombre').textContent.toLowerCase();
            
            // Mapear nombre de actividad al valor del select
            if (activityName.includes('natación')) activitySelect.value = 'natacion';
            else if (activityName.includes('aquagym')) activitySelect.value = 'aquagym';
            else if (activityName.includes('infantil')) activitySelect.value = 'infantil';
            else if (activityName.includes('competición')) activitySelect.value = 'competicion';

            modal.querySelector('h2').textContent = 'Inscripción Actividades';
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Abrir modal al pulsar en cualquier botón de plan de precios (Persona 2 - Álvaro)
    planButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.price-card');
            const planName = card.querySelector('h3').textContent.toLowerCase();

            // Mapear nombre de plan al valor del select
            if (planName.includes('entrada')) activitySelect.value = 'entrada';
            else if (planName.includes('abono')) activitySelect.value = 'abono';
            else if (planName.includes('bono')) activitySelect.value = 'bono';

            modal.querySelector('h2').textContent = 'Contratación de Plan';
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Cerrar modal
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        // Resetear form tras un pequeño delay
        setTimeout(() => {
            form.reset();
            form.classList.remove('hidden');
            successMsg.classList.add('hidden');
        }, 300);
    };

    closeBtn.addEventListener('click', closeModal);
    
    // Cerrar al pulsar fuera del contenido
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Manejar envío del formulario
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simular envío
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';

        setTimeout(() => {
            // Recoger datos para el Excel
            const formData = {
                Fecha: new Date().toLocaleDateString(),
                Actividad: activitySelect.options[activitySelect.selectedIndex].text,
                Nombre: document.getElementById('nombre').value,
                Email: document.getElementById('email').value,
                Telefono: document.getElementById('telefono').value
            };

            // Exportar a Excel
            exportToExcel(formData);

            form.classList.add('hidden');
            successMsg.classList.remove('hidden');
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }, 1500);
    });
}

/**
 * exportToExcel(data)
 * 
 * Genera y descarga un archivo Excel con los datos de la inscripción.
 */
function exportToExcel(data) {
    if (typeof XLSX === 'undefined') {
        console.error('❌ Error: La librería SheetJS (XLSX) no está cargada');
        return;
    }

    // Crear hoja de trabajo
    const ws = XLSX.utils.json_to_sheet([data]);
    
    // Crear libro de trabajo
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Inscripción");

    // Generar archivo y descargar
    const fileName = `Inscripcion_${data.Nombre.replace(/\s+/g, '_')}.xls`;
    XLSX.writeFile(wb, fileName);
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
