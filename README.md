# 🏊 Web Piscina Escolar

Página web completa para la gestión y difusión de información sobre la piscina escolar del centro educativo.

## 📋 Descripción

Sistema web moderno que muestra información clara sobre:
- Horarios de funcionamiento
- Tarifas y precios por categorías
- Actividades disponibles
- Información de contacto

## 🚀 Cómo usar

### Opción 1: Versión Standalone (Recomendada)
Abre el archivo `index-standalone.html` directamente en tu navegador. Esta versión incluye todo el código necesario y funciona sin problemas de CORS.

### Opción 2: Versión Modular (Requiere servidor)
Para usar la versión modular con `index.html`, necesitas un servidor web local debido a restricciones de CORS con módulos ES6:

```bash
# Con Python
python -m http.server 8000

# Con Node.js (si tienes http-server instalado)
npx http-server

# O cualquier otro servidor web
```

Luego abre `http://localhost:8000/index.html`

## 🎯 Características

### ✅ Funcionalidades Completas
- **Navegación suave** entre secciones
- **Selección de planes** con feedback visual
- **Formulario de contacto** funcional
- **Responsive design** para móviles y desktop
- **Animaciones y transiciones** modernas

### 📱 Secciones
1. **Inicio** - Información general sobre la piscina
2. **Horarios** - Tabla de horarios de apertura
3. **Precios** - 5 planes con precios por categorías
4. **Actividades** - Lista de actividades disponibles
5. **Contacto** - Información y formulario de contacto

### 🎨 Diseño
- **Paleta moderna** con gradientes azules
- **Tipografía** Segoe UI para mejor legibilidad
- **Componentes interactivos** con hover effects
- **Layout responsive** con CSS Grid y Flexbox

## 📁 Estructura del Proyecto

```
Examen-3a-Evalucacion/
├── index.html                 # Versión modular (requiere servidor)
├── index-standalone.html      # Versión standalone (funciona directamente)
├── app.js                     # Lógica principal (módulos ES6)
├── Componentes/
│   ├── Header/
│   │   ├── Header.js
│   │   └── Header.css
│   ├── Nav/
│   │   ├── Nav.js
│   │   └── Nav.css
│   ├── InfoSection/
│   │   ├── InfoSection.js
│   │   └── InfoSection.css
│   ├── Persona 1/             # Horarios
│   │   ├── Horarios.js
│   │   └── Horarios.css
│   ├── Persona 2/             # Precios
│   │   ├── Precios.js
│   │   └── Precios.css
│   ├── Persona 3/             # Actividades
│   │   ├── Actividades.js
│   │   └── Actividades.css
│   ├── Contacto/
│   │   ├── Contacto.js
│   │   └── Contacto.css
│   ├── Footer/
│   │   ├── Footer.js
│   │   └── Footer.css
│   └── Bienvenida/
│       └── Bienvenida.js
├── Rules.md                   # Reglas del proyecto
├── SPEC.md                    # Especificaciones
└── mensajes_prompts.txt
```

## 🛠️ Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con Grid y Flexbox
- **JavaScript ES6+** - Lógica interactiva
- **Arquitectura MVC** - Separación clara de responsabilidades

## 📊 Estado del Proyecto

### ✅ Completado
- [x] Arquitectura modular MVC
- [x] Componente Header
- [x] Componente Navegación con scroll suave
- [x] Sección de información inicial
- [x] **Componente Horarios (Persona 1)**
- [x] **Componente Precios (Persona 2)** - 5 planes completos
- [x] **Componente Actividades (Persona 3)**
- [x] Componente Contacto con formulario
- [x] Componente Footer
- [x] Interactividad completa
- [x] Diseño responsive
- [x] Versión standalone funcional

## 🎯 Próximos Pasos

- [ ] Integración con backend para formularios
- [ ] Sistema de reservas online
- [ ] Panel de administración
- [ ] Base de datos para usuarios y reservas

## 📞 Contacto

Para cualquier duda sobre el proyecto, contacta con el equipo de desarrollo.

---

**Desarrollado con ❤️ para el centro educativo**