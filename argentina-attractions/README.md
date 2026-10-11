# 阿根廷 25 个必去景点

一个纯静态的中文旅行指南网站：阿根廷 25 个最值得去的景点，含精美图片、中文介绍、目录跳转与按地区筛选功能。

## 本地预览

直接用浏览器打开 `index.html` 即可，或启动本地服务器：

```bash
cd argentina-attractions
python3 -m http.server 8080
# 浏览器访问 http://localhost:8080
```

## 发布到 GitHub（GitHub Pages 免费托管）

1. 在 GitHub 上新建一个仓库（例如 `argentina-attractions`），**不要**勾选 "Add a README"。
2. 在本目录执行：

```bash
git init
git add .
git commit -m "阿根廷25个必去景点网站"
git branch -M main
git remote add origin https://github.com/你的用户名/argentina-attractions.git
git push -u origin main
```

3. 打开仓库的 **Settings → Pages**，Source 选择 **Deploy from a branch**，Branch 选择 `main` / `root`，保存。
4. 等 1–2 分钟，访问 `https://你的用户名.github.io/argentina-attractions/` 即可看到网站。

## 文件说明

- `index.html` — 网站页面（结构 + 样式 + 交互）
- `data.js` — 25 个景点的中文介绍、地区、英文名、图片地址与来源链接
- `images/` — 25 张景点照片（来自 Wikimedia Commons 自由版权图库，随仓库一起上传，网站永久可用）
- 每张卡片附带"图片来源"链接，可跳转到原图在 Wikimedia Commons 的页面

## 自定义

- 改文字/增减景点：编辑 `data.js` 里的 `ATTRACTIONS` 数组
- 改地区筛选：编辑 `data.js` 里的 `REGIONS` 数组
- 改样式：编辑 `index.html` 中的 `<style>` 部分
