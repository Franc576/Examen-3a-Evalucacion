function injectCSS(href) {
    if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
    }
}

/**
 * renderCarrito()
 *
 * Devuelve el HTML del panel lateral del carrito y del botón flotante.
 * Función pura – no manipula el DOM directamente.
 * Toda la lógica de eventos se gestiona en app.js.
 */
export function renderCarrito() {
    injectCSS('./Componentes/Carrito/Carrito.css');

    return `
        <!-- Botón flotante del carrito -->
        <button class="carrito-fab" id="carrito-fab" aria-label="Abrir carrito">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <span class="carrito-count" id="carrito-count">0</span>
        </button>

        <!-- Overlay de fondo -->
        <div class="carrito-overlay" id="carrito-overlay"></div>

        <!-- Panel lateral -->
        <aside class="carrito-panel" id="carrito-panel" aria-label="Carrito de compra">
            <div class="carrito-header">
                <h2 class="carrito-titulo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                    </svg>
                    Tu Carrito
                </h2>
                <button class="carrito-cerrar" id="carrito-cerrar" aria-label="Cerrar carrito">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
            </div>

            <div class="carrito-body" id="carrito-body">
                <!-- Los ítems se insertan dinámicamente desde app.js -->
                <div class="carrito-vacio" id="carrito-vacio">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#d1c4e9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                    </svg>
                    <p>Tu carrito está vacío</p>
                    <span>Añade un plan desde la sección de tarifas</span>
                </div>
                <ul class="carrito-lista" id="carrito-lista"></ul>
            </div>

            <div class="carrito-footer" id="carrito-footer">
                <div class="carrito-total-row">
                    <span>Total</span>
                    <span class="carrito-total-precio" id="carrito-total">0.00€</span>
                </div>
                <button class="carrito-checkout-btn" id="carrito-checkout" aria-label="Tramitar pedido">
                    Tramitar pedido
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
                <p class="carrito-seguro">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    Pago seguro garantizado
                </p>
            </div>
        </aside>
    `;
}
