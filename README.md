# Portfolio

Ce dépôt contiendra la nouvelle application front-end (Vue 3 + Vite + Tailwind) pour mon portfolio.


# Portfolio (Vue 3 + Vite + Tailwind)

Application portfolio personnelle construite avec Vue 3 (Composition API), Vue Router, Tailwind CSS et @vueuse/motion.

## Prise en main
```powershell
cd c:\xampp\htdocs\portfolio
npm install
npm run dev
```

Build de production et preview:
```powershell
npm run build
npm run preview
```

## Structure
- src/pages: Home, About, Projects, Contact
- src/components: Header, Footer, ThemeToggle, ProjectCard
- src/router: configuration des routes
- src/data: données d’exemple (projets, compétences, timeline)

## Thème et accessibilité
- Mode sombre/clair via un toggle (classe `dark` Tailwind)
- Images avec attributs alt, contrastes soignés

## Email (EmailJS)
Remplissez `.env` (copiez depuis `.env.example`) avec vos identifiants EmailJS:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Le formulaire de `Contact.vue` utilise `src/services/email.js` et envoie: { from_name, reply_to, message }.

## Déploiement
- Netlify: `netlify.toml` fourni, build `npm run build`, publish `dist`. Fallback SPA via `_redirects`.
- Vercel: `vercel.json` fourni, build `npm run build`, output `dist`, réécriture SPA incluse.
- GitHub Pages: servez `dist/` avec fallback SPA (404 -> index.html).

Astuce preview: si le port 5173 est occupé, lancez `npm run preview -- --port 5174`.
