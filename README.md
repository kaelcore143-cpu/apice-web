# ÁPICE Web

Sitio web de documentación para el modelo de IA fundacional ÁPICE.

## 🚀 Despliegue

### GitHub Pages (Automático)

Cada push a `main` despliega automáticamente vía GitHub Actions.

### Configuración inicial

1. Crea el repositorio en GitHub
2. Activa GitHub Pages: Settings → Pages → Source: GitHub Actions
3. (Opcional) Agrega tu dominio personalizado:
   - Settings → Pages → Custom domain
   - Edita `public/CNAME` con tu dominio
   - Configura los registros DNS en tu proveedor

### DNS para dominio personalizado

```
Tipo    Nombre    Valor
A       @         185.199.108.153
A       @         185.199.109.153
A       @         185.199.110.153
A       @         185.199.111.153
CNAME   www       TU_USUARIO.github.io
```

## 🛠 Desarrollo local

```bash
npm install
npm run dev
```

## 📦 Build

```bash
npm run build
```

## 📝 Estructura

- `src/pages/` - Páginas principales
- `src/components/` - Componentes reutilizables
- `public/CNAME` - Configuración de dominio personalizado
