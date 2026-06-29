# 3.1 · Python 环境

> **目标：** 装 Python 并跑第一个脚本。

## 选编辑器

三个不错的免费选项：

| 工具 | 最适合 | 备注 |
|------|----------|-------|
| **Thonny** | 完全新手 | 小巧 IDE 带好用调试器 |
| **VS Code** | 长期用 | 强大、可扩展 |
| **PyCharm Community** | 较大项目 | 较重，SBA 理想 |

## 装 Python

1. 访问 <https://www.python.org/downloads/>
2. 选最新稳定 3.x（3.11 或更新都行）。
3. Windows 安装时**勾**「Add Python to PATH」。

## 验证安装

打开终端（Windows 命令提示符；macOS / Linux 终端）：

```
python --version
# Python 3.11.6
```

成功就 OK。

## 第一个程序

新建 `hello.py`：

```python
print("Hello, HKDSE ICT!")
```

跑：

```
python hello.py
```

输出：

```
Hello, HKDSE ICT!
```

## 交互式跑

在终端输 `python` 进入 REPL：

```
>>> 2 + 3
5
>>> name = "Alice"
>>> print(name)
Alice
>>> exit()
```

REPL 很适合试小代码段。

## 示例脚本 · 按名问好

```python
name = input("What is your name? ")
print(f"Hello, {name}!")
```

`f"…"` 语法是**格式字符串**，可在文本里嵌入表达式。

## 学生常见错误

- 字符串忘加引号：`print(Hello)` → NameError。
- Python 2 语法 (`print "x"`) 与 Python 3 (`print("x")`) 混用。
- 文件扩展名错。

## 下一步

- 打开 Thonny 或 VS Code。
- 输入、保存、运行上面示例脚本。

➡️ 下一节：[3.2 变量与运算符](./variables-operators)
