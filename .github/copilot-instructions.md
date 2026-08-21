# Copilot Instructions for Zachary Florez Academic Pages

This is a Jekyll-based academic portfolio website built on the Academic Pages theme. The site showcases projects, experience, publications, and involvement.

## Build & Run Commands

### Local Development
```bash
# Install Ruby dependencies (one-time setup)
bundle install

# Start local development server with live reload
jekyll serve -l -H localhost
# Site will be available at http://localhost:4000
```

### Docker Development
If you prefer containerized development:
```bash
# Build Docker image
docker build -t jekyll-site .

# Run container with hot reload
docker run -p 4000:4000 --rm -v $(pwd):/usr/src/app jekyll-site
```

### JavaScript Assets
```bash
# Install Node dependencies (one-time setup)
npm install

# Build minified JavaScript
npm run build:js

# Watch for JS changes and rebuild
npm run watch:js
```

## Project Architecture

### Content Collections
The site uses Jekyll collections to organize different content types. Each is defined in `_config.yml`:

- **`_projects/`** - Projects and talks (renders with `projects` layout)
- **`_experience/`** - Professional experience and academic history
- **`_involvement/`** - Inclusion, service, and community engagement activities
- **`_posts/`** - Blog posts
- **`_pages/`** - Static pages (About, CV, etc.)
- **`_publications/`** - Publication records (rarely used in this customized version)

Each collection has a frontmatter pattern. See examples in respective directories for required fields.

### Data-Driven Content
The `markdown_generator/` folder contains Python scripts and Jupyter notebooks that auto-generate markdown files from TSV data:

- **`talks.tsv`** → generates `_projects/` markdown files via `talks.py` or `talks.ipynb`
- **`publications.tsv`** → generates publication markdown via `publications.py` or `publications.ipynb`

Run these generators when updating the TSV files to regenerate markdown files. This is the primary way to bulk-update content.

### Site Configuration
`_config.yml` is the single source of truth for:
- Site metadata (title, author, description)
- Author/social profile information
- Default layouts and permalink patterns for each collection
- Plugin configurations (jekyll-feed, jekyll-sitemap, jekyll-paginate, jemoji)

Changes to `_config.yml` require restarting `jekyll serve` to take effect.

### Layouts & Includes
- **Layouts** (in `_layouts/`): Define page structure (single.html, default.html, projects.html, etc.)
- **Includes** (in `_includes/`): Reusable components (author-profile.html, analytics, comments, etc.)
- **Stylesheets** (`_sass/`, compiled to `assets/css/main.scss`): SCSS files with Sass mixins for theming

### Asset Pipeline
- **CSS**: SCSS files in `_sass/` compiled by Jekyll into `assets/css/`
- **JavaScript**: Original files in `assets/js/`, minified to `main.min.js` via npm
- **Fonts/Icons**: Academic icons and Font Awesome included

## Key Conventions

### Frontmatter Patterns
Content files use YAML frontmatter. Common fields across collections:

```yaml
---
title: "Your Title"
date: YYYY-MM-DD
collection: collection_name  # e.g., projects, experience, involvement
permalink: /collection/YYYY-MM-DD-slug/  # Optional; auto-generated if omitted
layout: single  # or collection-specific layout
author_profile: true  # Include author sidebar
share: true  # Show social sharing buttons
comments: true  # Enable comments
---
```

Custom fields vary by collection (e.g., `venue` for publications, `organization` for experience).

### URL Structure
- Posts: `/posts/YYYY/MM/title/`
- Projects: `/projects/YYYY-MM-DD-title/`
- Experience: `/experience/YYYY-MM-DD-title/`
- Involvement: `/involvement/YYYY-MM-DD-title/`

### Naming Conventions
- File dates use `YYYY-MM-DD` prefix: `2024-02-17-project-name.md`
- Slugs in filenames use hyphens (kebab-case)
- Collection folder names start with underscore: `_projects`, `_experience`, etc.

### Customization Points
- **Author sidebar** (`_includes/author-profile.html`): Profile info pulled from `_config.yml` author section
- **Navigation** (`_data/navigation.yml`): Main menu links
- **Comments** (`_config.yml` comments section): Configure provider (disqus, discourse, staticman, etc.)
- **Analytics** (`_config.yml` analytics section): Google Analytics configuration

### Files & Uploads
- Files (PDFs, etc.) go in `files/` directory and are accessible at `https://yoursite/files/filename.pdf`
- Images go in `images/` and are referenced as `/images/filename.jpg`

## Common Tasks

### Add a New Project/Talk
1. Create file in `_projects/YYYY-MM-DD-title.md`
2. Add required frontmatter (title, date, collection: projects, layout: projects)
3. Add markdown content below frontmatter
4. Run `jekyll serve` to preview immediately

### Bulk Update Content from TSV
1. Edit `markdown_generator/talks.tsv` or `publications.tsv`
2. Run: `python markdown_generator/talks.py` (or open `.ipynb` in Jupyter)
3. Commit generated markdown files in `_projects/` or `_publications/`

### Customize Author Profile
Edit `_config.yml` author section with your bio, location, email, social links. Changes require server restart.

### Build for Production
Jekyll automatically builds static site in `_site/` directory when running `jekyll serve`. For CI/CD, just run `jekyll build`.

## Ignored Directories
The following are excluded from Jekyll builds (see `_config.yml`):
- `node_modules/`, `Gemfile`, `Dockerfile` (build files)
- `_drafts/` (unpublished posts)
- `.github/`, `.jekyll-cache/`, `.sass-cache/` (metadata)

## Plugins in Use
- **jekyll-feed**: Generates RSS feed
- **jekyll-sitemap**: Auto-generates sitemap.xml
- **jekyll-paginate**: Pagination support
- **jekyll-redirect-from**: Redirect old URLs
- **jekyll-gist**: Embed GitHub gists
- **jemoji**: GitHub emoji support

## Notes for Copilot
- When suggesting changes to content, use the proper collection structure (frontmatter + markdown)
- If content is being bulk-updated, prefer modifying TSV files in `markdown_generator/` over manual markdown editing
- Jekyll requires server restart for `_config.yml` changes; frontend changes are live-reloaded
- When creating new features, keep the Minimal Mistakes theme structure in mind (layouts, includes, data files)
