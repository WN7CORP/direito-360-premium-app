
import { useState, useEffect } from "react";
import { Star, CheckCircle, Smartphone, Download, BookOpen, Headphones, Heart, FileText, GraduationCap, Scale, MapPin, Monitor, Crown, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [userAgent, setUserAgent] = useState("");

  useEffect(() => {
    setUserAgent(navigator.userAgent);
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
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Scale className="h-8 w-8 text-red-600 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Direito 360°
            </h1>
          </div>
          
          <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Crown className="h-4 w-4 mr-2" />
            PREMIUM EDITION
          </div>
          
          <h2 className="text-xl md:text-2xl text-gray-700 mb-4 font-light">
            A plataforma jurídica completa para estudos
          </h2>
          <p className="text-red-600 font-semibold">
            Acesso vitalício • Sem mensalidades
          </p>
        </div>

        {/* Price Section */}
        <div className="max-w-md mx-auto mb-16">
          <Card className="p-8 text-center shadow-lg border-0 bg-gray-50">
            <div className="mb-8">
              <div className="text-5xl font-bold text-red-600 mb-2">
                R$ 39,90
              </div>
              <div className="text-gray-600 mb-2">
                Pagamento único
              </div>
              <div className="text-green-600 text-sm font-medium">
                ✓ Acesso vitalício garantido
              </div>
            </div>
            
            <Button 
              onClick={handlePremiumClick} 
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 text-lg shadow-lg"
            >
              <Crown className="h-5 w-5 mr-2" />
              SER PREMIUM AGORA
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            
            <div className="mt-6 flex items-center justify-center space-x-4 text-gray-500 text-sm">
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1 text-yellow-500" />
                <span>4.7 ⭐</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1 text-green-500" />
                <span>100% Seguro</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-900">
            Recursos <span className="text-red-600">Premium</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {premiumFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-red-200 hover:shadow-md transition-all duration-200"
              >
                <div className="text-red-600 flex-shrink-0">
                  {feature.icon}
                </div>
                <p className="text-gray-700 text-sm">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mb-16 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-red-600 mb-1">10K+</div>
            <div className="text-gray-600 text-sm">Usuários</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-red-600 mb-1">4.7★</div>
            <div className="text-gray-600 text-sm">Avaliação</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-red-600 mb-1">99%</div>
            <div className="text-gray-600 text-sm">Aprovação</div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-red-50 border border-red-100 rounded-xl p-8 max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              Transforme seus estudos jurídicos
            </h4>
            <p className="text-gray-600 mb-6">
              Junte-se a milhares de estudantes e profissionais que já escolheram a excelência
            </p>
            <Button 
              onClick={handlePremiumClick}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3"
            >
              <Smartphone className="h-4 w-4 mr-2" />
              Começar Agora
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm mt-16">
          <p>© 2024 Direito 360° Premium. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
