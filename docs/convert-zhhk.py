#!/usr/bin/env python3
"""Convert zh-cn markdown files to zh-hk using OpenCC + HK-specific replacements."""
import os
import re
import subprocess
import sys

# HK-specific replacements applied AFTER OpenCC s2hk conversion.
# OpenCC s2hk handles Simplified→HK Traditional, but some terms still need adjustment
# to match the existing zh-hk style observed in the docs.
HK_REPLACEMENTS = [
    # Module / chapter
    ("模塊", "模組"),
    # Bytes
    ("字節", "位元組"),
    # Review
    ("復習", "溫習"),
    # Data → 資料 (HK style)
    ("數據", "資料"),
    ("數據庫", "資料庫"),
    # Algorithm
    ("算法", "演算法"),
    # Pseudocode
    ("偽代碼", "偽程式碼"),
    # Digital → 數碼
    ("數字技術", "數碼技術"),
    ("數字時代", "數碼時代"),
    ("數字相機", "數碼相機"),
    ("數字數據", "數碼資料"),
    ("數字鴻溝", "數碼鴻溝"),
    ("數字訊號", "數碼訊號"),
    ("數字格式", "數碼格式"),
    ("數字設備", "數碼設備"),
    ("數字產品", "數碼產品"),
    ("數字內容", "數碼內容"),
    ("數字素養", "數碼素養"),
    ("數字共融", "數碼共融"),
    ("數字健康", "數碼健康"),
    ("數字遺產", "數碼遺產"),
    ("數字 vs 模擬", "數碼 vs 模擬"),
    ("模擬 vs 數字", "模擬 vs 數碼"),
    ("數字數據", "數碼資料"),
    ("數字數位", "數碼"),
    ("數字儲存", "數碼儲存"),
    # Software → 軟件 (already handled by OpenCC, but ensure)
    # Network → 網絡 (already handled by OpenCC)
    # Internet → 互聯網 (already handled by OpenCC)
    # Computer → 電腦 (already handled by OpenCC)
    # Real-time → 實時 (HK uses both, leave it)
    # Class → 課室
    ("教室", "課室"),
    # File → 檔案 (some places); but in IT context 文件 is fine in HK too
    # Settings/menu terms common in HK
    ("用戶", "用戶"),  # both HK and zh-cn use 用戶 these days
    # Conversion of remaining tricky terms
    ("信號", "訊號"),
    ("圖像", "圖像"),  # HK uses both 圖像 and 影像
    ("圖片", "圖片"),
    ("信息", "資訊"),  # information
    ("信息系統", "資訊系統"),
    ("信息時代", "資訊時代"),
    ("信息處理", "資訊處理"),
    # Code → 程式碼 (HK), but only in clear programming contexts.
    # We don't blanket-replace 代碼 because terms like 國家代碼 / 二進制代碼 / ASCII 代碼
    # use 代碼 = identifier code, not programming code.
    ("源代碼", "源程式碼"),
    ("偽代碼", "偽程式碼"),
    ("應用代碼", "應用程式碼"),
    # When the standalone word "代码" was used in 自然语言里指源代码, e.g.
    # "你的代碼". The HK preferred form is 程式碼.
    ("你的代碼", "你的程式碼"),
    ("這段代碼", "這段程式碼"),
    ("一段代碼", "一段程式碼"),
    ("段代碼", "段程式碼"),
    ("把代碼", "把程式碼"),
    ("寫代碼", "寫程式碼"),
    ("讀代碼", "讀程式碼"),
    ("查代碼", "查程式碼"),
    ("跑代碼", "跑程式碼"),
    ("代碼註釋", "程式碼註釋"),
    ("代碼塊", "程式碼塊"),
    ("無關代碼", "無關程式碼"),
    ("該代碼", "該程式碼"),
    ("代碼質量", "程式碼質量"),
    ("代碼示例", "程式碼示例"),
    ("代碼風格", "程式碼風格"),
    ("代碼覆蓋", "程式碼覆蓋"),
    ("代碼倉庫", "程式碼倉庫"),
    # 代碼複用 in CS context → 程式碼複用
    ("代碼複用", "程式碼複用"),
    ("複製粘貼程式碼", "複製貼上程式碼"),
    # 代碼裡 / 代碼中 etc. — in programming texts these almost always mean source code
    ("代碼裡", "程式碼裏"),
    ("代碼中", "程式碼中"),
    ("代碼裏", "程式碼裏"),
    # Repair earlier wrong replacement if it sneaks back (just safety)
    ("國家程式碼", "國家代碼"),
    ("二進制程式碼", "二進制代碼"),
    ("ASCII 程式碼", "ASCII 代碼"),
    ("錯誤程式碼", "錯誤代碼"),
    ("校驗程式碼", "校驗代碼"),
    ("地區程式碼", "地區代碼"),
    ("郵政程式碼", "郵政代碼"),
    ("貨幣程式碼", "貨幣代碼"),
    ("身份程式碼", "身份代碼"),
    ("狀態程式碼", "狀態代碼"),
    ("控制程式碼", "控制代碼"),
    # Program → 程式 (HK; though 程序 also used)
    ("Python 程序", "Python 程式"),
    ("應用程序", "應用程式"),
    # Sub-program → 子程式
    ("子程序", "子程式"),
    # Project
    ("項目", "項目"),  # HK uses 項目 widely
    # User interface
    ("界面", "介面"),
    # Memory
    ("內存", "記憶體"),
    # Hard disk
    ("硬盤", "硬碟"),
    ("磁盤", "磁碟"),
    # Cache
    ("緩存", "快取"),
    # Server (server is fine as 伺服器 in HK formal, but 服務器 also OK)
    # Stack / queue / linked list - HK uses these as-is
    # Loop
    ("循環", "迴圈"),
    ("迭代", "迭代"),  # OK
    ("嵌套迴圈", "巢狀迴圈"),
    ("嵌套循環", "巢狀迴圈"),
    # Class (object-oriented)
    ("類", "類"),  # OK
    # Function / method
    ("函數", "函式"),  # HK prefers 函式 in CS context, but 函數 is OK too
    # Variable
    ("變量", "變數"),
    # Parameter
    ("參數", "參數"),  # OK
    # Return
    ("返回", "返回"),  # OK in HK
    # Print
    ("打印", "列印"),
    # Compile
    ("編譯", "編譯"),  # OK
    # Database related
    ("查詢", "查詢"),
    ("記錄", "記錄"),
    ("字段", "欄位"),
    ("主鍵", "主鍵"),  # OK
    ("外鍵", "外來鍵"),  # HK term
    ("索引", "索引"),
    ("視圖", "視圖"),
    # Network
    ("路由器", "路由器"),
    ("交換機", "交換器"),
    ("協議", "協定"),
    ("數據包", "封包"),
    ("帶寬", "頻寬"),
    # Web
    ("網頁", "網頁"),
    ("瀏覽器", "瀏覽器"),
    ("Web 服務器", "Web 伺服器"),
    ("數據庫服務器", "資料庫伺服器"),
    # IPO etc - leave English
    # Misc
    ("輸出", "輸出"),
    ("輸入", "輸入"),
    ("打開", "打開"),  # OK
    ("運行", "執行"),
    ("運行時", "執行時"),
    ("加載", "載入"),
    ("下載", "下載"),  # OK
    ("上傳", "上載"),  # HK term
    ("缺省", "預設"),  # default
    ("缺省值", "預設值"),
    # Photo / image
    ("相片", "相片"),  # OK
    ("圖", "圖"),  # OK
    # 嵌入 → 嵌入 OK
    # 內置 → 內建
    ("內置", "內建"),
    # 通過 → 透過 (HK preference for 'by means of')
    # NOTE: be careful - 通過考試 means 'pass exam', leave alone
    # Better not blanket-replace 通過
    # 解析 → 解析 OK
    # 提交 → 提交 OK
    # Object
    ("對象", "物件"),
    # Method (OO)
    ("方法", "方法"),  # OK
    # Library
    ("庫", "庫"),  # OK
    # Bit
    ("比特", "位元"),  # bit
    # Boolean
    ("布爾", "布林"),
    ("布爾值", "布林值"),
    # Mobile
    ("手機", "手機"),  # OK
    # Network packet
    # PHP / JS / SQL leave as-is
    # Tutorial
    ("教程", "教學"),
    # Document / Documentation
    ("文檔", "文件"),
    # Smartphone / mobile etc.
    # Common HK terms used in docs already
    ("運算", "運算"),  # OK
]


