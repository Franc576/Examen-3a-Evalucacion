function injectCSS(href) {
    if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
    }
}

export function renderHorarios() {
    injectCSS('./Componentes/Persona%201/Horarios.css');
    
    const horarios = [
        { dia: 'Lunes - Viernes', mañana: '07:00 - 14:00', tarde: '16:00 - 22:00' },
        { dia: 'Sábados', mañana: '09:00 - 14:00', tarde: '16:00 - 20:00' },
        { dia: 'Domingos', mañana: '10:00 - 14:00', tarde: 'Cerrado' }
    ];

    return `
        <section class="horarios-section" id="horarios">
            <div class="card-header">
                <h2>🕒 Horarios de Apertura</h2>
                <p>Consulta nuestras franjas horarias para nadar libremente o en cursos.</p>
            </div>
            <div class="table-wrapper">
                <table class="horarios-table">
                    <thead>
                        <tr>
                            <th>Día</th>
                            <th>Mañana</th>
                            <th>Tarde</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${horarios.map(h => `
                            <tr>
                                <td class="font-bold">${h.dia}</td>
                                <td>${h.mañana}</td>
                                <td class="${h.tarde === 'Cerrado' ? 'text-red' : ''}">${h.tarde}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </section>
    `;
}
