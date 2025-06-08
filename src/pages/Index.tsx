import { useState, useEffect } from "react";
import { Star, CheckCircle, Smartphone, Download, BookOpen, Headphones, Heart, FileText, GraduationCap, Scale, MapPin, Monitor, Crown, Zap, Shield } from "lucide-react";
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
  const premiumFeatures = [{
    icon: <Crown className="h-5 w-5" />,
    text: "Pagamento único - sem mensalidades"
  }, {
    icon: <Shield className="h-5 w-5" />,
    text: "Sem anúncios"
  }, {
    icon: <Scale className="h-5 w-5" />,
    text: "Vade Mecum Pro com comentários em áudio"
  }, {
    icon: <Heart className="h-5 w-5" />,
    text: "Opção de favoritar conteúdos"
  }, {
    icon: <FileText className="h-5 w-5" />,
    text: "Sistema de anotações personalizadas"
  }, {
    icon: <GraduationCap className="h-5 w-5" />,
    text: "Vantagens exclusivas em cursos jurídicos"
  }, {
    icon: <Headphones className="h-5 w-5" />,
    text: "JuriCast Pro com mais de 100 episódios"
  }, {
    icon: <BookOpen className="h-5 w-5" />,
    text: "Aulas em áudio das matérias de direito"
  }, {
    icon: <CheckCircle className="h-5 w-5" />,
    text: "Mais de 500 questões da OAB"
  }, {
    icon: <FileText className="h-5 w-5" />,
    text: "10 simulados completos da OAB"
  }, {
    icon: <BookOpen className="h-5 w-5" />,
    text: "Biblioteca com mais de 300 livros jurídicos"
  }, {
    icon: <Download className="h-5 w-5" />,
    text: "Opção de download para acesso offline"
  }, {
    icon: <FileText className="h-5 w-5" />,
    text: "Mais de 30 mil modelos de petições"
  }, {
    icon: <MapPin className="h-5 w-5" />,
    text: "Resumos e mapas mentais exclusivos"
  }, {
    icon: <Monitor className="h-5 w-5" />,
    text: "Versão desktop disponível"
  }];
  return <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Scale className="h-8 w-8 text-red-500 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Direito 360°
            </h1>
          </div>
          
          <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Crown className="h-4 w-4 mr-2" />
            PREMIUM EDITION
          </div>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A plataforma jurídica mais completa do Brasil. 
            Acesso ilimitado com pagamento único.
          </p>
        </div>

        {/* Price Card */}
        <div className="max-w-md mx-auto mb-12">
          <Card className="bg-gray-900 border-red-500 border p-6 text-center">
            <div className="mb-6">
              <div className="text-4xl font-bold text-red-500 mb-2">R$ 19,90</div>
              <div className="text-gray-300 text-sm">Pagamento único • Sem mensalidades</div>
            </div>
            
            <Button onClick={handlePremiumClick} className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 text-lg transition-all duration-300">
              <Crown className="h-5 w-5 mr-2" />
              SER PREMIUM AGORA
              <Smartphone className="h-5 w-5 ml-2" />
            </Button>
            
            <div className="mt-4 flex items-center justify-center space-x-4 text-gray-400 text-sm">
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1 text-yellow-500" />
                <span>5.0</span>
              </div>
              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1" />
                <span>Seguro</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-white">
            Recursos Premium
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {premiumFeatures.map((feature, index) => <div key={index} className="flex items-center space-x-3 p-4 bg-gray-900 rounded-lg border border-gray-800 hover:border-red-500 transition-colors">
                <div className="text-red-500 flex-shrink-0">
                  {feature.icon}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.text}</p>
              </div>)}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-500">1.000</div>
            <div className="text-gray-400 text-sm">Usuários</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-500">4.7★</div>
            <div className="text-gray-400 text-sm">Avaliação</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-500">99%</div>
            <div className="text-gray-400 text-sm">Aprovação</div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
          <p>© 2024 Direito 360° Premium. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>;
};
export default Index;