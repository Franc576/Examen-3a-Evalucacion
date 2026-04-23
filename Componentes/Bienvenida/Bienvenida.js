import { renderHeader } from '../Header/Header.js';
import { renderNav } from '../Nav/Nav.js';
import { renderInfoSection } from '../InfoSection/InfoSection.js';
import { renderFooter } from '../Footer/Footer.js';

export function renderBienvenida() {
    // Inject CSS for each component
    injectCSS('./Componentes/Header/Header.css');
    injectCSS('./Componentes/Nav/Nav.css');
    injectCSS('./Componentes/InfoSection/InfoSection.css');
    injectCSS('./Componentes/Footer/Footer.css');
    injectCSS('./Componentes/Bienvenida/Bienvenida.css');

    return `
        <div class="page-container">
            ${renderHeader()}
            ${renderNav()}
            ${renderWelcomeSection()}
            ${renderInfoSection()}
            ${renderFooter()}
        </div>
    `;
}

/**
 * renderWelcomeSection()
 * 
 * Sección principal de bienvenida con CTA (Call To Action) principal.
 * Muestra el título principal, descripción breve y botones de navegación.
 */
function renderWelcomeSection() {
    return `
        <section class="welcome-section">
            <div class="welcome-container">
                <div class="welcome-content">
                    <div class="welcome-icon">🏊</div>
                    <h1 class="welcome-title">Piscina Escolar del Centro</h1>
                    <p class="welcome-subtitle">Tu espacio de diversión, aprendizaje y bienestar acuático</p>
                    <p class="welcome-description">
                        Bienvenido a nuestra piscina escolar. Un lugar diseñado para que todos nuestros estudiantes 
                        disfruten del deporte acuático en un entorno seguro y divertido. Contamos con instalaciones modernas, 
                        monitores especializados y actividades para todas las edades y niveles.
                    </p>
                    <div class="welcome-cta">
                        <button class="cta-btn primary">Explorar Actividades</button>
                        <button class="cta-btn secondary">Conocer Horarios</button>
                    </div>
                </div>
                <div class="welcome-stats">
                    <div class="stat-card">
                        <div class="stat-number">25m</div>
                        <div class="stat-label">Piscina Olímpica</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">12+</div>
                        <div class="stat-label">Actividades</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">5★</div>
                        <div class="stat-label">Satisfacción</div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function injectCSS(href) {
    if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
    }
}
