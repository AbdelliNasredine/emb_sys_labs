package dz.utmb.embadsyst.utils;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class DBConnection {

    private InputStream getFileFromResources(String fileName) {
       ClassLoader classLoader = getClass().getClassLoader();
       InputStream resourceFile = classLoader.getResourceAsStream(fileName);
       if(resourceFile == null) {
           throw new IllegalArgumentException("File "+fileName+ " is not found!");
       }else {
           return resourceFile;
       }
    }

    public Connection getConnection() throws SQLException {
        Connection connection = null;

        try (InputStream f = getFileFromResources("db.properties")) {

            Properties pros = new Properties();
            pros.load(f);

            String url = pros.getProperty("url");
            String user = pros.getProperty("user");
            String password = pros.getProperty("password");

            connection = DriverManager.getConnection(url, user, password);
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
        return connection;
    }
}
