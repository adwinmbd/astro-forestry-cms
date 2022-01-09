# Welcome to [Astro](https://astro.build)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── .forestry/
│   ├── front_matter/
│   │    ├── templates
│   │        └── post.yml
│   └── settings.yml
├── public/
│   ├── assets/
│   │    ├── css
│   │    │    └── site.css
│   │    ├── img
│   │    │    ├── logo.svg
│   │    │    └── touring.jpg
│   │    └── js
│   │         ├── dropcap.min.js
│   │         └── responsive-nav.min.js
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── MainHead.astro
│   │   └── Pagination.astro
│   ├── data/
│   │    └── *.md
│   └── pages/
│       ├── posts
│       │    ├── index.astro
│       │    └── [slug].astro
│       ├── about.astro
│       ├── contact.astro
│       └── index.astro
├── astro.config.mjs
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 👀 Want to learn more?

Feel free to check [our documentation](https://github.com/withastro/astro) or jump into our [Discord server](https://astro.build/chat).

## Credits

- [Navillus](https://github.com/Navillus-BV/demo-astro-forestry)
- [Brian Maier Jr.](https://github.com/brianmaierjr/long-haul)

## To-do

- [ ] Fix responsive mobile navigation
