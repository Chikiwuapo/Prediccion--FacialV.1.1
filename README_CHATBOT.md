#  J.A.R.V.I.S. - Sistema de Chatbot para Predicción Sísmica

##  Descripción General

J.A.R.V.I.S. (Just A Rather Very Intelligent System) es un chatbot especializado en predicción sísmica que forma parte del sistema de monitoreo y análisis de terremotos en Sudamérica. El chatbot proporciona información en tiempo real sobre actividad sísmica, estadísticas, modelos de predicción y datos técnicos de todos los países sudamericanos.

##  Características Principales

###  Cobertura Geográfica
- **Chile**: Datos del Centro Sismológico Nacional (CSN)
- **Perú**: Información del Instituto Geofísico del Perú (IGP)
- **Ecuador**: Datos del Instituto Geofísico (IG-EPN)
- **Colombia**: Información del Servicio Geológico Colombiano (SGC)
- **Argentina**: Datos del Instituto Nacional de Prevención Sísmica (INPRES)
- **Brasil**: Información de la Rede Sismográfica Brasileira (RSBR)
- **Bolivia**: Datos del Observatorio San Calixto
- **Uruguay**: Información de la Red Sísmica Nacional

###  Tipos de Información Disponible

#### Datos Sísmicos
- Sismos recientes con magnitud, profundidad y ubicación
- Estadísticas anuales por país
- Distribución por magnitud (M4-5, M5-6, M6-7, M7+)
- Energía sísmica total liberada
- Actividad en tiempo real (últimas 24 horas)

#### Modelos de Predicción
- **MMAA**: Método del Área Mínima de Alarma (U = 0.76-0.82)
- **Machine Learning**: Algoritmos avanzados (P = 0.2-0.31)
- **Análisis de Precursoras**: 80-85% probabilidad 3 meses antes
- **Modelos Híbridos**: Combinación de física y ML

#### APIs y Servicios
- USGS (earthquake.usgs.gov)
- EMSC (emsc-csem.org)
- APIs nacionales de cada país
- Servicios del dashboard interno

##  Arquitectura del Sistema

### Componentes Principales

#### 1. ChatBot.tsx
- **Función**: Componente principal que maneja la lógica del chatbot
- **Características**:
  - Estado de conversación con mensajes
  - Generación automática de respuestas
  - Gestión de entrada de usuario
  - Animaciones con Framer Motion

#### 2. ChatInterface.tsx
- **Función**: Interfaz de usuario del chat
- **Características**:
  - Visualización de mensajes
  - Campo de entrada de texto
  - Botones de control (cerrar, borrar)
  - Timestamps de mensajes

#### 3. ChatBotIcon.tsx
- **Función**: Icono animado 3D del chatbot
- **Características**:
  - Renderizado 3D con Three.js
  - Tierra animada con atmósfera
  - Partículas y anillos de energía
  - Efectos de iluminación dinámicos

#### 4. ChatBot.css
- **Función**: Estilos y animaciones del chatbot
- **Características**:
  - Diseño moderno con gradientes
  - Animaciones de pulso y brillo
  - Efectos hover y transiciones
  - Responsive design

##  Diseño Visual

### Paleta de Colores
- **Azul Principal**: #4A90E2
- **Azul Claro**: #87CEEB
- **Cian**: #00ffff
- **Fondo**: Gradientes azules y blancos

### Efectos Visuales
- **Animación de Pulso**: earthGlow y jarvisPulse
- **Efectos de Brillo**: Box-shadow con colores temáticos
- **Transiciones**: Suaves cambios de estado
- **3D Elements**: Tierra rotatoria con atmósfera

##  Comandos Disponibles

### Comandos por País
`
"sismos chile" - Datos sísmicos de Chile
"sismos peru" - Datos sísmicos de Perú
"sismos ecuador" - Datos sísmicos de Ecuador
"sismos colombia" - Datos sísmicos de Colombia
"sismos argentina" - Datos sísmicos de Argentina
"sismos brasil" - Datos sísmicos de Brasil
"sismos bolivia" - Datos sísmicos de Bolivia
"sismos uruguay" - Datos sísmicos de Uruguay
`

### Comandos Técnicos
`
"machine learning" - Algoritmos de ML
"prediccion" - Modelos de predicción
"api" - APIs y servicios
"estadisticas" - Datos estadísticos
"dashboard" - Funcionalidades del panel
"modelo" - Modelos de predicción
`

### Comandos Generales
`
"hola" - Saludo inicial
"ayuda" - Lista de comandos
"borrar" - Limpiar conversación
`

##  Tecnologías Utilizadas

