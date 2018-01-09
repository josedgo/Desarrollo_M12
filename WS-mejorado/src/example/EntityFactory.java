package example;

import java.util.ArrayList;
import java.util.LinkedList;

/**
 * Fabrica de Entidades creada por M011
 */

public class EntityFactory
{

    //final M08

    //M12

    static public Entity filtro (int id, String tipo, String descripcion,boolean valor){
        return new Filtro(id,tipo,descripcion,valor);
    }
    //endregion
}

