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
2. Go to **Settings → Pages** and select **GitHub Actions** as the source.
3. Go to **Settings → Secrets and variables → Actions → Variables**.
4. Add `NEXT_PUBLIC_API_URL` with the public backend URL, for example
   `https://api.example.com`.
5. Push to the `main` branch or manually run the workflow.

The workflow automatically handles the repository subpath used by project Pages
sites such as `https://username.github.io/repository-name/`.

The backend must include the final Pages origin in `FRONTEND_ORIGINS`, without a
path:

```env
FRONTEND_ORIGINS=https://username.github.io
```
