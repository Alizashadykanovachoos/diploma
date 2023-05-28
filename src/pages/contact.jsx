export default function Contact() {
  return (
    <div className="Contact">
      <h2 className="four-address-h2">Our address:</h2>
      <div className="map">
        <iframe
          src="https://maps.app.goo.gl/Rc4oMuVVeCADYWfK7"
          width="100%"
          height="400"
          frameborder="0"
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


