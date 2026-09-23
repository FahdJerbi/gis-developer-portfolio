# Fahd Jerbi — GIS Developer Portfolio

Modern, high-performance portfolio website for **Fahd Jerbi** (Géomaticien & GIS Developer), inspired by the design system of [Mergin Maps](https://merginmaps.com/).

Built with **Vite**, **plain HTML5**, **CSS3**, and **vanilla JavaScript**.

---

## 🚀 Quick Start

### 1. Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Build for Production

```bash
npm run build
```

Production output will be generated in `dist/`.

---

## 📸 Adding Your Real Photo & Project GIFs

### 1. Photo Placeholder

- Place your photo inside `public/assets/` (e.g., `public/assets/fahd-jerbi.jpg`).
- In `index.html` around line 95, update:
  ```html
  <img class="photo-img" src="/assets/fahd-jerbi.jpg" alt="Fahd Jerbi" />
  ```

### 2. Adding Your Project GIFs

Whenever you have your GIF recordings ready:

- Drop your `.gif` files into `public/assets/`:
  - `public/assets/project-1-ftth-plugin.gif`
  - `public/assets/project-2-webgis.gif`
  - `public/assets/project-3-automation.gif`
- In `index.html`, simply update the `src` and `data-preview-src` attributes from `.svg` to `.gif`!
  ```html
  <button
    class="btn btn-primary"
    data-preview-src="/assets/project-1-ftth-plugin.gif"
  >
    ...
    <img
      class="project-gif"
      src="/assets/project-1-ftth-plugin.gif"
      alt="..."
    />
  </button>
  ```

---

## 🎨 Mergin Maps Design Highlights

- **Palette**: Deep slate night (`#0B1319` / `#121C24`) + Mergin green accent (`#73D19C`).
- **Geospatial Features**: Coordinate badge HUD (`36°48'N 10°11'E`), topographic contour lines, and uppercase GIS domain tags.
- **GIF Showcase**: Custom interactive media frames with "GIF PREVIEW" badges and click-to-expand modal viewer.
- **4 Dedicated Services**:
  1. QGIS Plugin Development (PyQGIS / PyQt / Qt Designer)
  2. Web GIS Solutions (MapLibre GL / Leaflet / PostGIS / GeoServer)
  3. Interactive Map Dashboards
  4. GIS Automation & QA/QC (Python / GDAL / GeoPandas / Shapely)
