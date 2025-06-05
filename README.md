# Inventory Control Frontend

Este repositorio contiene un ejemplo sencillo de una aplicación de control de inventario para un bar de tragos utilizando **React** con **Vite**.

## Estructura

```
frontend/
  index.html       # Punto de entrada para Vite
  package.json     # Dependencias y scripts
  vite.config.js   # Configuración de Vite
  src/
    App.jsx        # Componente principal con la lógica del inventario
    main.jsx       # Punto de montaje de React
    *.css          # Estilos
```

## Uso

Instala las dependencias y ejecuta el servidor de desarrollo:

```bash
cd frontend
npm install
npm run dev
```

La interfaz permite:

- Agregar artículos especificando nombre y cantidad.
- Modificar la cantidad existente de cada artículo.
- Eliminar artículos de la lista.
- Al abrir la aplicación se cargan algunos tragos de ejemplo ("Mojito" y "Margarita") para que puedas probar rápidamente.
- Los artículos se muestran como tarjetas con una imagen generada automáticamente a partir del nombre.
