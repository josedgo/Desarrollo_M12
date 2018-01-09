package viucab.domainLogicLayer.M12_ModeracionContenido;

import viucab.common.entities.Entity;
import viucab.common.entities.*;
import viucab.dataAccessLayer.*;
import viucab.dataAccessLayer.M12_ModeracionContenido.*;
import viucab.domainLogicLayer.Command;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;

/**
 * Created by jose on 08/11/2017.
 */
public class GetFiltrosDeUsuarioComando extends Command {

    Integer id;
    ArrayList<Filtro> _resultado;

    public GetFiltrosDeUsuarioComando(Integer id) {
        this.id=id;
    }

    public ArrayList<Filtro> getFiltros()
    {
        return _resultado;
    }

    @Override
    public void execute() {
        try {
            Dao dao1 =  DaoFactory.instanciarModeracionContenidoDao();
            GetModeracionContenidoDao dao = (GetModeracionContenidoDao) dao1;
            ArrayList<Filtro> listaFiltros = dao.buscarFiltros(id);

            _resultado=listaFiltros;

        }
        catch (Exception e){

        }

    }
    @Override
    public Entity Return() {
        return null;
    }

}
