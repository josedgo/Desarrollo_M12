import viucab.webService.M12_ModeracionContenido.M12_ModeracionContenido;
import viucab.webService.hola;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;
import java.util.HashSet;
import java.util.Set;


@ApplicationPath("/")
public class ViUcab extends Application {
    @Override
    public Set<Class<?>> getClasses() {
        HashSet h= new HashSet<Class<?>>();
        h.add(hola.class);
        h.add(M12_ModeracionContenido.class);

        return h;
    }
}