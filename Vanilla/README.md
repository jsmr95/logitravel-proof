# 🧩 Vanilla JS Technical Proof

Este proyecto es una **prueba técnica** desarrollada con **JavaScript puro (Vanilla JS)**.
Simula una pequeña aplicación de lista interactiva que permite **añadir, eliminar, seleccionar y deshacer** acciones sobre elementos del DOM, utilizando únicamente código nativo del navegador sin frameworks.

---

## 🚀 Funcionalidades principales

- ✅ Añadir elementos a la lista mediante un cuadro de diálogo (SweetAlert2), o implementar cualquier otra librería.
- 🗑️ Eliminar elementos seleccionados con doble clic o con el botón **DELETE**.
- ↩️ Deshacer la última acción (tanto añadir como eliminar).
- 🖱️ Seleccionar elementos de la lista con un solo clic.
- 🧠 Renderizado dinámico de un “componente” de título (`TitleComponent`) insertado en el DOM.
(Siguiendo este ejemplo, se podría componentizar todo)

---

## 🧱 Estructura del proyecto
├── helpers/
│ ├── actions.js # Contiene toda la lógica de interacción con el DOM
│ └── title.js # Define el componente TitleComponent que se renderiza dinámicamente
├── utils/
│ └── undo.svg # Icono usado para el botón de deshacer
├── styles.css # Estilos básicos del proyecto
├── index.html # Estructura base del DOM y scripts cargados
└── README.md # Documentación del proyecto


---

## 🧠 Tecnologías usadas

- **Vanilla JavaScript (ES6+)**
- **SweetAlert2** (para modales interactivos)
- **HTML5 / CSS3**

## ⚙️ Cómo ejecutar el proyecto

1. Abre el archivo index.html directamente en tu navegador.
(No requiere servidor ni instalación adicional)

## 📁 Descripción de los archivos principales
helpers/actions.js

Contiene las funciones que manejan la lógica principal:

**openBox()** → abre un modal para añadir texto.

**addText()** → agrega un nuevo <li> a la lista.

**select(event)** → marca/desmarca elementos como seleccionados.

**remove(event)** → elimina un elemento individual.

**deleteElements()** → elimina todos los elementos seleccionados de forma optimizada.

**undoAction()** → deshace la última acción (añadir o eliminar).

helpers/title.js

Simula un componente reutilizable, que inserta dinámicamente un título y un párrafo al inicio del mainContainer.
Se carga con el atributo **defer** para asegurar que el DOM esté listo antes de ejecutarse.

index.html

Define la estructura principal del DOM, los botones de acción y los scripts cargados.
El orden de carga de los scripts garantiza que title.js solo se ejecute cuando el DOM esté completamente montado.

## 🧩 Mejores prácticas implementadas

Uso de requestIdleCallback() para realizar operaciones pesadas (como eliminar varios nodos) sin bloquear el hilo principal.

Separación del código en módulos (helpers/) para mejorar la legibilidad y mantenimiento.

Validación de inputs para evitar cadenas vacías.

Manipulación segura del DOM (sin innerHTML inseguro para texto dinámico).