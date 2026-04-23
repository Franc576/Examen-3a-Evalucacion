function injectCSS(href) {
    if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
    }
}

export function renderActividades() {
    injectCSS('./Componentes/Persona%203/Actividades.css');

    const actividades = [
        { nombre: 'Natación Libre', icono: '🏊', desc: 'Carriles disponibles para entrenamiento libre.' },
        { nombre: 'Aquagym', icono: '💃', desc: 'Ejercicio rítmico en el agua para todas las edades.' },
        { nombre: 'Escuela Infantil', icono: '👶', desc: 'Cursos de iniciación para los más pequeños.' },
        { nombre: 'Competición', icono: '🏆', desc: 'Entrenamiento avanzado para equipos del centro.' }
    ];

    return `
        <section class="actividades-section" id="actividades">
            <h2 class="title">Actividades Disponibles</h2>
            <div class="actividades-grid">
                ${actividades.map(a => `
                    <div class="actividad-item">
                        <div class="icon-box">${a.icono}</div>
                        <div class="content-box">
                            <h3>${a.nombre}</h3>
                            <p>${a.desc}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}
