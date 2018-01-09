package viucab.common.exceptions;

/**
 * creada por johan
 */
public class ListAllException extends Exception {

    public final int ERROR_CODE = 552;
    public final String ERROR_MSG = "Ha ocurrido un error consultado";

    public ListAllException( Exception e )
    {
        super( e );
    }

    @Override
    public String toString()
    {
        StringBuilder str = null;


        str = new StringBuilder( ERROR_CODE + "\n" );
        str.append( ERROR_MSG + "\n" );
        str.append( super.toString() );

        return str.toString();
    }
}
