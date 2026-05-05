# Love Prank

Một project React nhỏ để trêu người yêu: câu hỏi có hai lựa chọn `YES` và `NO`, nhưng nút `NO` sẽ né chuột hoặc né thao tác chạm.

## Chạy local

```bash
npm install
npm run dev
```

## Build production

```bash
npm run build
```

Sau khi build, thư mục static nằm ở `dist`.

## Deploy

Project dùng Vite nên có thể deploy như static site:

- Build command: `npm run build`
- Output directory: `dist`

Các lựa chọn phù hợp:

- [Vercel](https://vercel.com/docs/accounts/plans)
- [Netlify](https://www.netlify.com/pricing/)
- [Cloudflare Pages](https://developers.cloudflare.com/pages/platform/limits/)
- [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)

Tham khảo thêm hướng dẫn deploy static site của [Vite](https://vite.dev/guide/static-deploy.html).
