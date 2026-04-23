/**
 * renderFooter()
 * 
 * Componente footer que contiene:
 * - Información de contacto
 * - Enlaces a redes sociales
 * - Derechos de autor
 * - Horarios de atención
 */
export function renderFooter() {
    return `
        <footer class="footer-component">
            <div class="footer-container">
                <!-- SECCIÓN CONTACTO E INFORMACIÓN -->
                <div class="footer-grid">
                    <!-- INFORMACIÓN GENERAL -->
                    <div class="footer-section">
                        <h3 class="footer-section-title">📍 Ubicación</h3>
                        <p class="footer-text">Calle Principal 123</p>
                        <p class="footer-text">Ciudad, CP 28000</p>
                        <p class="footer-text">España</p>
                    </div>

                    <!-- CONTACTO -->
                    <div class="footer-section">
                        <h3 class="footer-section-title">📞 Contacto</h3>
                        <p class="footer-text">
                            <a href="tel:+34912345678" class="footer-link">+34 912 345 678</a>
                        </p>
                        <p class="footer-text">
                            <a href="mailto:info@piscina-escolar.edu" class="footer-link">info@piscina-escolar.edu</a>
                        </p>
                        <p class="footer-text">
                            <a href="mailto:soporte@piscina-escolar.edu" class="footer-link">soporte@piscina-escolar.edu</a>
                        </p>
                    </div>

                    <!-- HORARIOS -->
                    <div class="footer-section">
                        <h3 class="footer-section-title">⏰ Horarios</h3>
                        <p class="footer-text">L-V: 8:00 - 17:00</p>
                        <p class="footer-text">S: 10:00 - 14:00</p>
                        <p class="footer-text footer-closed">D: Cerrado</p>
                    </div>

                    <!-- REDES SOCIALES -->
                    <div class="footer-section">
                        <h3 class="footer-section-title">🌐 Síguenos</h3>
                        <div class="footer-social">
                            <a href="https://facebook.com" class="social-icon" title="Facebook" target="_blank">📘</a>
                            <a href="https://instagram.com" class="social-icon" title="Instagram" target="_blank">📷</a>
                            <a href="https://twitter.com" class="social-icon" title="Twitter" target="_blank">𝕏</a>
                            <a href="https://youtube.com" class="social-icon" title="YouTube" target="_blank">▶️</a>
                        </div>
                    </div>
                </div>

                <!-- SECCIÓN LEGAL Y COPYRIGHT -->
                <div class="footer-bottom">
                    <div class="footer-copyright">
                        <p>&copy; 2026 Piscina Escolar del Centro. Todos los derechos reservados.</p>
                        <p class="footer-small">Desarrollado con ❤️ para la comunidad escolar</p>
                    </div>
                    <div class="footer-legal">
                        <a href="#" class="footer-link-small">Privacidad</a>
                        <span class="footer-separator">•</span>
                        <a href="#" class="footer-link-small">Términos</a>
                        <span class="footer-separator">•</span>
                        <a href="#" class="footer-link-small">Aviso Legal</a>
                    </div>
                </div>
            </div>
        </footer>
    `;
}
