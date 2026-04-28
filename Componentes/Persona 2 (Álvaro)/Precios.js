function injectCSS(href) {
    if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
    }
}

export function renderPrecios() {
    injectCSS('./Componentes/Persona 2 (Álvaro)/Precios.css');

    const planes = [
        {
            id: 'entrada',
            nombre: 'Entrada Única',
            precio: '4.50',
            periodo: 'por sesión',
            desc: 'Acceso puntual a todas las instalaciones sin compromiso.',
            features: [
                'Acceso a piscina olímpica',
                'Vestuarios y duchas',
                'Sin permanencia',
                'Válido 1 día'
            ],
            popular: false,
            accentColor: '#0ea5e9'
        },
        {
            id: 'bono',
            nombre: 'Bono 10 Sesiones',
            precio: '35.00',
            periodo: '3,50€ / sesión',
            desc: 'El favorito de los nadadores habituales. Ahorra un 22%.',
            features: [
                'Acceso a piscina olímpica',
                'Vestuarios y duchas',
                'Válido 3 meses',
                'Transferible entre familiares'
            ],
            popular: false,
            accentColor: '#8b5cf6'
        },
        {
            id: 'mensual',
            nombre: 'Abono Mensual',
            precio: '45.00',
            periodo: 'al mes',
            desc: 'La opción más completa. Acceso ilimitado y clases dirigidas incluidas.',
            features: [
                'Acceso ilimitado todo el mes',
                'Clases de Aquagym incluidas',
                'Vestuarios y taquillas',
                'Descuento en actividades',
                'Renovación automática'
            ],
            popular: true,
            accentColor: '#7c3aed'
        }
    ];

    return `
        <section class="precios-section" id="precios">
            <div class="precios-header">
                <span class="precios-label">Tarifas transparentes</span>
                <h2 class="precios-title">Elige tu Plan</h2>
                <p class="precios-subtitle">Sin letra pequeña. Sin sorpresas. Elige el bono que mejor se adapta a tu ritmo.</p>
            </div>
            <div class="pricing-grid">
                ${planes.map((p, i) => `
                    <div class="price-card ${p.popular ? 'popular' : ''}" id="plan-${p.id}" style="--accent: ${p.accentColor}">
                        ${p.popular ? '<div class="popular-ribbon">Más Popular</div>' : ''}
                        <div class="price-card-top">
                            <span class="plan-nombre">${p.nombre}</span>
                            <div class="plan-precio">
                                <span class="precio-entero">${p.precio.split('.')[0]}</span>
                                <span class="precio-decimal">.${p.precio.split('.')[1]}€</span>
                            </div>
                            <span class="plan-periodo">${p.periodo}</span>
                            <p class="plan-desc">${p.desc}</p>
                        </div>
                        <ul class="plan-features">
                            ${p.features.map(f => `
                                <li class="plan-feature">
                                    <svg class="feature-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    ${f}
                                </li>
                            `).join('')}
                        </ul>
                        <button
                            class="buy-btn"
                            id="btn-comprar-${p.id}"
                            data-plan-id="${p.id}"
                            data-plan-nombre="${p.nombre}"
                            data-plan-precio="${p.precio}"
                            aria-label="Añadir ${p.nombre} al carrito"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                            Añadir al carrito
                        </button>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}
