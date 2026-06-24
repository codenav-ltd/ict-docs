# 1.5 · File Sharing & Permissions

> **Goal:** configure shared folders and permission levels appropriately.

## Sharing methods

| Method | Use |
|--------|-----|
| **Windows file share (SMB)** | Office LAN; mounted as a drive letter |
| **NFS** | Linux/Unix shares |
| **NAS** (Network Attached Storage) | Dedicated appliance — Synology, QNAP |
| **Cloud (OneDrive, Google Drive, Dropbox)** | Anywhere with Internet |
| **WebDAV** | HTTP-based file sharing |

## Permissions trio

Most filesystems express permissions as some combination of:

- **Read (R)** — view content.
- **Write (W)** — modify content.
- **Execute (X)** — run as a program (or open a folder).

### Windows ACL

Granular rights: Full Control, Modify, Read & Execute, Read, Write. Per user or group.

### Unix-style

| Notation | Meaning |
|----------|---------|
| `-rwxr-xr--` | owner: rwx, group: r-x, others: r-- |
| `chmod 755 file` | rwxr-xr-x |
| `chmod 644 file` | rw-r--r-- |
| `chown user:group file` | Change owner/group |

## Best practices

1. **Group users by role**; grant permissions to the group, not individuals.
2. **Least privilege** — give the minimum needed.
3. **Audit periodically** — remove permissions for staff who have left.
4. **Backups** — sharing without backups is risky.
5. **Encryption at rest** — for sensitive folders.

## Worked example · School shared drive

```
\\schoolfileserver\
├── Public  (Everyone: Read)
├── Teachers   (TeachersGroup: Read+Write)
├── Students   (StudentsGroup: Read; TeachersGroup: Read+Write)
└── Admin   (AdminGroup: Full Control)
```

A student opening `Teachers` folder gets "Access Denied". A teacher cannot delete the `Admin` folder.

## Common student mistakes

- Granting "Everyone — Full Control" for convenience → catastrophic data loss potential.
- Confusing **read** (view file) with **execute** (open folder / run program).
- Leaving stale shares from past projects.

## Exam-style question

> **Q (5 marks):** Design permission settings for a school's shared drive with `Public`, `Students`, `Teachers`, `Admin` folders. Justify each choice.

**Sample answer:**

| Folder | Group | Permission | Justification |
|--------|-------|------------|---------------|
| Public | Everyone | Read | Bulletins / shared resources, no one should accidentally overwrite. Teachers may have Write to publish. |
| Students | StudentsGroup | Read; TeachersGroup: Read + Write | Students view assignments; teachers post & edit. |
| Teachers | TeachersGroup | Read + Write | Internal materials for staff collaboration; students excluded. |
| Admin | AdminGroup | Full Control | Sensitive HR / finance files; everyone else has no access. |

This applies **least privilege** — each role can do only what it needs. Grouping by role keeps maintenance simple when staff change.

## Key takeaways

- R / W / X (and finer ACLs in Windows).
- Group by role; least privilege.
- Audit, back up, encrypt sensitive folders.

## Chapter 1 wrap-up

You've covered all the network-level skills needed for 2B. Time to write code.

➡️ Next chapter: [2 · Web Authoring](../authoring/)
