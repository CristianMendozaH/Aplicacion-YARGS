# Proyecto de Tablas de Multiplicar

Este proyecto es una aplicación en Node.js que permite generar tablas de multiplicar, visualizarlas en la consola y generar archivos PDF de las tablas. La aplicación se puede controlar desde la línea de comandos utilizando varias opciones.

## Opciones del comando

A continuación, se describen las opciones disponibles para usar con el comando `node app16`:

- `--base=<número>`: Define la base de la tabla de multiplicar que deseas generar.
  - **Ejemplo**: `node app16 --base=5`

- `--limite=<número>` o `-l`: Especifica hasta qué número se generará la tabla de multiplicar.
  - **Ejemplo**: `node app16 --base=5 --limite=12`

- `--hasta=<número>` o `-h`: Indica hasta qué tabla deseas que llegue la aplicación.
  - **Ejemplo**: `node app16 --base=5 --hasta=10`

- `--ayuda` o `--help`: Muestra información sobre las opciones disponibles y cómo usar la aplicación.
  - **Ejemplo**: `node app16 --help`

## Generar archivos PDF

La aplicación permite generar archivos PDF de las tablas de multiplicar y guardarlos en la carpeta `salida`.

- **Ejemplo**: `node app16 --base=7 --limite=12 --hasta=10` generará las tablas de multiplicar desde la base 7 hasta el 10 y las guardará en formato PDF.

## Ignorar archivos

El proyecto incluye un archivo `.gitignore` que excluye los archivos `.txt` y la carpeta `node_modules` del repositorio.

---

Este proyecto fue desarrollado con fines educativos y está disponible en [GitHub](https://github.com/CristianMendozaH/Aplicacion-YARGS.git).
