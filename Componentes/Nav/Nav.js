export function renderNav() {
    return `
        <nav class="nav-component">
            <div class="nav-links">
                <button class="nav-btn" data-section="inicio">Inicio</button>
                <button class="nav-btn" data-section="horarios">Horarios</button>
                <button class="nav-btn" data-section="precios">Precios</button>
                <button class="nav-btn" data-section="actividades">Actividades</button>
                <button class="nav-btn accent" data-section="contacto">Contacto</button>
            </div>
        </nav>
    `;
}
