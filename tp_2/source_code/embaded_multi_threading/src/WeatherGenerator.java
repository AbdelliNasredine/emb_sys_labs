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
                System.out.println(weatherInformationStation.toString());
            }catch(Exception ex){
                System.out.println(ex.toString());
            }
        }
    }

}
