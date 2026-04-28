function injectCSS(href) {
    if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
    }
}

export function renderPrecios() {
    injectCSS('./Componentes/Persona 2/Precios.css');

    const planes = [
        { nombre: 'Entrada Única', precio: '4.50€', desc: 'Acceso puntual a las instalaciones.' },
        { nombre: 'Bono 10 Sesiones', precio: '35.00€', desc: 'Ahorra un 20% en tus visitas.' },
        { nombre: 'Abono Mensual', precio: '45.00€', desc: 'Acceso ilimitado todo el mes.', popular: true }
    ];

    return `
        <section class="precios-section" id="precios">
            <h2 class="section-title">Tarifas y Bonos</h2>
            <div class="pricing-grid">
                ${planes.map(p => `
                    <div class="price-card ${p.popular ? 'popular' : ''}">
                        ${p.popular ? '<span class="badge">Más Popular</span>' : ''}
                        <h3>${p.nombre}</h3>
                        <div class="price">${p.precio}</div>
                        <p>${p.desc}</p>
                        <button class="buy-btn">Seleccionar</button>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}