### Frontend
- **React 18**: Framework principal
- **TypeScript**: Tipado estático
- **Framer Motion**: Animaciones
- **Three.js**: Renderizado 3D
- **@react-three/fiber**: Integración React-Three.js
- **@react-three/drei**: Utilidades 3D

### Estilos
- **CSS3**: Estilos personalizados
- **Gradientes**: Efectos visuales
- **Animaciones**: Keyframes y transiciones
- **Responsive**: Diseño adaptable

##  Funcionalidades del Chat

### Interfaz de Usuario
- **Ventana Flotante**: Posicionada en esquina inferior derecha
- **Icono 3D**: Tierra animada con efectos visuales
- **Chat Window**: 350x500px con diseño moderno
- **Mensajes**: Diferenciación visual entre usuario y bot

### Interacciones
- **Envío de Mensajes**: Enter o botón de envío
- **Auto-scroll**: Desplazamiento automático a nuevos mensajes
- **Borrado de Chat**: Reinicio de conversación
- **Cierre de Ventana**: Minimización del chat

### Respuestas Inteligentes
- **Análisis de Entrada**: Procesamiento de texto en tiempo real
- **Respuestas Contextuales**: Información específica según consulta
- **Datos Actualizados**: Información sísmica reciente
- **Formato Estructurado**: Respuestas organizadas y legibles

##  Datos y Estadísticas

### Información por País

#### Chile
- **Promedio Anual**: ~440 sismos M4+
- **Zona Más Activa**: Antofagasta y Tarapacá
- **Último Gran Terremoto**: M8.8 Maule 2010
- **Red Sísmica**: 100+ estaciones

#### Perú
- **Promedio Anual**: ~319 sismos M4+
- **Zona Más Activa**: Costa central y sur
- **Último Gran Terremoto**: M8.4 Arequipa 2001
- **Red Sísmica**: 50+ estaciones

#### Ecuador
- **Promedio Anual**: ~50-100 sismos M4+
- **Zona Más Activa**: Costa y Amazonía
- **Último Gran Terremoto**: M7.8 Pedernales 2016
- **Red Sísmica**: 30+ estaciones

### Distribución Global
- **M4-5**: 93.89% de todos los sismos
- **M5-6**: 5.31% de todos los sismos
- **M6-7**: 0.7% de todos los sismos
- **M7+**: 0.09% de todos los sismos

##  Instalación y Configuración

### Prerrequisitos
`ash
Node.js >= 16.0.0
npm >= 8.0.0
`

### Dependencias Principales
`json
{
  "react": "^18.0.0",
  "typescript": "^4.9.0",
  "framer-motion": "^10.0.0",
  "@react-three/fiber": "^8.0.0",
  "@react-three/drei": "^9.0.0",
  "three": "^0.150.0"
}
`

### Instalación
`ash
cd Frontend
npm install
npm run dev
`

##  Flujo de Funcionamiento

1. **Inicialización**: El chatbot se carga con mensaje de bienvenida
2. **Interacción**: Usuario escribe comando o pregunta
3. **Procesamiento**: Sistema analiza entrada y genera respuesta
4. **Respuesta**: Bot devuelve información estructurada
5. **Actualización**: Interfaz se actualiza con nuevos mensajes

##  Casos de Uso

### Para Investigadores
- Consulta de datos sísmicos específicos
- Análisis de tendencias por región
- Información sobre modelos de predicción

### Para Público General
- Información sobre sismos recientes
- Estadísticas de actividad sísmica
- Datos de seguridad y prevención

### Para Desarrolladores
- Integración con APIs sísmicas
- Información sobre servicios disponibles
- Documentación técnica del sistema

##  Futuras Mejoras

### Funcionalidades Planificadas
- **Integración con APIs Reales**: Conexión directa a servicios sísmicos
- **Predicciones en Tiempo Real**: Análisis automático de datos
- **Alertas Push**: Notificaciones de sismos importantes
- **Análisis de Sentimientos**: Detección de preocupación en consultas
- **Multilingüe**: Soporte para múltiples idiomas

### Mejoras Técnicas
- **Machine Learning**: Modelos de respuesta más inteligentes
- **Cache Inteligente**: Optimización de respuestas frecuentes
- **Análisis de Patrones**: Detección de consultas similares
- **Integración con Dashboard**: Sincronización con datos en tiempo real

##  Soporte y Contacto

Para reportar problemas o sugerir mejoras:
- **Issues**: Crear issue en el repositorio
- **Documentación**: Consultar este README
- **Desarrollo**: Contactar al equipo de desarrollo

##  Licencia

Este proyecto está bajo la licencia MIT. Ver archivo LICENSE para más detalles.

---

**J.A.R.V.I.S.** - *Just A Rather Very Intelligent System* para Predicción Sísmica
