package viucab.common.entities;

public class Video_Etiq extends Entity{

    private int idVid;
    private int idEtiq;

    public Video_Etiq(int idVid, int idEtiq){
        this.idVid = idVid;
        this.idEtiq = idEtiq;
    }

    public int getIdVid() {
        return idVid;
    }

    public void setIdVid(int idVid) {
        this.idVid = idVid;
    }

    public int getIdEtiq() {
        return idEtiq;
    }

    public void setIdEtiq(int idEtiq) {
        this.idEtiq = idEtiq;
    }
}
