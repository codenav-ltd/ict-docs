# 2.3 · Publishing Options

> **Goal:** describe the choices for putting your site online.

## Self-hosting

Run a server you control (a VPS, a Raspberry Pi, even your school's box).

| Pros | Cons |
|------|------|
| Full control | You handle security patches |
| Any tech stack | Need IT skills |
| Cheapest in the long run | Single point of failure if not load-balanced |

## Shared hosting

Pay a hosting company to run Apache/Nginx + PHP + MySQL for you on their machines.

| Pros | Cons |
|------|------|
| Quick to start | Limited customisation |
| Tech support included | Shared resources may be slow |
| Affordable | Vendor lock-in possible |

## Cloud / VPS

Rent virtual machines (DigitalOcean, AWS EC2, Azure, GCP). You install everything but the hardware is managed.

| Pros | Cons |
|------|------|
| Scalable | Need DevOps skills |
| Pay-as-you-go | Costs can spike if not monitored |
| Many services nearby (managed DB, CDN) | Complexity |

## Static hosting

For static sites (HTML/CSS/JS only) → GitHub Pages, Netlify, Vercel.

| Pros | Cons |
|------|------|
| Free or near-free | No server-side processing |
| Fast (CDN) | Need a separate API for dynamic features |
| Easy CI/CD | Limited to static files |

## CMS / Site builders

WordPress, Squarespace, Wix — for non-developers.

| Pros | Cons |
|------|------|
| Drag-and-drop editing | Less control |
| Lots of plugins / themes | Theme limitations |
| Built-in SEO tools | Recurring fees |

## Domain name

Buy from a registrar (`.hk` from HKDNR, `.com` from countless providers). Configure DNS A/AAAA records to point to your hosting IP. Renewal is annual.

## HTTPS / SSL

Modern hosts include free HTTPS via **Let's Encrypt**. Always enable it.

## Comparison summary

| Need | Recommendation |
|------|----------------|
| Tiny static personal site | GitHub Pages |
| Blog with comments | WordPress shared hosting |
| Custom web app | VPS or PaaS |
| High-traffic e-commerce | Cloud + CDN |

## Exam-style question

> **Q (5 marks):** A school wants to host:
> (a) A simple bulletin board built with PHP + MySQL.
> (b) A static portfolio for the school's design club.
> Recommend a publishing option for each with one justification.

**Sample answer:**

(a) **Shared hosting** with a LAMP stack (e.g. a Hong Kong web-hosting provider). Justification: the PHP + MySQL combination is supported out of the box; the school can install via an admin panel without managing servers, and bandwidth needs are modest.

(b) **GitHub Pages** (or Netlify). Justification: static sites have no server-side dependencies; GitHub Pages is free, fast, automatically HTTPS-enabled, and the design club can update the site by pushing to a Git repository — perfect for collaboration.

## Key takeaways

- Match host to project complexity.
- Domain + HTTPS are non-negotiable.
- Static / shared / VPS / cloud / CMS — each fits different needs.

## Chapter 2 wrap-up

You now have HTML + CSS for the look, and an idea of where to deploy. Time to add behaviour.

➡️ Next chapter: [3 · Web Programming](../programming/)