def opencc_convert(text):
    """Convert simplified Chinese to HK Traditional using opencc."""
    proc = subprocess.run(
        ["/opt/homebrew/bin/opencc", "-c", "s2hk.json"],
        input=text,
        capture_output=True,
        text=True,
        check=True,
    )
    return proc.stdout


def hk_postprocess(text):
    """Apply HK-specific word replacements."""
    for src, dst in HK_REPLACEMENTS:
        if src == dst:
            continue
        text = text.replace(src, dst)
    return text


def convert_file(src_path, dst_path):
    with open(src_path, "r", encoding="utf-8") as f:
        src = f.read()
    converted = opencc_convert(src)
    converted = hk_postprocess(converted)
    os.makedirs(os.path.dirname(dst_path), exist_ok=True)
    with open(dst_path, "w", encoding="utf-8") as f:
        f.write(converted)


def main():
    src_root = "zh-cn"
    dst_root = "zh-hk"
    count = 0
    for dp, _, fs in os.walk(src_root):
        for f in fs:
            if not f.endswith(".md"):
                continue
            sp = os.path.join(dp, f)
            dp_dst = dp.replace(src_root, dst_root, 1)
            dp_path = os.path.join(dp_dst, f)
            convert_file(sp, dp_path)
            count += 1
    print(f"Converted {count} files")


if __name__ == "__main__":
    main()
