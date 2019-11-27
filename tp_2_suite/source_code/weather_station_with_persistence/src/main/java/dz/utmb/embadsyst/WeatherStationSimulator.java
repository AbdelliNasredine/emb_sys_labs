package dz.utmb.embadsyst;

public class WeatherStationSimulator {
    public static void main(String[] args) {
        for (int i = 0; i < 100 ; i++) {
            WeatherGenerator weatherGenerator = new WeatherGenerator(i);
            weatherGenerator.start();
        }
    }
}
