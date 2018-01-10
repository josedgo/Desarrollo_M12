package example;

import java.util.ArrayList;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 * Created by pablo & jose on 09/01/2018.
 */
public class TEST_M12 {
    

    //Prueba si el retorno del método cargarFiltros es no nulo para el usuario de id=1
    @Test
    public void pruebaRetornoCargarFiltros() throws Exception {

        Command commadModeracionContenido = CommandsFactory.instanciarGetFiltrosDeUsuarioComando(1);
        GetFiltrosDeUsuarioComando cmd = (GetFiltrosDeUsuarioComando) commadModeracionContenido;
        cmd.execute();
        ArrayList<Filtro> resultado= cmd.getFiltros();
        assertNotNull(resultado);

    }


    //Prueba si el retorno del método guardarFiltros fue true, es decir exitoso
    @Test
    public void pruebaRetornoGuardarFiltros() throws Exception {
        ArrayList<Filtro> filtrosEntrada= new ArrayList<>();
        filtrosEntrada.add((Filtro) EntityFactory.filtro(4,"filtro","sexo",true));
        Entity contenedor= EntityFactory.contenedorIdListaFiltros(1,filtrosEntrada);
        Command commadModeracionContenido = CommandsFactory.instanciarGuardarFiltrosComando((ContenedorIdListaFiltros) contenedor);
        GuardarFiltrosComando cmd = (GuardarFiltrosComando) commadModeracionContenido;
        cmd.execute();
        assertTrue(cmd.getResultadoGuardado());  // cambiar el estado en el dao de ese metodo, para que devuelva true

    }

    //Prueba si el retorno del método cargarVideosPermitidos es no nulo para el usuario de id=1
    @Test
    public void pruebaRetornoVideosPermitidos() throws Exception {
        Command commadModeracionContenido = CommandsFactory.instanciarGetVideosPermitidosComando(1);
        GetVideosPermitidosComando cmd = (GetVideosPermitidosComando) commadModeracionContenido;
        cmd.execute();
        assertNotNull(cmd.getVideosPermitidos());
    }


    //Prueba si el retorno del método filtrarVideos es no nulo para el usuario de id=1
    @Test
    public void pruebaRetornoFiltrarVideos() throws Exception {
        ArrayList<Video> videosEntrada= new ArrayList<>();
        videosEntrada.add((Video) EntityFactory.video(1,"video1" ,"DesVideo1", "dcsddhybcjnmcs", "idcoincdomsc", "1998-12-01", 1000, 1));
        videosEntrada.add((Video) EntityFactory.video(2,"video2" ,"DesVideo2", "dcsdvdsmcs", "idfewweemsc", "2010-12-01", 2000, 1));
        videosEntrada.add((Video) EntityFactory.video(3,"video3" ,"DesVideo3", "wefwefwe", "idcoin43r4edwdcsc", "2000-12-01", 3000, 1));
        Entity contenedor= EntityFactory.contenedorIdListaVideos(1,videosEntrada);
        Command commadModeracionContenido = CommandsFactory.instanciarFiltrarVideosComando((ContenedorIdListaVideos) contenedor);
        FiltrarVideosComando cmd = (FiltrarVideosComando) commadModeracionContenido;
        cmd.execute();
        assertNotNull(cmd.getVideosFiltrados());
    }





}
