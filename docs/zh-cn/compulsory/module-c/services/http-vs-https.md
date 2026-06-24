# 2.2 · HTTP vs HTTPS

> **Goal:** explain the difference and when HTTPS matters.

## HTTP

**HTTP** (HyperText Transfer Protocol) is the protocol browsers use to ask web servers for pages and resources.

A simplified request:

```
GET /index.html HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0
```

A simplified response:

```
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1342

<!DOCTYPE html>
<html>...</html>
```

| Property | Value |
|----------|-------|
| Default port | 80 |
| Encryption | None |
| Privacy | Plaintext — anyone in the path can read it |

## HTTPS

**HTTPS** adds **TLS** (Transport Layer Security) encryption on top of HTTP.

| Property | Value |
|----------|-------|
| Default port | 443 |
| Encryption | TLS / SSL |
| Privacy | All traffic encrypted between browser and server |
| Authenticity | Server's identity proven by a **digital certificate** |

The little **padlock** in your browser's address bar means HTTPS is active.

## Why HTTPS matters

| Without HTTPS | With HTTPS |
|---------------|------------|
| Anyone on the Wi-Fi can read your login form | Encrypted — invisible to eavesdroppers |
| ISPs can inject ads or trackers | Tamper-evident — modifications break integrity |
| Cannot be sure you're talking to the real server | Certificate proves the server's identity |

Browsers today flag HTTP-only sites as "Not secure" and search engines penalise them.

## HTTP methods you should recognise

| Method | Meaning |
|--------|---------|
| `GET` | Retrieve a resource (idempotent) |
| `POST` | Submit data to be processed (not idempotent) |
| `PUT` | Replace a resource |
| `DELETE` | Remove a resource |
| `HEAD` | Like GET but only headers (no body) |
| `OPTIONS` | Ask which methods are allowed |

## Common student mistakes

- Saying "HTTPS encrypts the server" — it encrypts the **transmission**.
- Saying HTTPS guarantees the site is safe — it guarantees the **connection** is secure, not that the site has good intentions.

## Exam-style question

> **Q (3 marks):** State two differences between HTTP and HTTPS, and one situation where HTTPS is essential.

**Sample answer:**

- **Encryption**: HTTP is plaintext; HTTPS encrypts traffic using TLS.
- **Default port**: HTTP uses port 80; HTTPS uses port 443.
- **Essential when**: logging into online banking or e-commerce — HTTPS protects the password and credit-card details from interception on public Wi-Fi.

## Key takeaways

- HTTPS = HTTP + TLS encryption.
- Identity proof via digital certificate.
- Essential for any sensitive data exchange.

➡️ Next: [2.3 Web File Formats](./web-formats)
