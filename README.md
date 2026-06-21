# PhysWorldAI Workshop Website

Website for the PhysWorldAI workshop proposal: **Physical World AI: Geometry, Characteristics, and Multimodal Sensing**.

Live site: https://physworld-org.github.io/physworld.github.io/

## Development

```sh
npm install
npm run dev
```

The local dev server runs at `http://localhost:4321/`.

## Build

```sh
npm run build
npm run preview
```

## Deployment

The site is built with Astro and deployed to GitHub Pages through `.github/workflows/deploy.yml`.

Because this is a project page under `physworld-org/physworld.github.io`, Astro uses:

```js
base: "/physworld.github.io"
```

Keep this base path unless the repository is renamed to an organization/user Pages root repo or moved behind a custom domain.
