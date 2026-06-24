# 2.1 · URL & DNS

> **Goal:** dissect a URL and describe how DNS turns a name into an IP address.

## Anatomy of a URL

```
https:// www.example.com :443 /path/to/page ?id=123 #section
└──┬──┘ └──────┬───────┘ └┬─┘ └────┬─────┘ └──┬──┘ └──┬───┘
 scheme    hostname     port      path     query  fragment
```

| Part | Purpose | Example |
|------|---------|---------|
| **Scheme** | Protocol | `http`, `https`, `ftp` |
| **Hostname** | The server's name | `www.example.com` |
| **Port** | Numerical address of the service on the server | `:80`, `:443` (default for HTTP/HTTPS) |
| **Path** | Location on the server | `/index.html` |
| **Query** | Parameters | `?id=42&sort=desc` |
| **Fragment** | Position within the page | `#chapter-3` |

## What DNS does

DNS (Domain Name System) is the Internet's **phone book**. It translates **human-friendly names** like `www.example.com` into **IP addresses** like `93.184.216.34`.

Why we need it: people remember names; routers route to IP addresses.

## A DNS lookup, step by step

```
1. Browser asks: "what's the IP for www.example.com?"
2. OS asks its configured DNS resolver (often the router or ISP).
3. The resolver may have it cached → returns it instantly.
4. If not, it queries the root nameservers, then .com nameservers,
   then example.com's authoritative nameservers — recursively.
5. The IP comes back and is cached for the TTL (time to live).
6. Browser opens a TCP/HTTP connection to that IP.
```

## Common DNS record types

| Record | Meaning |
|--------|---------|
| **A** | Hostname → IPv4 address |
| **AAAA** | Hostname → IPv6 address |
| **CNAME** | Alias from one name to another |
| **MX** | Mail exchange (where email goes) |
| **NS** | Authoritative nameserver for the domain |
| **TXT** | Free-form text (used for SPF, verification, etc.) |

The HKEAA doesn't require record details — just the *purpose* of DNS.

## Exam-style question

> **Q (4 marks):** Describe what DNS is and outline the steps that occur when a user enters `www.hkeaa.edu.hk` in a browser.

**Sample answer:**

DNS (Domain Name System) is a distributed directory service that translates human-readable domain names into IP addresses.

1. The user types `www.hkeaa.edu.hk`.
2. The browser asks the OS's DNS resolver to translate the name.
3. The resolver checks its cache; on a miss it queries authoritative nameservers (root → `.hk` → `edu.hk` → `hkeaa.edu.hk`) recursively.
4. The IP address is returned and cached.
5. The browser opens a TCP connection to that IP on port 443 (HTTPS) and sends an HTTP request.

## Key takeaways

- URL = scheme + host + port + path + query + fragment.
- DNS turns names into IPs.

➡️ Next: [2.2 HTTP vs HTTPS](./http-vs-https)
