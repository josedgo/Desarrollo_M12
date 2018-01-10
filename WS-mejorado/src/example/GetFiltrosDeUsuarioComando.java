package example;


import java.util.ArrayList;

/**
 * Created by Pablo, Jose and Karem on 07/01/2018.
 */
public class GetFiltrosDeUsuarioComando extends Command {

    Integer id;
    Entity est;
    ArrayList<Filtro> _resultado;

    public GetFiltrosDeUsuarioComando(Integer id) {
        this.id=id;
    }

    /**
     * Obtiene el resultado de la busqueda de los filtros del usuario, que estan almacenados en _resultado
     * @return lista de filtros
     */
    public ArrayList<Filtro> getFiltros()
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
            ArrayList<Filtro> listaFiltros = dao.buscarFiltros(id);

            _resultado=listaFiltros;

        }
        catch (Exception e){

        }

    }
    @Override
    public Entity Return() {
        return est;
    }

}
