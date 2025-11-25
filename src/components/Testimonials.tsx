const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-12 text-center">
          COMENTÁRIOS DE SERVOS e AMIGOS
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="padlet-embed" style={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: '2px', boxSizing: 'border-box', overflow: 'hidden', position: 'relative', width: '100%', background: '#F4F4F4' }}>
            <p style={{ padding: 0, margin: 0 }}>
              <iframe 
                src="https://padlet.com/embed/p1rfhcqoopc90z4o" 
                frameBorder="0" 
                allow="camera;microphone;geolocation;display-capture;clipboard-write" 
                style={{ width: '100%', height: '608px', display: 'block', padding: 0, margin: 0 }}
              />
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'end', margin: 0, height: '28px' }}>
              <a 
                href="https://padlet.com?ref=embed" 
                style={{ display: 'block', flexGrow: 0, margin: 0, border: 'none', padding: 0, textDecoration: 'none' }} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img 
                    src="https://padlet.net/embeds/made_with_padlet_2022.png" 
                    width="114" 
                    height="28" 
                    style={{ padding: 0, margin: 0, background: '0 0', border: 'none', boxShadow: 'none' }} 
                    alt="Criado com o Padlet" 
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;