# F1 Pulse

F1 Pulse es una plataforma web de información y seguimiento de la Fórmula 1, desarrollada como proyecto final del ciclo formativo de grado superior de Desarrollo de Aplicaciones Web (DAW).

## Descripción

El objetivo de la aplicación es centralizar en una única web información relevante sobre el campeonato de Fórmula 1, ofreciendo una experiencia visual, clara y atractiva para el usuario.

La plataforma permite consultar datos sobre pilotos, escuderías, calendario de carreras, circuitos y clasificaciones, además de incluir contenidos complementarios como análisis de temporada y recursos visuales.

## Funcionalidades principales

- Página principal con resumen visual de la temporada
- Consulta de información sobre pilotos
- Vista detalle de equipos mediante sistema de plantillas
- Clasificación de pilotos y constructores
- Calendario completo de Grandes Premios
- Vista detalle de circuitos mediante sistema de plantillas
- Información técnica de circuitos
- Imagen sectorizada de cada circuito
- Geolocalización de circuitos mediante Google Maps
- Consulta de climatología asociada a eventos mediante OpenF1
- Enlaces a compra de tickets oficiales de Fórmula 1
- Cuenta atrás para el próximo Gran Premio
- Análisis estimado de la temporada
- Generador de fondos de pantalla personalizados
- Integración de datos externos mediante APIs
- Sistema de rutas URL dinámico
- Uso de datos locales como respaldo ante limitaciones de la API

## Tecnologías utilizadas

- HTML5
- Tailwind CSS
- JavaScript
- PHP 8.4.12
- Apache HTTP Server 2.4.65
- Composer
- PHP Dotenv
- OpenF1 API
- Google Maps Embed API
- Font Awesome
- Git y GitHub

## APIs y servicios externos utilizados

- OpenF1 API: obtención de datos de Fórmula 1 como pilotos, sesiones, calendario, clasificaciones y climatología.
- Google Maps Embed API: visualización geográfica de los circuitos.
- Formula 1 Tickets: redirección externa para consulta y compra de entradas oficiales.

## Arquitectura

El proyecto sigue una arquitectura inspirada en el patrón MVC (Modelo-Vista-Controlador), adaptada a una aplicación web ligera basada en HTML5, PHP, JavaScript, consumo de APIs externas y estructuras de datos locales.

- Vista: páginas PHP, plantillas HTML, estilos con Tailwind CSS y renderizado dinámico con JavaScript.
- Controlador: sistema de rutas en PHP, carga de páginas desde `index.php` y lógica modularizada mediante archivos JavaScript por páginas, vistas, servicios y utilidades.
- Modelo: datos procedentes de APIs externas, estructuras locales de apoyo, ficheros de configuración y datos de respaldo o fallback.

## Requisitos previos

Para ejecutar el proyecto en entorno local es necesario disponer de:

- PHP 8 o superior
- Apache HTTP Server o XAMPP
- Composer
- Navegador web actualizado
- Conexión a internet para el consumo de APIs externas

## Instalación de dependencias (Importante)

1. Acceder al directorio del proyecto:

```bash
cd f1-pulse
```

2. Comprobar que Composer está instalado en el equipo o descargarlo desde https://getcomposer.org/download/:

```bash
composer -v
```

3. Instalar dependencias del proyecto con Composer:

```bash
composer install
```

## Variables de entorno (.env)

El proyecto utiliza variables de entorno para la configuración:

Ejemplo de archivo `.env`:

```bash
APP_NAME=F1-Pulse
APP_ENV=local
OPENF1_BASE_URL=https://api.openf1.org/v1
GOOGLE_MAPS_API_KEY=tu_api_key
```

## Configuración del entorno (Importante)

Para que el sistema de rutas funcione correctamente (URLs limpias como `/classification` en lugar de `index.php?page=classification`), es necesario que el servidor Apache tenga habilitado el módulo `mod_rewrite`.

Esto permite utilizar rutas como:

```bash
http://localhost/f1-pulse/classification
```
```bash
http://localhost/f1-pulse/calendar
```
```bash
http://localhost/f1-pulse/teams
```

### Pasos necesarios

1. Buscar el archivo `httpd.conf` de Apache. En una instalación con XAMPP suele encontrarse en:

`C:/xampp/apache/conf/httpd.conf`

En una instalación manual de Apache puede encontrarse en:

`C:/Apache24/conf/httpd.conf`

2. Activar el módulo rewrite en Apache, quitando el símbolo `#` del principio:

```bash
LoadModule rewrite_module modules/mod_rewrite.so
```

3. Permitir el uso de archivos `.htaccess` en la configuración del directorio:

```bash
<Directory "${SRVROOT}/htdocs">
    AllowOverride All
    Require all granted
</Directory>
```

4. Reiniciar el servidor Apache.

## Alternativa en caso de error

Si no es posible habilitar `mod_rewrite` y/o el uso de archivos `.htaccess`, la aplicación seguirá funcionando mediante rutas tradicionales:

```bash
http://localhost/f1-pulse/index.php?page=home
```
```bash
http://localhost/f1-pulse/index.php?page=classification
```
```bash
http://localhost/f1-pulse/index.php?page=calendar
```

## Consideraciones sobre OpenF1 API

El proyecto utiliza la API pública **OpenF1**, que presenta ciertas limitaciones:

- Restricciones de número de peticiones (rate limiting - error 429)
- Disponibilidad parcial de datos en tiempo real
- Inconsistencias en algunos endpoints

Para mitigar estos problemas, se han implementado:

- Reintentos automáticos en peticiones
- Pausas entre llamadas a la API
- Validación de datos incompletos antes de renderizar clasificaciones
- Enriquecimiento de datos mediante funciones auxiliares y fallback local

## Estado del proyecto

El proyecto se encuentra en una versión funcional finalizada para el alcance definido en el proyecto final.

Actualmente incluye:

- Página principal funcional
- Navegación entre secciones
- Integración con OpenF1
- Integración con Google Maps
- Vista de pilotos
- Vista de escuderías
- Vista detalle de escuderías
- Vista de calendario
- Vista detalle de circuitos
- Clasificaciones de pilotos y constructores
- Información meteorológica cuando está disponible
- Enlaces externos para compra de tickets
- Generador de fondos de pantalla
- Sistema de rutas dinámico
- Componentes reutilizables
- Arquitectura modular preparada para ampliación

## Posibles mejoras futuras

Aunque el proyecto se encuentra finalizado, se contemplan las siguientes mejoras futuras:

- Incorporar autenticación de usuarios
- Permitir guardar pilotos, escuderías o circuitos favoritos
- Añadir una base de datos propia para almacenar preferencias o datos históricos
- Mejorar el sistema de predicción con mayor profundidad estadística
- Incorporar más fuentes de datos complementarias
- Añadir comparativas avanzadas entre pilotos y escuderías
- Mejorar la gestión de caché para reducir llamadas a APIs externas

## Autor

Emilio Rafael Estévez González

## Licencia

Este proyecto se distribuye bajo la licencia Creative Commons BY-NC-SA 4.0.