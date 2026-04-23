function injectCSS(href) {
    if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
    }
}

export function renderHorarios() {
    injectCSS('./Componentes/Persona 1/Horarios.css');

    const horariosPequeños = [
        { dia: 'Lunes', horario: '17:00 - 18:30' },
        { dia: 'Martes', horario: '17:00 - 18:30' },
        { dia: 'Miércoles', horario: '17:00 - 18:30' },
        { dia: 'Jueves', horario: '17:00 - 18:30' },
        { dia: 'Viernes', horario: '17:00 - 18:00' },
        { dia: 'Sábado', horario: '17:00 - 19:00' },
        { dia: 'Domingo', horario: 'Cerrado' }
    ];

    const horariosMayores = [
        { dia: 'Lunes', horario: '18:30 - 21:00' },
        { dia: 'Martes', horario: '18:30 - 21:00' },
        { dia: 'Miércoles', horario: '18:30 - 21:00' },
        { dia: 'Jueves', horario: '18:30 - 21:00' },
        { dia: 'Viernes', horario: '18:00 - 20:30' },
        { dia: 'Sábado', horario: '19:00 - 21:00' },
        { dia: 'Domingo', horario: 'Cerrado' }
    ];

    function renderTabla(datos) {
        return datos.map(h => `
            <tr>
                <td>${h.dia}</td>
                <td class="${h.horario === 'Cerrado' ? 'cerrado' : ''}">${h.horario}</td>
            </tr>
        `).join('');
    }

    return `
        <section class="horarios-section" id="horarios">
            <div class="horarios-header">
                <span class="horarios-icon">🕒</span>
                <h2>Horarios de la Piscina</h2>
                <p>Apertura a partir de las <strong>17:00 h</strong> · Horario de tarde</p>
            </div>

            <div class="horarios-grid">
                <!-- Tabla Pequeños -->
                <div class="horarios-card horarios-card--pequeños">
                    <div class="horarios-card__header horarios-card__header--pequeños">
                        <span class="horarios-card__emoji">🧒</span>
                        <h3>Pequeños</h3>
                        <span class="horarios-card__badge horarios-card__badge--pequeños">Hasta 14 años</span>
                    </div>
                    <table class="horarios-table">
                        <thead>
                            <tr>
                                <th>Día</th>
                                <th>Horario</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${renderTabla(horariosPequeños)}
                        </tbody>
                    </table>
                </div>

                <!-- Tabla Mayores -->
                <div class="horarios-card horarios-card--mayores">
                    <div class="horarios-card__header horarios-card__header--mayores">
                        <span class="horarios-card__emoji">🏊</span>
                        <h3>Mayores</h3>
                        <span class="horarios-card__badge horarios-card__badge--mayores">Desde 15 años</span>
                    </div>
                    <table class="horarios-table">
                        <thead>
                            <tr>
                                <th>Día</th>
                                <th>Horario</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${renderTabla(horariosMayores)}
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="horarios-nota">
                <span>ℹ️</span>
                <p>Los domingos la piscina permanece cerrada. Los festivos pueden tener horario especial.</p>
            </div>
        </section>
    `;
}
