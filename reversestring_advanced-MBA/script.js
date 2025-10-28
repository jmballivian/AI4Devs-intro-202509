// ============================================
// FASE 2: Inversión en Tiempo Real
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

// Variable para controlar el debounce del historial
let historyTimeout = null;
let lastAddedToHistory = '';

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
 * (Mantenido como demostración de la lógica condicional)
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
 * Ejecuta la inversión del texto en tiempo real
 */
function executeRealTimeReverse() {
    const inputValue = textInput.value;
    
    // Si el input está vacío, ocultar resultados
    if (inputValue.length === 0) {
        resultSection.classList.remove('visible');
        return;
    }
    
    // Invertir el texto
    const reversed = reverseString(inputValue);
    
    // Mostrar resultado con animación fade
    resultText.style.opacity = '0';
    setTimeout(() => {
        resultText.textContent = reversed;
        resultText.style.transition = 'opacity 0.3s ease';
        resultText.style.opacity = '1';
    }, 50);
    
    // Mostrar sección de resultados
    resultSection.classList.add('visible');
    
    // Agregar al historial con debounce (solo cuando el usuario deja de escribir)
    addToHistoryWithDebounce(inputValue, reversed);
}

/**
 * Agrega una inversión al historial con debounce
 * Solo se agrega cuando el usuario deja de escribir por 1.5 segundos
 * @param {string} original - Texto original
 * @param {string} reversed - Texto invertido
 */
function addToHistoryWithDebounce(original, reversed) {
    // Limpiar timeout anterior
    if (historyTimeout) {
        clearTimeout(historyTimeout);
    }
    
    // Crear nuevo timeout
    historyTimeout = setTimeout(() => {
        // Solo agregar si el texto es diferente al último agregado y tiene más de 3 caracteres
        if (original.trim().length > 3 && original !== lastAddedToHistory) {
            addToHistory(original, reversed);
            lastAddedToHistory = original;
        }
    }, 1500); // 1.5 segundos de espera
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

/**
 * Función para agregar manualmente al historial (cuando se usa el botón)
 */
function manualAddToHistory() {
    const inputValue = textInput.value.trim();
    
    if (inputValue.length > 3) {
        const reversed = reverseString(inputValue);
        
        // Cancelar el debounce automático
        if (historyTimeout) {
            clearTimeout(historyTimeout);
        }
        
        // Agregar inmediatamente al historial
        if (inputValue !== lastAddedToHistory) {
            addToHistory(inputValue, reversed);
            lastAddedToHistory = inputValue;
        }
    }
}

// ============================================
// Event Listeners
// ============================================

// TIEMPO REAL: Invertir mientras se escribe
textInput.addEventListener('input', () => {
    updateCharCounter();
    toggleButton(); // Mantener lógica del botón condicional como demo
    executeRealTimeReverse(); // Nueva funcionalidad en tiempo real
});

// Botón manual (opcional, como demostración)
reverseBtn.addEventListener('click', manualAddToHistory);

// Ejecutar inversión manual al presionar Enter
textInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && textInput.value.length > 3) {
        manualAddToHistory();
    }
});

// Copiar al portapapeles
copyBtn.addEventListener('click', copyToClipboard);

// Inicializar contador al cargar la página
updateCharCounter();