#!/usr/bin/env node
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import * as OpenCC from 'opencc-js'

const SRC_DIR = new URL('../docs/zh-cn/', import.meta.url).pathname
const DST_DIR = new URL('../docs/zh-hk/', import.meta.url).pathname

// Simplified Chinese (mainland) -> Traditional Chinese (Hong Kong) — uses HK vocab + glyphs.
const cn2hk = OpenCC.Converter({ from: 'cn', to: 'hk' })

// Post-conversion ICT vocabulary tweaks specific to HK schools.
// (OpenCC handles 软件→軟件, 数据→數據, but ICT terminology in HK often differs from mainland.)
const phraseOverrides = new Map(Object.entries({
  // common ICT vocabulary that differs between mainland (CN) and Hong Kong (HK)
  '數據庫': '資料庫',
  '數據': '資料',                // HK convention prefers 資料 in academic context
  '函數': '函式',
  '函式庫': '函式庫',
  '記憶體': '記憶體',
  '介面': '介面',
  '隊列': '佇列',
  '棧': '堆疊',
  '數組': '陣列',
  '哈希': '雜湊',
  '網絡': '網絡',
  '視頻': '影片',
  '視頻會議': '視像會議',
  '視頻': '影片',
  '優化': '優化',
  '質量': '品質',
  '網絡攻擊': '網絡攻擊',
  '網絡安全': '網絡保安',
  '計算機': '電腦',
  '操作系統': '作業系統',
  '應用程序': '應用程式',
  '系統軟件': '系統軟件',
  '應用軟件': '應用軟件',
  '驅動程序': '驅動程式',
  '實用程序': '實用程式',
  '事務': '事務',
  '進程': '程序',
  '線程': '執行緒',
  '寄存器': '暫存器',
  '匯總': '匯總',
  '透視表': '樞紐分析表',
  '數據透視表': '樞紐分析表',
  '數據透視圖': '樞紐分析圖',
  '范式化': '正規化',
  '規範化': '正規化',
  '第三範式': '第三正規形',
  '第一範式': '第一正規形',
  '第二範式': '第二正規形',
  '第三正規式': '第三正規形',
  '范式': '正規形',
  '電子表格': '試算表',
  '微秒': '微秒',
  '毫秒': '毫秒',
  '納秒': '奈秒',
  '皮秒': '皮秒',
  '字節': '位元組',
  '位': '位',
  '比特': '位元',
  '比特率': '位元率',
  '比特位': '位元',
  '回滾': '回溯',
  '回滚': '回溯',
  '碎片整理': '重組',
  '磁盤碎片整理': '磁碟重組',
  '虛擬現實': '虛擬實境',
  '增強現實': '擴增實境',
  '人工智能': '人工智能',
  '雲計算': '雲端運算',
  '物聯網': '物聯網',
  '雙因子': '雙重因素',
  '雙因素': '雙重因素',
  '雙重認證': '雙重認證',
  '兩步驗證': '雙重認證',
  '兩步驗證': '雙重認證',
  '光盤': '光碟',
  '光盤': '光碟',
  '硬盤': '硬碟',
  '軟盤': '磁碟',
  '快閃存儲': '快閃記憶體',
  '隨機存儲': '隨機存取記憶體',
  '只讀存儲': '唯讀記憶體',
  '隨機存取存儲器': '隨機存取記憶體',
  '只讀存儲器': '唯讀記憶體',
  '存儲': '儲存',
  '儲存裝置': '儲存裝置',
  '訪問': '存取',
  '訪問權限': '存取權限',
  '密鑰': '密鑰',
  '加密密鑰': '加密密鑰',
  '解密密鑰': '解密密鑰',
  '公鑰': '公開金鑰',
  '私鑰': '私人金鑰',
  '公鑰加密': '公開金鑰加密',
  '私鑰加密': '私人金鑰加密',
  '數字簽名': '數碼簽署',
  '數字證書': '數碼證書',
  '數字水印': '數碼水印',
  '數字鴻溝': '數碼鴻溝',
  '數字': '數碼',         // HK uses 數碼 for digital
  '數字鴻溝': '數碼鴻溝',
  '數字版權': '數碼版權',
  '數字版權管理': '數碼版權管理',
  '對稱加密': '對稱加密',
  '非對稱加密': '非對稱加密',
  '哈希函數': '雜湊函式',
  '散列': '雜湊',
  '散列函數': '雜湊函式',
  '單向哈希': '單向雜湊',
  // SBA
  '校本評核': '校本評核',
  '任務一': '課業一',
  '任務二': '課業二',
  '設計與實現': '構思與應用',
  '測試與評估': '測試與評估',
  '課業': '課業',
  // exam
  '考試': '考試',
  '會考': '會考',
  '中學文憑試': '中學文憑試',
  '香港中學文憑': '香港中學文憑',
  '考評局': '考評局',
  '評核局': '評核局',
  '評卷': '評卷',
  '評分': '評分',
  '評核': '評核',
  '主觀題': '主觀題',
  '客觀題': '客觀題',
  '選擇題': '選擇題',
  '結構題': '結構題',
  '簡答題': '簡答題',
  '論文題': '論文題',
  '中四': '中四',
  '中五': '中五',
  '中六': '中六',
  // language switches in titles
  '簡介': '簡介',
  '總覽': '總覽',
  '示例': '例子',
  '範例': '例子',
  '示例代碼': '示例程式碼',
  '示例代碼': '示例程式碼',
  '代碼': '程式碼',
  '源代碼': '原始碼',
  '腳本': '指令碼',
  '腳本語言': '指令碼語言',
  '客戶端腳本': '客戶端指令碼',
  '服務器端腳本': '伺服器端指令碼',
  '選修讀題': '選修課題',
  '閲讀': '閱讀',
  '算法與編程': '演算法與編程',
  '算法': '演算法',
  '服務器': '伺服器',
  '服務器端': '伺服器端',
  '服務端': '伺服器端',
  '服務': '服務',
  // verbs / actions
  '溫習': '溫習',
  '練習': '練習',
  '複習': '溫習',
  '修課': '修讀',
  '上課': '上課',
  '下課': '下課',
  '備課': '備課',
  // misc minor cleanups
  '電郵': '電郵',
  '檔案': '檔案',
  '檔案管理': '檔案管理',
  '文檔': '文件',
  '文件夾': '資料夾',
  '上傳': '上載',
  '下載': '下載',
  '打印': '列印',
  '打印機': '打印機',
  '屏幕': '螢幕',
  '視窗': '視窗',
  '窗口': '視窗',
  '鼠標': '滑鼠',
  '鍵盤': '鍵盤',
  '滑鼠': '滑鼠',
  '麥克風': '麥克風',
  '揚聲器': '揚聲器',
  '攝像頭': '攝影機',
  '感應器': '感應器',
  '組件': '組件',
  '模塊': '模組',
  '模組化': '模組化',
  '寬度': '寬度',
  '高度': '高度',
  '長度': '長度'
}))

function applyOverrides(text) {
  const entries = [...phraseOverrides.entries()].sort((a, b) => b[0].length - a[0].length)
  for (const [src, dst] of entries) {
    if (src === dst) continue
    text = text.split(src).join(dst)
  }
  return text
}

function fixLinks(text) {
  return text.split('/zh-cn/').join('/zh-hk/')
}

async function walk(dir) {
  const out = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name)
    if (entry.isDirectory()) {
      out.push(...await walk(p))
    } else if (entry.name.endsWith('.md')) {
      out.push(p)
    }
  }
  return out
}

async function main() {
  const files = await walk(SRC_DIR)
  let count = 0
  for (const filePath of files) {
    const relPath = filePath.slice(SRC_DIR.length)
    const dstPath = join(DST_DIR, relPath)
    await mkdir(dirname(dstPath), { recursive: true })

    const cn = await readFile(filePath, 'utf8')
    const hk = applyOverrides(fixLinks(cn2hk(cn)))
    await writeFile(dstPath, hk, 'utf8')
    count++
  }
  console.log(`Converted ${count} files from zh-cn to zh-hk.`)
}

main().catch(err => { console.error(err); process.exit(1) })
