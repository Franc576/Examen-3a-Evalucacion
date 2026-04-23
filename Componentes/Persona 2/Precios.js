function injectCSS(href) {
    if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
    }
}

export function renderPrecios() {
    injectCSS('./Componentes/Persona%202/Precios.css');

    const planes = [
        { 
            nombre: 'Entrada Diaria', 
            precio: '4.50€', 
            desc: 'Acceso puntual a las instalaciones.',
            caracteristicas: ['Acceso a la piscina', 'Uso de vestuarios', 'Estacionamiento'],
            precioEstudiantes: '4.50€',
            precioAdultos: '8.00€'
        },
        { 
            nombre: 'Bono 10 Sesiones', 
            precio: '35.00€', 
            desc: 'Ahorra un 20% en tus visitas.',
            caracteristicas: ['20% de descuento', 'Válido por 3 meses', 'Flexible'],
            precioEstudiantes: '35.00€',
            precioAdultos: '60.00€'
        },
        { 
            nombre: 'Abono Mensual', 
            precio: '45.00€', 
            desc: 'Acceso ilimitado todo el mes.', 
            popular: true,
            caracteristicas: ['Acceso ilimitado', 'Clases incluidas', 'Sin restricciones'],
            precioEstudiantes: '40.00€',
            precioAdultos: '60.00€'
        },
        {
            nombre: 'Abono Trimestral',
            precio: '100.00€',
            desc: 'Ahorra con nuestro mejor plan trimestral.',
            caracteristicas: ['3 meses de acceso', 'Mejor precio', 'Acceso prioritario a actividades'],
            precioEstudiantes: '100.00€',
            precioAdultos: '150.00€'
        },
        {
            nombre: 'Abono Anual',
            precio: '350.00€',
            desc: 'Máximo ahorro para miembros regulares.',
            caracteristicas: ['12 meses de acceso', 'Tarjeta VIP', 'Prioritario en todas las actividades'],
            precioEstudiantes: '350.00€',
            precioAdultos: '500.00€'
        }
    ];

    return `
        <section class="precios-section" id="precios">
            <div class="precios-header">
                <h2 class="section-title">Tarifas y Bonos</h2>
                <p class="section-subtitle">Encuentra el plan perfecto para ti</p>
            </div>
            <div class="pricing-grid">
                ${planes.map((p, index) => `
                    <div class="price-card ${p.popular ? 'popular' : ''}" data-plan="${index}">
                        ${p.popular ? '<span class="badge">Más Popular</span>' : ''}
                        <h3>${p.nombre}</h3>
                        <div class="price">${p.precio}</div>
                        <p class="card-desc">${p.desc}</p>
                        <div class="features">
                            <h4>Incluye:</h4>
                            <ul>
                                ${p.caracteristicas.map(f => `<li>✓ ${f}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="pricing-categories">
                            <div class="category">
                                <span class="cat-label">Estudiantes</span>
                                <span class="cat-price">${p.precioEstudiantes}</span>
                            </div>
                            <div class="category">
                                <span class="cat-label">Adultos</span>
                                <span class="cat-price">${p.precioAdultos}</span>
                            </div>
                        </div>
                        <button class="buy-btn" data-plan-name="${p.nombre}">Seleccionar Plan</button>
                    </div>
                `).join('')}
            </div>
            <div class="promo-banner">
                <p>💡 <strong>Promoción:</strong> Obtén 15% de descuento en planes anuales si te registras esta semana.</p>
            </div>
        </section>
    `;
}
