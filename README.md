# F1 Pulse

F1 Pulse es una plataforma web de información y seguimiento de la Fórmula 1, desarrollada como proyecto final del ciclo formativo de grado superior de Desarrollo de Aplicaciones Web (DAW).

## Descripción

El objetivo de la aplicación es centralizar en una única web información relevante sobre el campeonato de Fórmula 1, ofreciendo una experiencia visual, clara y atractiva para el usuario.

La plataforma permite consultar datos sobre pilotos, escuderías, calendario de carreras, circuitos y clasificaciones, además de incluir contenidos complementarios como análisis de temporada y recursos visuales.

## Funcionalidades principales

- Consulta de información sobre pilotos y escuderías
- Clasificación de pilotos y constructores
- Calendario de Grandes Premios de la temporada
- Información técnica de circuitos
- Cuenta atrás para el próximo Gran Premio
- Análisis estimado de la temporada
- Integración de datos externos mediante API

## Tecnologías utilizadas

- HTML5
- Tailwind CSS
- JavaScript
- PHP
- Composer
- PHP Dotenv
- OpenF1 API
- Git y GitHub

## Arquitectura

El proyecto sigue una arquitectura basada en el patrón MVC (Modelo-Vista-Controlador), adaptada a una aplicación web ligera basada en el consumo de APIs externas.

- Vista: HTML + Tailwind CSS + render dinámico con JavaScript
- Controlador: lógica de aplicación en JavaScript (modularizada por vistas, servicios y utilidades)
- Modelo: APIs externas + estructuras de datos locales

## Instalación de dependencias (Importante)

1. Acceder al directorio del proyecto:

cd f1-pulse

2. Comprobar que Composer está instalado en el equipo o descargarlo desde https://getcomposer.org/download/:

composer -v

3. Instalar dependencias del proyecto con Composer:

composer install

## Variables de entorno (.env)

El proyecto utiliza variables de entorno para la configuración:

Ejemplo de archivo `.env`:
APP_NAME=F1-Pulse
APP_ENV=local
OPENF1_BASE_URL=https://api.openf1.org/v1
GOOGLE_MAPS_API_KEY=tu_api_key

## Configuración del entorno (Importante)

Para que el sistema de rutas funcione correctamente (URLs limpias como `/classification` en lugar de `index.php?page=classification`), es necesario que el servidor Apache tenga habilitado el módulo `mod_rewrite`.

### Pasos necesarios

1. Buscar en la carpeta `C:/Apache24/conf` el archivo `http.conf` y editarlo.

2. Activar el módulo rewrite en Apache, quitando el símbolo `#` del principio:

LoadModule rewrite_module modules/mod_rewrite.so

3. Permitir el uso de archivos `.htaccess` en la configuración del directorio:

<Directory "${SRVROOT}/htdocs">
    AllowOverride All
    Require all granted
</Directory>

4. Reiniciar el servidor Apache.

## Alternativa en caso de error

Si no es posible habilitar `mod_rewrite` y/o el uso de archivos `.htaccess`, la aplicación seguirá funcionando mediante rutas tradicionales:

http://localhost/f1-pulse/index.php?page=home

## Consideraciones sobre la API

El proyecto utiliza la API pública **OpenF1**, que presenta ciertas limitaciones:

- Restricciones de número de peticiones (rate limiting - error 429)
- Disponibilidad parcial de datos en tiempo real
- Inconsistencias en algunos endpoints

Para mitigar estos problemas, se han implementado:

- Reintentos automáticos en peticiones
- Pausas entre llamadas a la API
- Uso de datos locales como fallback

## Estado del proyecto

El proyecto se encuentra en desarrollo activo.

Actualmente incluye:

- Página principal funcional
- Sistema de rutas dinámico
- Integración con OpenF1
- Componentes reutilizables
- Arquitectura modular preparada para ampliación

## Autor

Emilio Rafael Estévez González

## Licencia

Este proyecto se distribuye bajo la licencia Creative Commons BY-NC-SA 4.0.