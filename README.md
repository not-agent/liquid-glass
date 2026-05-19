# @taehalim/liquid-glass

Liquid Glass effect for Astro and browser UI, using SVG displacement filters and
`backdrop-filter`.

![Liquid Glass scroll demo](https://raw.githubusercontent.com/not-agent/liquid-glass/main/assets/demo.gif)

## Demo

The demo above is captured from the package runtime. It shows the intended
effect while content scrolls behind the glass: background text is refracted
through separate color channels, then softened by a frosted overlay.

## Install

```sh
npm install @taehalim/liquid-glass
```

```sh
bun add @taehalim/liquid-glass
```

## Astro

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

## Props

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

## Development

```sh
npm install
npm run build
npm pack --dry-run
```

## Publish

```sh
npm run build
npm publish --access public
```
