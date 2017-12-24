package example;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.reflect.TypeToken;
import example.*;
import javax.ws.rs.*;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.lang.reflect.Type;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Path("/Configuracion")
public class Configuracion {

    @POST
    @Path("/guardarFiltrosDeUsuario")
    @Consumes("application/json")
    @Produces("application/json")
    public String guardarFiltrosDeUsuario(ContenedorIdListaFiltros contenedor){

       // try{
            /*Integer id=contenedor.getId();
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

            return "se guardaron los filtros de usuario";


        } catch(Exception e) {
            return e.getMessage();
        }*/
        ArrayList<Filtro> listaFiltrosNuevos = new ArrayList<Filtro>();
         listaFiltrosNuevos=contenedor.getListaFiltros();

            System.out.println(listaFiltrosNuevos.size());

        try {
            FileWriter fstream = new FileWriter("C:\\Users\\Pablo\\Desktop\\ee.txt", true);
            BufferedWriter out = new BufferedWriter(fstream);
            for(int i=0;i<listaFiltrosNuevos.size();i++){
                out.write(listaFiltrosNuevos.get(i).getTipo()+" "+listaFiltrosNuevos.get(i).getDescripcion()+"\n");
            }
            out.close();
        } catch (IOException ex) {
            System.out.println("Error: "+ex.getMessage());
        }


            Gson g = new Gson();


            return g.toJson(listaFiltrosNuevos);
    }



}
