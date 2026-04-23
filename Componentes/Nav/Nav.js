export function renderNav() {
    return `
        <nav class="nav-component">
            <div class="nav-links">
                <button class="nav-btn" data-target="horarios">Horarios</button>
                <button class="nav-btn" data-target="precios">Precios</button>
                <button class="nav-btn" data-target="actividades">Actividades</button>
                <button class="nav-btn accent" data-target="contacto">Contacto</button>
            </div>
        </nav>
    `;
}
