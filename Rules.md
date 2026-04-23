# 📋 REGLAS DEL PROYECTO - Piscina Escolar

## Arquitectura MVC (Model-View-Controller)

Este proyecto sigue el patrón MVC con una separación clara entre:
- **M**odel: Datos (futuros archivos como `data.js`)
- **V**iew: Componentes puros que generan HTML (`components.js`)
- **C**ontroller: Lógica de control del DOM (`app.js`)

---

## 🚨 REGLA #1: Funciones Puras en components.js

### ✅ PERMITIDO en components.js:

```javascript
// ✅ CORRECTO: Función pura que devuelve String
function renderHorarios(horarios) {
    return `
        <div>
            ${horarios.map(h => `<p>${h.dia}: ${h.hora}</p>`).join('')}
        </div>
    `;
}

// ✅ CORRECTO: Usar template literals
function renderPrecio(precio) {
    return `<p>Precio: $${precio}</p>`;
}

// ✅ CORRECTO: Lógica de datos
function procesarDatos(data) {
    return data.filter(item => item.activo);
}
```

### ❌ PROHIBIDO en components.js:

```javascript
// ❌ INCORRECTO: Usar document
document.getElementById('app').innerHTML = '...';

// ❌ INCORRECTO: Usar querySelector
document.querySelector('.container').style.color = 'red';

// ❌ INCORRECTO: Usar appendChild
element.appendChild(nuevoElemento);

// ❌ INCORRECTO: Usar addEventListener
button.addEventListener('click', funcion);

// ❌ INCORRECTO: Acceder a properties del DOM
console.log(document.body.offsetHeight);

// ❌ INCORRECTO: innerHTML dentro de components.js
miElemento.innerHTML = contenido;
```

---

## 🎯 REGLA #2: DOM Control Solo en app.js

### ✅ PERMITIDO en app.js:

```javascript
// ✅ CORRECTO: querySelector
const container = document.querySelector('#app');

// ✅ CORRECTO: getElementById
const app = document.getElementById('app');

// ✅ CORRECTO: innerHTML
appContainer.innerHTML = renderBienvenida();

// ✅ CORRECTO: addEventListener
button.addEventListener('click', handleClick);

// ✅ CORRECTO: appendChild
container.appendChild(nuevoElemento);

// ✅ CORRECTO: Modificar estilos
elemento.style.color = 'blue';
```

### ❌ PROHIBIDO en app.js:

```javascript
// ❌ INCORRECTO: Usar lógica de componentes en app.js
const html = generarHtmlComplejo(); // Esto debería estar en components.js

// ❌ INCORRECTO: Mezclar muchas responsabilidades
function main() {
    // app.js debe ser simple y enfocado
}
```

---

## 📂 ESTRUCTURA DE CARPETAS

```
proyecto/
│
├── index.html              # Página principal (solo estructura HTML)
├── app.js                  # Controlador (manipula el DOM)
├── components.js           # Vista (componentes puros)
├── styles.css              # Estilos (opcional, futuro)
├── data.js                 # Modelo (datos, futuros)
│
├── Rules.md                # Este archivo
├── SPEC.md                 # Especificaciones
└── mensajes_prompts.txt    # Registro de prompts
```

---

## 🔄 FLUJO DE DATOS

```
user action
    ↓
app.js (event listener)
    ↓
lógica de datos
    ↓
components.js (función pura devuelve HTML String)
    ↓
app.js (innerHTML inserta el HTML)
    ↓
usuario ve el resultado
```

---

## 🧪 CÓMO PROBAR TUS COMPONENTES

Como todas las funciones en `components.js` son puras, puedes probarlas fácilmente:

```javascript
// En la consola del navegador:
console.log(renderBienvenida());  // Debería imprimir HTML como String

// O crear tests (futuro):
function testRenderBienvenida() {
    const resultado = renderBienvenida();
    console.assert(typeof resultado === 'string', 'Debe devolver String');
    console.assert(resultado.includes('<h1>'), 'Debe contener h1');
}
```

---

## ⚙️ CONVENCIONES DE CÓDIGO

- **Nombres de funciones**: `render*` para componentes que devuelven HTML
- **Nombres de variables**: camelCase para variables, PascalCase para clases
- **Comentarios**: Explicar el "por qué", no el "qué"
- **Indentación**: 4 espacios
- **Puntos y comas**: Obligatorios

---

## 🚀 PASOS PARA AGREGAR NUEVA FUNCIONALIDAD

1. **Si es un componente visual**: Añade una función `render*()` en `components.js`
2. **Si es lógica de DOM**: Modifica `main()` o añade event listeners en `app.js`
3. **Si es datos**: Crea o actualiza `data.js` (futuro)
4. **Prueba**: Abre la consola y verifica que no hay errores
5. **Documenta**: Añade comentarios explicando la funcionalidad

---

## ✋ RESUMEN DE REGLAS

| Aspecto | components.js | app.js |
|---------|---------------|--------|
| **Retorna HTML** | ✅ Sí | ❌ No |
| **Modifica DOM** | ❌ No | ✅ Sí |
| **Usa innerHTML** | ❌ No | ✅ Sí |
| **Usa querySelector** | ❌ No | ✅ Sí |
| **Event listeners** | ❌ No | ✅ Sí |
| **Funciones puras** | ✅ Sí | ❌ Preferiblemente no |

---

**Última actualización**: Abril 2026  
**Autor del proyecto**: Estructura MVC para Piscina Escolar
