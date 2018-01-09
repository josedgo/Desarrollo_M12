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

}
