package viucab.dataAccessLayer;


import viucab.dataAccessLayer.M12_ModeracionContenido.GetModeracionContenidoDao;

/**
 * Fabrica para instanciar los DAO creada por M011
 */

public class DaoFactory
{

    // M12
    public  static  GetModeracionContenidoDao instanciarModeracionContenidoDao(){ return new GetModeracionContenidoDao();}

    //Fin M12
}

