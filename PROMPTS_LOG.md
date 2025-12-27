# REGISTRO DE PROMPTS UTILIZADOS
Esta sección documenta las interacciones clave con la Inteligencia Artificial durante el desarrollo del Dashboard Inmobiliario.
Cada prompt fue diseñado de forma consciente, con contexto claro, restricciones explícitas y un enfoque iterativo, permitiendo construir la aplicación sin edición manual de código.

## Intento 1 — Inicialización del Proyecto
**Objetivo:** Inicializar el proyecto base utilizando React Router v7, respetando el stack solicitado y limitando la intervención manual al uso de comandos de terminal.

**Prompt utilizado:**
> Guíame paso a paso usando únicamente comandos de terminal para inicializar un proyecto con React Router v7. No generes código de componentes ni lógica de negocio. Concéntrate únicamente en el setup y la estructura inicial del proyecto.

**Resultado:** Proyecto creado correctamente mediante `npm create react-router@latest`, con estructura base funcional y entorno de desarrollo operativo.

## Intento 2 — Definición de Arquitectura y Rutas
**Objetivo:** Definir una arquitectura clara de rutas y layouts antes de comenzar con la generación de componentes visuales.

**Prompt utilizado:**
> Diseña una arquitectura de rutas limpia y mantenible usando React Router v7. Incluye un layout público para autenticación y un layout protegido para el dashboard con rutas anidadas. Explica primero la estructura conceptual antes de generar cualquier código.

**Resultado:** Se definió una jerarquía de rutas clara, separando correctamente autenticación y dashboard, alineada con el enfoque de file-based routing.

## Intento 3 — Layout del Dashboard y Sidebar
**Objetivo:** Generar el layout principal del dashboard con un sidebar persistente y navegación funcional.

**Prompt utilizado:**
> Genera el layout principal del dashboard usando React Router v7, Tailwind CSS y shadcn/ui. El layout debe incluir un sidebar colapsable y un área de contenido para rutas anidadas. Aplica los cambios directamente sobre el archivo de layout existente. No me pidas copiar o pegar código manualmente.

**Resultado:** Layout del dashboard implementado correctamente, con sidebar funcional y navegación clara sin afectar el sistema de rutas.

## Intento 4 — Corrección de Errores y Ajustes Estructurales
**Objetivo:** Corregir errores de importación, referencias de rutas faltantes y problemas de compilación detectados durante el proceso.

**Prompt utilizado:**
> El proyecto presenta errores de importación y referencias de rutas faltantes durante el build. Analiza la configuración actual de rutas y componentes, y corrige únicamente lo necesario para que el proyecto pase correctamente npm run build y npm run typecheck. No introduzcas nuevas funcionalidades.

**Resultado:** Errores corregidos exitosamente, logrando una compilación limpia y validación completa de TypeScript.

## Intento 5 — Tarjetas KPI del Dashboard
**Objetivo:** Agregar indicadores visuales clave (KPIs) en la vista principal del dashboard.

**Prompt utilizado:**
> Ubica el archivo de la ruta principal del dashboard y mejóralo agregando una grilla responsiva de tarjetas KPI en la parte superior. Utiliza componentes Card de shadcn/ui y utilidades de Tailwind CSS. Incluye métricas para Ventas Totales, Unidades Disponibles y Visitas Web. Mantén intacto el layout y código existente.

**Resultado:** Se integraron tres tarjetas KPI visualmente claras, alineadas correctamente y sin afectar la estructura existente.

## Intento 6 — Tabla de Proyectos Inmobiliarios
**Objetivo:** Completar el reto visual agregando una tabla central con proyectos inmobiliarios ficticios.

**Prompt utilizado:**
> Modifica el archivo existente de la vista principal del dashboard para agregar una tabla de datos debajo de las tarjetas KPI. Usa componentes Table y Badge de shadcn/ui junto con Tailwind CSS. Muestra cinco proyectos inmobiliarios ficticios con nombre, ubicación, estado y precio. No elimines ni reescribas el código de los KPIs existentes.

**Resultado:** Tabla de proyectos renderizada correctamente debajo de los KPIs, cumpliendo con los requisitos visuales del challenge.

## Intento Final — Validación y Cierre
**Objetivo:** Verificar que el resultado final cumple todas las reglas del challenge antes de la entrega.

**Prompt utilizado:**
> Revisa la implementación actual del dashboard y valida que cumpla con todos los requisitos del challenge. No agregues nuevas funcionalidades. Enfócate únicamente en estabilidad, estructura y consistencia visual.

**Resultado:** Dashboard completo, estable y funcional, generado íntegramente mediante orquestación con IA y validado mediante build y typecheck.
