# 1.4 · Setting up Ethernet & Wi-Fi

> **Goal:** outline the practical steps for a small wired and wireless network.

## Wired (Ethernet) setup

1. **Pull cables** (Cat5e or Cat6) from each device to a central switch.
2. **Patch panel + switch** in the cabinet aggregate all cables.
3. **Switch uplink** goes to the router.
4. **Router** assigns IPs via DHCP and connects to the ISP modem.
5. Configure each device to **Obtain IP automatically** (DHCP).
6. Test connectivity with `ping` and a browser.

## Wireless (Wi-Fi) setup

1. **Choose Wi-Fi standard** — Wi-Fi 5 (802.11ac) or Wi-Fi 6 (802.11ax) for modern speed.
2. **Place AP** centrally; multiple APs for large coverage (with same SSID for roaming).
3. **Configure SSID** — the network name.
4. **Security** — **WPA2-Personal** at minimum; **WPA3** if all devices support it.
5. **Set a strong passphrase** (≥ 12 chars, mixed).
6. **Optionally** create a **guest network** with isolation from the main LAN.
7. **Channel** — auto or manually select (1, 6, 11 for 2.4 GHz).

## Configuration interface

Most routers and APs expose a **web admin UI**:

```
1. Connect to 192.168.1.1 (or as printed on the device).
2. Log in with admin credentials.
3. Update firmware.
4. Change default admin password!
5. Configure DHCP range, Wi-Fi SSID, security.
```

## Test the connection

| Command | Purpose |
|---------|---------|
| `ipconfig` (Windows) / `ifconfig` / `ip a` (Linux/macOS) | Check IP, gateway |
| `ping 8.8.8.8` | Test Internet reachability |
| `nslookup example.com` | Test DNS |
| `tracert` / `traceroute` | Trace the route |

## Common student mistakes

- Leaving default admin password (router becomes hackable).
- Using **WEP** (broken) or **open** Wi-Fi.
- Putting all APs on the same channel → interference.
- Not separating guest Wi-Fi from internal LAN.

## Exam-style question

> **Q (5 marks):** Outline the steps to set up a small office wireless network for 10 staff PCs, an IP printer, and visitor laptops. Mention two security considerations.

**Sample answer:**

1. **Plan**: choose a Wi-Fi 6 router with at least 4 LAN ports (or add a switch). Position the AP centrally to cover all rooms.
2. **Wire essentials**: connect the printer and a couple of fixed PCs via Ethernet for stability; connect the router to the ISP modem.
3. **Configure router**: log in, change default admin password, update firmware, set WAN to DHCP from ISP.
4. **Set Wi-Fi**: choose SSID "Office", enable WPA3 (or WPA2-Personal) with a strong passphrase, place on 5 GHz channel.
5. **Create guest network**: separate SSID "Office-Guest" isolated from main LAN, perhaps with a captive portal.
6. **Test**: connect each PC, ping the printer, browse the Internet.

Two security considerations:

- **WPA3 / WPA2-Personal** with a strong passphrase — prevents eavesdropping on the wireless link.
- **Guest network isolation** — keeps visitor devices from reaching internal printers and shared drives.

## Key takeaways

- Choose appropriate Wi-Fi standard.
- Always use WPA2/3 and a strong passphrase.
- Separate guest and internal networks.

➡️ Next: [1.5 File Sharing & Permissions](./sharing)
