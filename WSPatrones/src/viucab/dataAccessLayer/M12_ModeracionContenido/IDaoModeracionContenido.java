package viucab.dataAccessLayer.M12_ModeracionContenido;

import viucab.common.entities.Filtro;
import viucab.dataAccessLayer.IDao;

import java.sql.SQLException;
import java.util.ArrayList;

/**
 * Created by estefania on 13/12/2017.
 */
public interface IDaoModeracionContenido extends IDao {

    public ArrayList<Filtro> buscarFiltros(Integer id) throws SQLException;

}
