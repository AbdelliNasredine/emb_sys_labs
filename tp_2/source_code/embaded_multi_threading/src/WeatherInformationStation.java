import java.util.Date;

public class WeatherInformationStation {
    /**
     * Weather Information Attributes
     * but in this case we dont need any attributes
     * because we are generating them each time using
     * Getter methods , and the stationName attrib is
     * used to differentiate between weather stations
     **/
    private String stationName;

    public WeatherInformationStation(String stationName) {
        this.stationName = stationName;
    }

    /**
     * Getter Methods
     * N.B: Math.random() generate a double x such
     * that : 0 <= x < 1 , there is an alternative way
     * to Math.random() is The Random Class and its methods
     **/

    public int getTemperature() {
        return (int) Math.floor( (Math.random() * 60 ) + 10 );
    }

    public int getHumidity() {
        return (int) Math.floor( (Math.random() * 10) + 1 );
    }

    public Position getPosition() {
        return new Position();
    }

    public String getStationName() {
        return stationName;
    }

    public long getTime() {
        return new Date().getTime();
    }

    /**
     * to String implementation
     **/
    @Override
    public String toString() {
        return "WeatherInformationStation{" +
                "stationName='" + stationName + '\'' +
                ", temperature=" + getTemperature() +
                ", humidity=" + getHumidity() +
                ", position=" + getPosition().toString() +
                ", time=" + getTime() +
                '}';
    }
}
