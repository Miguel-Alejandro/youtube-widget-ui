# AGENTS.md

## Compilar y Testear

```bash
npm run build        # Compilación Stencil + docs (stencil build --docs)
npm run start        # Servidor de desarrollo en modo watch
npm test             # stencil test --spec --e2e
npm run test.watch   # Modo watch para tests
```

## Publicación

- Semantic-release se ejecuta al hacer push a la rama `development`
- La rama main también es una rama de publicación (semantic versioning)
- La matriz de CI prueba Node 14.x, 16.x, 18.x en ubuntu-latest y windows-latest
- El job de publicación solo se ejecuta después de que pasen las verificaciones de calidad

## Arquitectura

- **Framework**: Stencil.js web components (compatible con Angular, React, Vue)
- **Namespace**: `youtube-widget-ui`
- **Componentes** (3): `y-profile-info`, `y-video-list`, `y-search`
- **Destinos de salida**: CJS (`dist/`), ESM (`dist/`), Custom Elements (`dist-custom-elements/`), docs README
- **Shadow DOM**: Deshabilitado (`shadow: false`) — los estilos se aplican globalmente

## Archivos Clave

- `stencil.config.ts` — configuración de compilación y destinos de salida
- `src/components/` — implementaciones de componentes
- `src/services/` — obtención de datos de YouTube API v3
- `src/classes/` — clases de modelos de datos
