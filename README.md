# 🌍🤖 Reconocimiento Facial + Predicción de Sismos

Este proyecto combina inteligencia artificial y datos sísmicos en una sola plataforma:

- ⚡ Backend (Django) → expone datos sísmicos desde prediction.db.
- 🔐 Backend (FastAPI) → registro/login con reconocimiento facial.
- 🎨 Frontend (Vite + React/TS) → interfaz moderna que consume ambos backends.

---

## 🏗️ Arquitectura general

```
Frontend (React/TS) 
       │
       ├──> Backend Django (API Sismos → prediction.db)
       │
       └──> Backend FastAPI (Auth con rostro → user.db)
```

---

## 🔎 Backend Django — Predicción de sismos

📂 Ruta: Backend/  
📌 Proyecto: logic/  
👉 Base: prediction.db (SQLite)  

### Archivos clave

- logic/settings.py → Configuración global (DB, apps, CORS).
- logic/urls.py → Rutas principales.
- api/models.py → Modelo EarthquakePrediction mapeado a prediction.
- api/views.py → Endpoints REST para estadísticas, países, dashboards.
- api/urls.py → Prefijo /api.

### Endpoints principales

- 🌎 /api/countries/south-american/ → resumen por país.
- 📊 /api/statistics/ → estadísticas globales.
- 🗓️ /api/statistics/year/{year}/ → estadísticas anuales.
- 🗺️ /api/dashboard/?range=24h|7d|30d → datos para el dashboard.

---

## 🔐 Backend FastAPI — Autenticación facial

📂 Ruta: Backend/fastapi_auth/  
📌 Propósito: registro/login con rostro → emisión de tokens JWT.  

### Archivos clave

- main.py → app FastAPI, CORS, endpoints de prueba.
- routers/auth.py → rutas /auth:
  - POST /auth/register → registrar usuario + rostro.
  - POST /auth/login/face → login con imagen.
  - GET /auth/me → datos del usuario logueado.
- security.py → hashing facial + JWT.
- models.py, schemas.py, db.py → base de datos + ORM.
- user.db → almacenamiento local de usuarios y rostros.

---

## 🎨 Frontend (Vite + React + TS)

📂 Ruta: Frontend/  

### Carpetas clave

- src/auth/ → login facial (FacialLogin.tsx).
- src/services/ → comunicación con backends:
  - auth.ts → FastAPI.
  - earthquakeService.ts → Django (datos sísmicos).
  - userService.ts → gestión de usuarios en frontend.

### Variables de entorno

- VITE_AUTH_API → URL del backend FastAPI (default: http://localhost:8001).

---

## 🔗 Comunicación entre componentes

- Frontend → Django → datos de sismos (/api/...).  
- Frontend → FastAPI → autenticación facial (/auth/...).  
- CORS → habilitado para localhost:3000 y localhost:5173 en desarrollo.  

---

## ⚡ Puesta en marcha rápida

1️⃣ Backend de sismos (Django)
```bash
pip install -r Backend/requirements.txt
python Backend/manage.py runserver 0.0.0.0:8000
```

2️⃣ Backend de autenticación (FastAPI)
```bash
uvicorn Backend.fastapi_auth.main:app --reload --host 0.0.0.0 --port 8001
```

3️⃣ Frontend
```bash
cd Frontend
npm install
npm run dev
```

---

## ⚠️ Notas y advertencias

- 🚫 No borres prediction.db → datos sísmicos históricos.
- 🚫 No borres user.db → usuarios y rostros registrados.
- 🔧 Cambios de puertos → actualizar VITE_AUTH_API y CORS.
- 🔒 En producción: desactivar DEBUG, restringir ALLOWED_HOSTS, migrar DB a algo robusto y manejar secretos con variables de entorno.
