package example;

import java.util.ArrayList;
import org.junit.Test;
import static org.junit.Assert.assertNotNull;

/**
 * Created by pablo & jose on 09/01/2018.
 */
public class TEST_M12 {

    //Prueba si el retorno del método cargarFiltros es una instancia de ArrayList<Video>
    /*@Test
    public void pruebaClaseCargarFiltros() throws Exception {

        Command commadModeracionContenido = CommandsFactory.instanciarGetFiltrosDeUsuarioComando(1);
        GetFiltrosDeUsuarioComando cmd = (GetFiltrosDeUsuarioComando) commadModeracionContenido;
        cmd.execute();
        assertTrue(cmd.getFiltros() instanceOf ArrayList<Filtro>);

    }

    //Prueba si el retorno del método cargarFiltros no nulo para el usuario de id=1
    @Test
    public void pruebaClaseCargarFiltros() throws Exception {

        Command commadModeracionContenido = CommandsFactory.instanciarGetFiltrosDeUsuarioComando(1);
        GetFiltrosDeUsuarioComando cmd = (GetFiltrosDeUsuarioComando) commadModeracionContenido;
        cmd.execute();
        ArrayList<Filtro> resultado= cmd.getFiltros();
        assertNotNull(resultado);

    }


    //Prueba si el retorno del método guardarFiltros es de tipo de dato boolean
    @Test
    public void pruebaTipoGuardarFiltros() throws Exception {
        ArrayList<Filtro> filtrosEntrada= new ArrayList<>();
        filtrosEntrada.add((Filtro) EntityFactory.filtro(4,"filtro","sexo",true));
        Entity contenedor= EntityFactory.contenedorIdListaFiltros(1,filtrosEntrada);
        Command commadModeracionContenido = CommandsFactory.instanciarGuardarFiltrosComando((ContenedorIdListaFiltros) contenedor);
        GuardarFiltrosComando cmd = (GuardarFiltrosComando) commadModeracionContenido;
        cmd.execute();
        ArrayList<Video> resultado= cmd.getResultadoGuardado();
        assertNotNull(cmd.getFiltros() instanceOf boolean );  // revisar esto, creo que no es

    }


    @Test
    public void pruebaClaseVideosPermitidos() throws Exception {
        Command commadModeracionContenido = CommandsFactory.instanciarGetVideosPermitidosComando(1);
        GetVideosPermitidosComando cmd = (GetVideosPermitidosComando) commadModeracionContenido;
        cmd.execute();
        assertTrue(cmd.getVideosPermitidos() instanceOf ArrayList<Video>);


    }

    @Test
    public void busquedaVideos() throws Exception {



    }
    */



}
