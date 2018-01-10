package example;

import com.google.gson.Gson;

import javax.ws.rs.*;
import java.sql.Connection;


@Path("/ModeracionContenido")
public class M12_ModeracionContenido {

    Gson gson = new Gson();
    //Connection conn = Sql.getConInstance();

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
                Command commadModeracionContenido = CommandsFactory.instanciarGuardarFiltrosComando(contenedor);
                GuardarFiltrosComando cmd = (GuardarFiltrosComando) commadModeracionContenido;
                cmd.execute();
                return gson.toJson(cmd.getResultadoGuardado());

            } catch (Exception ex) {
                return gson.toJson("ASD");
            }
    }



}