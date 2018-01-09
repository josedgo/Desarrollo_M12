package example;

import com.google.gson.Gson;


import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import java.sql.Connection;


/**
 * Created by estefania on 14/12/2017.
 */
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

}