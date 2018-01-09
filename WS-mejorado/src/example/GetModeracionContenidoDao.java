package example;



import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.sql.*;
import java.util.ArrayList;

/**
 * Created by jose on 08/01/2018.
 */
public class GetModeracionContenidoDao extends Dao implements IDaoModeracionContenido {

    public GetModeracionContenidoDao(){

    }


    @Override
    public Entity create(Entity e) {
        return null;
    }

    @Override
    public Entity read(Entity e) {
        return null;
    }

    @Override
    public Entity update(Entity e) {
        return null;
    }

    /**
     * Metodo que busca los filtros de un id de usuario
     * @return resultlist
     * @throws SQLException
     */

    public ArrayList<Filtro> buscarFiltros(Integer id) throws SQLException {

        ArrayList<Filtro> listaFiltros= new ArrayList<>();
        Connection conn= null;
        Filtro resultado;
        FileWriter fstream = null;





                   //int fil_id = rs.getInt("fil_id");
                   //String fil_tipo = rs.getString("fil_tipo");



                   resultado = (Filtro) EntityFactory.filtro(1,"palbo","caulqirvaina",true);
                    listaFiltros.add(resultado);
                    resultado = (Filtro) EntityFactory.filtro(1,"palbo","caulqirvaina",true);
                    listaFiltros.add(resultado);
                   //resultado = new Filtro(fil_id,fil_tipo,fil_descripcion,true);



                    try {
                        fstream = new FileWriter("C:\\Users\\Pablo\\Desktop\\ee.txt", true);
                        BufferedWriter out = new BufferedWriter(fstream);
                        for(int i = 0; i<listaFiltros.size();i++){
                            out.write(listaFiltros.get(i).getTipo()+"\n");
                        }
                        out.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }






        return listaFiltros;
    }

    public boolean compararPassword(Integer id, String password) throws SQLException {

        Connection conn= getConInstance();
        boolean acceso = false;
        String query = "SELECT USU_CLAVE FROM  USUARIO WHERE USU_ID=" + id;

        try {
            PreparedStatement ps = conn.prepareStatement(query);
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                if ((rs.getString("usu_clave")).equals(password)) {
                    acceso = true;
                }
            }

        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            Sql.bdClose(conn);
        }

