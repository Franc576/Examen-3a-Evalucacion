# 🏊 ESPECIFICACIONES - Web de Piscina Escolar

## 📋 Descripción General

Sistema web para la gestión y difusión de información sobre la piscina escolar del centro educativo. 
La plataforma debe mostrar de forma clara y accesible:
- Horarios de funcionamiento
- Información de precios
- Actividades disponibles
- Datos de contacto

---

## 🎯 Objetivos

1. **Informar**: Proporcionar información clara sobre horarios, precios y actividades
2. **Accesible**: Interfaz intuitiva y responsiva
3. **Mantenible**: Código limpio siguiendo patrón MVC
4. **Escalable**: Fácil de agregar nuevas secciones y funcionalidades

---

## 📱 Secciones Principales

### 1️⃣ INICIO / BIENVENIDA
- **Ubicación**: Primera página al abrir la web
- **Contenido**:
  - Título principal: "🏊 Piscina Escolar del Centro"
  - Frase de bienvenida
  - Descripción breve (¿quiénes somos?)
  - Navegación de botones a las otras secciones
  - Footer con derechos de autor

**Componente**: `renderBienvenida()` en `components.js`

---

### 2️⃣ HORARIOS
- **Ubicación**: Sección de horarios
- **Contenido**:
  - Tabla de horarios por días de la semana
  - Horario de apertura y cierre
  - Horarios especiales (fines de semana, vacaciones)
  - Nota: Actualmente en construcción

**Datos esperados**:
```javascript
const horarios = [
    { dia: 'Lunes', apertura: '07:00', cierre: '19:00' },
    { dia: 'Martes', apertura: '07:00', cierre: '19:00' },
    { dia: 'Miércoles', apertura: '07:00', cierre: '19:00' },
    { dia: 'Jueves', apertura: '07:00', cierre: '19:00' },
    { dia: 'Viernes', apertura: '07:00', cierre: '18:00' },
    { dia: 'Sábado', apertura: '09:00', cierre: '17:00' },
    { dia: 'Domingo', apertura: 'Cerrado', cierre: 'Cerrado' }
];
```

---

### 3️⃣ PRECIOS
- **Ubicación**: Sección de tarificación
- **Contenido**:
  - Tipos de suscripción (día, mes, trimestre, año)
  - Precios por categoría (estudiantes, adultos, familiares)
  - Promociones y descuentos
  - Tabla comparativa de planes

**Datos esperados**:
```javascript
const precios = [
    { tipo: 'Entrada diaria', estudiantes: '$5.00', adultos: '$8.00' },
    { tipo: 'Mensual', estudiantes: '$40.00', adultos: '$60.00' },
    { tipo: 'Trimestral', estudiantes: '$100.00', adultos: '$150.00' },
    { tipo: 'Anual', estudiantes: '$350.00', adultos: '$500.00' }
];
```

---

### 4️⃣ ACTIVIDADES
- **Ubicación**: Sección de actividades
- **Contenido**:
  - Clases de natación (niveles: principiante, intermedio, avanzado)
  - Actividades recreativas
  - Competiciones y eventos
  - Información de instructores/monitores
  - Horarios de clases

**Datos esperados**:
```javascript
const actividades = [
    {
        nombre: 'Natación Principiantes',
        nivel: 'Inicial',
        instructor: 'Juan García',
        horarios: ['Lunes 16:00', 'Miércoles 16:00', 'Viernes 15:00'],
        descripcion: 'Aprende los fundamentos de la natación en un ambiente seguro'
    },
    {
        nombre: 'Natación Intermedia',
        nivel: 'Intermedio',
        instructor: 'María López',
        horarios: ['Martes 17:00', 'Jueves 17:00'],
        descripcion: 'Mejora tu técnica y resistencia'
    },
    // ... más actividades
];
```

---

### 5️⃣ CONTACTO
- **Ubicación**: Sección de contacto
- **Contenido**:
  - Teléfono de la piscina
  - Email de contacto
  - Dirección física
  - Horario de atención
  - Formulario de contacto (futuro)
  - Redes sociales (futuro)

**Datos esperados**:
```javascript
const contacto = {
    telefono: '+34 912 345 678',
    email: 'info@piscina-escolar.edu',
    direccion: 'Calle Principal 123, Ciudad, CP 28000',
    horarioAtencion: 'De lunes a viernes: 8:00 - 17:00'
};
```

---

## 🎨 Diseño Visual

### Paleta de Colores
- **Primario**: Azul #667eea
- **Secundario**: Púrpura #764ba2
- **Oscuro**: Gris #2c3e50
- **Claro**: Blanco #ffffff
- **Fondo**: Gris muy claro #f0f4f8
- **Acentos**: Azul claro #3498db

### Tipografía
- Fuente principal: 'Segoe UI', sans-serif
- Tamaño base: 16px
- Títulos (h1): 2.5rem, color primario
- Subtítulos (h2): 1.8rem, color primario
- Párrafos: 1rem, color gris oscuro

### Estructura de Página
- Header con gradiente azul-púrpura
- Navegación con botones
- Main content area con máximo ancho 1200px
- Footer con fondo oscuro
- Elementos con sombra suave
- Bordes redondeados (4-8px)

---

## 🔧 Funcionalidades Futuras

- [ ] Formulario de contacto funcional
- [ ] Sistema de reservas de clases
- [ ] Galería de fotos
- [ ] Blog o noticias
- [ ] Sistema de login para estudiantes
- [ ] Dashboard de administrador
- [ ] Integración con base de datos
- [ ] API REST para datos dinámicos
- [ ] App móvil
- [ ] Integración con redes sociales

---

## 📊 Requisitos Técnicos

### Frontend
- HTML5
- CSS3 (responsive design)
- JavaScript vanilla (ES6+)
- Patrón MVC

### Navegadores Soportados
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Responsividad
- Mobile first approach
- Breakpoints: 480px, 768px, 1024px, 1200px
- Fluidos y escalables

---

## 🔐 Consideraciones de Seguridad

- Validación de inputs en formularios (futuro)
- No almacenar datos sensibles en localStorage
- HTTPS en producción
- Content Security Policy (CSP)
- Protección contra XSS

---

## ⚡ Performance

- Cargar recursos necesarios en orden correcto
- Minimizar repaints y reflows
- Lazy loading de imágenes (futuro)
- Compresión de archivos
- Caché de recursos estáticos

---

## 📖 Guía de Desarrollo

### Agregar Nueva Sección

1. Crear función `render[NombreSección]()` en `components.js`
2. Crear datos correspondientes en `data.js` (futuro)
3. Agregar botón en navegación en `renderBienvenida()`
4. Agregar event listener en `app.js`
5. Llamar a la función render y insertar en DOM con innerHTML

### Ejemplo: Sección de Horarios

```javascript
// En components.js
function renderHorarios(horarios) {
    return `
        <h2>📅 Horarios</h2>
        <table>
            ${horarios.map(h => `<tr><td>${h.dia}</td><td>${h.apertura}</td></tr>`).join('')}
        </table>
    `;
}

// En app.js
const btnHorarios = document.querySelector('button:contains("Horarios")');
btnHorarios.addEventListener('click', () => {
    appContainer.innerHTML = renderHorarios(horarios);
});
```

---

## 📝 Notas Importantes

- Este documento es una especificación viva, sujeta a cambios
- Prioridad: Funcionalidad > Diseño > Optimización
- El código debe ser legible antes que conciso
- Documentar cambios significativos

---

**Versión**: 1.0  
**Fecha**: Abril 2026  
**Estado**: En desarrollo  
**Último actualizado**: Abril 2026
