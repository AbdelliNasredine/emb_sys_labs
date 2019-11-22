public class Position {
    /**
     * The (MIN, MAX) of latitude is (-90 , 90)
     * The (MIN, MAX) of longitude is (-180 , 180)
     **/
    double latitude;
    double longitude;

    /**
     * constructor that generate random position
     * values using Math.random method
     * Min + (Max - Min) * randomvalue;
     **/
    Position () {
        this.latitude = Math.random() * 180 - 90;
        this.longitude = Math.random() * 320 - 180;
    }

    /**
     * toString implementation
     **/
    @Override
    public String toString() {
        return "Position{" +
                "latitude=" + latitude +
                ", longitude=" + longitude +
                '}';
    }
}
