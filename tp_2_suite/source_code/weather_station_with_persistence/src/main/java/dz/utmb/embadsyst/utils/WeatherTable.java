package dz.utmb.embadsyst.utils;

public final class WeatherTable {
    /* Table field */
    public static final int STATION_NAME = 1;
    public static final int TEMPERATURE = 2;
    public static final int HUMIDITY = 3;
    public static final int LATITUDE = 4;
    public static final int LONGITUDE = 5;
    public static final int FULL_TIME = 6;

    /*  Sql Query's */
    public static final String SQL_INSERT ="INSERT INTO weather_data (" +
            "station_name,temperature,humidity,latitude,longitude,full_time)" +
            "values (?,?,?,?,?,?)";
}
