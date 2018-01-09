package example;

import com.google.gson.Gson;

import javax.ws.rs.*;
import java.sql.Connection;


@Path("/ModeracionContenido")
public class M12_ModeracionContenido {

    Gson gson = new Gson();
    Connection conn = Sql.getConInstance();

    @GET
    @Path("/cargarFiltros")
    @Produces("application/json")
    public String cargarFiltros(@QueryParam("id") Integer id) {
        try {
            Command commadModeracionContenido = CommandsFactory.instanciarGetFiltrosDeUsuarioComando(id);
            GetFiltrosDeUsuarioComando cmd = (GetFiltrosDeUsuarioComando) commadModeracionContenido;
            cmd.execute();
            return gson.toJson(cmd.getFiltros());

        } catch (Exception ex) {
            return gson.toJson("ASD");
        }
    }


    @GET
    @Path("/validarAcceso")
    @Produces("application/json")
    public String validarAcceso (@QueryParam("id")  Integer id,@QueryParam("claveApp")  String claveApp ) {
        try {
            Command commadModeracionContenido = CommandsFactory.instanciarValidarAccesoComando(id, claveApp);
            ValidarAccesoComando cmd = (ValidarAccesoComando) commadModeracionContenido;
            cmd.execute();
            return gson.toJson(cmd.getValidacion());

        } catch (Exception ex) {
            return gson.toJson("ASD");
        }
    }



    @GET
    @Path("/cargarVideosPermitidos")
    @Produces("application/json")
    public String cargarVideosPermitidos(@QueryParam("id")  Integer id){
        try {
            Command commadModeracionContenido = CommandsFactory.instanciarGetVideosPermitidosComando(id);
            GetVideosPermitidosComando cmd = (GetVideosPermitidosComando) commadModeracionContenido;
            cmd.execute();
            return gson.toJson(cmd.getVideosPermitidos());

        } catch (Exception ex) {
            return gson.toJson("ASD");
        }

    }


    @POST
    @Path("/filtrarVideos")
    @Consumes("application/json")
    @Produces("application/json")
    public String filtrarVideos(ContenedorIdListaVideos contenedor){
            try {
                Command commadModeracionContenido = CommandsFactory.instanciarFiltrarVideosComando(contenedor);
                FiltrarVideosComando cmd = (FiltrarVideosComando) commadModeracionContenido;
                cmd.execute();
                return gson.toJson(cmd.getVideosFiltrados());

            } catch (Exception ex) {
                return gson.toJson("ASD");
            }
    }


    @POST
    @Path("/guardarFiltros")
    @Consumes("application/json")
    @Produces("application/json")
    public String guardarFiltros(ContenedorIdListaFiltros contenedor){
            try {
                Command commadModeracionContenido = CommandsFactory.instanciarFiltrarVideosComando(contenedor);
                FiltrarVideosComando cmd = (FiltrarVideosComando) commadModeracionContenido;
                cmd.execute();
                return gson.toJson(cmd.getVideosFiltrados());

            } catch (Exception ex) {
                return gson.toJson("ASD");
            }



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