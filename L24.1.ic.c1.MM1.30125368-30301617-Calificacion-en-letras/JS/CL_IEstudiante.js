export default class Cl_IEstudiante{
    leerNombre(){
        return prompt("Ingrese el Nombre del Estudiante")
    }

    leerNotaFinal(){
        return prompt("Ingrese la Nota Final del Estudiante")
    }

    reporteEstudiante(nombre, notaFinal, calificacion){
        return `
        Nombre: ${nombre}
        <br>
        Nota Final: ${notaFinal}
        <br>
        Calificación en Letra: ${calificacion}
        `
    }
}