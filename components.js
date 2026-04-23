/**
 * COMPONENTS.JS
 * ===============================================
 * Módulo de componentes reutilizables
 * 
 * REGLA FUNDAMENTAL: TODAS las funciones aquí deben ser PURAS
 * - No tocan el DOM en absoluto
 * - No usan document.querySelector, appendChild, innerHTML, etc.
 * - Solo devuelven String de HTML
 * - El estado debe pasarse como parámetros
 * 
 * IMPORTANTE: La lógica de renderizado en el DOM ocurre SOLO en app.js
 */


/**
 * renderBienvenida()
 * 
 * Función pura que genera el HTML de bienvenida
 * 
 * @returns {String} HTML de bienvenida sin tocar el DOM
 * 
 * Características:
 * - Es una función PURA (no tiene efectos secundarios)
 * - Solo devuelve un String con HTML
 * - No accede ni modifica el DOM
 * - El contenido es estático en este ejemplo
 */
function renderBienvenida() {
    return `
        <header style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 3rem 1rem; text-align: center;">
            <h1>🏊 Piscina Escolar del Centro</h1>
            <p style="margin-top: 0.5rem; font-size: 1.1rem; opacity: 0.95;">
                ¡Bienvenido! Aquí encontrarás toda la información sobre nuestras instalaciones
            </p>
        </header>

        <nav style="background-color: #2c3e50; padding: 1rem; text-align: center;">
            <button style="
                background-color: #3498db; 
                color: white; 
                border: none; 
                padding: 0.7rem 1.5rem; 
                margin: 0.5rem; 
                border-radius: 4px; 
                cursor: pointer; 
                font-size: 1rem;
            ">Horarios</button>
            <button style="
                background-color: #3498db; 
                color: white; 
                border: none; 
                padding: 0.7rem 1.5rem; 
                margin: 0.5rem; 
                border-radius: 4px; 
                cursor: pointer; 
                font-size: 1rem;
            ">Precios</button>
            <button style="
                background-color: #3498db; 
                color: white; 
                border: none; 
                padding: 0.7rem 1.5rem; 
                margin: 0.5rem; 
                border-radius: 4px; 
                cursor: pointer; 
                font-size: 1rem;
            ">Actividades</button>
            <button style="
                background-color: #3498db; 
                color: white; 
                border: none; 
                padding: 0.7rem 1.5rem; 
                margin: 0.5rem; 
                border-radius: 4px; 
                cursor: pointer; 
                font-size: 1rem;
            ">Contacto</button>
        </nav>

        <main style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
            <section style="
                background: white; 
                padding: 2rem; 
                border-radius: 8px; 
                box-shadow: 0 2px 8px rgba(0,0,0,0.1); 
                margin-bottom: 2rem;
            ">
                <h2 style="color: #667eea; margin-bottom: 1rem;">¿Quiénes somos?</h2>
                <p style="line-height: 1.6; color: #555;">
                    Somos la piscina del colegio, un espacio dedicado a promover el deporte acuático 
                    y el bienestar de todos nuestros estudiantes. Contamos con instalaciones modernas 
                    y monitores especializados para garantizar la seguridad y diversión de todos.
                </p>
            </section>

            <section style="
                background: white; 
                padding: 2rem; 
                border-radius: 8px; 
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            ">
                <h2 style="color: #667eea; margin-bottom: 1rem;">Próximamente...</h2>
                <p style="color: #999;">
                    Explora las diferentes secciones para conocer horarios, precios, actividades y contacto.
                </p>
            </section>
        </main>

        <footer style="
            background-color: #2c3e50; 
            color: white; 
            text-align: center; 
            padding: 2rem; 
            margin-top: 3rem;
        ">
            <p>&copy; 2026 Piscina Escolar. Todos los derechos reservados.</p>
        </footer>
    `;
}


/**
 * Nota para futuros componentes:
 * 
 * Los próximos componentes deberían seguir este patrón:
 * 
 * function renderHorarios(horarios) {
 *     // horarios es un array que se pasa como parámetro
 *     // La función construye y DEVUELVE el HTML como String
 *     // NO toca el DOM en absoluto
 * }
 */
