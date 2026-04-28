export function renderInscripcionModal() {
    return `
        <div id="inscripcion-modal" class="modal-overlay">
            <div class="modal-content">
                <button class="modal-close" id="close-modal">&times;</button>
                <div class="modal-header">
                    <h2>Inscripción Actividades</h2>
                    <p>Completa el formulario para reservar tu plaza</p>
                </div>
                <form id="inscripcion-form" class="inscripcion-form">
                    <div class="form-group">
                        <label for="actividad-select">Actividad</label>
                        <select id="actividad-select" required>
                            <option value="" disabled selected>Selecciona una opción</option>
                            <optgroup label="Actividades">
                                <option value="natacion">Natación Libre</option>
                                <option value="aquagym">Aquagym</option>
                                <option value="infantil">Escuela Infantil</option>
                                <option value="competicion">Competición</option>
                            </optgroup>
                            <optgroup label="Planes y Bonos">
                                <option value="entrada">Entrada Única</option>
                                <option value="bono">Bono 10 Sesiones</option>
                                <option value="abono">Abono Mensual</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="nombre">Nombre Completo</label>
                        <input type="text" id="nombre" placeholder="Tu nombre" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Correo Electrónico</label>
                        <input type="email" id="email" placeholder="ejemplo@correo.com" required>
                    </div>
                    <div class="form-group">
                        <label for="telefono">Teléfono</label>
                        <input type="tel" id="telefono" placeholder="600 000 000" required>
                    </div>
                    <button type="submit" class="submit-btn">Enviar Solicitud</button>
                </form>
                <div id="form-success" class="form-success hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    <h3>¡Solicitud Enviada!</h3>
                    <p>Nos pondremos en contacto contigo en las próximas 24 horas.</p>
                </div>
            </div>
        </div>
    `;
}
