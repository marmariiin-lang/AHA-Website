# AI Hardware Adventures website

This is a standalone export of the current AHA! website, including the Undergraduate Curriculum video embed. It includes the website source, its static images and logos, local Inter and Montserrat font files, the required workspace packages, the pnpm lockfile, a GitHub Pages workflow, and a production build in `production-build/`.

The export is independent of Replit at runtime and does not need the API server, a database, Replit services, or secrets. Replit-only project metadata and development plugins are omitted. The website source and design are otherwise preserved; the export adds GitHub Pages base-path handling and bundles the fonts locally.

## Requirements

- Node.js 24.x
- pnpm 10.26.1

If Corepack is available, activate the pinned pnpm version:

```sh
corepack enable
corepack prepare pnpm@10.26.1 --activate
```

Otherwise, install pnpm with `npm install --global pnpm@10.26.1`.

## Install and run locally

From the unzipped project root:

```sh
cp .env.example .env
pnpm install --frozen-lockfile
pnpm dev
```

Open the local address printed by Vite (normally `http://localhost:5173`). To create and preview a production build:

```sh
pnpm build
pnpm preview
```

The source build is written to `artifacts/aha-website/dist/public/`. The included `production-build/` is a ready-built root-path version. Rebuild after changing source files or the hosting base path.

## Environment variables

The Vite config reads a `.env` file from the project root. `.env.example` contains the safe local defaults; no secret values are needed.

| Name | Required? | Purpose |
| --- | --- | --- |
| `BASE_PATH` | Optional for root hosting; set it for a GitHub Pages project site | URL prefix for site assets and client-side routes. Use `/` for a user/organization site or custom domain, and `/<repository-name>/` for the default project-site URL. |
| `PORT` | Optional | Local development and preview server port. Defaults to `5173`. |

Examples:

```sh
# User/organization Pages site or a custom domain
BASE_PATH=/ pnpm build

# Project Pages site for a repository named AHA-Website
BASE_PATH=/AHA-Website/ pnpm build
```

## Publish with GitHub Pages

1. Create a GitHub repository and push the contents of this ZIP to its default branch.
2. In **Settings → Pages**, choose **GitHub Actions** as the build and deployment source.
3. The included `.github/workflows/deploy-pages.yml` builds and deploys on pushes to `main`.
4. For a standard project site, the workflow uses `/<repository-name>/` automatically. If using a user/organization site or custom domain, add a repository variable named `PAGES_BASE_PATH` with the value `/` under **Settings → Secrets and variables → Actions → Variables**. The variable is a public path, not a secret.
5. If your default branch is not `main`, update the workflow's push branch.

The workflow copies the built `index.html` to `404.html`. That fallback lets GitHub Pages serve direct visits and refreshes for routes such as `/research` and `/informal-team`.

For manual deployment, run `pnpm install --frozen-lockfile`, set `BASE_PATH` to the correct value, and run `pnpm build`. Publish the contents of `artifacts/aha-website/dist/public/` as the Pages site, with a copy of `index.html` named `404.html`.

## Services and functionality outside Replit

- **API server:** not required. The website pages use local, bundled content and assets; the app does not call an API.
- **Database:** not required. The website does not read or write database data.
- **Replit services or credentials:** not required. Replit deployment metadata, the connector SDK, and Replit Vite plugins are not included in this export.
- **Contact form:** it validates the fields and displays the existing “not sent” notice. It does not send or store messages. To enable delivery, connect it to an email provider or your own serverless/API endpoint and update the form handler.
- **Other network access:** links to external project resources and profiles open their external websites. The Undergraduate Curriculum video is embedded from YouTube and requires an internet connection; the video itself is not stored in the archive. Fonts are included locally, so the site’s typography does not depend on Google Fonts at runtime.

All image, portrait, and logo files referenced by the website are included under `artifacts/aha-website/public/images/`, along with the favicon and local fonts. The source artifact also had an unreferenced `public/assets/` folder of original/legacy files; none of its files are loaded by the current pages, so that unused folder is omitted from this export to keep the download practical. The unrelated workspace `attached_assets/` folder is also not imported by the website. No Git-ignored website asset required by the app was omitted.

## Archive contents and exclusions

The archive includes the complete AHA website source and its required pnpm workspace package, all referenced public images, local font files and licenses, the lockfile, and the built Pages site. It excludes unused legacy source assets, `node_modules`, caches, Git history, Replit-only project settings, and environment files containing values. Start from `.env.example` if you need local environment settings.
