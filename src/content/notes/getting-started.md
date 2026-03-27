---
title: Getting Started
date: 2026-03-26
description: How to add notes and charts to this site
tags: [meta]
---

Welcome to sendo_akira. This is your first note.

## Adding Notes

Create a new `.md` file in `src/content/notes/`. Each file needs frontmatter at the top:

```markdown
---
title: My Note Title
date: 2026-03-26
description: Optional short description
tags: [math, statistics]
---

Your note content goes here...
```

The filename becomes the URL slug. A file named `linear-algebra.md` will be available at `/notes/linear-algebra`.

## Adding Charts

1. Save your HTML chart to `public/charts/my-chart.html`
2. Create a matching entry in `src/content/charts/my-chart.md`:

```markdown
---
title: My Chart Title
date: 2026-03-26
description: What this chart shows
file: my-chart.html
---
```

The chart will be embedded in an iframe at `/charts/my-chart`, and also accessible directly at `/charts/my-chart.html`.

## Tips for Chart HTML Files

Since your charts are iframed on the same domain, they can read `localStorage` to match the site's dark/light theme:

```javascript
const theme = localStorage.getItem('theme');
if (theme === 'dark') document.body.classList.add('dark');
```

## Writing Notes

Standard Markdown works: **bold**, *italic*, `inline code`, links, tables, blockquotes, and code blocks with syntax highlighting.

> This is a blockquote — great for callouts or key ideas.

| Column A | Column B |
| -------- | -------- |
| Value 1  | Value 2  |
| Value 3  | Value 4  |
