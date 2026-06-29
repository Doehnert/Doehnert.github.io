# Curriculum frontend

Next.js frontend for the curriculum RAG API.

## Local development

```bash
cp .env.local.example .env.local
npm install
npm run dev
```

## GitHub Pages

The application uses a Next.js static export and is deployed by
`.github/workflows/deploy.yml`.

Before deploying:

1. Open the GitHub repository.
2. Go to **Settings → Pages**, select **Deploy from a branch**, and choose the
   `gh-pages` branch with the `/ (root)` folder.
3. Go to **Settings → Secrets and variables → Actions → Variables**.
4. Add `NEXT_PUBLIC_API_URL` with the public backend URL, for example
   `https://api.example.com`.
5. Push to the `main` branch or manually run the workflow.

The workflow builds from `main` and publishes only the generated static files to
an orphan `gh-pages` branch. Dependencies and build caches are not published.
It also handles the repository subpath used by project Pages sites such as
`https://username.github.io/repository-name/`.

The backend must include the final Pages origin in `FRONTEND_ORIGINS`, without a
path:

```env
FRONTEND_ORIGINS=https://username.github.io
```
