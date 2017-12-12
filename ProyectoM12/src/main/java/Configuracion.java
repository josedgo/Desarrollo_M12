package main.java;

import com.google.gson.Gson;
/*import edu.ucab.desarrollo.viucab.common.entities.Usuario;
import edu.ucab.desarrollo.viucab.common.entities.Video;
import edu.ucab.desarrollo.viucab.domainLogicLayer.CommandsFactory;
import edu.ucab.desarrollo.viucab.domainLogicLayer.M02_Home.GetPreferenciasComando;
import edu.ucab.desarrollo.viucab.domainLogicLayer.Sql;
*/

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import java.sql.*;
import java.util.ArrayList;

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
    public String validarAcceso (@QueryParam("id")  Integer id,@QueryParam("claveApp")  String claveApp ){
        boolean acceso=false;
        String query = "SELECT USU_CLAVE FROM  USUARIO WHERE USU_ID="+id;
        try{
            PreparedStatement ps = conn.prepareStatement(query);
            ResultSet rs = ps.executeQuery();

            while(rs.next()){

                if ((rs.getString("usu_clave")).equals(claveApp))
                {acceso=true;}
            }

            return gson.toJson(acceso);

        } catch(SQLException e) {
            return e.getMessage();
        }
        finally {
            Sql.bdClose(conn);
        }


    }
}
