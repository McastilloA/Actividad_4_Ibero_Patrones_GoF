/** Enunciado de los tipos de semana que se maneja hasta el momento que se ha investigado. 
 * De acuerdo a enum (Semana_8 = 0) y (Semana_16 = 1) ya que son las posiciones que se le
 * asingaron para poder brindar este ejemplo.
*/
enum tipoSemana {
    Semana_8,
    Semana_16
};

/** Interfaz para implementarse en la creación de materias por tipos de semanas,
 * con posibles propiedades, se puede evidenciar que si hay clases, que
 * piensen implementar ésta interfaz, tengan que utilizar obligatoriamente las propiedades
 * mencionadas con su respectivo tipado de datos.
 */
interface IMatricularMateriasPorSemanas {
    tipoSemanaId: number;
    nombreMateria: string;
    actividad: IActividad[];
    prueba: IPrueba[];
    tiempo: number;
}

/** Interfaz de actividades */
interface IActividad {
    id: number;
    name: string;
}

/** Interfaz de pruebas */
interface IPrueba {
    id: number;
    name: string;
}


/** Clases de materias returnado datos e implementando la Interface
 * con esto se evidencia que cada clase se puede comportar diferente,
 * pero la implementación sigue siendo la misma. Sabiendo que en un futuro
 * se pueden implementar nuevas clases, trabajarlas de manera abstracta, etc.
 * 
 * Clase de ejemplo 1
 */
class Materias_8_Semanas implements IMatricularMateriasPorSemanas {
    get tipoSemanaId(): number {
        return 0;
    }

    get nombreMateria(): string {
        return 'Materia AAA';
    }

    get actividad(): any[] {
        const nameActividades = [
            { id: 0, name: 'Actividades 1' },
            { id: 1, name: 'Actividades 2' },
            { id: 2, name: 'Actividades 3' },
            { id: 3, name: 'Actividades 4' },
            { id: 4, name: 'Actividades 5' },
            { id: 5, name: 'Actividades 6' },
            { id: 6, name: 'Actividades 7' },
            { id: 7, name: 'Actividades 8' }
        ]
        return nameActividades;
    }

    get prueba(): any[] {
        const namePruebas = [
            { id: 0, name: 'Prueba 1' },
            { id: 1, name: 'Prueba 2' },
            { id: 2, name: 'Prueba 3' }
        ]
        return namePruebas;
    }

    get tiempo(): number {
        return 8;
    }
}

/** Clase de ejemplo 2 */
class Materias_16_Semanas implements IMatricularMateriasPorSemanas {
    get tipoSemanaId(): number {
        return 1;
    }

    get nombreMateria(): string {
        return 'Materia DDD';
    }

    get actividad(): any[] {
        const nameActividades = [
            { id: 8, name: 'Actividades 1' },
            { id: 9, name: 'Actividades 2' },
            { id: 10, name: 'Actividades 3' },
            { id: 11, name: 'Actividades 4' },
            { id: 12, name: 'Actividades 5' },
            { id: 13, name: 'Actividades 6' },
            { id: 14, name: 'Actividades 7' },
            { id: 15, name: 'Actividades 8' },
            { id: 16, name: 'Actividades 16' },
        ]
        return nameActividades;
    }

    get prueba(): any[] {
        const namePruebas = [
            { id: 3, name: 'Prueba 1' },
            { id: 4, name: 'Prueba 2' },
            { id: 5, name: 'Prueba 3' }
        ]
        return namePruebas;
    }

    get tiempo(): number {
        return 16;
    }
}


/** Matricular materias con el method Factory, de acuerdo a la creación
 * de este metódo se convierte en una fabrica de tipos de semanas para
 * matricular materias, de acuerdo al parametro que recibe va a crear una nueva
 * instancia, ademas va a ser reutilizable
 */
class MatricularMateriasMethodFactory {
    public static crearMateriaPorTipoSemana(tipo: tipoSemana): IMatricularMateriasPorSemanas {
        if (tipo === tipoSemana.Semana_8) {
            /** Instancia para crear una nueva materia por tipo de semana 8 */
            return;
        } if (tipo === tipoSemana.Semana_16) {
            /** Instancia para crear una nueva materia por tipo de semana 16 */
            return;
        } else {
            throw new Error("Tipo de semana para matricular no valido.");
        }
    }
}

/** Clase que crea la materia por tipo de semana */
class ordenCreacionMateriaPorTipoDeSemana {
    /** Variables globales */
    public estructuraParaEnviar?: IMatricularMateriasPorSemanas;

    constructor(private tipo: tipoSemana, public datosParaEnviar: IMatricularMateriasPorSemanas) { }
    public crearMateriaPorTipoDeSemana() {
        this.estructuraParaEnviar = MatricularMateriasMethodFactory.crearMateriaPorTipoSemana(this.tipo);
        /** Logica para crear datos ... */
    }
}

/** Obtener datos con el method Factory, de acuerdo al parametro que recibe va a crear una nueva
 * instancia.
 */
class ObtenerMateriasMatriculadasMethodFactory {
    public static obtenerMateriaPorTipoSemana(tipo: tipoSemana): IMatricularMateriasPorSemanas {
        if (tipo === tipoSemana.Semana_8) {
            return new Materias_8_Semanas();
        } if (tipo === tipoSemana.Semana_16) {
            return new Materias_16_Semanas();
        } else {
            throw new Error("Tipo de semana para matricular no valido.");
        }
    }
}

/** Clase que obtiene datos de acuerdo al parametro que se le envíe, el parametro que se le solicita
 * es la posición del enum donde indica si es Semana_8, Semana_16 y me trae la lista quiere decir los
 * los ejemplos que se crearon para mostrar, de acuerdo al enum enviado.
 */
class obtenerMateriasMatriculadas {
    /** Variables globales */
    public materias?: IMatricularMateriasPorSemanas;

    constructor(private tipo: tipoSemana, private hola: string) { }

    public obtenerLista() {
        // Obtener materias por tipo de semanas enviando el parametro de el tipo de semana
        return this.materias = ObtenerMateriasMatriculadasMethodFactory.obtenerMateriaPorTipoSemana(this.tipo);
    }
}

var printObtenerMateriasMatriculadas = new obtenerMateriasMatriculadas(0, 'hey');
console.log('Prueba funcionamiento patrón Method Factory:', printObtenerMateriasMatriculadas.obtenerLista());