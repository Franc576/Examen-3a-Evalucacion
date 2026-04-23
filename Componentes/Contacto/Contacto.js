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
            <div class="contacto-container">
                <h2 class="contacto-title">Contacto</h2>
                <p class="contacto-subtitle">¿Tienes preguntas? Ponte en contacto con nosotros</p>
                
                <div class="contacto-grid">
                    <div class="info-card">
                        <div class="icon">📞</div>
                        <h3>Teléfono</h3>
                        <p><a href="tel:+34912345678">+34 912 345 678</a></p>
                        <small>De lunes a viernes: 08:00 - 17:00</small>
                    </div>

                    <div class="info-card">
                        <div class="icon">📧</div>
                        <h3>Email</h3>
                        <p><a href="mailto:info@piscina-escolar.edu">info@piscina-escolar.edu</a></p>
                        <small>Respuesta en 24 horas</small>
                    </div>

                    <div class="info-card">
                        <div class="icon">📍</div>
                        <h3>Ubicación</h3>
                        <p>Calle Principal 123</p>
                        <small>Ciudad, CP 28000</small>
                    </div>

                    <div class="info-card">
                        <div class="icon">🕒</div>
                        <h3>Horario de Atención</h3>
                        <p>Lunes a Viernes</p>
                        <small>08:00 - 17:00 h</small>
                    </div>
                </div>

                <div class="contact-form">
                    <h3>Envíanos un mensaje</h3>
                    <form id="contactForm">
                        <div class="form-group">
                            <input type="text" placeholder="Tu nombre" required>
                        </div>
                        <div class="form-group">
                            <input type="email" placeholder="Tu email" required>
                        </div>
                        <div class="form-group">
                            <textarea placeholder="Tu mensaje" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="submit-btn">Enviar Mensaje</button>
                    </form>
                    <div id="formMessage" class="form-message"></div>
                </div>
            </div>
        </section>
    `;
}
