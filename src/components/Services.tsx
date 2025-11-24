import { useGoogleDriveImages } from "@/hooks/useGoogleDriveImages";
import { DRIVE_FOLDERS } from "@/config/googleDrive";
import { getThumbnailUrl } from "@/services/googleDriveService";
import { Skeleton } from "@/components/ui/skeleton";

const Services = () => {
  const { images, isLoading } = useGoogleDriveImages(DRIVE_FOLDERS.coordenadores);
  
  // Find images by name
  const joaoImage = images.find(img => 
    img.name.toLowerCase().includes("joao") || img.name.toLowerCase().includes("joão")
  );
  const mariaImage = images.find(img => 
    img.name.toLowerCase().includes("maria")
  );

  return (
    <section id="coordenadores" className="py-20 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr,auto,1fr] gap-12 lg:gap-16">
          {/* Left - Title and Text */}
          <div className="space-y-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
              SOBRE NOSSOS<br />COORDENADORES
            </h2>
            
            <div className="space-y-8">
              <p className="text-sm text-background/70 leading-relaxed">
                Texto de Carlos (Melhor amigo do João Pedro).

                O texto era pra estar aqui ←
              </p>
              
              <p className="text-sm text-background/70 leading-relaxed">
                Texto de Bruna Dayer ( Melhor amiga da Maria Eduarda).
              
                Amiga, que Deus cuide sempre do seu coração e que Nossa Senhora te cubra com o manto dela todos os dias. 
                Você é um presente lindo que Ele colocou na minha vida. Que nunca falte paz, luz e doçura no seu caminho! 
                Deus lhe pague por tudo que fez por mim e ainda faz, pra sempre minha duplinha de Intercessão, te amo! 💗

              </p>
            </div>
          </div>

          {/* Center - Vertical Line */}
          <div className="hidden lg:block w-px bg-background/20 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-background rounded-full"></div>
          </div>

          {/* Right - Coordinator Cards */}
          <div className="space-y-6">
            <div className="bg-background text-foreground p-6 rounded-lg flex gap-6">
              {isLoading ? (
                <Skeleton className="w-32 h-40 rounded-lg flex-shrink-0" />
              ) : joaoImage ? (
                <img 
                  src={getThumbnailUrl(joaoImage.id, 200)} 
                  alt="João Pedro Assis"
                  className="w-32 h-40 object-cover rounded-lg flex-shrink-0"
                  loading="lazy"
                />
              ) : (
                <div className="w-32 h-40 bg-muted rounded-lg flex-shrink-0"></div>
              )}
              <div>
                <h3 className="font-semibold text-lg mb-1">João Pedro Assis</h3>
                <p className="text-xs text-foreground/60 mb-3">Coordenador do encontro 11° Jovisa</p>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Palavras incompriendíveis ditas pelo João Pedro
                </p>
              </div>
            </div>

            <div className="bg-background text-foreground p-6 rounded-lg flex gap-6">
              {isLoading ? (
                <Skeleton className="w-32 h-40 rounded-lg flex-shrink-0" />
              ) : mariaImage ? (
                <img 
                  src={getThumbnailUrl(mariaImage.id, 200)} 
                  alt="Maria Eduarda"
                  className="w-32 h-40 object-cover rounded-lg flex-shrink-0"
                  loading="lazy"
                />
              ) : (
                <div className="w-32 h-40 bg-muted rounded-lg flex-shrink-0"></div>
              )}
              <div>
                <h3 className="font-semibold text-lg mb-1">Maria Eduarda</h3>
                <p className="text-xs text-foreground/60 mb-3">Coordenadora base 11º Jovisa</p>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Aqui vai um texto da tal da Maria falando alguma coisa...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
