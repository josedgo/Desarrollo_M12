package viucab.domainLogicLayer;

import viucab.common.entities.Entity;

import viucab.common.entities.Video;

import viucab.domainLogicLayer.M12_ModeracionContenido.*;
import viucab.domainLogicLayer.Command;

/**
 * Fabrica de comandos creada por M011
 */
public class CommandsFactory {

    //M12
    public  static  Command instanciarGetFiltrosDeUsuarioComando(Integer id) {return  new GetFiltrosDeUsuarioComando(id);}

    // Fin M12
}
