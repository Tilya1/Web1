# Assignment #2. Advanced CSS (Flexbox & Grid)

**Name:** Zhumagaliyev Aktilek
**Group:** TI-2503

Topic: a simple one-page website for my web design services.

Files:
- `index.html` — the page
- `styles.css` — styles
- `images/` — images
- `screenshots/` — screenshots for the report

![Full page](screenshots/full-page.png)

---

## Part 1. Flexbox

### Task 0. Navigation Bar

The header is a flex container. `justify-content: space-between` puts the name on the left and the menu on the right. The menu links are also in a flex container with `gap: 20px` between them.

```css
.header {
    display: flex;
    justify-content: space-between;
}

.nav {
    display: flex;
    gap: 20px;
}
```

![Task 0](screenshots/task0-navbar.png)

### Task 1. Card Row

There are three cards in one row. `.cards` is a flex container with `gap: 20px`. Each card has `flex: 1`, so all cards have the same width. Inside the card, `flex-direction: column` puts the image, title, text and button under each other. On hover the card becomes grey (the second card on the screenshot).

```css
.cards {
    display: flex;
    gap: 20px;
}

.card {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.card:hover {
    background-color: #ddd;
}
```

![Task 1](screenshots/task1-cards.png)

---

## Part 2. Grid System

### Task 2. Page Layout with Grid Areas

The whole page is inside `.page`, which is a grid with 2 columns and 3 rows. `grid-template-areas` draws the plan of the page. Each part gets its place with `grid-area`:

- the header is on the top (it takes both columns),
- the sidebar is on the left (200px),
- the main content is on the right (`1fr` = all free space),
- the footer is on the bottom (it takes both columns).

```css
.page {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header  header"
        "sidebar main"
        "footer  footer";
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
```

On the screenshot the red lines show that each part is in its grid area.

![Task 2](screenshots/task2-layout.png)

### Task 3. Image Gallery

The gallery has 9 images. It is a grid with 3 equal columns, 3 rows of 150px and `gap: 10px`. The caption is hidden with `display: none`. When the mouse is on the image, the caption appears (Fitness on the screenshot).

```css
.gallery {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 150px 150px 150px;
    gap: 10px;
}

.caption {
    display: none;
}

.item:hover .caption {
    display: block;
}
```

![Task 3](screenshots/task3-gallery.png)

---

## Part 3. Combining Flexbox & Grid

### Task 4. Portfolio Page

The page uses Grid and Flexbox together:

- **Grid** makes the big layout: header, sidebar, main and footer (`.page`) and the gallery (`.gallery`).
- **Flexbox** works inside the parts: the menu in the header, the sidebar content in a column, and the cards in a row.

```css
/* Grid for the layout */
.page {
    display: grid;
}

/* Flexbox inside */
.header  { display: flex; }
.sidebar { display: flex; flex-direction: column; }
.cards   { display: flex; }
```

![Task 4](screenshots/task4-portfolio.png)

---

## Summary

First I made the header with Flexbox. Then I made three service cards in one row with Flexbox and added a hover effect. After that I made the layout of the page with Grid areas: header, sidebar, main and footer. Then I made a gallery of 9 images with Grid and a caption that appears on hover. In the end the page uses Grid for the big layout and Flexbox inside the parts. I used only HTML and CSS.
