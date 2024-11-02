# Portal de Servicios Postventa y Soporte al Cliente

## Descripción del Proyecto

El Portal de Servicios Postventa y Soporte al Cliente es una aplicación diseñada para facilitar la interacción entre clientes y empresas. Permite a los clientes registrar solicitudes de soporte, garantías o devoluciones, mientras que las empresas pueden responder y realizar un seguimiento de cada caso. Esta herramienta tiene como objetivo mejorar la gestión del servicio postventa y ofrecer un soporte al cliente eficiente y efectivo.

## Funcionalidades

- Registro de solicitudes de soporte, garantías y devoluciones por parte de los clientes.
- Gestión de solicitudes por parte de las empresas.
- Notificaciones para clientes sobre el estado de sus solicitudes.
- Historial de interacciones entre clientes y empresas.
- Interfaz de usuario intuitiva y fácil de usar.

## Pautas de Trabajo con Git

Para colaborar eficazmente en este proyecto, sigue las siguientes pautas al trabajar con ramas en Git:

1. **Sincronización con la rama principal:**
   - Clonar el repositorio 
       ```bash
     git clone https://github.com/ErickCor24/DAWProyect.git
     ```
   - Antes de crear una nueva rama, asegúrate de que tu repositorio local esté actualizado con la última versión de la rama principal (main). Para hacerlo, ejecuta:
     ```bash
     git checkout main
     git pull origin main
     ```

2. **Creación de una nueva rama:**
   - Crea una nueva rama para tu funcionalidad bajo la siguiente nomenclatura: `feature/*nombre-de-la-rama*`. Por ejemplo, si estás trabajando en la funcionalidad de registro de solicitudes, nombra tu rama como `feature/registro-solicitudes`.
     ```bash
     git checkout -b feature/nombre-de-la-rama
     ```

3. **Realiza tus cambios:**
   - Trabaja en tu rama y realiza los cambios necesarios en el código.

4. **Realiza commits:**
   - Al finalizar tu trabajo, asegúrate de hacer un commit de tus cambios. Usa mensajes claros y descriptivos para tus commits:
     ```bash
     git add .
     git commit -m "Descripción clara de los cambios realizados"
     ```

5. **Sube tus cambios:**
   - Cuando estés listo para compartir tus cambios, haz un push de tu rama al repositorio remoto:
     ```bash
     git push origin feature/nombre-de-la-rama
     ```

6. **Crea un Pull Request (PR):**
   - Una vez que hayas subido tu rama, dirígete a GitHub y crea un Pull Request desde tu rama hacia la rama principal (main). Asegúrate de describir claramente los cambios realizados en el PR para facilitar la revisión por parte del equipo.