# Portfolio Carolina

Sitio web personal construido con React + Vite.

## Desarrollo local

```bash
npm install
npm run dev
```

## Publicacion en GitHub Pages

El repositorio incluye el workflow `/.github/workflows/deploy.yml`.

- Cada `push` a la rama `main` ejecuta build y deploy automatico.
- La publicacion se hace con GitHub Actions (no necesitas `gh-pages` ni comandos manuales de deploy).

### Configuracion inicial (solo una vez)

1. En GitHub, abre `Settings` del repositorio.
2. Ve a `Pages`.
3. En `Build and deployment`, selecciona `Source: GitHub Actions`.
4. Haz `push` a `main` y espera a que termine el workflow.
