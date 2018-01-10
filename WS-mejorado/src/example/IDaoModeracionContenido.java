package example;

import java.sql.SQLException;
import java.util.ArrayList;

/**
 * Created by Pablo, Jose and Karem on 07/01/2018.
 */
public interface IDaoModeracionContenido extends IDao {

    /**
     * Metodo que se instancia en el GetModeracionContenidoDao.java
     * @return
     * @throws SQLException
     */
    public ArrayList<Filtro> buscarFiltros(Integer id) throws SQLException;

    /**
     * Metodo que se instancia en el GetModeracionContenidoDao.java
     * @return
     * @throws SQLException
     */
    public boolean compararPassword(Integer id, String password) throws SQLException;

    /**
     * Metodo que se instancia en el GetModeracionContenidoDao.java
     * @return
     * @throws SQLException
     */
    public ArrayList<Video> buscarVideosPermitidos(Integer id) throws SQLException;

    /**
     * Metodo que se instancia en el GetModeracionContenidoDao.java
     * @return
     * @throws SQLException
     */
    public ArrayList<Video> buscarYFiltrarVideos(Integer id,ArrayList<Video> listaVideos ) throws SQLException;

    /**
     * Metodo que se instancia en el GetModeracionContenidoDao.java
     * @return
     * @throws SQLException
     * @throws VIUCABException
     */
    public boolean guardarFiltrosEnBD(Integer id,  ArrayList<Filtro> listaFiltrosNuevos) throws SQLException, VIUCABException;

}
