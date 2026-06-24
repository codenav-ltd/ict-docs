# 1.1 · What is an Information System?

> **Goal:** describe what an information system is and identify its five components in any scenario.

## A working definition

An **information system** is an organised arrangement of people, processes, data and technology that work together to **collect, process, store and deliver information** to support decision making.

A bank's loan application form filled in at the counter, the calculator app on your phone, your school's MIS — all are information systems. What changes is the scale, complexity and technology involved.

## The five components

Every information system contains the same five components. Remember them with the mnemonic **"P-D-P-T-P"**:

| # | Component | Description | Example (school library) |
|---|-----------|-------------|--------------------------|
| 1 | **Purpose** | Why the system exists | "Track who borrowed which book" |
| 2 | **Data** | The raw input | Book ISBN, student ID, loan date |
| 3 | **Processes** | The steps that transform data | Record loan, calculate overdue fine |
| 4 | **Technology** | The hardware + software that runs the processes | Barcode scanner, MySQL, PHP web app |
| 5 | **Personnel** | The people involved | Librarian, students, teachers |

::: tip Remember
If a question asks you to "identify the components of the information system", expect **5 marks** for the **5 PDPTP components**. Never list just 2 or 3.
:::

## A bigger example: an e-commerce order system

Let's apply PDPTP to something less obvious — placing an order on an online shop.

### Purpose

Allow customers to choose products, pay online, and have items shipped to their address.

### Data

| Type | Examples |
|------|----------|
| Customer data | name, email, shipping address |
| Product data | SKU, name, price, stock level, photo |
| Order data | order number, item list, total amount, payment status |
| Shipping data | courier, tracking number, delivery date |

### Processes

1. Authenticate the customer
2. Add item to shopping cart
3. Apply discounts
4. Process payment
5. Generate invoice
6. Send order to warehouse
7. Update stock level
8. Track shipment

### Technology

| Layer | Examples |
|-------|----------|
| Hardware | Customer's phone, web servers, payment gateway, warehouse scanner |
| Software | Browser, web framework, database, payment SDK, courier API |
| Network | The Internet itself, mobile networks, secure HTTPS |

### Personnel

- **External**: customers
- **Internal**: developers, customer support, warehouse staff, finance team

## Common misconception #1

> "The information system *is* the website."

The website is only part of the **technology** component. Without data, processes, purpose and people, the website is just a pile of files.

## Common misconception #2

> "Manual systems aren't information systems."

They absolutely are. A paper-and-pen attendance sheet has all five components. The technology happens to be pen and paper. The HKEAA may show you a manual workflow and ask you to identify each PDPTP component.

## Practice activity

> Pick three of these scenarios. For each, list the five PDPTP components:
> 1. An MTR exit gate that checks your Octopus card.
> 2. The Hong Kong Observatory's weather app.
> 3. Your school's online homework portal.
> 4. A vending machine that takes coins.
> 5. A 7-Eleven self-checkout counter.

::: details Sample answer for the MTR exit gate
- **Purpose:** charge the correct fare for the journey and let valid passengers pass.
- **Data:** Octopus card ID, entry station, time, balance.
- **Processes:** verify card, calculate fare, deduct balance, open gate, log transaction.
- **Technology:** RFID reader, gate motor, network to the central server, ticketing software.
- **Personnel:** the passenger, MTR station staff, the IT operations team.
:::

## Exam-style question

> **Q (4 marks):** An online tutoring platform allows students to book lessons with tutors and pay online. Identify the five components of this information system in the context of the platform.

**Mark scheme expects** any **five** of:

- **Purpose:** match students with tutors and process payment for lessons.
- **Data:** student / tutor profiles, lesson schedule, payment records.
- **Processes:** book a slot, send reminder, conduct lesson, settle payment.
- **Technology:** web/mobile apps, database, video conferencing software, payment gateway.
- **Personnel:** students, tutors, platform administrators, payment-handling staff.

## Key takeaways

- Every information system has **five components: PDPTP**.
- The components apply to **manual** and **computerised** systems alike.
- Identifying components is **cheap marks** — never skip these questions.

➡️ Next: [1.2 Data vs Information](./data-vs-information)
