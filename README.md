# Surreal Estates Content Studio

This is the Sanity Studio for the Surreal Estates website. It is the editor for website content; the public website lives in the sibling `web/` project.

## Connected Sanity project

- **Project ID:** `2ylg4a6k`
- **Dataset:** `production`
- **Studio title:** Surreal Estates

The Studio reads and writes to the production dataset. Publishing content makes it available through Sanity's published content API. The website is statically built, so changes to Sanity content appear on the public site after the website is rebuilt and deployed.

## Run locally

From this directory:

```sh
npm install
npm run dev
```

Open the local URL printed by Sanity CLI and sign in with an account that has access to the Sanity project.

## Content in Studio

The Studio navigation currently includes:

- **Services** — service names, summaries, scope, display order, visibility, and SEO metadata.
- **Projects** — project details, images, related services, display order, visibility, and SEO metadata.
- **Testimonials** — client quotes and optional project references.
- **Site settings** — business details, default description and social image, logo, and social profile links.

Additional registered schemas include FAQs, service areas, SEO metadata, and calls to action. Not all of these currently have a navigation entry or a connected page on the website.

## Website connection

The website's Sanity client is in `../web/src/lib/sanity.ts`. It uses the same project ID and production dataset and reads published documents.

- Published projects can appear on the home page and portfolio. Each published project with a slug and cover image also has a project detail page.
- Project SEO fields control that detail page's title, description, social image, and indexing setting.
- Service SEO fields can override metadata when the service slug matches a website service page slug.
- Site settings can provide the website's default meta description and social sharing image.
- Most service page copy is still maintained in `../web/src/`; editing a service document does not currently replace that page's body copy.

## Build and deploy the Studio

```sh
npm run build
npm run deploy
```

`npm run build` creates a production Studio build. `npm run deploy` publishes the Studio application to Sanity using the configured deployment app ID. Deploying the Studio updates the editor; it does not rebuild or deploy the public website.

## Deploy website content changes

After publishing Sanity content, rebuild and deploy the website from `../web` using that project's deployment workflow. Since the website uses static output, the generated pages update on the next successful website build and deploy.

## Schema locations

- `schemaTypes/documents/` contains document types.
- `schemaTypes/objects/` contains reusable object types such as SEO metadata and calls to action.
- `schemaTypes/index.ts` registers the schemas with Studio.
- `sanity.config.ts` configures the Studio, plugins, and navigation.
- `sanity.cli.ts` configures the project, dataset, and hosted Studio deployment.
