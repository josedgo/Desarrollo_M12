package example;




import java.sql.SQLException;
import java.util.List;
import java.util.ArrayList;

/**
 * Patron Comando creada por M011
 */
public abstract class Command
{

    /***
     * metodo abstracto que es extendido en las clases particulares  de patrones
     */
    public abstract void execute() throws VIUCABException, Exception;

    /***
     * metodo abstracto que es extendido en las clases particulares  de patrones
     */
    public abstract Entity Return() ;


}