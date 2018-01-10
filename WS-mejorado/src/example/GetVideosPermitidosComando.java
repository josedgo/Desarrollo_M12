package example;


import java.util.ArrayList;

/**
 * Created by Pablo, Jose and Karem on 07/01/2018.
 */
public class GetVideosPermitidosComando extends Command {

    Integer id;
    Entity est;
    ArrayList<Video> _resultado;

    public GetVideosPermitidosComando(Integer id) {
        this.id=id;
    }

    /**
     * Obtiene el resultado de la busqueda de los videos de permitidos, que estan almacenados en _resultado
     * @return lista de videos
     */
    public ArrayList<Video> getVideosPermitidos()
    {
        return _resultado;
    }

    /**
     * Metodo que realiza la llamada a el patron DAO en la clase GetModeracionContenidoDao
     * para almacenar los datos obtenidos en la fabrica, en la variable _resultado.
     */
    @Override
    public void execute() {
        try {
            GetModeracionContenidoDao dao =  DaoFactory.instanciarModeracionContenidoDao();
            _resultado= dao.buscarVideosPermitidos(id);

        }
        catch (Exception e){

        }

    }
    @Override
    public Entity Return() {
        return est;
    }

}
