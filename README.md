# mrtnmrls

Yep, that's me, this is my blog where I can post some articles related to my life, experiences, thoughts and more. Take a seat and enjoy.

I'm using [Astro](https://astro.build/) to build whole site, with some plugins that add extra functionallities.

To run this project use:
```sh
npm run dev
```

[![wakatime](https://wakatime.com/badge/user/018b31ec-0d02-4ad6-831a-dbedcd210400/project/018d774e-70a1-4209-ba74-aeba64053eaf.svg)](https://wakatime.com/badge/user/018b31ec-0d02-4ad6-831a-dbedcd210400/project/018d774e-70a1-4209-ba74-aeba64053eaf)


## 🚀 Project Structure

Inside of this project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── ...
│   ├── layouts/
│   │   └── ...
│   └── pages/
│       └── en
│       │      └── ...
         └──
└── package.json
```

Posts are written in `.mdx` files with some HTML tags.

Currently site is bilingual for spanish and english speakers. There are specific pages for each language. Components have a logic to decide when display a english or spanish text.

Images are placed in `assets` folder, they are in `.webp` format to optimise size and resolutions.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check`, `astro sync` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
