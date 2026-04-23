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

    return `
        <div class="page-container">
            ${renderHeader()}
            ${renderNav()}
            ${renderInfoSection()}
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
