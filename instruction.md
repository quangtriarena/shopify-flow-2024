# FLOW APP

## mode development

-   step 1: map tunnel ngrok / cloudflare vào port frontend.

-   step 2: cd vào server và client => npm run dev

### vì sao lại map vào port frontend:

-   vì ở dev, chúng ta khi chạy link /auth thì frontend sẽ sử dụng proxy xuống server thông qua link /auth khai báo trong vite.config.js

## mode production

khi ở mode production thì frontend được build ra thành file js và css. lúc này tunnel sẽ được map vào server, khi truy cập vào những link /\* thì lúc này frontend build đóng vai trò là view trong pattern MVC (model view controller)

còn những link thuộc về react, nó sẽ tự động map link dựa trên route không chứa trong proxy của vite.config.js
