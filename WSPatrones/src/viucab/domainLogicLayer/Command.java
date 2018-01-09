package viucab.domainLogicLayer;



import viucab.common.entities.Entity;
import viucab.common.exceptions.VIUCABException;

import java.sql.SQLException;
import java.util.List;
import java.util.ArrayList;

public abstract class Command {

    public abstract void execute() throws VIUCABException, Exception;

    public abstract Entity Return() ;

}