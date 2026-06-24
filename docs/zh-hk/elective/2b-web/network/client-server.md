# 1.1 · Client–Server Model

> **Goal:** explain how clients and servers cooperate over a network.

## Core idea

Two roles in network applications:

| Role | Responsibilities |
|------|------------------|
| **Client** | Initiates requests; usually drives the user interface |
| **Server** | Listens for requests; provides resources or services |

```
┌──────────┐  request   ┌──────────┐
│  Client  │ ─────────▶ │  Server  │
│ (browser)│            │ (web app) │
│          │ ◀───────── │          │
└──────────┘  response  └──────────┘
```

## Concrete examples

| Service | Client | Server |
|---------|--------|--------|
| Web browsing | Chrome / Firefox | Apache / Nginx |
| Email | Outlook | SMTP / IMAP server |
| Database | PHP app | MySQL server |
| Gaming | Player's PC | Game server |
| File share | File manager | NAS / file server |

## Properties of the model

- **Loose coupling** — server doesn't know which client will connect next.
- **Many-to-one** — many clients can share one server.
- **Stateless protocols** (like HTTP) — server doesn't have to remember clients between requests.
- **Scaling** — add more servers behind a load balancer.

## Connectionless vs connection-oriented

- HTTP uses **TCP** (connection-oriented, reliable).
- DNS uses **UDP** (connectionless, fast).

## Worked example · Browsing a web page

1. Client (browser) resolves the domain via DNS → IP address.
2. Client opens a TCP connection to the server's port (80 or 443).
3. Client sends `GET /index.html HTTP/1.1`.
4. Server responds with `200 OK` + the HTML content.
5. Browser parses HTML; for each `<img>`, `<link>`, `<script>` it makes more requests.
6. Browser renders the page.

## Common student mistakes

- Treating "client" and "user" as the same word — the client is the **software**.
- Believing servers are physically different from clients — any computer can play either role.
- Forgetting that a single server can run many services on different ports.

## Exam-style question

> **Q (4 marks):** Explain the client-server model and give two real-life examples.

**Sample answer:**

In the client-server model, the **client** initiates a request for a service and the **server** waits for incoming requests and responds with the requested resource. The two communicate over a network using a protocol (e.g. HTTP). The model decouples user devices from centralised resources and allows many clients to share one server.

Examples:

- **Web browsing**: a browser (client) requests a page from a web server (Apache/Nginx) over HTTPS.
- **Email**: an email client (Outlook / Apple Mail) connects to an SMTP server to send messages and an IMAP server to retrieve them.

## Key takeaways

- Client requests; server responds.
- Used across web, email, gaming, database, file sharing.

➡️ Next: [1.2 HTTP Request / Response](./http-request)
