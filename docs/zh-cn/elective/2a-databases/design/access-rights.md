# 3.6 · Access Rights & Data Privacy

> **Goal:** describe how databases enforce confidentiality through user accounts, permissions and views.

## Principle of least privilege

Grant each user / role the **minimum** permissions needed for their job. Limits damage from compromised accounts.

## DBMS users and roles

```sql
CREATE USER teacher@'%' IDENTIFIED BY 'strong_pw_here';
CREATE ROLE teacher_role;

GRANT SELECT ON StudentPublic TO teacher_role;
GRANT teacher_role TO teacher;
```

(Syntax varies by DBMS — MySQL example above.)

## Common privileges

| Privilege | Allows |
|-----------|--------|
| `SELECT` | Read |
| `INSERT` | Add rows |
| `UPDATE` | Modify rows |
| `DELETE` | Remove rows |
| `CREATE` | Make new tables |
| `DROP` | Remove tables |
| `ALL PRIVILEGES` | Everything |

`GRANT` adds; `REVOKE` removes.

## Layered access control

| Layer | What it does |
|-------|--------------|
| **Authentication** | Confirms identity (password, certificate) |
| **Roles** | Group permissions by job function (teacher, admin) |
| **Object-level privileges** | What this role can do on each table/view |
| **Row-level security (advanced)** | Some DBMS limit which rows a user can see |
| **Views** | Expose only safe columns / filtered rows |
| **Encryption at rest** | Files on disk encrypted |
| **Encryption in transit** | TLS between app and DB |
| **Audit logs** | Records who did what |

## Using views for privacy

Recall from SQL chapter:

```sql
CREATE VIEW StudentPublic AS
SELECT student_id, name, class_id FROM Student;

GRANT SELECT ON StudentPublic TO teacher_role;
```

Teachers can SELECT from `StudentPublic`, never seeing the underlying `medical_notes` column.

## Hong Kong context · PDPO

Hong Kong's **Personal Data (Privacy) Ordinance** sets out six Data Protection Principles. Database administrators must:

1. Collect only data needed for a stated purpose.
2. Keep data accurate and current.
3. Retain only as long as necessary.
4. Use data only for the stated purpose (or with consent).
5. Implement reasonable security measures.
6. Allow data subjects to access and correct their data.

Failing to do so can lead to enforcement actions and reputational damage.

## Common student mistakes

- Granting `ALL PRIVILEGES` for convenience.
- Sharing a single database account across many users → no accountability.
- Hard-coding DB credentials in source code committed to GitHub.
- Forgetting to revoke access when staff leave.

## Exam-style question

> **Q (5 marks):** A school's student database stores sensitive medical notes alongside basic profile fields. Describe how access rights and views can limit who sees the medical notes, and mention one Hong Kong legal obligation.

**Sample answer:**

The school creates two database roles: `admin` and `teacher`. The full `Student` table containing `medical_notes` is accessible only to `admin`. A view `StudentPublic` selects only `student_id`, `name`, `class_id` and `dob` — the medical notes column is excluded.

```sql
GRANT SELECT ON StudentPublic TO teacher_role;
REVOKE ALL ON Student FROM teacher_role;
```

Teachers thus see only safe columns. The principle of **least privilege** is applied — admins may still need to update notes, but everyone else is locked out.

Legal obligation: Hong Kong's **Personal Data (Privacy) Ordinance** requires data users to **collect only the personal data needed for a stated purpose** and to **implement reasonable security measures**. Restricting access to medical notes via views and roles directly supports both DPP 1 (data collection / purpose limitation) and DPP 4 (data security).

## Key takeaways

- Least privilege via roles + grants.
- Views narrow exposure.
- Encryption + auditing + PDPO compliance complete the picture.

## Chapter 3 wrap-up

You've now completed Elective 2A.

➡️ Next elective: [2B · Web Application Development](../../2b-web/)
