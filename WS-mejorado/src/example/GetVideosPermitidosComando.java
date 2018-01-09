package example;


import java.util.ArrayList;

/**
 * Created by jose on 08/11/2017.
 */
public class GetVideosPermitidosComando extends Command {

    Integer id;
    Entity est;
    ArrayList<Video> _resultado;

    public GetVideosPermitidosComando(Integer id) {
        this.id=id;
    }

    public ArrayList<Video> getVideosPermitidos()
    {
        return _resultado;
    }

    @Override
    public void execute() {
        try {
            GetModeracionContenidoDao dao =  DaoFactory.instanciarModeracionContenidoDao();
            _resultado= dao.buscarVideosPermitidos(id);

        }
        catch (Exception e){

        }

    }
    @Override
    public Entity Return() {
        return est;
    }

}
