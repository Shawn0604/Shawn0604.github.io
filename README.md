# Shawn Tsai · Portfolio

Personal portfolio of **Shawn Tsai (蔡尚峰)**, an IT engineer from Taipei who starts a Master of IT at RMIT University, Melbourne, in 2027.

- **Home:** https://shawn0604.github.io/
- **All projects:** https://shawn0604.github.io/projects.html

Plain HTML, CSS and JavaScript. No framework and no build step, served straight from GitHub Pages.

---

以下是維護說明。

## 目錄

1. [網站結構](#網站結構)
2. [檔案說明](#檔案說明)
3. [常見修改](#常見修改)
   - [新增或修改專案（All projects 頁）](#新增或修改專案all-projects-頁)
   - [修改首頁的精選專案](#修改首頁的精選專案)
   - [修改經歷、技能、學歷](#修改經歷技能學歷)
4. [⚠️ 改了 CSS 或 JS 一定要更新版本號](#️-改了-css-或-js-一定要更新版本號)
5. [設計系統](#設計系統)
6. [本機預覽](#本機預覽)
7. [部署](#部署)
8. [無障礙與相容性](#無障礙與相容性)
9. [外部服務](#外部服務)

---

## 網站結構

網站一共兩頁，兩頁共用同一套樣式和色彩。

### `index.html`：首頁（單頁，用錨點捲動）

| 區塊 | 錨點 | 內容 |
|---|---|---|
| Hero | `#top` | 名字、一句話介紹、按鈕，右邊是「Office cat cam」貓咪攝影機 |
| About | `#about` | 自我介紹，旁邊用 traceroute 終端機畫面呈現經歷路線 |
| Experience | `#experience` | 工作經歷：時間、職稱、細節 |
| Projects | `#projects` | 精選專案：TUYA 大卡片、3 張專案卡、早期作品，最下面是「See all projects →」 |
| Skills | `#skills` | 「What's in the rack」，四張技能卡片，下面是語言能力 |
| Education | `#education` | RMIT（即將入學）、台師大 |
| About me | `#me` | 「Off the clock」生活照：一次顯示一張，每 5 秒自動換下一張。點照片會用毛玻璃視窗放大 |
| Contact | `#contact` | Email（有複製按鈕）、GitHub、LinkedIn |

### `projects.html`：完整作品索引

- 頁首：標題、說明，以及三個統計數字（專案數、上線或使用中、背後的 repo 數）。三個數字都是自動算的。
- 狀態篩選：All / Live / In use / Prototype / Research / Archived。這是一顆浮動的玻璃膠囊，往下捲時會停在導覽列下方。
- 分組：Built at work、Side projects、AI and data research、Earlier web projects。
- Practice：練習用的 repo，只列名稱。

這一頁的內容**全部來自 `data/projects.js`**，HTML 裡不用改任何東西。

---

## 檔案說明

```
Shawn0604.github.io/
├── index.html          首頁。版面用的 CSS 寫在 <style> 裡，互動用的 JS 寫在頁尾
├── projects.html       作品索引頁。CSS 寫在 <style> 裡，JS 會讀取 data/projects.js 產生內容
├── css/
│   └── glass.css       兩頁共用的玻璃效果和背景色塊，載入順序在各頁 <style> 之後
├── data/
│   └── projects.js     作品索引的資料，以後新增專案只要改這個檔案
├── js/
│   └── site.js         兩頁共用的互動：深淺色切換、手機選單、捲動淡入、跟著滑鼠的玻璃反光
├── images/
│   ├── me/             About me 的生活照（已縮到 1000px 寬）
│   ├── tuya-home.jpg   首頁 TUYA 卡片的截圖（800×506）
│   └── tuya-icon.png   TUYA 的圖示（48×48）
├── favicon.svg         分頁圖示
└── README.md
```

**為什麼 CSS 有一部分寫在 HTML 裡？** 每頁專用的版面樣式直接寫在該頁的 `<style>` 裡，兩頁都要用的玻璃效果才放進 `css/glass.css`。這樣改某一頁時，不用擔心影響到另一頁。

---

## 常見修改

### 新增或修改專案（All projects 頁）

打開 `data/projects.js`，在對應的分組（`projects` 陣列）裡加一筆：

```js
{
  name: "TUYA 突雅",                 // 中文名稱放在英文後面、用空格隔開，會自動顯示成較小的灰字
  year: "2026",
  status: "live",                   // 見下表
  blurb: "一句話說明這個專案做什麼、為誰做。",
  tags: ["Next.js", "TypeScript"],  // 技術標籤
  links: {                          // 選填，沒有的就不要寫
    live: "https://tuyaielts.com",  //   → 卡片上會出現「Visit ↗」
    code: "https://github.com/..."  //   → 卡片上會出現「Code ↗」，沒寫就顯示「Private repo」
  },
  repos: ["ielts-dictation"]        // 這個專案對應的 GitHub repo，超過一個時卡片會寫「Merges N repos」
}
```

| `status` | 顯示文字 | 顏色 | 什麼時候用 |
|---|---|---|---|
| `live` | Live | 琥珀色 | 已經上線，任何人都能使用 |
| `in-use` | In use | 綠色 | 公司內部正在使用 |
| `prototype` | Prototype | 藍色 | MVP 或展示版 |
| `research` | Research | 紫色 | 研究性質 |
| `archived` | Archived | 灰色 | 已經不再維護 |

**新增一個分組：** 在 `window.PROJECT_GROUPS` 加一個物件，包含 `id`（英文，用來當錨點）、`title`、`note` 和 `projects`。頂端導覽列會自動出現這個分組的連結。

**練習用的 repo：** 加在檔案最下面的 `window.PRACTICE`。有 `url` 的會變成可以點的連結。

### 修改首頁的精選專案

首頁的精選專案是**直接寫在 `index.html` 裡的**，不會讀 `data/projects.js`。要改的話，搜尋 `id="projects"`：

- `<article class="feature">`：最上面的大卡片（目前是 TUYA）。截圖放在 `images/`，建議尺寸 800×506。
- `<article class="proj">`：下面的三張卡片。`.fig` 裡放大數字，`ul` 裡放三個重點，`.tags` 放技術標籤。
- `<div class="projects side">`：「Also live」區塊，放已經上線的 side project（目前是揪友、早上五分鐘），每張卡片有開啟網站的按鈕。
- `<div class="earlier">`：早期作品的三個連結。

> 首頁放精選，`projects.html` 放全部。新增專案時通常只要改 `data/projects.js`，除非要把它升級成首頁精選。

### 新增或更換 About me 的照片

1. 把照片縮到寬 1000px 左右（約 200–350 KB），放進 `images/me/`。
2. 在 `index.html` 搜尋 `class="slide`，複製一行 `<span class="slide" ...>`，改 `src`、`alt`（給螢幕閱讀器的描述）和 `data-cap`（照片上的說明）。
3. 在 `class="ss-dots"` 裡多加一個 `<button class="dot" ...>`，小圓點的數量要跟照片一樣多。
4. 照片會裁成 3:4。如果人物被切到，調整 `style="object-position:50% 50%"`，第一個數字是左右位置，第二個是上下位置。

輪播規則：
- 每 5 秒換一張。要改間隔，修改 `index.html` 裡的 `var MS = 5000`（單位是毫秒）。
- 滑鼠停在照片上、打開放大視窗、或切到別的分頁時，輪播會暫停。
- 右下角有暫停／播放按鈕。系統開啟「減少動態效果」時，預設是暫停的。

### 修改經歷、技能、學歷

都在 `index.html` 裡，搜尋對應的錨點：

- **經歷**：`id="experience"`，每段經歷是一個 `<article class="job">`。
- **About 旁邊的 traceroute**：`<div class="hop">`。最後一站加上 `class="hop next"` 會變成琥珀色並顯示游標。記得同步修改外層 `aria-label` 裡的文字說明。
- **技能**：`id="skills"`，每格機櫃是一個 `<div class="unit">`。
- **學歷**：`id="education"`。還沒開始的學校加上 `class="school next"`。

---

## ⚠️ 改了 CSS 或 JS 一定要更新版本號

GitHub Pages 會讓瀏覽器把檔案快取 **10 分鐘**。如果只更新了檔案、沒改網址，訪客可能會拿到新的頁面配上舊的 CSS，畫面就會跑掉。

所以每次修改 `css/glass.css`、`js/site.js` 或 `data/projects.js`，都要把引用它們的網址版本號 **+1**（三個檔案共用同一個數字）：

```html
<!-- index.html 和 projects.html -->
<link rel="stylesheet" href="css/glass.css?v=13">

<!-- index.html 和 projects.html -->
<script src="js/site.js?v=13"></script>

<!-- projects.html -->
<script src="data/projects.js?v=13"></script>
```

目前的版本號是 `v=13`。改 `index.html`、`projects.html` 本身不用改版本號。

---

## 設計系統

### 主題
走機房和網路的風格：狀態燈（LED）、traceroute 終端機、監視器畫面（REC · CAM-01），技能區畫成機櫃。玻璃效果加上背後慢慢飄動的色塊，讓整體不會太硬。

### 字型（Google Fonts）
| 用途 | 字型 | 變數 |
|---|---|---|
| 大標、名字 | Archivo（可變字寬） | `--f-display` |
| 內文 | IBM Plex Sans | `--f-body` |
| 標籤、數字、程式感文字 | IBM Plex Mono | `--f-mono` |
| 中文 | Noto Sans TC | `--f-tc` |

中文字型只載入頁面上實際用到的字（Google Fonts 的 `text=` 參數），檔案很小。**新增中文字時，要把新的字加到 `<head>` 裡 Noto Sans TC 網址的 `text=` 參數**，否則那些字會改用系統字型顯示。

### 色彩
色彩都定義成 `:root` 上的 CSS 變數，深色模式會覆寫同一組變數：

| 變數 | 用途 |
|---|---|
| `--paper` / `--panel` / `--ink` | 背景 / 面板 / 主要文字 |
| `--muted` / `--faint` / `--line` | 次要文字 / 更淡的文字 / 分隔線 |
| `--cable` | 主色（藍），用在連結、強調、數字 |
| `--amber` | Live 狀態、即將發生的事 |
| `--led` | 綠燈，表示正在運作 |
| `--term-*` | 終端機和攝影機的深色配色 |

### 共用互動（`js/site.js`）
- **深淺色切換**：導覽列的太陽／月亮按鈕。選擇會存在 `localStorage`，下次打開會記得。沒選過就跟著系統設定。`<head>` 裡有一小段 script 會在頁面畫出來之前先套用主題，避免閃一下。
- **手機選單**：寬度小於 900px 時，導覽連結會收進漢堡按鈕。點連結、按 Esc 或點選單外面都會關閉選單。
- **捲動淡入**：區塊標題和卡片進入畫面時，會從下方淡入，同一排的卡片會依序出現。一開始就在畫面裡的元素不套用這個效果。
- **玻璃反光**：用滑鼠移過卡片時，會有一圈柔光跟著游標移動。只在有滑鼠的裝置上啟用。

> 頂端導覽列的毛玻璃是畫在 `.top::before` 上，不是 `.top` 本身。如果 `.top` 自己有 `backdrop-filter`，裡面的手機選單就沒辦法模糊後面的頁面。

### 玻璃效果（`css/glass.css`）
- **`.aurora`**：固定在最底層的四團漸層色塊，用 `transform` 慢慢飄動，效能負擔很小。要調濃淡就改 `--aurora-a` 到 `--aurora-d` 的透明度。
- **玻璃面板**：半透明背景加上 `backdrop-filter: blur() saturate()`，上緣有一條白色內陰影做出反光，外面再加柔和的投影。
- **相關變數**：`--glass-bg`、`--glass-bg-hover`、`--glass-rim`、`--glass-hi`、`--glass-drop`，深色模式另有一組。
- **要讓新元素有玻璃效果**：把它的選擇器加進 `glass.css` 裡「the glass surface」那一段的清單。

---

## 本機預覽

`projects.html` 是透過 `<script>` 載入 `data/projects.js`，所以直接雙擊打開 HTML 檔也能看。不過建議用本機伺服器，行為會跟線上一樣：

```bash
python -m http.server 8765
```

然後打開 http://localhost:8765/ 。

改完建議檢查這幾項：
- 淺色和深色模式（瀏覽器開發者工具 → Rendering → `prefers-color-scheme`）
- 手機寬度 375px 時沒有出現橫向捲軸
- 開發者工具的 Console 沒有錯誤

---

## 部署

推到 `main` 分支後，GitHub Pages 會自動部署，通常一分鐘內就會更新。

```bash
git add -A
git commit -m "說明這次改了什麼"
git push origin main
```

用 GitHub CLI 查看部署狀態：

```bash
gh api repos/Shawn0604/Shawn0604.github.io/pages/builds/latest --jq '.status'
```

---

## 無障礙與相容性

- **深色模式**：跟隨系統設定（`prefers-color-scheme`）。也可以在 `<html>` 加上 `data-theme="light"` 或 `data-theme="dark"` 強制指定。
- **減少動態效果**：系統開啟時（`prefers-reduced-motion`），捲動淡入和玻璃反光都會關閉，背景色塊停止飄動，卡片不會浮起，REC 燈、游標和 Live 脈衝也不會閃。
- **不支援 `backdrop-filter` 的瀏覽器**：玻璃面板會自動改成接近不透明，文字照樣看得清楚。
- **鍵盤操作**：所有連結和按鈕都有明顯的 focus 外框。首頁按 `C` 可以換一隻貓。
- **純裝飾的元素**（背景色塊、LED、終端機內容）都標了 `aria-hidden`。traceroute 另外用 `aria-label` 提供文字說明給螢幕閱讀器。

---

## 外部服務

| 服務 | 用途 | 掛掉的話 |
|---|---|---|
| [The Cat API](https://thecatapi.com/) | 首頁攝影機的隨機貓咪照片 | 顯示 ASCII 貓和「Signal lost. Try again.」 |
| Google Fonts | 字型 | 改用系統字型（每個字型都有設定備用字型） |

---

© 2026 Shawn Tsai
