/** Enunciado de los tipos de semana que se maneja hasta el momento que se ha investigado.
 * De acuerdo a enum (Semana_8 = 0) y (Semana_16 = 1) ya que son las posiciones que se le
 * asingaron para poder brindar este ejemplo.
*/
var tipoSemana;
(function (tipoSemana) {
    tipoSemana[tipoSemana["Semana_8"] = 0] = "Semana_8";
    tipoSemana[tipoSemana["Semana_16"] = 1] = "Semana_16";
})(tipoSemana || (tipoSemana = {}));
;
/** Clases de materias returnado datos e implementando la Interface
 * con esto se evidencia que cada clase se puede comportar diferente,
 * pero la implementación sigue siendo la misma. Sabiendo que en un futuro
 * se pueden implementar nuevas clases, trabajarlas de manera abstracta, etc.
 *
 * Clase de ejemplo 1
 */
var Materias_8_Semanas = /** @class */ (function () {
    function Materias_8_Semanas() {
    }
    Object.defineProperty(Materias_8_Semanas.prototype, "tipoSemanaId", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Materias_8_Semanas.prototype, "nombreMateria", {
        get: function () {
            return 'Materia AAA';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Materias_8_Semanas.prototype, "actividad", {
        get: function () {
            var nameActividades = [
                { id: 0, name: 'Actividades 1' },
                { id: 1, name: 'Actividades 2' },
                { id: 2, name: 'Actividades 3' },
                { id: 3, name: 'Actividades 4' },
                { id: 4, name: 'Actividades 5' },
                { id: 5, name: 'Actividades 6' },
                { id: 6, name: 'Actividades 7' },
                { id: 7, name: 'Actividades 8' }
            ];
            return nameActividades;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Materias_8_Semanas.prototype, "prueba", {
        get: function () {
            var namePruebas = [
                { id: 0, name: 'Prueba 1' },
                { id: 1, name: 'Prueba 2' },
                { id: 2, name: 'Prueba 3' }
            ];
            return namePruebas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Materias_8_Semanas.prototype, "tiempo", {
        get: function () {
            return 8;
        },
        enumerable: true,
        configurable: true
    });
    return Materias_8_Semanas;
}());
/** Clase de ejemplo 2 */
var Materias_16_Semanas = /** @class */ (function () {
    function Materias_16_Semanas() {
    }
    Object.defineProperty(Materias_16_Semanas.prototype, "tipoSemanaId", {
        get: function () {
            return 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Materias_16_Semanas.prototype, "nombreMateria", {
        get: function () {
            return 'Materia DDD';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Materias_16_Semanas.prototype, "actividad", {
        get: function () {
            var nameActividades = [
                { id: 8, name: 'Actividades 1' },
                { id: 9, name: 'Actividades 2' },
                { id: 10, name: 'Actividades 3' },
                { id: 11, name: 'Actividades 4' },
                { id: 12, name: 'Actividades 5' },
                { id: 13, name: 'Actividades 6' },
                { id: 14, name: 'Actividades 7' },
                { id: 15, name: 'Actividades 8' },
                { id: 16, name: 'Actividades 16' },
            ];
            return nameActividades;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Materias_16_Semanas.prototype, "prueba", {
        get: function () {
            var namePruebas = [
                { id: 3, name: 'Prueba 1' },
                { id: 4, name: 'Prueba 2' },
                { id: 5, name: 'Prueba 3' }
            ];
            return namePruebas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Materias_16_Semanas.prototype, "tiempo", {
        get: function () {
            return 16;
        },
        enumerable: true,
        configurable: true
    });
    return Materias_16_Semanas;
}());
/** Matricular materias con el method Factory, de acuerdo a la creación
 * de este metódo se convierte en una fabrica de tipos de semanas para
 * matricular materias, de acuerdo al parametro que recibe va a crear una nueva
 * instancia, ademas va a ser reutilizable
 */
var MatricularMateriasMethodFactory = /** @class */ (function () {
    function MatricularMateriasMethodFactory() {
    }
    MatricularMateriasMethodFactory.crearMateriaPorTipoSemana = function (tipo) {
        if (tipo === tipoSemana.Semana_8) {
            /** Instancia para crear una nueva materia por tipo de semana 8 */
            return;
        }
        if (tipo === tipoSemana.Semana_16) {
            /** Instancia para crear una nueva materia por tipo de semana 16 */
            return;
        }
        else {
            throw new Error("Tipo de semana para matricular no valido.");
        }
    };
    return MatricularMateriasMethodFactory;
}());
/** Clase que crea la materia por tipo de semana */
var ordenCreacionMateriaPorTipoDeSemana = /** @class */ (function () {
    function ordenCreacionMateriaPorTipoDeSemana(tipo, datosParaEnviar) {
        this.tipo = tipo;
        this.datosParaEnviar = datosParaEnviar;
    }
    ordenCreacionMateriaPorTipoDeSemana.prototype.crearMateriaPorTipoDeSemana = function () {
        this.estructuraParaEnviar = MatricularMateriasMethodFactory.crearMateriaPorTipoSemana(this.tipo);
        /** Logica para crear datos ... */
    };
    return ordenCreacionMateriaPorTipoDeSemana;
}());
/** Obtener datos con el method Factory, de acuerdo al parametro que recibe va a crear una nueva
 * instancia.
 */
var ObtenerMateriasMatriculadasMethodFactory = /** @class */ (function () {
    function ObtenerMateriasMatriculadasMethodFactory() {
    }
    ObtenerMateriasMatriculadasMethodFactory.obtenerMateriaPorTipoSemana = function (tipo) {
        if (tipo === tipoSemana.Semana_8) {
            return new Materias_8_Semanas();
        }
        if (tipo === tipoSemana.Semana_16) {
            return new Materias_16_Semanas();
        }
        else {
            throw new Error("Tipo de semana para matricular no valido.");
        }
    };
    return ObtenerMateriasMatriculadasMethodFactory;
}());
/** Clase que obtiene datos de acuerdo al parametro que se le envíe, el parametro que se le solicita
 * es la posición del enum donde indica si es Semana_8, Semana_16 y me trae la lista quiere decir los
 * los ejemplos que se crearon para mostrar, de acuerdo al enum enviado.
 */
var obtenerMateriasMatriculadas = /** @class */ (function () {
    function obtenerMateriasMatriculadas(tipo, hola) {
        this.tipo = tipo;
        this.hola = hola;
    }
    obtenerMateriasMatriculadas.prototype.obtenerLista = function () {
        // Obtener materias por tipo de semanas enviando el parametro de el tipo de semana
        return this.materias = ObtenerMateriasMatriculadasMethodFactory.obtenerMateriaPorTipoSemana(this.tipo);
    };
    return obtenerMateriasMatriculadas;
}());
var printObtenerMateriasMatriculadas = new obtenerMateriasMatriculadas(0, 'hey');
console.log('Prueba funcionamiento patrón Method Factory:', printObtenerMateriasMatriculadas.obtenerLista());
