export default class Cl_Estudiante{
    constructor(nombre, notaFinal){
        this.nombre = nombre;
        this.notaFinal = notaFinal
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(e){
        this._nombre = e;
    }

    get notaFinal(){
        return this._notaFinal
    }

    set notaFinal(e){
        this._notaFinal = +e
    }

    Calificacion(){
        switch(true){
            case this.notaFinal >= 90:
                return "A";
                break;
            case this.notaFinal >= 80:
                return "B";
                break;
            case this.notaFinal >= 70:
                return "C";
                break;
            case this.notaFinal >= 60:
                return "D";
                break;
            default:
                return "F";
                break;
        }
    }
}