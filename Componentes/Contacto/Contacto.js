function injectCSS(href) {
    if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
    }
}

export function renderContacto() {
    injectCSS('./Componentes/Contacto/Contacto.css');

    return `
        <section class="contacto-section" id="contacto">
            <div class="contacto-header">
                <span class="contacto-label">Contacto</span>
                <h2 class="contacto-title">¿Tienes alguna duda?</h2>
                <p class="contacto-subtitle">Estamos aquí para ayudarte. Ven a visitarnos o envíanos un mensaje.</p>
            </div>

            <div class="contacto-container">
                <div class="contacto-info">
                    <div class="info-card">
                        <div class="info-icon">📍</div>
                        <div class="info-text">
                            <h4>Dirección</h4>
                            <p>C/ Sebastià Arrom, 3, 07008 Palma, Illes Balears</p>
                        </div>
                    </div>
                    <div class="info-card">
                        <div class="info-icon">📞</div>
                        <div class="info-text">
                            <h4>Teléfono</h4>
                            <p>971 47 33 08</p>
                        </div>
                    </div>
                    <div class="info-card">
                        <div class="info-icon">📧</div>
                        <div class="info-text">
                            <h4>Email</h4>
                            <p>sjo@santjosepobrer.es</p>
                        </div>
                    </div>
                    <div class="info-card">
                        <div class="info-icon">⏰</div>
                        <div class="info-text">
                            <h4>Horario Secretaría</h4>
                            <p>Lunes a Viernes: 08:00 - 18:00</p>
                        </div>
                    </div>
                </div>

                <form class="contacto-form" id="main-contact-form">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="c-nombre">Nombre</label>
                            <input type="text" id="c-nombre" placeholder="Tu nombre" required>
                        </div>
                        <div class="form-group">
                            <label for="c-email">Email</label>
                            <input type="email" id="c-email" placeholder="tu@email.com" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="c-asunto">Asunto</label>
                        <input type="text" id="c-asunto" placeholder="¿En qué podemos ayudarte?" required>
                    </div>
                    <div class="form-group">
                        <label for="c-mensaje">Mensaje</label>
                        <textarea id="c-mensaje" rows="5" placeholder="Escribe tu mensaje aquí..." required></textarea>
                    </div>
                    <button type="submit" class="contacto-submit">Enviar Mensaje</button>
                    <div id="contact-success" class="form-success hidden">
                        Su correo ha sido enviado con éxito. Por favor, espere a que su duda sea respondida mediante correo electrónico.
                    </div>
                </form>
            </div>

            <div class="contacto-map">
                <iframe 
                    src="https://maps.google.com/maps?q=Col%C2%B7legi%20Sant%20Josep%20Obrer%20Palma&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="400" 
                    style="border:0; border-radius: 1.5rem;" 
                    allowfullscreen="" 
                    loading="lazy">
                </iframe>
            </div>
        </section>
    `;
}
