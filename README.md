<h1 align="center"> Challenge del Amigo Secreto Alura Latam G8 </h1>
Challenge del Amigo Secreto Sorteo

## Índice
- [1.Clonar/Copiar](#1-Clonar/Copiar)
- [2.Descripción del proyecto](#2-Descripción-del-proyecto)
- [3.Despligue](#3-Despligue)
- [4.Conclusiones/Aplicaciones](#4-Conclusiones/Aplicaciones)
----------------------------------
# 1.Clonar/Copiar
```ingresar al local gitbash
# Clonar repositorio
git clone [https://github.com/irvincarrasco/challenge-amigo-secreto-G8.git]
https://www.youtube.com/watch?v=eeFE3WvtoDY (para actualizar desde el repositorio)
```
# 2.Descrpción del proyecto
El Challenge o proyecto es parte de la formación de la ruta de aprendizaje del programa ONE (Oracle Next Education), que tiene como objetivo consolidar lo aprendido con respecto a la lógica de progración mediante Java Script a partir de una plantilla de archivos de html y css. Aplicando conocimientos como arrays, funciones, buenas prácticas de escritura de código, etc.

# 3.Despliegue

- Se detalla la lógica y funcionamiento del challenge

1. Ingresar al enlace adjunto: 
Link gitpages : "https://irvincarrasco.github.io/challenge-amigo-secreto-G8/"

![image](https://github.com/user-attachments/assets/f11d04ac-165f-4882-9a6d-4cff2de68c43)

2. Se digitan los nombres a sortear (mínimo 2, añadido con una función mdiante un condicional además no admitir valores vacíos) y añaden con el botón correspondiente (se aplica concenpto de listas traducido a un array que almacena lo nombres).
![image](https://github.com/user-attachments/assets/277aa598-07d7-4fc3-b430-8a41ae7f5844)

3. Después de añadir todos los nombres, podemos borrar alguno que se haya ingresado por error u otro motivo con el botón de "X" al costado de cada nombnre ( código en html para eliminar mediante un botón).
![image](https://github.com/user-attachments/assets/988667cd-bab9-4abf-a33e-3c8175b23d9d)

4. Luego accionamos el botón de sorteo y aparecerá el nombre del amigo ganador del sorteo.
![image](https://github.com/user-attachments/assets/c6a5ebd3-7029-4700-8caf-d113f6652c88)

# 4.Conclusiones/Aplicaciones

Este proyecto demuestra varios conceptos fundamentales de lógica de programación en JavaScript, aplicados en la creación de un sistema para el sorteo de un Amigo Secreto. A continuación, se presentan los aspectos clave:

✅ 1. Manejo de Variables y Arreglos :

Se utiliza un array (amigos) para almacenar los nombres ingresados por el usuario.
Se accede a elementos del DOM con document.getElementById() y document.querySelector().
Se evita la repetición de datos mediante la validación con .includes().
✅ 2. Uso de Funciones para Modularización :

El código está organizado en funciones pequeñas y reutilizables, lo que permite un mantenimiento más sencillo

agregarAmigo(): Añade un nombre a la lista con validaciones.
actualizarLista(): Refresca la lista de amigos en la interfaz.
eliminarAmigo(): Permite remover un nombre de la lista.
sortearAmigo(): Realiza el sorteo aleatorio asegurando que haya suficientes participantes.
mostrarResultado(): Muestra el amigo secreto seleccionado.
reiniciarRegistro(): Borra los datos para reiniciar el proceso.

✅ 3. Control de Flujo y Validaciones

Se previenen errores al validar entradas vacías y nombres duplicados.
Se verifica que haya al menos dos participantes antes de realizar el sorteo.
Se usa return para evitar la ejecución de código innecesario cuando las condiciones no se cumplen.

✅ 4. Uso de Métodos de Arreglos y Manipulación del DOM

.push(), .splice(), y .includes() se emplean para manejar el array amigos.
Se generan elementos dinámicamente en el DOM con document.createElement() y appendChild().

✅ 5. Generación de Números Aleatorios

Se utiliza Math.random() para seleccionar un amigo de manera aleatoria, asegurando un sorteo justo.
