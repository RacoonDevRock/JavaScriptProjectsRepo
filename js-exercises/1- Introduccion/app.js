/*
RECUERDA EJECUTAR CADA PORCION DE CODIGO EN EL NAVEGADOR */
// VARIABLES -> Espacio almacenado en memoria, al cual se le asigna un valor

// EJEMPLO -> x = 1 (La 'x' sigue siendo la misma pero el valor,su contenido, varia duranta le ejecución de un programa)

// Ejecutar en el navegador con el archivo .html enlazado
// moneda = '5 soles';
// alert(moneda);

// ********************PRIMITIVOS*********************

// TIPOS DE DATOS -> String(cadena de texto), Nmber, Boolean.

// String - puede escribir con ''(commillas simples), ""(comillas dobles), ``(backtick)
// cadena = "Hola mundo"; 

// Number - acerca de numeros
// number = 19; // numero de tipo entero

// Boolean - False o True - 0 o 1
// booleano = true;

// **************************************************

// CASOS ESPECIALES DE DATOS: Undefined, Null, NaN -> habla sobre las variables no definidas o declaradas inicialmente

// EXISTEN 3 FORMAS DE DECLARACION DE UNA VARIABLES: Var, Let, Const.. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/let

// Let -> limita el alcance(scope) del número(variable) al bloque del programa o funcion en el cual lo ejecutamos. 
// let number = 3;

// Var -> Así se declaraba tradicionalmente el valor de una variable.
// var numero = 15;

// Const -> Hace referencia a una variable constante, es decir que si se desea modificar durante el transcurso de la ejecucción del programa no es posible y es necesaria declararla al crearla. MUESTRA ERROR EN CONSOLA
// const nombre = 'luis';
// nombre = 'mono';
// alert(nombre);

// *********************UNDEFINED******************
// EJEMPLO->Undefined, es decir que la variable existe pero no tiene un valor dado
// let numero;
// alert(numero);
// CORRECION-EJEMPLO-UNDEFINED->
// let numero = 3;
// numero = 5;
// alert(numero);

// *********************NULL******************
// EJEMPLO->Null, indica que si tiene un valor, pero el valor de la variable esta vacia, pero nosotros lo declaramos intencionalmente
// let numero = null;
// alert(numero);

// *********************NaN******************
// EJEMPLO->Nan, 
// let numero = 5;
// let nombre = 'pedro';
// // alert(numero + nombre); //al sumar es posible porque concatena un numero con una variable string "5pedro"
// alert(numero * nombre); //muestra Nan

// **************************************************

// SCOPE -> Alcance, ambito, contexto de la variable

// **************************************************

// DECLARACION DE MULTIPLES VARIABLES, var, let y const
//// 1era forma
// let numero1, numero2, numero3;
// numero1 = 2;
// numero2 = 3;
// numero3 = 4;

//// 2da forma
// let numero1 = 3;
// let numero2 = 4;

// **************************************************

// HOISTING -> Es acerca de las fases de creacion y de ejecucion, es decir la creacion de un bloque de codigo y cuando ejecutarlo, es el ORDEN el cual, por sobretodo resalta al momento de la ejecucion de un programa.

// **************************************************

// PRUEBAS CON PROMPT -> Es una de las api que nos permite darle un dato. COMPROBAR EN EL NAVEGADOR
// let valor = prompt('Devuelveme un valor'); // es una funcion
// alert('Tu valor ingresado es: '+valor);

// **************************************************

// OPERADORES -> asignacion & arimeticos
// let numero = 15;
// let numero1 = 24;
// resultado = numero + numero1;
// resultado = ++numero;
// alert(resultado);
// numero++;
// alert(numero);

// arimeticos -> toman valores numericos, como sus operandos y retornar un valor unico.

// asignacion -> asigna un valor operando de la izquierda basado en el valor del operando de la derecha https://static.platzi.com/media/user_upload/JavaScript%20%282%29-661c17db-a793-41fd-8d87-cf44ccfa078e.jpg
// let numero = 3;
// // numero += 4; //suma o adicion
// // numero -= 2; //suma o adicion
// // numero *= 2; //multiplicacion
// // numero /= 2; //division
// // numero %= 5; //resto de una division
// // numero **= 2; // exponencializacion
// document.write(numero);

// **************************************************

// CONTATENACION
// let saludo = 'hola pedro';
// let pregunta = ' ¿Como estas?';
// resultado = saludo + pregunta;
// document.write(resultado);

// CONTATENACION de numero, forzando un string
// let numero1 = 3;
// let numero2 = 5;
//// resultado = "" + numero1 + numero2; //cuando se detecta un texto, convierte todo a una cadena por ello no se suma
//// let numero1 = "3";
//// resultado = numero1.concat(numero2);
// let frase1 = ' guillermo ';
// let frase2 = `soy ${frase1} estoy aprendiendo`; // solo funciona con backticks(``)
// document.write(frase2);

// **************************************************

// ESCAPE DE COMILLAS SIMPLES
// let frase = "mi nombre es 'guillermo' ando aprendiendo";
// document.write(frase);

// // ESCAPE DE COMILLAS DOBLES
// let frase = "mi nombre es `guillermo` ando aprendiendo";
// document.write(frase);

// **************************************************



