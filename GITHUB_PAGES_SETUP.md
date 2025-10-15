# 🌐 GitHub Pages Kurulum Rehberi

## ✨ GitHub Pages Nedir?

GitHub'ın sunduğu **ücretsiz** statik site hosting servisi.
Siteniz şu adreste yayınlanacak:

```
https://uzmaneticaret.github.io/demosayfa/
```

---

## 🚀 Hızlı Kurulum (3 Adım)

### 1️⃣ GitHub Repo Sayfasına Git

Tarayıcıda aç:
```
https://github.com/uzmaneticaret/demosayfa
```

### 2️⃣ Settings → Pages'e Git

1. **Settings** sekmesine tıkla (sağ üstte)
2. Sol menüden **Pages** seçeneğini bul
3. **Source** bölümünde:
   - Branch: `main` seç
   - Folder: `/ (root)` seç
4. **Save** butonuna tıkla

### 3️⃣ Bekle ve Kontrol Et (2-3 dakika)

GitHub otomatik olarak site'yi deploy edecek.

✅ Hazır olunca üstte şöyle bir mesaj göreceksin:
```
Your site is live at https://uzmaneticaret.github.io/demosayfa/
```

---

## 📸 Görsel Adımlar

### Adım 1: Settings
```
GitHub Repo → Settings (⚙️ simgesi)
```

### Adım 2: Pages Menüsü
```
Sol menü → Pages (📄 simgesi)
```

### Adım 3: Source Ayarları
```
┌─────────────────────────────────┐
│ Build and deployment            │
├─────────────────────────────────┤
│ Source: Deploy from a branch ✓  │
│                                 │
│ Branch:                         │
│  ┌──────┐  ┌──────┐  [Save]    │
│  │ main │  │ root │             │
│  └──────┘  └──────┘             │
└─────────────────────────────────┘
```

---

## 🔍 Deployment Durumunu Kontrol Et

### GitHub Actions ile

1. Repo ana sayfasına git
2. **Actions** sekmesine tıkla
3. "pages build and deployment" workflow'unu gör
4. ✅ Yeşil tik = Site yayında!

### Komut Satırından

```bash
gh run list --workflow=pages-build-deployment
```

---

## 🌍 Site URL'leri

### Ana URL (GitHub Pages)
```
https://uzmaneticaret.github.io/demosayfa/
```

### Vercel URL (mevcut)
```
https://midyat-ozel-saatler-yakisikli-beyle-omega.vercel.app/
```

**İkisi de aynı içeriği gösterecek!** 🎉

---

## ⚙️ Otomatik Deployment

Artık her `git push origin main` yaptığında:

1. ✅ Vercel otomatik deploy eder
2. ✅ GitHub Pages otomatik deploy eder

**İki site de her zaman güncel!**

---

## 🔒 Özel Domain (İsteğe Bağlı)

Kendi domain'ini kullanmak istersen:

1. GitHub Pages Settings'de **Custom domain** bölümünü bul
2. Domain'ini yaz (örn: `benimsite.com`)
3. DNS kayıtlarını ayarla (GitHub talimat verecek)

---

## ❓ Sorun Giderme

### Site 404 Gösteriyorsa

1. Settings → Pages → Source'un `main` ve `/` (root) olduğunu kontrol et
2. Actions sekmesinde deployment'ın başarılı olduğunu kontrol et
3. 5 dakika bekle (ilk deployment biraz uzun sürer)

### CSS/JS Yüklenmiyor

Dosya path'leri kontrol et - `index.html`'de:
```html
✅ DOĞRU: <link href="styles.css">
❌ YANLIŞ: <link href="/styles.css">
```

### Resimler Gözükmüyor

`images/` klasörünün root'ta olduğunu doğrula:
```bash
ls -la images/
# rara.jpeg ve rrr.jpeg görünmeli
```

---

## 📊 Karşılaştırma

| Özellik | GitHub Pages | Vercel |
|---------|--------------|--------|
| **Ücretsiz** | ✅ Evet | ✅ Evet |
| **Otomatik Deploy** | ✅ Evet | ✅ Evet |
| **Custom Domain** | ✅ Evet | ✅ Evet |
| **SSL/HTTPS** | ✅ Evet | ✅ Evet |
| **Build Süresi** | ~2-3 dakika | ~30 saniye |
| **CDN** | ✅ GitHub CDN | ✅ Vercel Edge |

**İkisini de kullanabilirsin!** Biri çökerse diğeri yedek olur 😊

---

## 🎯 Sonuç

1. **Şimdi**: GitHub repo → Settings → Pages → main/root → Save
2. **2-3 dakika bekle**
3. **https://uzmaneticaret.github.io/demosayfa/** adresini aç
4. **Tadını çıkar!** 🎉

---

**Oluşturulma**: 15 Ekim 2025
**Durum**: ⏳ Kurulum Bekleniyor

Manuel kurulum yaptıktan sonra bu dosyayı güncelleyebilirim! 🚀
