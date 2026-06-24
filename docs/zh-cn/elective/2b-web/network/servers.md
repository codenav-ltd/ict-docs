# 1.3 · Network Servers in Practice

> **Goal:** describe the function of each common server type and how they fit together.

## The common servers on the syllabus

| Server | Role |
|--------|------|
| **Web server** | Serves HTML, CSS, JS over HTTP(S). Examples: Apache, Nginx |
| **Database server** | Stores and queries data. Examples: MySQL, PostgreSQL, SQL Server |
| **File server** | Stores shared files for users on the network |
| **Domain controller** | Centralises authentication in Windows networks |
| **DHCP server** | Hands out IP addresses to clients automatically |
| **Proxy server** | Forwards client requests; caches, filters, anonymises |
| **Gateway** | Bridges between different protocols or networks |

## A typical small web app deployment

```
        Internet
            │
        ┌───┴────┐
        │ Router │
        └───┬────┘
            │
        ┌───┴────────┐
        │ Web Server │ Apache + PHP
        └───┬────────┘
            │
        ┌───┴────────┐
        │  DB Server │ MySQL
        └────────────┘
```

The web server runs PHP, which connects to MySQL for data.

## A typical office network

```
        Internet
            │
        Router + Firewall
            │
        ┌───┴───────────┐
        │ Switch        │
        ├───┬───┬───┬───┤
       PCs Printer File-srv
                    │
           ┌────────┴────────┐
           │ Domain Controller│
           │   DHCP server    │
           │   File shares    │
           └─────────────────┘
```

## Servers can co-exist on one machine

- A small SBA project may run Apache + MySQL + PHP on the same laptop (LAMP / WAMP / MAMP / XAMPP stack).
- Production usually separates them for scaling and security.

## Reverse proxy

A **reverse proxy** sits in front of one or more web servers, distributing traffic, terminating TLS, and caching responses. Nginx is commonly used this way in front of multiple application servers.

## Common student mistakes

- Confusing web server (HTTP) with database server (SQL).
- Calling the web hosting plan "the server" — the server is the software.
- Thinking one machine can host only one server type — it can host many.

## Exam-style question

> **Q (5 marks):** A school wants to host a small website with a database backend on its own machine. Describe the servers required and explain why each is needed.

**Sample answer:**

The school needs three categories of server, all of which can run on one physical machine in a small deployment:

1. **Web server** (e.g. Apache or Nginx) — receives HTTP requests from students/parents' browsers and serves the website's HTML/CSS/JS, plus executes server-side scripts.
2. **Database server** (e.g. MySQL) — stores all dynamic content such as student announcements, login credentials, and event sign-ups. The web server's PHP code queries the database server for data.
3. **DHCP server / router** — provides IP addresses to internal devices so they can reach the web server, and the router NATs the school's public IP to the web server's port 80/443.

For larger deployments, each server can move to its own machine and be load-balanced for performance and resilience.

## Key takeaways

- Each server type has a specific job.
- Small projects co-host on one machine; production separates them.
- Understand the path: Browser → Router → Web server → DB server.

➡️ Next: [1.4 Setting up Ethernet / Wi-Fi](./setup)
