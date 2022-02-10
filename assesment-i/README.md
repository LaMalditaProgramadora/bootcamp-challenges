## Proyecto: Opción 2

¡Haz un Mario!

[¡Prueba aquí!](https://assesment-i-jimena.netlify.app/)

![alt text](https://i.postimg.cc/13n7bb4B/mario.png)

## Preguntas

1. ¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?
* Sprint Planning: Marca el inicio de un Sprint. El equipo se compromete con una serie de entregables y se identifican las subtareas.
* Daily Scrum: Reunión diaria donde los participantes cuentan qué items se han completado, en cuál están trabajando y si han tenido algún bloqueante.
* Story Time: Reunión a mitad de semana para discutir y mejorar las historias de usuario de futuros sprints.
* Sprint Review: Marca el final de un sprint. Se revisan los items terminados y no terminados.s
* Sprint Retrospective: Normalmente se da luego del Sprint Review para identificar cambios estratégicos.

2. ¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.

* Son la representación de baja fidelidad (lo-fi) de un diseño. Para elaborarlos se pueden utilizar herramientas como Figma, AdobeXD, Marvel App, entre otros.

3. Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará.
* var: se utiliza para declarar una variable y y es procesada antes de la ejecución del código. Su scope es en el contexto de ejecución y si es declarada fuera de una función, tiene scope global.
* let: Cuando no declaramos una variable, Javascript la crea en el Window Object. Llegando incluso a reasignar el valor de esta, es por eso que a partir de ES6 se utiliza let, que introduce el “block scope”.
* const: Es igual que let, con una pequeña gran diferencia: no se puedes reasignar su valor.

```javascript
var name = 'Julián';

function printSentence(){
 let name = 'Andrea';
 const midleSentence = ' ❤ ';
 console.log(name + midleSentence + this.name);
}
```

4. ¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada rama-1?

```console
git branch rama-1
git checkout rama-1
```
* O con un solo comando:
```console
git checkout -b rama-1
```

5. Explicar la diferencia entre git merge y git rebase.

* git merge: Crea un nuevo commit donde se evidencia la integración de ramas y no pierde la historia del commit. Se identifica al autor. Se hace una sola vez independientemente del número de commits.
* git rebase: No se crea un nuevo commit por rebase y se crea uuna especie de duplicado del historial. No se sabe el autor real y requiere iteración según número de commits.

6. ¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?

* Pull Request (PR): Los pull requests son la forma de contribuir a un proyecto grupal o de código abierto. Son una forma de solicitar la integración de los cambios realizados a un repositorio.
* git pull: Ejecuta en primer lugar un git fetch (que descarga el contenido del repositorio especificado) y después un git merge (que fusiona las referencias y los encabezados del contenido remoto en una nuecva confirmación de fusión local).

7. ¿Qué es el Virtual DOM?

* El Virtual DOM es una representación del DOM guardada en memoria, que actúa de intermediario entre los estados de la aplicación y los estados del DOM (vistos por el usuario). Cuando ocurre un cambio en la aplicación web, realiza los siguientes pasos: Cambio de estado, Cómputo de Cambios y Re-render.

8. Dado el siguiente codePen, el cual solo tiene un HTML, por medio de css llegar a esta respuesta. Imagen. (Para mostrar los servicios debes usar CSS Flexbox o CSS Grid).

![alt text](https://lh3.googleusercontent.com/pw/AM-JKLXK7JsKtOt3E1dYv21stnkB21DEV9pTfC-pSJAVbbt0-ZM7gYeSZkcYSm8YUH2Gm9Ezc5y6z9zIcNdVN1FyVN5yBexaRFoRQZnmBUCFUgT4l6XjqM-FAsLLp02D-9mbVSVD7GghCTKK_SOb9Bne-wD-oA=w1904-h781-no?authuser=0)

```css
@import url('https://fonts.googleapis.com/css2?family=Arvo&display=swap');

.c-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arvo', serif;
}

.c-section__title {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #17202A;
  color: white;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.c-services {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  list-style-type: none;
  margin-left: -2.5rem;
  margin-right: 0rem;
}

.c-services__item {
  width: 40%;
  background-color: #E6E6E6;
  padding-left: 1rem;
  padding-rigth: 1rem;
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
}
```