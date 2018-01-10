package example;

import java.util.ArrayList;

/**
 * Created by jose on 08/11/2017.
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

    public  boolean getResultadoGuardado()
    {
        return _resultado;
    }


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
