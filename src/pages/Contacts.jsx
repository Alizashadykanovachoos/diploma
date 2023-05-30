export default function Contact() {
  return (
    <div className="Contact">
      <h2 className="four-address-h2">Our address:</h2>
      <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6514.141922881702!2d37.5996420716113!3d55.77580560232949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a6d82ae62d9%3A0x761079c448721fd2!2z0JrRg9Cx0LjQutC4INCg0YPQsdC40LrQsCDQuCDQs9C-0LvQvtCy0L7Qu9C-0LzQutC4INChQ0NTVE9SRQ!5e0!3m2!1sru!2skg!4v1684579029322!5m2!1sru!2skg"
            width="400"
            height="300"
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


