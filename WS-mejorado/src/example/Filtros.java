package example;

import com.google.gson.Gson;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import java.sql.Connection;
import java.sql.*;
import java.util.ArrayList;
//import java.sql.PreparedStatement;
//import java.sql.SQLException;

@Path("/Filtros")
public class Filtros {
    Gson gson = new Gson();
    Connection conn = Sql.getConInstance();

    //Metodo de prueba
    @GET
    @Path("/buscarConfiguracion")
    @Produces("application/json")
    public String buscarConfiguracion(@QueryParam("id") Integer id){
        System.out.println("Iniciando metodo de buscar filtros");
        ResultSet resultado;
        try{
            String sql = "SELECT USU_FIL.ID_FIL  FROM USU_FIL WHERE  USU_ID.ID_USU="+id;
            Statement comando = conn.createStatement();
            resultado = comando.executeQuery(sql);
            /*while(resultado.next()) {
                String n = resultado.getString("nombre");
                String a = resultado.getString("apellido");
                System.out.println(n + " " + a);}*/
        }
        catch(SQLException e) {
                return e.getMessage();
        }
        finally {
            Sql.bdClose(conn);
        }
        //ArrayList<Video> videosProhibidos;

        /*ArrayList<Video> videosOut= new ArrayList<Video>();
        videosOut.add(new Video(0,"Animales"));
        videosOut.add(new Video(1,"Accion"));
        videosOut.add(new Video(2,"Comedia"));
        videosOut.add(new Video(3,"Musica"));
        videosOut.add(new Video(4,"Musica"));
        videosOut.add(new Video(5,"Artes"));
        videosOut.add(new Video(6,"Musica"));
        videosOut.add(new Video(7,"Accion"));
        videosOut.add(new Video(8,"Artes"));

        for (int i=0;i<videosOut.size();i++){
            if (videosOut.get(i).getCategoria().equals(catProhibida))
                videosOut.remove(i);
        }
        */
            /*String query="SELECT ;";
            try{
                PreparedStatement ps = conn.prepareStatement(query);
                ps.setString(1, valor);
                ps.executeUpdate();
                Etiquetas etiqueta = new Etiquetas(valor);
                return gson.toJson(etiqueta);
            }
            catch(SQLException e) {
                return e.getMessage();
            }
            finally {
                Sql.bdClose(conn);
            }*/
        return gson.toJson(resultado);
    }

}