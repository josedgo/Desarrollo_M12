package main.java;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.reflect.TypeToken;

import javax.ws.rs.*;
import java.lang.reflect.Type;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Path("/Configuracion")
public class Configuracion {
    Gson gson = new Gson();
    Connection conn= Sql.getConInstance();

    @GET
    @Path("/obtenerFiltrosDeUsuario")
    @Produces("application/json")
    public String obtenerFiltrosDeUsuario (@QueryParam("id")  Integer id){

        String query = "SELECT * FROM FILTRO, USU_FIL WHERE FILTRO.FIL_ID=USU_FIL.ID_FIL AND USU_FIL.ID_USU="+id;
        try{
            ArrayList<Filtro> listaFiltros= new ArrayList<>();
            PreparedStatement ps = conn.prepareStatement(query);
            ResultSet rs = ps.executeQuery();

            while(rs.next()){
                Filtro resultado = new Filtro();
                resultado.setId(rs.getInt("fil_id"));
                resultado.setTipo(rs.getString("fil_tipo"));
                resultado.setDescripcion(rs.getString("fil_descripcion"));
                listaFiltros.add(resultado);
            }

            return gson.toJson(listaFiltros);

        } catch(SQLException e) {
            return e.getMessage();
        }
        finally {
            Sql.bdClose(conn);
        }


    }

    @GET
    @Path("/validarAcceso")
    @Produces("application/json")
    public String validarAcceso (@QueryParam("id")  Integer id,@QueryParam("claveApp")  String claveApp ) {
        boolean acceso = false;
        String query = "SELECT USU_CLAVE FROM  USUARIO WHERE USU_ID=" + id;
        try {
            PreparedStatement ps = conn.prepareStatement(query);
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {

                if ((rs.getString("usu_clave")).equals(claveApp)) {
                    acceso = true;
                }
            }

            return gson.toJson(acceso);

        } catch (SQLException e) {
            return e.getMessage();
        } finally {
            Sql.bdClose(conn);
        }
    }

    @GET
    @Path("/obtenerVideosPermitidos")
    @Produces("application/json")
    public String obtenerVideosPermitidos(@QueryParam("id")  Integer id){

        try{
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
            return gson.toJson(consultarVideosBD(query));

        } catch(Exception e) {
            return e.getMessage();
        }
    }

    public ArrayList<Video> consultarVideosBD(String query) {

        try{
            ArrayList<Video> listaVideos= new ArrayList<>();
            PreparedStatement ps = conn.prepareStatement(query);
            ResultSet rs = ps.executeQuery();

            while(rs.next()){
                Video resultado = new Video();
                resultado.setId(rs.getInt("vid_id"));
                resultado.setTitulo(rs.getString("vid_titulo"));
                resultado.setDescripcion(rs.getString("vid_descripcion"));
                resultado.setImagen(rs.getString("vid_imagen"));
                resultado.setUrl(rs.getString("vid_url"));
                resultado.setFecha(rs.getDate("vid_fecha"));
                resultado.setVisitas(rs.getInt("vid_visitas"));
                resultado.setUsuario(rs.getInt("vid_usuario"));
                listaVideos.add(resultado);
                }

            return listaVideos;

        } catch(SQLException e) {
            return null;
        }
        finally {
            Sql.bdClose(conn);
        }

    }

    public ArrayList<Filtro> consultarFiltrosBD(String query) {

        try{
            ArrayList<Filtro> listaFiltros= new ArrayList<>();
            PreparedStatement ps = conn.prepareStatement(query);
            ResultSet rs = ps.executeQuery();

            while(rs.next()){
                Filtro resultado = new Filtro();
                resultado.setId(rs.getInt("fil_id"));
                resultado.setTipo(rs.getString("fil_tipo"));
                resultado.setDescripcion(rs.getString("fil_descripcion"));
                listaFiltros.add(resultado);
            }

            return listaFiltros;

        } catch(SQLException e) {
            return null;
        }

    }

    @POST
    @Path("/filtrarVideos")
    @Consumes("application/json")
    @Produces("application/json")
    public String filtrarVideos(ContenedorIdListaVideos contenedor){

        try{
            Integer id=contenedor.getId();
            //Type tipoListaVideos= new TypeToken<List<Video>>(){}.getType();
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
            ArrayList<Video> listaVideosPermitidos =consultarVideosBD(query);

            //ArrayList<Video> listaVideosPermitidos =gson.fromJson(obtenerVideosPermitidos(id), tipoListaVideos);

            ArrayList<Video> listaVideos=contenedor.getListaVideos();
            ArrayList<Video> listaVideosFiltrados= new ArrayList<Video>();

            for( int i = 0 ; i < listaVideos.size() ; i++ ){
                if (listaVideosPermitidos.contains(listaVideos.get(i))) {
                    listaVideosFiltrados.add(listaVideos.get(i));
                }
            }

            return gson.toJson(listaVideosFiltrados);


        } catch(Exception e) {
            return e.getMessage();
        }
    }

    public String ejecutarEnBD(String query) {
        try{
            PreparedStatement ps = conn.prepareStatement(query);
            ps.executeQuery();
            return "true";

        } catch(SQLException e) {
            return e.getMessage();
        }
    }

    @POST
    @Path("/guardarFiltrosDeUsuario")
    @Consumes("application/json")
    @Produces("application/json")
    public String guardarFiltrosDeUsuario(ContenedorIdListaFiltros contenedor){
        try{
            Integer id=contenedor.getId();
            String estado="OK";
            String query ="SELECT FILTRO.* FROM FILTRO, USU_FIL WHERE USU_FIL.ID_USU="+id+" AND USU_FIL.ID_FIL=FILTRO.FIL_ID";
            ArrayList<Filtro> listaFiltrosBD =consultarFiltrosBD(query);

            ArrayList<Filtro> listaFiltrosNuevos=contenedor.getListaFiltros();

            ArrayList<Integer> listaInsertsBD= new ArrayList<Integer>();
            ArrayList<Integer> listaDeleteBD= new ArrayList<Integer>();
            for( int i = 0 ; i < listaFiltrosNuevos.size() ; i++ ){
                if (!(listaFiltrosBD.contains(listaFiltrosNuevos.get(i)))) {
                    listaInsertsBD.add(listaFiltrosNuevos.get(i).getId());
                }
            }
            for( int i = 0 ; i < listaFiltrosBD.size() ; i++ ){
                if (!(listaFiltrosNuevos.contains(listaFiltrosBD.get(i)))) {
                    listaDeleteBD.add(listaFiltrosBD.get(i).getId());
                }
            }

            for( int i = 0 ; i < listaDeleteBD.size() ; i++ ){
                String transDelete="DELETE FROM USU_FIL WHERE ID_USU="+id+" AND ID_FIL="+listaDeleteBD.get(i);
                ejecutarEnBD(transDelete);
            }
            for( int i = 0 ; i < listaInsertsBD.size() ; i++ ){
                String transInserts="INSERT INTO USU_FIL(ID_USU,ID_FIL) VALUES ("+id+","+listaInsertsBD.get(i)+")";
                ejecutarEnBD(transInserts);
            }

            return gson.toJson(estado);


        } catch(Exception e) {
            return e.getMessage();
        }
    }



}
