package example;

import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedList;

/**
 * Fabrica de Entidades creada por M011
 */

public class EntityFactory
{

    //M12

    static public Entity filtro (int id, String tipo, String descripcion){
        return new Filtro(id,tipo,descripcion);
    }

    static public Entity video(Integer id, String titulo, String descripcion, String imagen, String url, Date fecha, Integer visitas, Integer usuario){
        return new Video(id, titulo, descripcion, imagen, url, fecha, visitas, usuario);
    }
    //endregion
}

