package example;

import java.sql.SQLException;
import java.util.ArrayList;

/**
 * Created by estefania on 13/12/2017.
 */
public interface IDaoModeracionContenido extends IDao {

    public ArrayList<Filtro> buscarFiltros(Integer id) throws SQLException;
    public boolean compararPassword(Integer id, String password) throws SQLException;
    public ArrayList<Video> buscarVideosPermitidos(Integer id) throws SQLException;
    public ArrayList<Video> buscarYFiltrarVideos(Integer id,ArrayList<Video> listaVideos ) throws SQLException;

}
