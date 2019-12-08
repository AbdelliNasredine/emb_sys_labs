long generate_temprature() {
  return random(-10, 60);  
}

int LED_pin = 13; 
long temp;
void setup() {
  Serial.begin(9600);
  pinMode(LED_pin,OUTPUT);
}

void loop() {
  temp = generate_temprature();
  Serial.println(temp);
  if( temp > 40) {
    digitalWrite(LED_pin,HIGH); 
    delay(1000);
  }else{
    digitalWrite(LED_pin,LOW);
  }
  delay(2000); 
}
