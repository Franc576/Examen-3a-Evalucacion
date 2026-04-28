function injectCSS(href) {
    if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
    }
}

import { renderInscripcionModal } from '../Inscripcion/Inscripcion.js';

export function renderActividades() {
    injectCSS('./Componentes/Persona 3 (Aitor)/Actividades.css');
    injectCSS('./Componentes/Inscripcion/Inscripcion.css');

    const actividades = [
        {
            nombre: 'Natación Libre',
            desc: 'Carriles reservados para entrenamiento autónomo. Acceso libre durante todo el horario de apertura con disponibilidad garantizada.',
            masInfo: 'Horario ininterrumpido. Contamos con 6 carriles de 25 metros. Servicio de préstamo de material incluido (tablas, aletas y palas).',
            img: './Componentes/Persona 3 (Aitor)/img/natacion.png',
            nivel: 'Todos los niveles',
            etiqueta: 'Libre',
            color: '#0ea5e9'
        },
        {
            nombre: 'Aquagym',
            desc: 'Ejercicio aeróbico de bajo impacto en el agua. Sesiones dirigidas por monitores titulados, ideales para mejorar la resistencia cardiovascular.',
            masInfo: 'Clases dinámicas con música. Mejora la tonificación muscular y la salud cardiovascular sin impacto en las articulaciones.',
            img: './Componentes/Persona 3 (Aitor)/img/aquagym.png',
            nivel: 'Principiante',
            etiqueta: 'Dirigida',
            color: '#8b5cf6'
        },
        {
            nombre: 'Escuela Infantil',
            desc: 'Cursos de iniciación acuática para niños de 3 a 10 años. Grupos reducidos con instructor especializado en natación infantil.',
            masInfo: 'Método lúdico-educativo. Profesores titulados por la RFEN. Evaluación continua y entrega de diplomas por niveles superados.',
            img: './Componentes/Persona 3 (Aitor)/img/infantil.png',
            nivel: 'Iniciación',
            etiqueta: 'Infantil',
            color: '#f59e0b'
        },
        {
            nombre: 'Competición',
            desc: 'Entrenamiento de alto rendimiento para nadadores federados y equipos del centro. Preparación para campeonatos regionales y nacionales.',
            masInfo: 'Planificación personalizada de entrenamientos. Participación en la Liga Balear de Natación. Análisis técnico mediante grabación subacuática.',
            img: './Componentes/Persona 3 (Aitor)/img/competicion.png',
            nivel: 'Avanzado',
            etiqueta: 'Alto nivel',
            color: '#10b981'
        }
    ];

    return `
        <section class="actividades-section" id="actividades">
            <div class="actividades-header">
                <span class="actividades-label">Nuestros programas</span>
                <h2 class="actividades-title">Actividades Disponibles</h2>
                <p class="actividades-subtitle">Programas diseñados para todas las edades y niveles, con monitores cualificados y las mejores instalaciones.</p>
            </div>
            <div class="actividades-grid">
                ${actividades.map((a, i) => `
                    <article class="actividad-card" id="actividad-${i}" style="--accent: ${a.color}">
                        <div class="actividad-img-wrap">
                            <img src="${a.img}" alt="${a.nombre}" class="actividad-img" loading="lazy" />
                            <span class="actividad-badge">${a.etiqueta}</span>
                        </div>
                        <div class="actividad-body">
                            <span class="actividad-nivel">${a.nivel}</span>
                            <h3 class="actividad-nombre">${a.nombre}</h3>
                            <p class="actividad-desc">${a.desc}</p>
                            
                            <div class="actividad-info-extra">
                                <span class="actividad-info-title">Más información</span>
                                <p class="actividad-info-text">${a.masInfo}</p>
                            </div>

                            <button class="actividad-btn" id="btn-actividad-${i}" aria-label="Saber más sobre ${a.nombre}">
                                Inscribirse ahora
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                            </button>
                        </div>
                    </article>
                `).join('')}
            </div>
            ${renderInscripcionModal()}
        </section>
    `;
}
