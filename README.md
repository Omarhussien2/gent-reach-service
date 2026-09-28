# agent-reach-service 🔌

خدمة ربط خفيفة (Express) تسمح **لوكلاء الذكاء الاصطناعي** بالاتصال بالمنصات وتنفيذ عمليات الاتصال نيابة عنهم.

## عن الخدمة

- `POST /api/connect` — يستقبل اسم المنصة ويشغّل إجراء الاتصال المناسب
- خدمة صغيرة عن قصد: ملف واحد (`index.js`) + Express + CORS
- مصممة للتشغيل المحلي بجانب وكيل AI (مثل بصيرة / أدوات agent-reach)

## التشغيل

```bash
npm install
npm start   # Express server
```

> الريبو الشقيق: [`baseera-search`](https://github.com/Omarhussien2/baseera-search) — منصة البحث والرصد الإعلامي.
