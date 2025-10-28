// ============================================
// FASE 1: Funcionalidad Básica con Botón
// ============================================

// Variables globales
const textInput = document.getElementById('textInput');
const reverseBtn = document.getElementById('reverseBtn');
const resultSection = document.getElementById('resultSection');
const resultText = document.getElementById('resultText');
const charCounter = document.getElementById('charCounter');
const copyBtn = document.getElementById('copyBtn');
const historySection = document.getElementById('historySection');
const historyList = document.getElementById('historyList');

// Array para almacenar el historial (máximo 10 elementos)
let history = [];
const MAX_HISTORY = 10;

/**
 * Función para invertir una cadena de texto
 * @param {string} str - Cadena a invertir
 * @returns {string} - Cadena invertida
 */
function reverseString(str) {
    // Convertir a array, invertir y volver a unir
    return str.split('').reverse().join('');
}

/**
 * Actualiza el contador de caracteres
 */
function updateCharCounter() {
    const currentLength = textInput.value.length;
    const maxLength = 90;
    charCounter.textContent = `${currentLength}/${maxLength}`;
    
    // Cambiar color si está cerca del límite
    if (currentLength >= 80) {
        charCounter.classList.add('warning');
    } else {
        charCounter.classList.remove('warning');
    }
}

/**
 * Muestra u oculta el botón según la longitud del texto
 */
function toggleButton() {
    const textLength = textInput.value.length;
    
    if (textLength > 3) {
        reverseBtn.classList.add('visible');
    } else {
        reverseBtn.classList.remove('visible');
    }
}

/**
 * Ejecuta la inversión del texto y muestra el resultado
 */
function executeReverse() {
    const inputValue = textInput.value.trim();
    
    // Validar que hay texto
    if (inputValue.length === 0) {
        return;
    }
    
    // Invertir el texto
    const reversed = reverseString(inputValue);
    
    // Mostrar resultado con animación fade
    resultText.style.opacity = '0';
    setTimeout(() => {
        resultText.textContent = reversed;
        resultText.style.transition = 'opacity 0.5s ease';
        resultText.style.opacity = '1';
    }, 100);
    
    // Mostrar sección de resultados
    resultSection.classList.add('visible');
    
    // Agregar al historial
    addToHistory(inputValue, reversed);
}

/**
 * Agrega una inversión al historial
 * @param {string} original - Texto original
 * @param {string} reversed - Texto invertido
 */
function addToHistory(original, reversed) {
    // Crear objeto de historial
    const historyItem = {
        original: original,
        reversed: reversed,
        timestamp: new Date().toLocaleTimeString()
    };
    
    // Agregar al inicio del array
    history.unshift(historyItem);
    
    // Mantener solo los últimos 10 elementos
    if (history.length > MAX_HISTORY) {
        history.pop();
    }
    
    // Actualizar la visualización del historial
    updateHistoryDisplay();
}

/**
 * Actualiza la visualización del historial en el DOM
 */
function updateHistoryDisplay() {
    // Limpiar lista actual
    historyList.innerHTML = '';
    
    // Agregar cada elemento del historial
    history.forEach((item, index) => {
        const historyItemDiv = document.createElement('div');
        historyItemDiv.className = 'history-item';
        historyItemDiv.innerHTML = `
            <strong>${item.original}</strong>
            <span class="history-arrow">→</span>
            <strong>${item.reversed}</strong>
            <span style="color: #999; font-size: 0.8rem; margin-left: 10px;">${item.timestamp}</span>
        `;
        historyList.appendChild(historyItemDiv);
    });
    
    // Mostrar sección de historial si hay elementos
    if (history.length > 0) {
        historySection.classList.add('visible');
    }
}

/**
 * Copia el texto invertido al portapapeles
 */
function copyToClipboard() {
    const textToCopy = resultText.textContent;
    
    // Usar la API moderna del portapapeles
    navigator.clipboard.writeText(textToCopy).then(() => {
        // Feedback visual
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '✅ ¡Copiado!';
        copyBtn.classList.add('copied');
        
        // Restaurar después de 2 segundos
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Error al copiar:', err);
        alert('No se pudo copiar el texto');
    });
}

// ============================================
// Event Listeners
// ============================================

// Actualizar contador y botón mientras se escribe
textInput.addEventListener('input', () => {
    updateCharCounter();
    toggleButton();
});

// Ejecutar inversión al hacer clic en el botón
reverseBtn.addEventListener('click', executeReverse);

// Ejecutar inversión al presionar Enter
textInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && textInput.value.length > 3) {
        executeReverse();
    }
});

// Copiar al portapapeles
copyBtn.addEventListener('click', copyToClipboard);

// Inicializar contador al cargar la página
updateCharCounter();