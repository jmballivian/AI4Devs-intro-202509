# Chatbot utilizado = Claude Sonnet 4.5

# Rol

Actúa como un desarrollador frontend experto especializado en JavaScript vanilla y HTML, con habilidades en UX/UI y diseño creativo.

# Contexto

Tengo un proyecto web básico con dos archivos: `index.html` y `script.js`. Necesito implementar una funcionalidad de inversión de cadenas de texto con mejoras progresivas.

## Archivos base adjuntos:

* `index.html`: Estructura HTML básica

* `script.js`: Archivo JavaScript vacío

## Stack tecnológico:

* HTML5

* JavaScript vanilla (sin frameworks)

* CSS (si es necesario)

# Instrucción

**Antes de comenzar a programar, hazme todas las preguntas que consideres necesarias para realizar el trabajo adecuadamente.** Por ejemplo:

* Preferencias de diseño (colores, fuentes, estilo visual)

* Comportamiento específico de la UI

* Animaciones o transiciones

* Compatibilidad con navegadores

* Cualquier otro detalle que consideres relevante

Una vez tengas toda la información necesaria, desarrolla una aplicación web que invierta cadenas de texto siguiendo estas fases:

## Fase 1: Funcionalidad básica

1. Crea una interfaz con:

  * **Título atractivo y divertido** relacionado con la inversión de texto

  * **Descripción breve y con humor** que explique qué hace la aplicación

  * Un campo de texto (input) donde el usuario pueda introducir una cadena

2. Implementa la lógica JavaScript para invertir el orden de la cadena

  * **Ejemplo:** Input: `AI4Devs` → Output: `sveD4AI`

3. Añade un botón que ejecute la inversión

4. El botón debe aparecer **solo cuando haya más de 3 letras** en el campo de texto

5. Muestra el resultado invertido en la página de forma clara y visible

## Fase 2: Mejora de UX

1. Modifica la funcionalidad para que la inversión ocurra **en tiempo real** mientras el usuario escribe

2. El botón ya no debe ser necesario para ejecutar la inversión (pero mantén la lógica de visibilidad condicional como demostración)

# Formato de salida

* Proporciona el código completo y funcional para ambos archivos (`index.html` y `script.js`)

* Incluye comentarios explicativos en el código

* Separa claramente el código de cada fase

* El código debe estar listo para copiar y ejecutar directamente

# Estilo y buenas prácticas

* Usa nombres de variables descriptivos en español o inglés (consistente)

* Aplica buenas prácticas de JavaScript moderno (ES6+)

* Asegura que el código sea limpio y mantenible

* Incluye validaciones básicas si son necesarias

* El diseño debe ser atractivo, moderno y responsive

# Tono y estilo

* El título y descripción deben ser creativos, divertidos y atractivos

* El diseño visual debe ser agradable y profesional

* La experiencia de usuario debe ser fluida e intuitiva

# Estructura de entrega

Entrega el código en este orden:

1. Código de la Fase 1 (funcionalidad básica con botón condicional)

2. Código de la Fase 2 (inversión en tiempo real)

-----------------
En este punto el chatbot me hizo varias preguntas las cuales respondí de la siguiente manera:
--------------------------------

## 🎨 Diseño y Estilo Visual
1. **Paleta de colores**:  colores vibrantes/pasteles
2. **Estilo visual**:  Neomorfismo (efecto 3D suave)
3. **Tipografía**: ¿Prefieres fuentes del sistema o puedo usar Google Fonts?
## 🎭 Comportamiento y UX
4. **Animaciones**:  Moderadas (transiciones + efectos al escribir)
5. **Feedback visual**: Cuando se invierta el texto, usa animación fade
6. **Tono del humor**: Para el título y descripción usa Humor casual y ligero
## 💻 Aspectos Técnicos
7. **Compatibilidad**: puedes usar características modernas de ES6+
8. **Responsive**: usar optimización especial para móviles o tablets.
9. **Caracteres especiales**:  Emojis, Espacios múltiples, Números y símbolos, no se invierten.
10. **Límite de caracteres**: establece un máximo de 90 caracteres en el input
## 📱 Funcionalidades Adicionales
11. **Copiar resultado**: crea un botón para copiar el texto invertido al portapapeles
12. **Historial**: guardar un historial de las últimas 10 inversiones
13. **Contador**: Muestra un contador de caracteres
