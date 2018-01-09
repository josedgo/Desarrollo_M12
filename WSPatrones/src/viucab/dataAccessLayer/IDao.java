package viucab.dataAccessLayer;


import viucab.common.entities.Entity;



/**
 * Interface que implementa el DAO
 * que actua como contrato con los metodos comunes creada por M011
 */
public interface IDao
{

    public Entity create(Entity e) ;

    public Entity read(Entity e) ;

    public Entity update(Entity e);
}