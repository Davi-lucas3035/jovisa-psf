const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-12 text-center">
          COMENTÁRIOS DE SERVOS e AMIGOS
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div 
  className="padlet-slideshow-embed" 
  style={{ width: '100%', height: '608px' }}
>
  <p style={{ padding: 0, margin: 0, width: '100%', height: '100%' }}>
    <iframe 
      src="https://padlet.com/embed/p1rfhcqoopc90z4o" 
      frameBorder="0" 
      allow="camera;microphone;geolocation;display-capture;clipboard-write" 
      style={{ width: '100%', height: '100%', display: 'block', padding: 0, margin: 0 }}
    />
  </p>
</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;