        return acceso;
    }


     public ArrayList<Video> buscarVideosPermitidos(Integer id) throws SQLException {
         ArrayList<Video> listaVideos=new ArrayList<>();
         Connection conn= getConInstance();

         String query ="SELECT VIDEO.* FROM VIDEO "+
                 "WHERE VIDEO.VID_ID NOT IN (SELECT DISTINCT VIDEO.VID_ID FROM VIDEO, USUARIO, FILTRO, CAT_FIL_ETIQ, CATEGORIA, VIDEO_CAT, ETIQUETA, VIDEO_ETIQ, USU_FIL "+
                 "WHERE USUARIO.USU_ID="+id+" AND USU_FIL.ID_USU=USUARIO.USU_ID AND "+
                 "USU_FIL.ID_FIL=FILTRO.FIL_ID AND FILTRO.FIL_ID=CAT_FIL_ETIQ.ID_FIL AND "+
                 "((CAT_FIL_ETIQ.ID_CAT=CATEGORIA.CAT_ID AND CATEGORIA.CAT_ID=VIDEO_CAT.IDCAT AND VIDEO_CAT.IDVID=VIDEO.VID_ID) "+
                 "OR (CAT_FIL_ETIQ.ID_ETIQ=ETIQUETA.ETI_ID AND VIDEO_ETIQ.IDETIQ=ETIQUETA.ETI_ID AND VIDEO.VID_ID=VIDEO_ETIQ.IDVID))) "+
                 "AND "+
                 "VIDEO.VID_ID IN (SELECT VIDEO.VID_ID FROM VIDEO, VIDEO_CAT, CATEGORIA, PREFERENCIA "+
                 "WHERE PREFERENCIA.ID_USU="+id+" AND CATEGORIA.CAT_ID=PREFERENCIA.ID_CAT "+
                 "AND VIDEO_CAT.IDCAT=CATEGORIA.CAT_ID AND VIDEO.VID_ID=VIDEO_CAT.IDVID)";

         try{
             PreparedStatement ps = conn.prepareStatement(query);
             ResultSet rs = ps.executeQuery();

             while(rs.next()){
                 Video resultado = (Video) EntityFactory.video(rs.getInt("vid_id"),rs.getString("vid_titulo"),
                         rs.getString("vid_descripcion"),rs.getString("vid_imagen"),rs.getString("vid_url"),
                         rs.getDate("vid_fecha"),rs.getInt("vid_visitas"),rs.getInt("vid_usuario"));

                 listaVideos.add(resultado);
             }

         } catch (SQLException e) {
             e.printStackTrace();
         } finally {
             Sql.bdClose(conn);
         }

         return listaVideos;
    }


    public ArrayList<Video> buscarYFiltrarVideos(Integer id,  ArrayList<Video> listaVideos) throws SQLException {
        ArrayList<Video> listaVideosPermitidos=new ArrayList<>();
        ArrayList<Video> listaVideosFiltrados= new ArrayList<>();
        Connection conn= getConInstance();

        String query ="SELECT DISTINCT VIDEO.* FROM VIDEO "+
                "WHERE VIDEO.VID_ID NOT IN (SELECT DISTINCT VIDEO.VID_ID FROM VIDEO, USUARIO, FILTRO, CAT_FIL_ETIQ, CATEGORIA, VIDEO_CAT, ETIQUETA, VIDEO_ETIQ, USU_FIL "+
                "WHERE USUARIO.USU_ID="+id+" AND USU_FIL.ID_USU=USUARIO.USU_ID AND "+
                "USU_FIL.ID_FIL=FILTRO.FIL_ID AND FILTRO.FIL_ID=CAT_FIL_ETIQ.ID_FIL AND "+
                "((CAT_FIL_ETIQ.ID_CAT=CATEGORIA.CAT_ID AND CATEGORIA.CAT_ID=VIDEO_CAT.IDCAT AND VIDEO_CAT.IDVID=VIDEO.VID_ID) "+
                "OR (CAT_FIL_ETIQ.ID_ETIQ=ETIQUETA.ETI_ID AND VIDEO_ETIQ.IDETIQ=ETIQUETA.ETI_ID AND VIDEO.VID_ID=VIDEO_ETIQ.IDVID))) "+
                "AND "+
                "VIDEO.VID_ID IN (SELECT DISTINCT VIDEO.VID_ID FROM VIDEO, VIDEO_CAT, CATEGORIA, PREFERENCIA "+
                "WHERE PREFERENCIA.ID_USU="+id+" AND CATEGORIA.CAT_ID=PREFERENCIA.ID_CAT "+
                "AND VIDEO_CAT.IDCAT=CATEGORIA.CAT_ID AND VIDEO.VID_ID=VIDEO_CAT.IDVID)";
        try{
            PreparedStatement ps = conn.prepareStatement(query);
            ResultSet rs = ps.executeQuery();

            while(rs.next()){
                Video resultado = (Video) EntityFactory.video(rs.getInt("vid_id"),rs.getString("vid_titulo"),
                        rs.getString("vid_descripcion"),rs.getString("vid_imagen"),rs.getString("vid_url"),
                        rs.getDate("vid_fecha"),rs.getInt("vid_visitas"),rs.getInt("vid_usuario"));
                listaVideosPermitidos.add(resultado);
            }

            for( int i = 0 ; i < listaVideos.size() ; i++ ){
                if (listaVideosPermitidos.contains(listaVideos.get(i))) {
                    listaVideosFiltrados.add(listaVideos.get(i));
                }
            }

        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            Sql.bdClose(conn);
        }

        return listaVideosFiltrados;
    }



}
