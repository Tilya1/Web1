# Assignment #1 — HTML & CSS Basics

**Student:** Zhumagaliyev Aktilek
**Group:** IT-2503
**University:** AITU (Astana IT University)
**Course:** Web 1

## Objective

The goal of this assignment was to learn the basics of HTML and CSS: build a simple webpage using basic and intermediate HTML tags (text, lists, images, links, tables, forms), and apply CSS (inline, internal, external), selectors (element, class, id), the box model, positioning, sizing units, and float/clear.

## Project Structure

```
├── Untitled-1.html   # main page of the project (HTML markup)
├── styles.css        # external stylesheet (external CSS)
├── images/           # images used on the page (photo, favicon)
└── screenshots/       # screenshots of completed tasks
```

The page links `styles.css` via `<link rel="stylesheet">`, and also contains internal styles (`<style>` in `<head>`) and inline styles (`style="..."` on individual elements), as required by the assignment.

## Part 1. Introduction to HTML

**Step 0. Basic HTML structure**
Created an HTML file with the basic boilerplate (`<!DOCTYPE html>`, `<html>`, `<head>`, `<title>`, `<body>`); the page title is "My first webpage".

**Step 1. Structuring text**
Added headings `<h1>`–`<h3>` with name, group, and an "About me" section, plus a short paragraph `<p>` describing myself.

**Step 2. Lists**
Added an ordered list `<ol>` of hobbies and an unordered list `<ul>` of favorite websites.

**Step 3. Images and links**
Added a photo via `<img>` and at least two clickable links `<a>` (GitHub, MDN Web Docs, ChatGPT).

**Step 4. Button**
Added a "Click me!" button (no functionality required).

![Part 1 — Heading, photo, about me](screenshots/part1_header.png)

![Part 1 — Hobbies](screenshots/part1_hobbies.png)

![Part 1 — Links and button](screenshots/part1_links_button.png)

## Part 2. Intermediate HTML

**Step 5. Tables**
Created a table with three columns — "Subject", "Day", "Time" — filled with a weekly class schedule.

**Step 6. Table for layout (optional challenge)**
Implemented a two-column layout using a table: left column — menu, right column — main content.

**Step 7. Emojis**
Added a paragraph about my mood containing at least 3 emojis (😊, 💪, 🚀).

![Part 2 — Tables and positioning](screenshots/part2_tables_positioning.png)

**Step 8. Forms**
Created a form with Name (text), Email (email), Favorite Color (color) fields and a Submit button.

![Part 2 — Form](screenshots/part2_form.png)

## Part 3. Introduction to CSS

**Step 9–10. Inline CSS**
Changed the color of the "About me" paragraph directly with `style="color:blue;"`.

**Step 11. Internal CSS**
Inside `<head>`, used a `<style>` tag to set a rule for `h1` (purple color).

**Step 12. External CSS**
Created a `styles.css` file, linked with `<link rel="stylesheet" href="styles.css">`. Core style rules (colors for `h2`, `p`, block styling, etc.) were moved into it.

**Step 13. CSS selectors**
Used element selectors (`p {}`, `h2 {}`), a class selector (`.highlight {}`), and an id selector (`#main-title {}`) with different colors and fonts.

**Step 14. Classes vs. IDs**
Created a `.highlight` class to style the schedule row for "Web 1", and an `#main-title` id to style the subheading.

*(The result of these styles can be seen in the screenshots above — the purple `h1`, the blue and orange paragraph text, the green `h2`, the highlighted "Web 1" table row, and the blue group-name subheading.)*

## Part 4. Intermediate CSS

**Step 15. Favicon**
Added a site icon via `<link rel="icon" type="image/png" href="logo-app.png">`.

**Step 16. HTML divs**
Grouped content into sections using `<div>` (`header`, `main-content`), styled with background colors and padding.

**Step 17. Box model**
Added `border`, `margin`, and `padding` to several elements with different values to see the spacing effects.

**Step 18. CSS positioning**
Implemented three blocks with different positioning: `static` (the schedule table), `relative` (the menu/content table, shifted by 10px), and `absolute` (the mood block, fixed relative to the page).

**Step 19. CSS sizing**
Used `px`, `%`, and `em` units on headings and the image in the "My Sizing Example" block.

![Part 4 — Sizing units (px, %, em)](screenshots/part4_sizing.png)

**Step 20. Float and Clear**
Created two boxes, one floated left (`float: left`) and one floated right (`float: right`), followed by `clear: both` for the text below.

![Part 4 — Float and Clear](screenshots/part4_float.png)

**Step 21. Publish your website**
The project was published via GitHub Pages: **[link to the published page — add after publishing]**

## Full Page Overview

![Full page view](screenshots/full_page.png)

## Summary of Work Process

Development was done in VS Code. First, the basic HTML structure of the page was created with personal information, a photo, lists, links, and a button (Part 1). Next, more advanced HTML elements were added — tables, a two-column table layout, emojis, and a feedback form (Part 2). After that, three types of CSS styling were applied step by step — inline, internal, and external — while learning the difference between element, class, and id selectors (Part 3). In the final stage, the page was enhanced with a favicon, semantic division into `div` blocks, box model tuning (border/margin/padding), three positioning types (static/relative/absolute), different sizing units (px/%/em), and a float/clear layout (Part 4). This assignment reinforced the fundamentals of webpage markup and basic CSS styling.

## Technologies

- HTML5
- CSS3
