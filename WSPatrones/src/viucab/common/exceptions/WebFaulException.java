package viucab.common.exceptions;

import javax.xml.ws.WebFault;

@WebFault(name="SimpleException")
public class WebFaulException extends Throwable {


    public WebFaulException(String mensaje) {
        super(mensaje);
    }
}
