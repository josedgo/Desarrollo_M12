package example;




/**
 * Fabrica de comandos creada por M011
 */
public class CommandsFactory {

    //M12

    public  static  Command instanciarGetFiltrosDeUsuarioComando(Integer id) {return  new GetFiltrosDeUsuarioComando(id);}
    public  static  Command instanciarValidarAccesoComando(Integer id, String claveApp) {return  new ValidarAccesoComando(id, claveApp);}
    public  static  Command instanciarGetVideosPermitidosComando(Integer id) {return  new GetVideosPermitidosComando(id);}
    public  static  Command instanciarFiltrarVideosComando(ContenedorIdListaVideos contenedor) {return  new FiltrarVideosComando(contenedor);}
    public  static  Command instanciarGuardarFiltrosComando(ContenedorIdListaFiltros contenedor) {return  new GuardarFiltrosComando(contenedor);}
    // Fin M12

}
