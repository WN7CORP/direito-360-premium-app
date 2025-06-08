
import { useState, useEffect } from "react";
import { Star, CheckCircle, Smartphone, Download, BookOpen, Headphones, Heart, FileText, GraduationCap, Scale, MapPin, Monitor, Crown, Shield, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [userAgent, setUserAgent] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setUserAgent(navigator.userAgent);
    setIsVisible(true);
  }, []);

  const isAndroid = /Android/i.test(userAgent);
  const isIOS = /iPhone|iPad|iPod/i.test(userAgent);

  const handlePremiumClick = () => {
    if (isAndroid) {
      window.open("https://play.google.com/store/apps/details?id=br.com.app.gpu2994564.gpub492f9e6db037057aaa93d7adfa9e3e0", "_blank");
    } else if (isIOS) {
      window.open("https://apps.apple.com/us/app/direito-premium/id6451451647", "_blank");
    } else {
      window.open("https://play.google.com/store/apps/details?id=br.com.app.gpu2994564.gpub492f9e6db037057aaa93d7adfa9e3e0", "_blank");
    }
  };

  const premiumFeatures = [
    { icon: <Crown className="h-5 w-5" />, text: "Pagamento único - sem mensalidades" },
    { icon: <Shield className="h-5 w-5" />, text: "Sem anúncios" },
    { icon: <Scale className="h-5 w-5" />, text: "Vade Mecum Pro com comentários em áudio" },
    { icon: <Heart className="h-5 w-5" />, text: "Opção de favoritar conteúdos" },
    { icon: <FileText className="h-5 w-5" />, text: "Sistema de anotações personalizadas" },
    { icon: <GraduationCap className="h-5 w-5" />, text: "Vantagens exclusivas em cursos jurídicos" },
    { icon: <Headphones className="h-5 w-5" />, text: "JuriCast Pro com mais de 100 episódios" },
    { icon: <BookOpen className="h-5 w-5" />, text: "Aulas em áudio das matérias de direito" },
    { icon: <CheckCircle className="h-5 w-5" />, text: "Mais de 500 questões da OAB" },
    { icon: <FileText className="h-5 w-5" />, text: "10 simulados completos da OAB" },
    { icon: <BookOpen className="h-5 w-5" />, text: "Biblioteca com mais de 300 livros jurídicos" },
    { icon: <Download className="h-5 w-5" />, text: "Download para acesso offline" },
    { icon: <FileText className="h-5 w-5" />, text: "Mais de 30 mil modelos de petições" },
    { icon: <MapPin className="h-5 w-5" />, text: "Resumos e mapas mentais exclusivos" },
    { icon: <Monitor className="h-5 w-5" />, text: "Versão desktop disponível" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black"></div>
        <div className="container mx-auto px-4 py-16 max-w-6xl relative">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center mb-8">
              <Scale className="h-12 w-12 text-red-600 mr-4" />
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                Direito 360°
              </h1>
            </div>
            
            <div className="inline-flex items-center bg-red-600 text-white px-6 py-2 rounded text-sm font-medium mb-8">
              <Crown className="h-4 w-4 mr-2" />
              PREMIUM
            </div>
            
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light max-w-3xl mx-auto leading-relaxed">
              A plataforma jurídica completa para seus estudos
            </h2>
            <p className="text-red-400 font-medium text-xl">
              Acesso vitalício • Sem mensalidades
            </p>
          </div>

          {/* Price Card */}
          <div className={`max-w-lg mx-auto mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Card className="p-10 text-center bg-gray-900/80 border-gray-800 hover:bg-gray-900/90 transition-all duration-300">
              <div className="mb-8">
                <div className="text-6xl font-bold text-white mb-4">
                  R$ 39,90
                </div>
                <div className="text-gray-400 text-lg mb-4">
                  Pagamento único
                </div>
                <div className="flex items-center justify-center text-green-500 text-sm font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Acesso vitalício garantido
                </div>
              </div>
              
              <Button 
                onClick={handlePremiumClick} 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 text-lg transition-all duration-300 hover:scale-105"
              >
                <Play className="h-5 w-5 mr-2" />
                SER PREMIUM AGORA
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              
              <div className="mt-6 flex items-center justify-center space-x-8 text-gray-400 text-sm">
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1 text-yellow-500 fill-current" />
                  <span>4.7 ⭐</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-1 text-green-500" />
                  <span>100% Seguro</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-950">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <div className={`mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-4xl font-bold text-center mb-16 text-white">
              Recursos Premium
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {premiumFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 p-6 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-all duration-300 group"
                >
                  <div className="text-red-500 flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-3 gap-8 mb-16 max-w-2xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">10K+</div>
              <div className="text-gray-400 text-sm">Usuários</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">4.7★</div>
              <div className="text-gray-400 text-sm">Avaliação</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">99%</div>
              <div className="text-gray-400 text-sm">Aprovação</div>
            </div>
          </div>

          {/* Final CTA */}
          <div className={`text-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gray-900/50 rounded-2xl p-12 max-w-3xl mx-auto">
              <h4 className="text-3xl font-bold text-white mb-6">
                Transforme seus estudos jurídicos
              </h4>
              <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                Junte-se a milhares de estudantes e profissionais que já escolheram a excelência
              </p>
              <Button 
                onClick={handlePremiumClick}
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-12 py-4 text-lg transition-all duration-300 hover:scale-105"
              >
                <Smartphone className="h-5 w-5 mr-2" />
                Começar Agora
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-500 text-sm">
            <p>© 2024 Direito 360° Premium. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
