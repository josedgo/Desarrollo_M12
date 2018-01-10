package example;

import java.util.ArrayList;

/**
 * Created by Pablo, Jose and Karem on 07/01/2018.
 */
public class GuardarFiltrosComando extends Command {

    Integer id;
    ArrayList<Filtro> listaFiltros;
    Entity est;
    boolean _resultado;


    public GuardarFiltrosComando(ContenedorIdListaFiltros contenedor) {
        this.id=contenedor.getId();
        this.listaFiltros=contenedor.getListaFiltros();
    }

    /**
     * Obtiene resultado booleano de el guardado de filtros en la base de datos, guardado en la variable _resultado
     * @return true o false
     */
    public  boolean getResultadoGuardado()
    {
        return _resultado;
    }


    /**
     * Metodo que realiza la llamada a el patron DAO en la clase GetModeracionContenidoDao
     * para almacenar los datos obtenidos en la fabrica
     */
    @Override
    public void execute() {
        try {
            GetModeracionContenidoDao dao =  DaoFactory.instanciarModeracionContenidoDao();
            _resultado = dao.guardarFiltrosEnBD(id, listaFiltros);

        }
        catch (Exception e){

        }

    }
    @Override
    public Entity Return() {
        return est;
    }

}
