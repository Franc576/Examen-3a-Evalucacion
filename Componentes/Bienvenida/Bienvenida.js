import { renderHeader } from '../Header/Header.js';
import { renderNav } from '../Nav/Nav.js';
import { renderInfoSection } from '../InfoSection/InfoSection.js';
import { renderFooter } from '../Footer/Footer.js';

// Nuevos componentes por persona
import { renderHorarios } from '../Persona 1 (Fran)/Horarios.js';
import { renderPrecios } from '../Persona 2 (Álvaro)/Precios.js';
import { renderActividades } from '../Persona 3 (Aitor)/Actividades.js';

export function renderBienvenida() {
    // Inject CSS for each component
    injectCSS('./Componentes/Header/Header.css');
    injectCSS('./Componentes/Nav/Nav.css');
    injectCSS('./Componentes/InfoSection/InfoSection.css');
    injectCSS('./Componentes/Footer/Footer.css');

    return `
        <div class="page-container">
            ${renderHeader()}
            ${renderNav()}
            <main style="max-width: 1200px; margin: 0 auto; padding: 2rem;">
                ${renderInfoSection()}
                ${renderHorarios()}
                ${renderPrecios()}
                ${renderActividades()}
            </main>
            ${renderFooter()}
        </div>
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
