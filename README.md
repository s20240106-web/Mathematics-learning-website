# 指數溫習站 · Exponent Station

為中一至中三學生而設的單頁互動數學學習網站，主題圍繞指數、指數定律、零與負指數，以及科學記數法。

**Live site:** <https://s20240106-web.github.io/Mathematics-learning-website/>

![指數溫習站首頁預覽](preview.png)

## 預覽

毋須安裝任何套件，直接用瀏覽器打開 `index.html` 即可。

如果想用本機伺服器預覽：

```bash
python3 -m http.server 8765
```

然後前往 <http://127.0.0.1:8765/>。

## 網站內容

- **學習地圖**：四個單元的學習路線與進度顯示。
- **互動課堂**：指數基礎、指數定律、零與負指數、科學記數法；每個單元包括概念拆解、公式、例題、常見錯誤和一分鐘自測。
- **指數實驗室**：可選底數 2／3／5／10，拖動指數 0–6，即時觀察展開式、數值、科學記數法和增長圖表。
- **練習站**：40 題題庫，可選範圍及 5／10 題；每題即時批改並提供解釋，完成後有答案回顧。
- **錯題診所**：四個初中學生常見的指數錯誤對照。
- **公式表**：可列印或儲存為 PDF 的指數速查表。
- **學習進度**：單元完成度、最佳成績與累積答對題數會儲存在瀏覽器 `localStorage`，可隨時重設。

## 檔案結構

```text
index.html     網站內容與版面
styles.css     視覺設計、響應式版面及列印樣式
app.js         單元內容、題庫、互動實驗室、練習流程與進度儲存
preview.png    網站首頁預覽圖
.github/workflows/deploy.yml  GitHub Pages 自動部署流程
```

## 自動部署

每次合併或推送至 `main` branch，GitHub Actions 會自動將網站部署至 GitHub Pages。

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
- 進度儲存在瀏覽器本機；更換瀏覽器或清除網站資料後會重新開始。
- 適合中一至中三溫習，教師亦可投影使用。
