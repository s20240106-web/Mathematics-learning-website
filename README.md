# 指數溫習站 · Exponent Station

一個為中一至中三學生而設的互動指數學習平台，以及介紹這個產品的雙語商業網站。  
An interactive indices learning platform for S1–S3 students, presented through a bilingual product website.

**Live site:** <https://s20240106-web.github.io/Mathematics-learning-website/>  
**Author:** 3A 陳穎霖（Chan Wing Lam）

![指數溫習站產品網站首頁](assets/social-preview.png)

## 網站結構

```text
index.html                     中英雙語產品介紹網站
site.css                       介紹網站的視覺設計及響應式版面
site.js                        語言切換、產品示範切換與導覽互動
robots.txt / sitemap.xml      搜尋引擎設定
app/index.html                 指數溫習站學習平台
app/styles.css                 學習平台樣式
app/app.js                     單元內容、40 題題庫、實驗室及進度儲存
assets/                        產品截圖
.github/workflows/deploy.yml   GitHub Pages 自動部署
```

## 產品介紹網站

- 繁體中文及英文語言切換，語言選擇會保存在瀏覽器。
- 產品理念、功能、課程範圍、真實介面示範及常見問題。
- 完整響應式設計，支援手機、平板及桌面。
- 所有主要行動按鈕均可進入原有的學習平台。
- 作者資料：**3A 陳穎霖**。

## 學習平台功能

- **四個學習單元**：指數基礎、指數定律、零與負指數、科學記數法。
- **互動指數實驗室**：選擇底數及 0–6 的指數，即時觀察展開式、數值、科學記數法與增長圖表。
- **40 題練習站**：可選範圍及 5／10 題；每題即時批改並附完整解釋，完成後有成績與錯題回顧。
- **學習進度**：單元完成度、最佳成績及累積答對題數儲存在瀏覽器 `localStorage`。
- **公式表**：可列印或儲存為 PDF。
- **錯題診所**：四個初中常見指數錯誤的對照。

原有學習功能全部保留，並可透過 `/app/` 直接使用。課程內容以繁體中文編寫；產品介紹網站提供繁體中文及英文版本。

## 本機預覽

毋須安裝任何套件，直接用瀏覽器打開 `index.html`；或使用本機伺服器：

```bash
python3 -m http.server 8765
```

然後前往 <http://127.0.0.1:8765/>。學習平台位於 <http://127.0.0.1:8765/app/>。

## 自動部署

每次合併或推送至 `main` branch，GitHub Actions 會自動將 `index.html`、`site.css`、`site.js`、`app/` 及 `assets/` 部署至 GitHub Pages。

```text
push / merge to main
        │
        ▼
GitHub Actions: Deploy to GitHub Pages
        │
        ▼
https://s20240106-web.github.io/Mathematics-learning-website/
```

## 備註

- 所有互動及內容均為前端實作，沒有外部套件或網絡依賴。
- 學習進度只儲存在瀏覽器本機；清除網站資料後會重新開始。
- 適合中一至中三溫習，教師亦可投影使用。
- 設計、內容及開發：3A 陳穎霖。
