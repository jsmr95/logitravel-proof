# Technical Proof (React) — Documentación detallada

Este repositorio corresponde a una prueba técnica desarrollada en React, enfocada en la gestión de una lista de elementos de manera eficiente, clara y con buenas prácticas modernas de React. Se enfatiza la organización usando componentes funcionales, state management utilizando Nanostores, separación de responsabilidades y una simulación de llamada a un servicio como carga inicial.

---

## 1. Inicialización y carga simulada de datos

La aplicación simula una llamada inicial a un servicio, emulando el comportamiento de un _fetch_ real a backend. Los datos iniciales (ítems, título y contenido) se obtienen desde un archivo JSON localizado en `public/backend/initialLoad.json`.

La carga se realiza con un _effect_ en el componente raíz, de esta manera:

```jsx
useEffect(() => {
  const fetchData = async () => {
    const data = await getData();
    setListItems(data?.items);
    setTitleList(data?.title);
    setContentTitleList(data?.content);
  };
  fetchData();
}, []);
```

Esto garantiza que el estado inicial de toda la app provenga de una "API" controlada y testeable.

---

## 2. Arquitectura y separación en componentes

La aplicación está dividida en 3 componentes principales, cada uno responsable de una parte concreta de la UI:

- `TitleList`: Renderiza el título y el contenido descriptivo.
- `ItemsList`: Gestiona y muestra la lista de elementos, permitiendo seleccionar, anular selección y eliminar mediante doble clic.
- `ButtonsList`: Administra la interacción (botones de añadir, deshacer y eliminar).

Cada componente recibe solo los props estrictamente necesarios, promoviendo la reutilización y mantenibilidad.

---

## 3. Gestión de estado global con Nanostores

Toda la gestión de estado se centraliza usando Nanostores, una librería recomendada para gestionar estado reactivo en proyectos React modernos por su simplicidad y rendimiento.

Se crea un store por cada fragmento de información relevante:

- `listItems`: Elementos de la lista.
- `titleList`: Título mostrado.
- `contentTitleList`: Texto de contenido descriptivo.
- `undoList`: Historial para soportar la funcionalidad de "deshacer".

Los componentes consumen el store usando el hook `useStore` de Nanostores, facilitando escalabilidad.

---

## 4. Lógica de negocio (acciones y manipulación)

La lógica de interacción está separada en funciones en `store/listStore.js` y en acciones específicas en `actions/actions.js` (por ejemplo, el uso de SweetAlert2 para añadir elementos).

- **Añadir elemento:** Botón `ADD` despliega un modal SweetAlert2.
- **Eliminar elemento o seleccionados:** Con doble click (uno) o botón `DELETE` (todos los seleccionados).
- **Undo:** Volver atrás la última acción de edición sobre la lista.

---

## 5. Buenas prácticas y aspectos interesantes

- **Simulación de backend:** Los datos iniciales permiten simular respuestas de backend, haciendo la aplicación fácilmente testable y escalable.
- **Separación de responsabilidades:** La lógica está bien aislada por componente y funcionalidad.
- **Interactividad avanzada:** Doble click, selección múltiple, deshacer/rehacer.
- **Uso de librerías modernas:** Nanostores para el estado y SweetAlert2 para UI rica de diálogos.

---

## 6. Instalación y ejecución

```bash
npm install
npm run start
```

Aplicación corre en: [http://localhost:3000](http://localhost:3000)

---

## 7. Estructura de carpetas relevante

```
/public/backend/initialLoad.json     # Datos simulados del backend
/src/components/ButtonsList/         # Componente de botones principales
/src/components/ItemsList/           # Visualización y gestión de ítems
/src/components/TitleList/           # Cabecera de título y descripción
/src/store/listStore.js              # Gestión global del estado
/src/actions/actions.js              # Acciones auxiliares (SweetAlert, ...)
/src/service/getService.js           # Servicio simulado de fetch
```

---

## 8. Dependencias principales

- React 18
- Nanostores (state management)
- SweetAlert2 (modal interactivo)
- CSS Modules
- TypeScript

---

## 9. Mejoras y escalabilidad

El código está pensado para ser fácilmente ampliable:
- Solo haría falta cambiar el fetch para consumir una API real.
- Se pueden agregar más acciones o componentes reusables.
- La arquitectura permite escalar la gestión global del estado con poca fricción.

---

### Nota

Este proyecto sigue las recomendaciones actuales de React para trabajar con estado global, separation of concerns y composición de componentes funcionales, ideal para pruebas técnicas o proyectos profesionales base.
