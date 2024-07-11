/*asd
Crear un programa que muestre la calificación en letra de un estudiante en función de su nota final. El programa
debe solicitar el nombre del estudiante y su nota final. El programa debe calcular la calificación con letra de
acuerdo con la siguiente escala de calificación:
• 90-100: A
• 80-89: B
• 70-79: C
• 60-69: D
• Menos de 60: F
El programa debe mostrar el nombre del estudiante, la nota final y la calificación con letra
Datos de Prueba
Nombre: Juan
Nota Final: 75
Salida
Nombre: Juan
Nota Final: 75
Calificación en letra: C
*/

import Cl_Estudiante from "./CL_Estudiante.js";
import Cl_IEstudiante from "./CL_IEstudiante.js";

let iEst = new Cl_IEstudiante();
let nombre = iEst.leerNombre();
let notaFinal = iEst.leerNotaFinal();

let est = new Cl_Estudiante(nombre, notaFinal)

let salida = document.getElementById("Salida")
salida.innerHTML = iEst.reporteEstudiante(est.nombre, est.notaFinal, est.Calificacion())