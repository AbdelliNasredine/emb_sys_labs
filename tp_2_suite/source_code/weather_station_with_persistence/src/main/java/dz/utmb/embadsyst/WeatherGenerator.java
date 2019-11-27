package dz.utmb.embadsyst;

import dz.utmb.embadsyst.utils.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;

public class WeatherGenerator extends Thread {

    String stationName = "Station_";

    public WeatherGenerator(int id) {
        this.stationName+=id;
    }

    /**
     * Implementation of the run() method:
     * - To simulate a real world weatherSensor/Station
     * we will need need to create a infinite loop that
     * avery second will get us new data/information
     * about it
     * - try/catch block is used to handle the exception
     * that the sleep() method throws
     **/
    @Override
    public void run() {
        super.run();
        WeatherInformationStation weatherInformationStation = new WeatherInformationStation(stationName);
        while(true) {
            try {
                sleep(1000);
                System.out.println("before: "+ weatherInformationStation.toString());
                save(weatherInformationStation);
            }catch(Exception ex){
                System.out.println(ex.toString());
            }
        }
    }

    /**
     * Persist the information into a database
     **/
    private void save(WeatherInformationStation weatherInformationStation){
        String sql = WeatherTable.SQL_INSERT;
        try (Connection connection = new DBConnection().getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)){
            System.out.println("Database connection established! ");

            // Add weather info to the database:
            preparedStatement.setString(WeatherTable.STATION_NAME, weatherInformationStation.getStationName());
            preparedStatement.setInt(WeatherTable.TEMPERATURE, weatherInformationStation.getTemperature());
            preparedStatement.setInt(WeatherTable.HUMIDITY, weatherInformationStation.getHumidity());
            preparedStatement.setDouble(WeatherTable.LATITUDE, weatherInformationStation.getPosition().latitude);
            preparedStatement.setDouble(WeatherTable.LONGITUDE, weatherInformationStation.getPosition().longitude);
            preparedStatement.setLong(WeatherTable.FULL_TIME, weatherInformationStation.getTime());

            // Checking if the data has been added
            int added = preparedStatement.executeUpdate();
            if( added == 1 ){
                System.out.println("new Record have been added");
            }
        } catch (SQLException ex) {
            System.out.println(ex.getMessage());
        }
    }
}
