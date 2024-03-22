# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

### Changed

### Removed

## [0.5.0] - 2024-03-22

### Added

- New header to display a navigation (#53).
- `/uses` page (#54).

### Changed

- Rebuild site, CSS styles changed to include dark mode colors (#44).
- Improve images by using `.webp` format (#52).
- Pages use new `.astro` component (#55).

## [0.4.0] - 2024-03-10

### Added

- Github templates for issues and pull requests (#20).
- Custom 404 page (#31).
- New post (Naturaleza resiliente) in Spanish (#35).
- New page for posts (#41).
- New post (The personal web made me re-think accessibility) in both languages (#42)

### Changed

- Improve content in RSS (#25).
- Improve `readme.md` file (#26).
- Fix image background position in pages (#21).
- Fix favicon format (#22).
- Fix content collection warning (#24).
- Fix images path in post files (#32).
- Fix RSS description content (#40).

## [0.2.0] - 2024-02-18

### Added

- Introduced internationalization through i18n plugin. Spanish is default language. New components were created to separate content by language (`/en` for english content) (#7).
- Page not found page (404) (#8).
- Implemented RSS plugin and file was configured.
- New post with images.

### Changed

- Fix FOUT issue.

## [0.1.0] - 2024-02-11

### Added

- Mdx files now are supported through plugin. Site can render `.md` and `.mdx` files.
- Content collection API is configured to be used in `.astro` components.
- Template page `[...slug].astro` for posts.
- Poppins font.
- Introduced aliases to reduce import path in `.astro` components.

### Changed

- Latest posts list is displayed in index page.
- Post title redirects to index page.
- Navigation component displays all posts as list.
- Global style declares Poppins font.

## [0.0.1] - 2024-02-06

### Added

- `/now` and `/about` pages.
- Footer, navigation and social components.
- Global CSS style.

### Changed

- Main layout is used in pages and hosts components.
- Favicon.

[unreleased]: https://github.com/IsTheMartin/mrtnmrls/compare/v0.5.0...HEAD
[0.5.0]: https://github.com/IsTheMartin/mrtnmrls/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/IsTheMartin/mrtnmrls/compare/v0.2.0...v0.4.0
[0.2.0]: https://github.com/IsTheMartin/mrtnmrls/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/IsTheMartin/mrtnmrls/compare/v0.0.1...v0.1.0
[0.0.1]: https://github.com/IsTheMartin/mrtnmrls/releases/tag/v0.0.1