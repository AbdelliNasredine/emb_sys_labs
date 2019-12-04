/*
  print a long using the Serial
  object println function 
*/
void _send(String data){
  Serial.println(data); 
}

/*
  generate a random temprature
  value between -10c and 60-1c
*/
void getTemperature() {
  _send("temprature = " + random(-10,60));
}

/*
  generate a random humidity
  value between 0% to 100%
*/
void getHumidity() {
  _send("humidity = " + random(0,100));
}

/*
  generate a random wind 
  speed(km/h) 
*/
void getWindSpeed(){
  _send("wind speed = " + random(1,50));
}

/*
  generate a random rain
  value (mm)
*/
void getRain(){
  _send("rain value = " + random(1,30));
}

/*
  get the current time
  in mili-seconds
*/
void getTime(){
  _send("time = " + millis());
}

void setup() {
  Serial.begin(9600); 
  _send("--Weather Station--");
}

void loop() {
  getTime();          // printing time
  getTemperature();   // printing temprature
  getHumidity();      // printing humidity
  getWindSpeed();     // printing windspeed
  getRain();          // printing rain
}
