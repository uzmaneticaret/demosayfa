# Demo Sayfa - Next.js Uygulaması

Next.js 15.3.5 ile oluşturulmuş modern bir web uygulaması.

## 🚀 Vercel Deployment

Bu proje Vercel'de deploy edilebilir. Aşağıdaki adımları izleyin:

1. [Vercel Dashboard](https://vercel.com/dashboard) açın
2. "Add New Project" tıklayın
3. GitHub reposunu seçin: `uzmaneticaret/demosayfa`
4. Framework: Next.js (otomatik algılanacak)
5. "Deploy" butonuna tıklayın

### ⚠️ Önemli Notlar

- **Custom Server**: `server.ts` dosyası sadece local development için kullanılır. Production'da Vercel serverless çalışır.
- **Socket.IO**: Vercel serverless ortamda çalışmaz. Alternatif olarak:
  - [Pusher](https://pusher.com/)
  - [Ably](https://ably.com/)
  - [Supabase Realtime](https://supabase.com/realtime)

## 💻 Local Development

```bash
# Dependencies yükleme
npm install

# Development server (standart Next.js)
npm run dev

# Custom server ile (Socket.IO için)
npm run dev:custom

# Production build
npm run build

# Production server
npm start
```

## 📦 Yapılan Değişiklikler

### Vercel Uyumluluğu İçin:
- ✅ `app/` klasörü oluşturuldu (layout.tsx, page.tsx, globals.css)
- ✅ `package.json` script'leri güncellendi
- ✅ `next.config.ts` optimize edildi
- ✅ `vercel.json` yapılandırması eklendi
- ✅ Build test edildi ve başarılı

---

## 🎯 Technology Stack

### Core Framework
- **⚡ Next.js 15** - The React framework for production with App Router
- **📘 TypeScript 5** - Type-safe JavaScript
- **🎨 Tailwind CSS 4** - Utility-first CSS framework

### UI Components
- **🧩 shadcn/ui** - High-quality, accessible components
- **🎯 Lucide React** - Beautiful icon library
- **🌈 Framer Motion** - Production-ready motion library

### Forms & Validation
- **🎣 React Hook Form** - Performant forms
- **✅ Zod** - TypeScript-first schema validation

### State Management
- **🐻 Zustand** - Simple state management
- **🔄 TanStack Query** - Data synchronization

### Database
- **🗄️ Prisma** - Next-generation ORM
- **🔐 NextAuth.js** - Authentication solution

This is a [Next.js](https://nextjs.org) project.
