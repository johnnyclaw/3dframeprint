# Development Guide

## Tailwind CSS

This theme uses the [Tailwind CSS standalone CLI](https://tailwindcss.com/blog/standalone-cli) — no Node.js required.

### Setup (first time)

```bash
curl -sLO https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-macos-arm64
chmod +x tailwindcss-macos-arm64
mv tailwindcss-macos-arm64 tailwindcss
```

### Build

```bash
bin/build-css
```

Or manually:

```bash
./tailwindcss -i src/tailwind.css -o assets/tailwind.css --minify
```

### Watch (dev mode)

```bash
bin/watch-css
```

Tailwind config is in `tailwind.config.js`. The compiled `assets/tailwind.css` is committed so the theme works without building.

---

## View Transitions

This theme uses the **native CSS View Transitions API** (MPA mode). No JavaScript required — works with regular page navigations in Chrome/Edge 126+ and Safari 18+.

### How it works

The `@view-transition { navigation: auto; }` rule in `theme.css` enables cross-fade transitions on all same-origin navigations automatically.

### Built-in transition classes

| Class | Purpose |
|---|---|
| `product-image-transition` | Morphs product images between collection → product page |
| `product-title-transition` | Morphs product titles |
| `hero-transition` | Named transition for hero sections |
| `card-transition` | Slide transition for cards (pair with inline `view-transition-name`) |

### Usage in templates

**Product cards** (collection/homepage): Add a unique `view-transition-name` per product:

```liquid
<a href="{{ product.url }}" style="view-transition-name: product-{{ product.handle }};">
```

**Product page**: Add classes to the image and title:

```liquid
<img class="product-image-transition" ...>
<h1 class="product-title-transition">{{ product.title }}</h1>
```

### Adding custom transitions

1. Give the element a unique `view-transition-name`:
   ```css
   .my-element { view-transition-name: my-thing; }
   ```

2. Define animations:
   ```css
   ::view-transition-old(my-thing) { animation: fade-out 0.2s ease-in; }
   ::view-transition-new(my-thing) { animation: fade-in 0.25s ease-out; }
   ```

> **Note:** Each `view-transition-name` must be unique on the page. Two elements with the same name will cause the transition to fail.

View transitions are pure CSS — no JS, no Turbo, no conflicts with Shopify.
