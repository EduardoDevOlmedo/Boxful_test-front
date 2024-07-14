# Prueba - Boxful

## Levantar proyecto

Para levantar el proyecto en el entorno local:

```bash
yarn
yarn run dev
```

### Configuracion de .env

Si la API se va a hostear en la nube, cambia baseApiURI en tu next.config.mjs. En caso de no agregar una, se usará la URI por defecto (ver en useDataMutation.ts).

Ejemplo:

```javascript
    env: {
        baseApiURI=https://api-en-la-nube.com
    }
```

O si quieren usar un puesto en especifico, agregar la URL con el puerto.


