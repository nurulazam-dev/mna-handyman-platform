const GoogleMap = () => {
  return (
    <section>
      <h1 className="headingClass">Find Us Here</h1>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.619263424039!2d144.95373531563385!3d-37.81627944231996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xb09b7bca54d3428e!2sFederation+Square!5e0!3m2!1sen!2sau!4v1562801176787!5m2!1sen!2sau"
        style={{
          width: "100%",
          height: "300px",
          border: "0",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default GoogleMap;
