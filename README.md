# Inventory Control Frontend

Este repositorio contiene un ejemplo sencillo de una aplicación de control de inventario para un bar de tragos utilizando React.

## Estructura

```
frontend/
  index.html   # Archivo principal que carga la aplicación
  app.js       # Versión que utiliza useState para manejar el inventario
  app_no_state.js # Ejemplo sin generadores de estado
```

## Uso

No se requiere compilar ni instalar dependencias. Basta con abrir `frontend/index.html` en un navegador que tenga conexión a Internet para cargar las bibliotecas de React desde un CDN y probar la aplicación.

El archivo `index.html` está configurado para ejecutar `app_no_state.js`, que implementa la lógica sin utilizar `useState`. Si prefieres la versión original basada en `useState`, cambia la referencia del script a `app.js`.

La interfaz permite:

- Agregar artículos especificando nombre y cantidad.
- Modificar la cantidad existente de cada artículo.
- Eliminar artículos de la lista.

