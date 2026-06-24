# 3.1 · Client-side vs Server-side

> **Goal:** decide what runs in the browser and what runs on the server.

## Where the code runs

| Side | Runs on | Languages |
|------|---------|-----------|
| **Client-side** | User's browser | HTML, CSS, **JavaScript** |
| **Server-side** | Web server | **PHP** (Python, Node.js, Ruby, Java…) |

## What each is good for

| Job | Client-side | Server-side |
|-----|-------------|-------------|
| UI interactivity (button clicks, animations) | ✓ | ✗ |
| Real-time form feedback (before submit) | ✓ | ✗ |
| Authentication, password hashing | ✗ | ✓ |
| Database access (with credentials) | ✗ | ✓ |
| File uploads to storage | ✗ | ✓ |
| Business logic that must be trusted | ✗ | ✓ |
| Search Engine Optimisation (rendering pages) | partially | ✓ (server-rendered) |

## The golden security rule

**Never trust the client.** Anything that arrives at the server can be modified or fabricated. Re-validate everything server-side.

```text
Client-side validation : convenience for the user
Server-side validation : your last line of defence
```

## A simple flow

```
Browser (JS)                   Server (PHP)                    DB (MySQL)
   │                              │                              │
   │ ── click "register" ──────▶  │                              │
   │                              │ check input, hash password   │
   │                              │ ──── INSERT INTO users ────▶ │
   │                              │  ◀── ok ─────────────────────│
   │ ◀── "welcome" response ──── │                              │
```

## Worked example · Calculator

Client side calculates `2 + 3 = 5` instantly — no server round-trip needed. Lots of tiny UI tasks (toggle dark mode, sort a table, validate a quick form) belong client-side.

The moment you need to **save** the result so it's available next visit (or for other users), you must talk to a server.

## Common student mistakes

- Doing critical validation only client-side (anyone can disable JS).
- Storing credentials in JavaScript.
- Sending huge JSON to the server because the UI didn't filter.
- Running heavy computation in JS that the server could do faster.

## Exam-style question

> **Q (4 marks):** Distinguish client-side and server-side scripts. Identify which side should handle each:
>
> (a) Showing a "password too weak" hint as the user types.
> (b) Verifying that the same password meets policy before storing it.
> (c) Looking up a product's current stock level.
> (d) Animating a dropdown menu.

**Sample answer:**

- **Client-side** runs in the browser using JavaScript; it can react to user actions instantly but is **untrusted** (the user can modify it).
- **Server-side** runs on the web server using PHP/Python/…; it has access to the database and trusted secrets.

(a) **Client-side** — immediate UI feedback as the user types.
(b) **Server-side** — must be enforced regardless of what the client does; client validation is convenience only.
(c) **Server-side** — needs to query the database, which the client cannot access directly.
(d) **Client-side** — purely visual animation; no need to involve the server.

## Key takeaways

- Client-side for UI / convenience; server-side for trust / data.
- Always validate server-side.

➡️ Next: [3.2 JavaScript Essentials](./javascript)
