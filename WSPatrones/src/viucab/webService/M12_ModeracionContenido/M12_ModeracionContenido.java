package viucab.webService.M12_ModeracionContenido;

import com.google.gson.Gson;
import viucab.domainLogicLayer.Command;
import viucab.domainLogicLayer.CommandsFactory;
import viucab.domainLogicLayer.M12_ModeracionContenido.*;
import viucab.domainLogicLayer.Sql;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import java.sql.Connection;


@Path("/ModeracionContenido")
public class M12_ModeracionContenido {

    Gson gson = new Gson();
    Connection conn = Sql.getConInstance();

    @GET
    @CrossOrigin(origins = "http://localhost:8100")
    @Path("/cargarFiltros")
    @Produces("application/json")
    public String cargarFiltros(@QueryParam("id") Integer id) {
        try {
            Command commadModeracionContenido = CommandsFactory.instanciarGetFiltrosDeUsuarioComando(id);
            GetFiltrosDeUsuarioComando cmd = (GetFiltrosDeUsuarioComando) commadModeracionContenido;
            cmd.execute();
            return gson.toJson(cmd.getFiltros());

        } catch (Exception ex) {
            return gson.toJson(null);
        }
    }

}