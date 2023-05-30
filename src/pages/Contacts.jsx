export default function Contact() {
  return (
    <div className="Contact">
      <h2 className="four-address-h2">Our address:</h2>
      <div className="map">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Acf98b60208e9449827ed9f5c36c0ffdc0045f73467c474bfe98853fc49bd9729&amp;source=constructor"
            width="500"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
            
          ></iframe>
         
      </div>
      <h2 className="phone-number-h2">Phone number:</h2>
      <a href="tel:+ 996 550 655 922" className="number-1">
        + 996 550 655 922
      </a>{" "}
      <br />
      <a href="tel:+ 996 550 655 922" className="number-2">
        +996 552 177 006
      </a>
      
   
    </div>
  );
}


