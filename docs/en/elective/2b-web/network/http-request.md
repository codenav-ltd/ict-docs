# 1.2 · HTTP Request / Response

> **Goal:** read raw HTTP messages and distinguish GET from POST.

## Anatomy of an HTTP request

```
GET /index.html?id=42 HTTP/1.1     ← request line
Host: example.com                   ← headers …
User-Agent: Mozilla/5.0
Accept: text/html

                                    ← empty line = end of headers
                                    (body — empty for GET)
```

| Part | Purpose |
|------|---------|
| Method | What action: GET, POST, PUT, DELETE, … |
| Path | Which resource |
| Version | HTTP/1.1, HTTP/2, HTTP/3 |
| Headers | Metadata: host, content type, cookies, auth |
| Body | The payload (mainly for POST/PUT) |

## Anatomy of an HTTP response

```
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1342

<!DOCTYPE html>
<html>...</html>
```

| Part | Purpose |
|------|---------|
| Status line | Version + status code + reason |
| Headers | Content type, length, cookies, security |
| Body | The resource |

## Common HTTP status codes

| Code | Meaning |
|------|---------|
| 200 OK | Success |
| 301 / 302 | Redirect |
| 304 Not Modified | Cached copy is still valid |
| 400 Bad Request | Client error |
| 401 Unauthorized | Need to log in |
| 403 Forbidden | Logged in but not allowed |
| 404 Not Found | Wrong URL |
| 500 Internal Server Error | Server crashed |
| 503 Service Unavailable | Server overloaded / down |

## GET vs POST

| Feature | GET | POST |
|---------|-----|------|
| Parameters | In URL query string | In request body |
| Bookmarkable? | Yes | No |
| Idempotent? | Yes (safe to repeat) | No |
| Caching | Cacheable | Usually not |
| Body size | Limited (~2 KB) | Large |
| Use for | Reading / search | Submitting / changing data |
| Visible in browser history | Yes | No |

### Examples

```
GET /search?q=hkdse              ← reading
POST /login                       ← submitting form
POST /api/orders                  ← creating new order
```

## Port numbers

| Service | Port |
|---------|------|
| HTTP | 80 |
| HTTPS | 443 |
| FTP | 21 |
| SSH | 22 |
| SMTP | 25 |
| DNS | 53 |
| MySQL | 3306 |
| PostgreSQL | 5432 |

A single server can host many services on different ports.

## Common student mistakes

- Using GET for actions that change state (security risk: bots can trigger them).
- Believing POST is "more secure" — both are visible without HTTPS.
- Forgetting that HTTP is **stateless** — sessions/cookies layer state on top.

## Exam-style question

> **Q (5 marks):** Compare GET and POST. Give an appropriate use of each and explain why GET is unsuitable for the operation you assign to POST.

**Sample answer:**

| Feature | GET | POST |
|---------|-----|------|
| Parameter location | URL query | Request body |
| Idempotent | Yes | No |
| Body size | Small | Large |
| Use | Reading / search | Submitting data that changes state |

**Appropriate uses**:

- **GET**: searching the school catalogue — `/search?keyword=python`. The action is safe and can be bookmarked, repeated, cached.
- **POST**: submitting a login form — `/login` with username and password in the body.

**Why GET is unsuitable for login**: GET puts the parameters in the URL, which would appear in browser history, server logs and the Referer header — exposing the password. POST keeps the body out of URLs and logs, and is not idempotent so it isn't accidentally re-played.

## Key takeaways

- HTTP messages have a request line/status line, headers, and an optional body.
- GET reads; POST changes.
- Status codes (2xx success, 3xx redirect, 4xx client error, 5xx server error).

➡️ Next: [1.3 Network Servers](./servers)
