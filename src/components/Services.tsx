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

                Acompanhar o João Pedro nessa coordenação foi uma experiência única pra mim.
                 Estive do lado dele o tempo inteiro e vi o quanto ele se dedicou de verdade.
                  Teve momento pesado, mas ele sempre continuou firme, sempre com o coração no lugar certo.
Eu me orgulho muito dele. De ver o homem, o amigo e o servo que ele foi nesses dias. Esse JOVISA tem muito da entrega dele.
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
                  Encerrar o JOVISA me deixa com uma sensação gigante de gratidão. Ser coordenador não foi fácil, 
                  teve dia que deu vontade de sumir e outros em que o coração quase explodiu de alegria. 
                  Mas ver cada jovem vivendo o encontro de verdade fez tudo valer a pena.
Eu só consigo agradecer a Deus e à galera que esteve comigo em cada etapa. Esse JOVISA marcou minha vida.
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
                 Terminar o JOVISA me deixa até sem palavras. Estar na base desses dias todos me fez sentir na pele cada 
                 detalhe: o cansaço, a correria, as risadas, as preocupações… e, principalmente, o cuidado de Deus em tudo.
Ver cada jovem se abrindo e vivendo o encontro foi algo muito forte pra mim.
E agora, sabendo que vou assumir a coordenação, sinto aquele frio na barriga bom, de missão. Quero continuar o que Deus começou aqui, com muita entrega e coragem.
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
