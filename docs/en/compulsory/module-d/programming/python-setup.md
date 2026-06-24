# 3.1 · Python Setup

> **Goal:** install Python and run your first script.

## Choose an editor

Three good free options:

| Tool | Best for | Notes |
|------|----------|-------|
| **Thonny** | Absolute beginners | Tiny IDE with great debugger |
| **VS Code** | Long-term use | Powerful, extensible |
| **PyCharm Community** | Larger projects | Heavier, ideal for SBA |

## Install Python

1. Visit <https://www.python.org/downloads/>
2. Pick the latest stable 3.x version (3.11 or newer is fine).
3. During install on Windows, **check** "Add Python to PATH".

## Verify the install

Open a terminal (Command Prompt on Windows, Terminal on macOS / Linux):

```
python --version
# Python 3.11.6
```

If it works, you're set.

## Your first program

Create `hello.py`:

```python
print("Hello, HKDSE ICT!")
```

Run it:

```
python hello.py
```

Output:

```
Hello, HKDSE ICT!
```

## Running interactively

Type `python` in the terminal to enter the REPL:

```
>>> 2 + 3
5
>>> name = "Alice"
>>> print(name)
Alice
>>> exit()
```

The REPL is great for trying snippets.

## Sample script · Greet by name

```python
name = input("What is your name? ")
print(f"Hello, {name}!")
```

The `f"…"` syntax is a **format string** that lets you embed expressions inside text.

## Common student mistakes

- Forgetting to put quotes around strings: `print(Hello)` → NameError.
- Mixing Python 2 syntax (`print "x"`) with Python 3 (`print("x")`).
- Saving the file with the wrong extension.

## Next steps

- Open Thonny or VS Code.
- Type, save, run the sample scripts above.

➡️ Next: [3.2 Variables & Operators](./variables-operators)
