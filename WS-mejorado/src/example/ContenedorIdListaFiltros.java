package example;

import java.io.Serializable;
import java.util.ArrayList;

public class ContenedorIdListaFiltros implements Serializable{
    private Integer id;
    private ArrayList<Filtro> listaFiltros;

    public ContenedorIdListaFiltros() {
    }

    public ContenedorIdListaFiltros(Integer id, ArrayList<Filtro> listaFiltros) {
        this.id = id;
        this.listaFiltros = listaFiltros;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public ArrayList<Filtro> getListaFiltros() {
        return listaFiltros;
    }

    public void setListaFiltros(ArrayList<Filtro> listaFiltros) {
        this.listaFiltros = listaFiltros;
    }
}
