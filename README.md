# MarcyArt — Marcello Basani / EdgeOfColor

Promotional website for Marcello Basani’s art: featured works on the home page, a full catalog, American English / Spanish / Italian with a flag language switcher, and an international shipping note.

## Run locally

```bash
npm install
npm run dev -- -p 3847
```

Open [http://localhost:3847](http://localhost:3847).

Other scripts:

```bash
npm run build
npm run start -- -p 3847
npm run lint
```

## How to edit prices (and titles)

All catalog data lives in a **single file**:

[`data/artworks.json`](./data/artworks.json)

Each artwork entry looks like:

```json
{
  "id": "work-01",
  "slug": "trumpet-city",
  "image": "/artworks/work-01.jpg",
  "featured": true,
  "priceUsd": null,
  "available": true,
  "dimensions": { "widthCm": 40, "heightCm": 60 },
  "title": {
    "en": "Trumpet City",
    "es": "Ciudad de Trompeta",
    "it": "Città della Tromba"
  },
  "caption": {
    "en": "…",
    "es": "…",
    "it": "…"
  }
}
```

Optional multi-panel works: `"dimensions": { "widthCm": 30, "heightCm": 40, "pieces": 3 }`.

### Edit a price

1. Open `data/artworks.json`.
2. Find the artwork by `id`, `slug`, or English `title.en`.
3. Set `priceUsd` (number, USD, no currency symbol) or `null` to hide price.
4. Optionally set `"available": false` when sold.
5. Save the file and refresh the site (or restart `npm run dev` if needed).

### Feature a work on the home page

Set `"featured": true` on the pieces you want in the Featured section (home). The catalog page always lists every entry in this file.

### Add a new artwork

1. Add the image under `public/artworks/` (e.g. `work-46.jpg`).
2. Append a new object to `data/artworks.json` with `image`, optional `priceUsd` / `dimensions`, titles, and captions in `en` / `es` / `it`.

## Languages

UI strings live in `src/lib/i18n/messages.ts`. Artwork titles and captions are per-item in `data/artworks.json`. The header language switcher uses flag icons (🇺🇸 🇪🇸 🇮🇹); the choice is stored in `localStorage`.

## Source materials

- Brand copy from `MarcyArt.docx` (Marcello Basani — EdgeOfColor).
- Artwork photos from sibling folder `../Quadri` (copied into `public/artworks/`).
- Source materials in the parent `MarcyArt` folder: `Quadri/`, `Archivo.docx`, `MarcyArt.docx`.

Placeholder USD prices are for demo editing — replace them with Marcello’s real prices before publishing. Contact email is a placeholder (`studio@marcyart.example`).

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · lightweight UI primitives (`clsx`, `cva`, Lucide-ready)
