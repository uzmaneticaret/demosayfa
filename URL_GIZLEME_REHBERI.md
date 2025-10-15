# 🔒 GitHub URL'sini Gizleme Yöntemleri

## ❌ Şu Anki Durum

Kısa link'e tıkladığında tarayıcıda görünüyor:
```
https://uzmaneticaret.github.io/demosayfa/
```

Bu da repo'nun adını (`demosayfa`) ve kullanıcı adını (`uzmaneticaret`) gösteriyor.

---

## ✅ Çözümler

### 🎯 1. IFRAME ile Gizleme (En Kolay - 5 dakika)

Başka bir sayfa oluştur ve içine iframe ile göm:

**Nasıl Yapılır:**

1. **Yeni bir HTML dosyası oluştur:**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Özel Profiller</title>
    <style>
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden;
        }
        iframe {
            width: 100%;
            height: 100%;
            border: none;
        }
    </style>
</head>
<body>
    <iframe src="https://uzmaneticaret.github.io/demosayfa/"></iframe>
</body>
</html>
```

2. **Bu dosyayı başka bir yerde host et:**
   - **Netlify Drop**: https://app.netlify.com/drop
   - **Vercel**: Yeni proje oluştur
   - **GitHub Pages**: Başka bir repo

3. **Sonuç:**
   - URL: `https://senin-site.netlify.app`
   - İçerik: demosayfa sayfası
   - Kullanıcı GitHub URL'sini görmez! ✅

---

### 🎯 2. Özel Domain Kullan (En Profesyonel)

Kendi domain'inle GitHub Pages'i gizle:

**Gereksinimler:**
- Bir domain ($1-10/yıl)
- 10 dakika kurulum

**Nasıl Yapılır:**

1. **Domain Satın Al:**
   - Namecheap: https://www.namecheap.com
   - GoDaddy: https://www.godaddy.com
   - Türk: https://www.turhost.com

2. **GitHub Pages'de Custom Domain Ayarla:**
   ```
   GitHub Repo → Settings → Pages → Custom domain
   Domain: ornek.com
   ```

3. **DNS Ayarları:**
   ```
   A Record @ → 185.199.108.153
   A Record @ → 185.199.109.153
   A Record @ → 185.199.110.153
   A Record @ → 185.199.111.153
   CNAME www → uzmaneticaret.github.io
   ```

4. **Sonuç:**
   - Eski: `https://uzmaneticaret.github.io/demosayfa/`
   - Yeni: `https://ornek.com` ✨
   - GitHub URL'si tamamen gizli!

---

### 🎯 3. Netlify/Vercel'e Taşı (Ücretsiz + Hızlı)

**Netlify Drop (En Hızlı - 2 dakika):**

1. https://app.netlify.com/drop adresine git
2. Projeyi sürükle-bırak:
   ```
   index.html
   styles.css
   script.js
   images/
   ```
3. Otomatik deploy olur
4. URL: `https://rastgele-isim.netlify.app`
5. Ayarlardan custom domain veya alt domain değiştir

**Sonuç:**
- URL: `https://midyat-profil.netlify.app`
- GitHub URL'si tamamen gizli! ✅

---

### 🎯 4. Meta Refresh ile Redirect (Hızlı Hack)

Ara sayfa oluştur, 0 saniyede yönlendir:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url=https://uzmaneticaret.github.io/demosayfa/">
    <title>Yönlendiriliyor...</title>
</head>
<body>
    <p>Yönlendiriliyor...</p>
</body>
</html>
```

**Ama dikkat!**
- ⚠️ URL hala değişir tarayıcıda
- Sadece ilk tıklamada farklı URL görünür

---

### 🎯 5. URL Masking (TinyURL Premium)

**TinyURL ile:**
1. https://tinyurl.com/app/pricing
2. Premium hesap ($9.99/ay - ilk 7 gün ücretsiz)
3. "URL Masking" özelliği aktif
4. Link: `https://tinyurl.com/midyat47`
5. Tarayıcıda hep bu URL kalır! ✨

**Ama pahalı!** İlk 7 gün ücretsiz test edebilirsin.

---

## 🚀 En İyi Çözüm: Netlify + Custom Subdomain

### Adım 1: Netlify'a Deploy Et (ÜCRETSİZ)

```bash
# Terminalden:
cd /workspaces/demosayfa
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

Dosyaları seç:
- index.html
- styles.css
- script.js
- images/

### Adım 2: Alt Domain Ayarla

Netlify Dashboard'da:
```
Site settings → Domain management → Options → Edit site name
Yeni isim: midyat-profil
```

### Adım 3: Sonuç! 🎉

```
https://midyat-profil.netlify.app
```

- ✅ Netlify URL'si (GitHub gizli)
- ✅ Ücretsiz SSL
- ✅ Hızlı CDN
- ✅ Otomatik deploy (Git'e push yaptıkça)

---

## 💡 Tavsiyem

### Bedava ve Hızlı İstersen:
**→ Netlify Drop Kullan**

1. https://app.netlify.com/drop
2. Dosyaları sürükle-bırak
3. Site ismi değiştir
4. Kısa link oluştur: `https://bit.ly/midyat47`
5. Bitti! ✨

**Sonuç:**
```
Kısa Link: https://bit.ly/midyat47
↓ Yönlendirir
Gerçek URL: https://midyat-profil.netlify.app
(GitHub URL'si hiç görünmez!)
```

### Custom Domain İstersen:
**→ Domain Al + GitHub Pages**

```
1. Domain al ($10/yıl)
2. GitHub Pages'e bağla
3. DNS ayarla
4. Sonuç: https://senin-domain.com
```

---

## 🔧 Hemen Uygulayalım mı?

Hangisini yapmak istersin?

### A) Netlify'a Taşıma (2 dakika)
```
Komut çalıştırırım, Netlify'a deploy ederim,
GitHub URL'si tamamen gizlenir.
```

### B) IFRAME Sayfası Oluştur (5 dakika)
```
Yeni HTML dosyası oluştururum,
Netlify/Vercel'e atarım,
Kısa link veririm.
```

### C) Custom Domain Ayarla (10 dakika + domain ücreti)
```
Rehber veririm, adım adım takip edersin,
Profesyonel URL'n olur.
```

Hangisi? Ben hazırım! 🚀
