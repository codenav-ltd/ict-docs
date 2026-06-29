# 3.1 · Python 環境

> **目標：** 裝 Python 並跑第一個腳本。

## 選編輯器

三個不錯的免費選項：

| 工具 | 最適合 | 備註 |
|------|----------|-------|
| **Thonny** | 完全新手 | 小巧 IDE 帶好用調試器 |
| **VS Code** | 長期用 | 強大、可擴展 |
| **PyCharm Community** | 較大項目 | 較重，SBA 理想 |

## 裝 Python

1. 訪問 <https://www.python.org/downloads/>
2. 選最新穩定 3.x（3.11 或更新都行）。
3. Windows 安裝時**勾**「Add Python to PATH」。

## 驗證安裝

打開終端（Windows 命令提示符；macOS / Linux 終端）：

```
python --version
# Python 3.11.6
```

成功就 OK。

## 第一個程序

新建 `hello.py`：

```python
print("Hello, HKDSE ICT!")
```

跑：

```
python hello.py
```

輸出：

```
Hello, HKDSE ICT!
```

## 交互式跑

在終端輸 `python` 進入 REPL：

```
>>> 2 + 3
5
>>> name = "Alice"
>>> print(name)
Alice
>>> exit()
```

REPL 很適合試小代碼段。

## 示例腳本 · 按名問好

```python
name = input("What is your name? ")
print(f"Hello, {name}!")
```

`f"…"` 語法是**格式字符串**，可在文本里嵌入表達式。

## 學生常見錯誤

- 字符串忘加引號：`print(Hello)` → NameError。
- Python 2 語法 (`print "x"`) 與 Python 3 (`print("x")`) 混用。
- 文件擴展名錯。

## 下一步

- 打開 Thonny 或 VS Code。
- 輸入、保存、執行上面示例腳本。

➡️ 下一節：[3.2 變數與運算符](./variables-operators)