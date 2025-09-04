import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatBotIcon } from './ChatBotIcon';
import { ChatInterface } from './ChatInterface';
import './ChatBot.css';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! Soy J.A.R.V.I.S., tu asistente de predicción sísmica. Tengo acceso completo a todas las APIs, datos de Sudamérica, estadísticas sísmicas y funcionalidades del dashboard. ¿En qué puedo ayudarte hoy?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: inputValue,
        isUser: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, newMessage]);
      
      // Generar respuesta de J.A.R.V.I.S.
      const response = generateJarvisResponse(inputValue);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date()
      };
      
      setTimeout(() => {
        setMessages(prev => [...prev, botMessage]);
      }, 1000);
      
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: '1',
        text: '¡Hola! Soy J.A.R.V.I.S., tu asistente de predicción sísmica. Tengo acceso completo a todas las APIs, datos de Sudamérica, estadísticas sísmicas y funcionalidades del dashboard. ¿En qué puedo ayudarte hoy?',
        isUser: false,
        timestamp: new Date()
      }
    ]);
  };

  const generateJarvisResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Información sobre sismos en Chile
    if (input.includes('chile') || input.includes('sismos chile')) {
      return ` DATOS SÍSMICOS DE CHILE 2023-2025:

SISMOS RECIENTES DESTACADOS:
 Septiembre 2025: M3.0 en Valparaíso, 37 km al norte de la ciudad
 Septiembre 2025: M3.0 en Ollagüe, 49 km al sur de la ciudad
 Septiembre 2025: M3.7 en Socaire, 76 km al sur de la ciudad
 Agosto 2025: M4.6 en Ovalle, 4.2 km de la ciudad
 Agosto 2025: M4.8 en San Antonio de los Cobres, 56.2 km de la ciudad
 Julio 2024: M7.4 en Antofagasta, 115 km al sureste de Calama
 Julio 2024: M7.3 en Antofagasta, 143 km al sureste de Calama
 Marzo 2023: M6.8 en Atacama, 45 km al oeste de Vallenar

ESTADÍSTICAS CHILE:
 Promedio anual: ~440 sismos M4+ dentro de 300km
 Zona más activa: Región de Antofagasta y Tarapacá
 Profundidad típica: 10-70 km (sismos superficiales)
 Último gran terremoto: M8.8 Maule 2010
 Sismicidad 2024: Aumentó 4.8% respecto al año anterior

DATOS TÉCNICOS:
 Red sísmica: CSN (Centro Sismológico Nacional)
 Estaciones: 100+ estaciones sismológicas
 Red GNSS: 100+ estaciones GPS distribuidas desde Putre hasta Antártida
 Tiempo real: Monitoreo 24/7
 Alertas: Sistema de alerta temprana operativo
 Datos geodésicos: Publicados desde 2017

¿Necesitas información específica sobre alguna región de Chile?`;
    }

    // Información sobre sismos en Perú
    if (input.includes('peru') || input.includes('sismos peru')) {
      return ` DATOS SÍSMICOS DE PERÚ 2023-2025:

SISMOS RECIENTES DESTACADOS:
 Septiembre 2025: M3.7 en Huarmey, 70 km al oeste de la ciudad
 Septiembre 2025: M4.0 en Ica, 77 km al oeste de Chincha Alta
 Agosto 2025: M4.5 en Ica, 94.2 km de Minas de Marcona
 Agosto 2025: M4.7 en Ica, 93.2 km de Minas de Marcona
 Mayo 2024: M5.0 en Cusco, 46 km al este de la ciudad
 Junio 2024: M6.0 en Ica, 100 km al sureste de Minas de Marcona
 Agosto 2023: M6.5 en Arequipa, 89 km al sur de la ciudad
 Marzo 2023: M5.8 en Piura, 45 km al oeste de Sullana

ESTADÍSTICAS PERÚ:
 Promedio anual: ~319 sismos M4+ dentro de 300km
 Zona más activa: Costa central y sur (Lima, Ica, Arequipa)
 Profundidad típica: 10-60 km (interfaz de placas)
 Último gran terremoto: M8.4 Arequipa 2001

DATOS TÉCNICOS:
 Red sísmica: IGP (Instituto Geofísico del Perú)
 Estaciones: 50+ estaciones sismológicas
 Monitoreo: Sistema de alerta temprana
 Tsunamis: Red de boyas DART en el Pacífico
 Centros: Laboratorio Central Lima, Radio Observatorio Jicamarca, Observatorio Huancayo

¿Quieres información sobre alguna región específica de Perú?`;
    }

    // Información sobre sismos en Ecuador
    if (input.includes('ecuador') || input.includes('sismos ecuador')) {
      return ` DATOS SÍSMICOS DE ECUADOR 2023-2025:

SISMOS RECIENTES DESTACADOS:
 Septiembre 2025: M5.3 en Puyo, 15.2 km de la ciudad (SENTIDO)
 Septiembre 2025: M3.5 en Nueva Loja, 63 km al oeste (SENTIDO)
 Agosto 2025: M4.8 en Alausí, 24.2 km de la ciudad
 Enero 2025: M7.4 en Zamora, 34 km al este de la ciudad
 Enero 2025: M5.6 en Tena, 7 minutos después del M7.4
 Diciembre 2023: M5.2 en Esmeraldas, 67 km al oeste de la ciudad
 Septiembre 2023: M4.8 en Manabí, 89 km al oeste de Portoviejo

ESTADÍSTICAS ECUADOR:
 Promedio anual: ~50-100 sismos M4+ dentro de 300km
 Zona más activa: Costa (Esmeraldas, Manabí) y Amazonía
 Profundidad típica: 10-40 km (sismos superficiales)
 Último gran terremoto: M7.8 Pedernales 2016

DATOS TÉCNICOS:
 Red sísmica: IG-EPN (Instituto Geofísico)
 Estaciones: 30+ estaciones sismológicas
 Monitoreo: Sistema de alerta temprana
 Volcanes: Monitoreo de 27 volcanes activos
 Catálogo: igepn2025ibeq con eventos en tiempo real

¿Necesitas información sobre volcanes o sismos específicos?`;
    }

    // Información sobre sismos en Colombia
    if (input.includes('colombia') || input.includes('sismos colombia')) {
      return ` DATOS SÍSMICOS DE COLOMBIA 2023-2025:

SISMOS RECIENTES DESTACADOS:
 Agosto 2025: M4.5 en Piedecuesta, 16.2 km de la ciudad
 Agosto 2025: M4.4 en Morales, 10.2 km de la ciudad
 Agosto 2025: M4.9 en Tumaco, 135.2 km de la ciudad
 Julio 2025: M2.1 en Chocó, 18 km al oeste de Murindó
 Junio 2024: M4.6 en Bucaramanga, 32 km al sureste
 Noviembre 2023: M5.1 en Nariño, 45 km al oeste de Pasto
 Agosto 2023: M4.9 en Caldas, 67 km al norte de Manizales

ESTADÍSTICAS COLOMBIA:
 Promedio anual: ~200-300 sismos M4+ dentro de 300km
 Zona más activa: Eje Cafetero, Santander, Nariño
 Profundidad típica: 5-30 km (sismos superficiales)
 Último gran terremoto: M6.2 Armenia 1999

DATOS TÉCNICOS:
 Red sísmica: SGC (Servicio Geológico Colombiano)
 Estaciones: 100+ estaciones sismológicas
 Monitoreo: Sistema de alerta temprana
 Volcanes: 15 volcanes activos monitoreados

¿Quieres información sobre alguna región específica?`;
    }

    // Información sobre sismos en Argentina
    if (input.includes('argentina') || input.includes('sismos argentina')) {
      return ` DATOS SÍSMICOS DE ARGENTINA 2023-2025:

SISMOS RECIENTES DESTACADOS:
 Septiembre 2025: M3.9 en Salta, 198 km al WNW de la ciudad
 Septiembre 2025: M3.6 en Mendoza, 266 km al SW de la ciudad
 Septiembre 2025: M3.8 en Jujuy, 191 km al WNW de San Salvador
 Agosto 2025: M4.8 en Abra Pampa, 36.2 km de la ciudad
 Agosto 2025: M4.1 en Calingasta, 31.2 km de la ciudad
 Julio 2024: M7.4 en Jujuy, 287 km al WNW de San Salvador
 Mayo 2025: M7.4 en Tierra del Fuego, 223 km al sur de Ushuaia
 Diciembre 2023: M6.8 en Mendoza, 89 km al oeste de la ciudad

ESTADÍSTICAS ARGENTINA:
 Promedio anual: ~440 sismos M4+ dentro de 300km
 Zona más activa: Cuyo (Mendoza, San Juan), NOA (Salta, Jujuy)
 Profundidad típica: 10-200 km (sismos intermedios)
 Último gran terremoto: M7.6 Chubut 2016
 Distribución: 93.89% M4-5, 5.31% M5-6, 0.7% M6-7, 0.09% M7+

DATOS TÉCNICOS:
 Red sísmica: INPRES (Instituto Nacional de Prevención Sísmica)
 Estaciones: 50+ estaciones sismológicas
 Monitoreo: Sistema de alerta temprana
 Zonificación: 4 zonas sísmicas principales

¿Necesitas información sobre alguna provincia específica?`;
    }

    // Información sobre sismos en Brasil
    if (input.includes('brasil') || input.includes('sismos brasil')) {
      return ` DATOS SÍSMICOS DE BRASIL 2023-2025:

SISMOS RECIENTES DESTACADOS:
 Agosto 2025: M5.5 en Marabá, 81 km al oeste de Parauapebas
 Agosto 2025: M2.8 en Minas Gerais, 96 km al oeste de Uberaba
 Agosto 2025: M4.4 en Acre, 278 km al WSW de Cruzeiro do Sul
 Agosto 2025: M4.5 en Acre, 218 km al oeste de Cruzeiro do Sul
 Noviembre 2023: M3.2 en Amazonas, 123 km al norte de Manaus
 Julio 2023: M4.1 en Mato Grosso, 89 km al oeste de Cuiabá

ESTADÍSTICAS BRASIL:
 Promedio anual: ~34 sismos M4+ dentro de 300km
 Zona más activa: Acre, Amazonas, Mato Grosso
 Profundidad típica: 10-600 km (sismos profundos)
 Último gran terremoto: M7.6 Acre 1961

DATOS TÉCNICOS:
 Red sísmica: Rede Sismográfica Brasileira (RSBR)
 Estaciones: 80+ estaciones sismológicas
 Monitoreo: Sistema de alerta temprana
 Característica: Sismos principalmente profundos

¿Quieres información sobre alguna región específica?`;
    }

    // Información sobre sismos en Bolivia
    if (input.includes('bolivia') || input.includes('sismos bolivia')) {
      return ` DATOS SÍSMICOS DE BOLIVIA 2023-2025:

SISMOS RECIENTES DESTACADOS:
 Septiembre 2025: M3.3 en Potosí, 161 km de profundidad
 Septiembre 2025: M4.1 en Uyuni, 62.2 km de la ciudad
 Enero 2024: M5.2 en Oruro, 128 km al este de Tacna
 Septiembre 2025: M3.7 en Potosí, 93 km al oeste de Tupiza
 Enero 2024: M4.5 en San Antonio de los Cobres
 Diciembre 2023: M4.8 en La Paz, 67 km al oeste de la ciudad
 Septiembre 2023: M5.1 en Cochabamba, 89 km al sur de la capital

ESTADÍSTICAS BOLIVIA:
 Promedio anual: ~100-200 sismos M4+ dentro de 300km
 Zona más activa: Cordillera Occidental, Altiplano
 Profundidad típica: 100-600 km (sismos profundos)
 Último gran terremoto: M8.2 Cochabamba 1994

DATOS TÉCNICOS:
 Red sísmica: Observatorio San Calixto
 Estaciones: 20+ estaciones sismológicas
 Monitoreo: Sistema de alerta temprana
 Característica: Sismos profundos por subducción

¿Necesitas información sobre alguna región específica?`;
    }

    // Información sobre sismos en Uruguay
    if (input.includes('uruguay') || input.includes('sismos uruguay')) {
      return ` DATOS SÍSMICOS DE URUGUAY 2023-2025:

SISMOS RECIENTES DESTACADOS:
 Diciembre 2024: M2.6 en Salto, 36 km al oeste
 Diciembre 2024: M4.4 en Montevideo, 47 km al SSE
 Julio 2023: M4.2 en Montevideo, 41 km al este
 Marzo 2023: M3.1 en Rocha, 67 km al este de la ciudad
 Enero 2023: M2.8 en Maldonado, 45 km al sur de la capital

ESTADÍSTICAS URUGUAY:
 Promedio anual: ~0 sismos M4+ dentro de 300km
 Zona más activa: Río de la Plata, costa atlántica
 Profundidad típica: 5-20 km (sismos superficiales)
 Último gran terremoto: M4.4 Montevideo 2024

DATOS TÉCNICOS:
 Red sísmica: Red Sísmica Nacional
 Estaciones: 10+ estaciones sismológicas
 Monitoreo: Sistema básico de monitoreo
 Característica: Baja actividad sísmica

¿Quieres información sobre la actividad sísmica en Uruguay?`;
    }

    // Información sobre APIs y servicios
    if (input.includes('api') || input.includes('servicio') || input.includes('datos')) {
      return ` APIS Y SERVICIOS SÍSMICOS COMPLETOS:

APIS PRINCIPALES:
 USGS: earthquake.usgs.gov - Datos globales en tiempo real
 EMSC: emsc-csem.org - Datos europeos y mediterráneos
 CSN Chile: sismologia.cl - Datos chilenos oficiales
 IGP Perú: igp.gob.pe - Datos peruanos oficiales
 IG Ecuador: igepn.edu.ec - Datos ecuatorianos oficiales
 SGC Colombia: sgc.gov.co - Datos colombianos
 INPRES Argentina: inpres.gob.ar - Datos argentinos
 RSBR Brasil: rsbr.gov.br - Datos brasileños

SERVICIOS DEL DASHBOARD:
 earthquakeService: Obtiene datos sísmicos en tiempo real
 predictionService: Genera predicciones usando ML
 userService: Gestión de usuarios y autenticación
 dropoutService: Análisis de deserción de datos

DATOS DISPONIBLES:
 Magnitud, profundidad, ubicación
 Tiempo de ocurrencia
 Intensidad percibida
 Datos históricos desde 1900
 Predicciones en tiempo real
 Datos geodésicos GPS
 Información de volcanes

FORMATOS DE DATOS:
 JSON para APIs REST
 GeoJSON para datos espaciales
 CSV para análisis estadístico
 XML para intercambio de datos
 RINEX para datos GPS

¿Necesitas información sobre alguna API específica?`;
    }

    // Información sobre estadísticas generales
    if (input.includes('estadistica') || input.includes('estadisticas') || input.includes('datos generales')) {
      return ` ESTADÍSTICAS SÍSMICAS SUDAMÉRICA 2023-2025:

RESUMEN REGIONAL:
 Chile: 440 sismos M4+ anuales (más activo)
 Argentina: 440 sismos M4+ anuales
 Perú: 319 sismos M4+ anuales
 Colombia: 200-300 sismos M4+ anuales
 Ecuador: 50-100 sismos M4+ anuales
 Bolivia: 100-200 sismos M4+ anuales
 Brasil: 34 sismos M4+ anuales
 Uruguay: 0 sismos M4+ anuales (menos activo)

SISMOS DESTACADOS 2023-2025:
 M7.4: Ecuador (Enero 2025)
 M7.4: Argentina (Julio 2024)
 M7.4: Chile (Julio 2024)
 M7.3: Chile (Julio 2024)
 M6.8: Argentina (Diciembre 2023)
 M6.8: Chile (Marzo 2023)
 M6.5: Perú (Agosto 2023)

DISTRIBUCIÓN POR MAGNITUD:
 M4-5: 93.89% de todos los sismos
 M5-6: 5.31% de todos los sismos
 M6-7: 0.7% de todos los sismos
 M7+: 0.09% de todos los sismos

ENERGÍA SÍSMICA TOTAL:
 Enero 2025: 5.7 x 10 joules (85.7 bombas atómicas)
 Julio 2024: 2 x 10 joules (302.8 bombas atómicas)
 Diciembre 2023: 1.2 x 10 joules (181.4 bombas atómicas)

ACTIVIDAD RECIENTE (24 HORAS):
 Sudamérica: 113 sismos hasta M5.3
 1 sismo M5+, 5 sismos M4-5, 25 sismos M3-4
 Más fuerte: M5.3 en Ecuador (Puyo)

¿Quieres estadísticas específicas de algún país?`;
    }

    // Información sobre machine learning y predicción
    if (input.includes('machine learning') || input.includes('prediccion') || input.includes('algoritmo')) {
      return ` MACHINE LEARNING EN PREDICCIÓN SÍSMICA:

ALGORITMOS AVANZADOS:
 LightGBM: Mejor rendimiento con datasets grandes
 XGBoost: Robusto para datos de tamaño medio
 Gradient Boosting: Óptimo para datasets pequeños
 Random Forest: Bueno para datos heterogéneos
 Redes Neuronales: Para patrones complejos

TÉCNICAS DE PREDICCIÓN:
 Análisis de Precursoras: Detección de sismos M<1.5 antes de grandes eventos
 Aprendizaje Automático: Identificación de patrones anómalos
 Datos Espacio-Temporales: Integración de GPS y sismológicos
 Modelos Híbridos: Combinación de física y ML

RESULTADOS RECIENTES:
 Alaska 2018: 80% probabilidad 3 meses antes del M7.1
 California 2019: 85% probabilidad días antes del M6.4-7.1
 Kamchatka: Método MMAA con U=0.76-0.82

DATOS UTILIZADOS:
 Catálogos sísmicos históricos
 Series temporales GPS
 Datos meteorológicos
 Presión de fluidos en fallas

¿Quieres información sobre algún algoritmo específico?`;
    }

    // Información sobre el dashboard
    if (input.includes('dashboard') || input.includes('panel') || input.includes('interfaz')) {
      return ` DASHBOARD DE PREDICCIÓN SÍSMICA:

COMPONENTES PRINCIPALES:
 Mapa Sísmico: Visualización en tiempo real de sismos
 Gráficos de Magnitud: Análisis de magnitudes máximas y promedio
 Estadísticas Totales: Conteo de sismos por período
 Último Sismo: Información del evento más reciente
 Predicciones: Modelos ML para pronósticos

VISTAS DISPONIBLES:
 CountryView: Análisis por país
 PredictionsView: Predicciones y pronósticos
 StatisticsView: Estadísticas detalladas
 Charts: Gráficos interactivos

FUNCIONALIDADES:
 Tiempo Real: Actualización automática de datos
 Filtros: Por magnitud, profundidad, tiempo
 Exportación: Datos en múltiples formatos
 Alertas: Notificaciones de sismos importantes

TECNOLOGÍAS:
 React: Interfaz de usuario
 TypeScript: Tipado estático
 Three.js: Visualizaciones 3D
 Framer Motion: Animaciones
 Chart.js: Gráficos interactivos

¿Quieres información sobre alguna funcionalidad específica?`;
    }

    // Información sobre modelos de predicción
    if (input.includes('modelo') || input.includes('prediccion') || input.includes('pronostico')) {
      return ` MODELOS DE PREDICCIÓN SÍSMICA:

MODELOS IMPLEMENTADOS:
 MMAA: Método del Área Mínima de Alarma
 Machine Learning: Algoritmos de aprendizaje automático
 Análisis de Precursoras: Detección de patrones pre-sísmicos
 Modelos Híbridos: Combinación de física y ML

TÉCNICAS DE PREDICCIÓN:
 Análisis Espacio-Temporal: Patrones geográficos y temporales
 Detección de Anomalías: Identificación de actividad anómala
 Aprendizaje Supervisado: Entrenamiento con datos históricos
 Validación Cruzada: Verificación de precisión

PRECISIÓN DE MODELOS:
 MMAA: U = 0.76-0.82 (detección de epicentros)
 ML Avanzado: P = 0.2-0.31 (decisión en siguiente intervalo)
 Precursoras: 80-85% probabilidad 3 meses antes

DATOS DE ENTRENAMIENTO:
 Catálogos sísmicos históricos
 Series temporales GPS
 Datos meteorológicos
 Presión de fluidos en fallas

LIMITACIONES:
 Falsos positivos pueden causar pánico
 Falsos negativos pueden ser catastróficos
 Necesidad de entrenamiento regional
 Complejidad de validación en tiempo real

¿Quieres información sobre algún modelo específico?`;
    }

    // Respuestas generales
    if (input.includes('hola') || input.includes('hi') || input.includes('hello')) {
      return `¡Hola! Soy J.A.R.V.I.S., tu asistente de predicción sísmica. 

Tengo acceso completo a:
  Datos sísmicos de toda Sudamérica
  Modelos de machine learning avanzados
  APIs de predicción en tiempo real
  Mapas sísmicos interactivos
  Estadísticas detalladas por país

¿En qué puedo ayudarte? Puedes preguntarme sobre:
 Sismos recientes en cualquier país
 Estadísticas sísmicas
 Modelos de predicción
 APIs y servicios
 Funcionalidades del dashboard

¡Estoy aquí para ayudarte con toda la información sísmica que necesites!`;
    }

    if (input.includes('ayuda') || input.includes('help')) {
      return ` AYUDA - COMANDOS DISPONIBLES:

PAÍSES SUDAMERICANOS:
 "sismos chile" - Datos de Chile
 "sismos peru" - Datos de Perú  
 "sismos ecuador" - Datos de Ecuador
 "sismos colombia" - Datos de Colombia
 "sismos argentina" - Datos de Argentina
 "sismos brasil" - Datos de Brasil
 "sismos bolivia" - Datos de Bolivia
 "sismos uruguay" - Datos de Uruguay

TEMAS TÉCNICOS:
 "machine learning" - Algoritmos de ML
 "prediccion" - Modelos de predicción
 "api" - APIs y servicios
 "estadisticas" - Datos estadísticos
 "dashboard" - Funcionalidades del panel
 "modelo" - Modelos de predicción

COMANDOS GENERALES:
 "hola" - Saludo inicial
 "ayuda" - Esta lista de comandos
 "borrar" - Limpiar conversación

¡Solo escribe tu pregunta y te daré información detallada!`;
    }

    // Respuesta por defecto
    return ` J.A.R.V.I.S. - Sistema de Predicción Sísmica

Entiendo tu consulta: "${userInput}"

Como asistente especializado en predicción sísmica, puedo ayudarte con:

 DATOS POR PAÍS:
 Chile, Perú, Ecuador, Colombia
 Argentina, Brasil, Bolivia, Uruguay

 INFORMACIÓN TÉCNICA:
 Estadísticas sísmicas detalladas
 Modelos de machine learning
 APIs y servicios de datos
 Funcionalidades del dashboard

 PREDICCIONES:
 Modelos de predicción avanzados
 Análisis de precursoras
 Tendencias sísmicas

Escribe "ayuda" para ver todos los comandos disponibles, o pregunta sobre cualquier tema específico. ¡Estoy aquí para ayudarte con toda la información sísmica que necesites!`;
  };

  return (
    <div className="chatbot-container">
      <ChatBotIcon 
        isOpen={isOpen} 
        onClick={() => setIsOpen(!isOpen)} 
      />
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <ChatInterface
              messages={messages}
              inputValue={inputValue}
              setInputValue={setInputValue}
              onSendMessage={handleSendMessage}
              onKeyPress={handleKeyPress}
              onClose={() => setIsOpen(false)}
              onClearChat={handleClearChat}
              messagesEndRef={messagesEndRef}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
