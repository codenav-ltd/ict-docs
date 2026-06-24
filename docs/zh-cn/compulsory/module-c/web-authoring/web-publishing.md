# 3.2 · Web Publishing

> **Goal:** describe the ways to publish web content and what audience considerations matter.

## Publishing options

| Option | Best for | Trade-off |
|--------|----------|-----------|
| **Self-host on a web server** (Apache, Nginx) | Complete control | Need IT skills + server costs |
| **Web-based CMS** (WordPress, Drupal) | Content-heavy sites | Lots of plugins; some setup |
| **Static-site host** (GitHub Pages, Netlify) | Tech-savvy users, low traffic | Build process to learn |
| **Wix / Squarespace / Weebly** | Beginners | Limited customisation |
| **Blogger / Medium** | Personal blogs | Less control over branding |

## Domain names

You typically buy a **domain name** (e.g. `myschool.edu.hk`) from a registrar (HKDNR for `.hk`) and point its DNS A/AAAA records to your hosting server's IP.

## Designing for the intended audience

The C&A Guide says you must **discuss the organisation of web pages for an intended audience**. Key considerations:

- **Navigation** — clear menus, breadcrumbs, search.
- **Reading order** — important info above the fold.
- **Multimedia placement** — supports the message, not distracting.
- **Colour scheme** — readability + accessibility (contrast).
- **Font size and style** — large for elderly, playful for kids, neutral for corporate.
- **Mobile-friendly** — responsive layout for phones and tablets.
- **Accessibility** — alt text, ARIA labels, keyboard navigation.

## Comparing audience-appropriate sites

| Audience | Design notes |
|----------|--------------|
| Kindergarten | Big buttons, friendly colours, large fonts, illustrations |
| Senior secondary students | Clean layout, embedded videos, search and download buttons |
| Government services | Formal, multilingual, accessible (WCAG compliant), bilingual (Eng/Chinese) |
| E-commerce | Eye-catching product photos, clear CTAs, trust badges |

## Step-by-step example · Publish a school news page

1. Buy a domain `mynewsite.com` from a registrar.
2. Choose a hosting plan (shared, VPS, cloud).
3. Upload HTML/CSS/JS via FTP or git deploy.
4. Configure DNS A record to point to the host's IP.
5. Enable HTTPS via Let's Encrypt (often automatic on modern hosts).
6. Submit the URL to search engines (Google Search Console).

## Exam-style question

> **Q (4 marks):** A primary school wants to publish a website for parents and children. Describe two organisational considerations the designers should keep in mind, and recommend a suitable publishing option.

**Sample answer:**

- **Audience-friendly design**: large fonts, generous spacing, bright but readable colours appropriate for children and easily skimmable by busy parents.
- **Clear navigation and bilingual support**: simple menus translated into both Chinese and English to serve Hong Kong parents; clearly separate sections for parents (notices, calendars) and children (homework, fun activities).

**Publishing option**: a **web-based CMS** such as WordPress hosted by a local provider, or alternatively a managed service like Squarespace — both allow non-technical staff to update content easily and provide responsive themes for mobile devices.

## Key takeaways

- Multiple ways to publish: from full-stack hosting to drag-and-drop builders.
- Design must match the intended audience.

## Chapter 3 wrap-up

You now know enough HTML to read a sample page and discuss its organisation. The deeper skills — CSS, JavaScript, PHP — are covered in **Elective 2B**.

➡️ Next chapter: [4 · Threats & Security](../security/)
