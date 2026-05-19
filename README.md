# @taehalim/liquid-glass

Framework-independent Liquid Glass effect using SVG displacement filters and
`backdrop-filter`. Includes a ready-to-use Astro adapter.

![Liquid Glass scroll demo](https://raw.githubusercontent.com/not-agent/liquid-glass/main/assets/demo.gif)

I wanted the Inspira UI Liquid Glass effect, but needed it outside a Nuxt/Vue
component stack, so this package exposes the effect as a small DOM runtime with
framework adapters layered on top.

## Demo

The demo above is captured from the package runtime. It shows the intended
effect while content scrolls behind the glass: background text is refracted
through separate color channels, then softened by a frosted overlay.

## For Coding Agents

If you are a coding agent adding this package to a project, treat the core effect
as DOM/CSS infrastructure, not as decorative gradients.

- Install `@taehalim/liquid-glass`.
- Import `@taehalim/liquid-glass/styles.css` once near the app root.
- Use `@taehalim/liquid-glass/auto` when the markup has `data-liquid-glass`.
- Use `@taehalim/liquid-glass/astro` only inside Astro projects.
- Preserve the SVG `<filter>` node, `data-filter-id`, and the
  `.liquid-glass-effect`, `.liquid-glass-slot`, `.liquid-glass-filter` classes.
- Do not fake the effect with rainbow background overlays. The color separation
  should come from the displaced backdrop content.

## Install

```sh
npm install @taehalim/liquid-glass
```

```sh
bun add @taehalim/liquid-glass
```

## Vanilla / No Framework

```html
<link
  rel="stylesheet"
  href="/path/to/node_modules/@taehalim/liquid-glass/dist/styles.css"
/>

<div
  class="liquid-glass-effect"
  data-liquid-glass
  data-filter-id="liquid-glass-demo"
  data-radius="24"
  data-border="0.07"
  data-lightness="50"
  data-blend="difference"
  data-x-channel="R"
  data-y-channel="B"
  data-alpha="0.93"
  data-blur="11"
  data-r-offset="0"
  data-g-offset="10"
  data-b-offset="20"
  data-scale="-180"
  style="--liquid-glass-frost:0.32;border-radius:24px;"
>
  <div class="liquid-glass-slot">Content</div>

  <svg class="liquid-glass-filter" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter
        id="liquid-glass-demo"
        color-interpolation-filters="sRGB"
      ></filter>
    </defs>
  </svg>
</div>

<script type="module">
  import "@taehalim/liquid-glass/auto";
</script>
```

## CDN / No Build

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@taehalim/liquid-glass@0.1.4/dist/styles.css"
/>

<script type="module">
  import "https://esm.sh/@taehalim/liquid-glass@0.1.4/auto";
</script>
```

## Astro Adapter

```astro
---
import LiquidGlass from "@taehalim/liquid-glass/astro";
import "@taehalim/liquid-glass/styles.css";
---

<LiquidGlass id="site-nav" radius={22} frost={0.32}>
  <div>Content</div>
</LiquidGlass>

<script>
  import "@taehalim/liquid-glass/auto";
</script>
```

## Core API

```ts
import { mountLiquidGlass, setupLiquidGlass } from "@taehalim/liquid-glass";
import "@taehalim/liquid-glass/styles.css";

setupLiquidGlass();

const element = document.querySelector<HTMLElement>("[data-liquid-glass]");
if (element) {
  mountLiquidGlass(element);
}
```

## Options

| Prop             | Type                                                             | Default        |
| ---------------- | ---------------------------------------------------------------- | -------------- |
| `id`             | `string`                                                         | generated      |
| `as`             | `"div" \| "nav" \| "header" \| "footer" \| "section" \| "aside"` | `"div"`        |
| `radius`         | `number`                                                         | `16`           |
| `border`         | `number`                                                         | `0.07`         |
| `lightness`      | `number`                                                         | `50`           |
| `blend`          | `string`                                                         | `"difference"` |
| `xChannel`       | `"R" \| "G" \| "B"`                                              | `"R"`          |
| `yChannel`       | `"R" \| "G" \| "B"`                                              | `"B"`          |
| `alpha`          | `number`                                                         | `0.93`         |
| `blur`           | `number`                                                         | `11`           |
| `rOffset`        | `number`                                                         | `0`            |
| `gOffset`        | `number`                                                         | `10`           |
| `bOffset`        | `number`                                                         | `20`           |
| `scale`          | `number`                                                         | `-180`         |
| `frost`          | `number`                                                         | `0.05`         |
| `class`          | `string`                                                         | `undefined`    |
| `containerClass` | `string`                                                         | `undefined`    |

## Browser Support

The full SVG displacement backdrop effect is most reliable in Chromium-based
browsers. Safari and Firefox use the CSS fallback defined in `styles.css`.

## Changelog

See [CHANGELOG.md](./CHANGELOG.md).

## Development

```sh
npm install
npm run build
npm pack --dry-run
```

## Maintainers

```sh
npm run build
npm publish --access public
```
