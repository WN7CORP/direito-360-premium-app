
import { useState, useEffect } from "react";
import { Star, CheckCircle, Smartphone, Download, BookOpen, Headphones, Heart, FileText, GraduationCap, Scale, MapPin, Monitor } from "lucide-react";
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
      // For desktop/other platforms, show both options
      window.open("https://play.google.com/store/apps/details?id=br.com.app.gpu2994564.gpub492f9e6db037057aaa93d7adfa9e3e0", "_blank");
    }
  };

  const premiumFeatures = [
    { icon: <Star className="h-5 w-5" />, text: "Pagamento único - sem mensalidades" },
    { icon: <CheckCircle className="h-5 w-5" />, text: "Sem anúncios" },
    { icon: <Scale className="h-5 w-5" />, text: "Vade Mecum Pro com comentários dos artigos em áudio" },
    { icon: <Heart className="h-5 w-5" />, text: "Opção de favoritar conteúdos" },
    { icon: <FileText className="h-5 w-5" />, text: "Sistema de anotações personalizadas" },
    { icon: <GraduationCap className="h-5 w-5" />, text: "Vantagens exclusivas em cursos jurídicos" },
    { icon: <Headphones className="h-5 w-5" />, text: "JuriCast Pro com mais de 100 episódios" },
    { icon: <BookOpen className="h-5 w-5" />, text: "Aulas em áudio das matérias de direito" },
    { icon: <CheckCircle className="h-5 w-5" />, text: "Mais de 500 questões da OAB" },
    { icon: <FileText className="h-5 w-5" />, text: "10 simulados completos da OAB" },
    { icon: <BookOpen className="h-5 w-5" />, text: "Biblioteca com mais de 300 livros jurídicos" },
    { icon: <Download className="h-5 w-5" />, text: "Opção de download para acesso offline" },
    { icon: <FileText className="h-5 w-5" />, text: "Mais de 30 mil modelos de petições" },
    { icon: <MapPin className="h-5 w-5" />, text: "Resumos e mapas mentais exclusivos" },
    { icon: <Monitor className="h-5 w-5" />, text: "Versão desktop disponível" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-8">
            <Scale className="h-10 w-10 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-6">
            Direito 360°
          </h1>
          
          <div className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 text-black px-6 py-2 rounded-full font-semibold mb-8">
            <Star className="h-5 w-5 mr-2" />
            PREMIUM
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A plataforma jurídica mais completa do Brasil. Tenha acesso ilimitado a todo o conteúdo premium com um único pagamento.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {premiumFeatures.map((feature, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 p-6 hover:bg-gray-800/70 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-amber-500 mt-1">
                  {feature.icon}
                </div>
                <p className="text-gray-200 leading-relaxed">{feature.text}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="text-center mb-16">
          <Card className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 border-amber-500/50 p-8 max-w-md mx-auto">
            <div className="mb-6">
              <div className="text-6xl font-bold text-amber-500 mb-2">R$ 49,99</div>
              <div className="text-gray-400 text-lg">Pagamento único</div>
              <div className="text-sm text-gray-500">Sem mensalidades • Sem anúncios</div>
            </div>
            
            <Button 
              onClick={handlePremiumClick}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-semibold py-4 text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Smartphone className="h-5 w-5 mr-2" />
              Ser Premium Agora
            </Button>
            
            <div className="mt-4 text-xs text-gray-500">
              {isAndroid && "Você será redirecionado para a Google Play Store"}
              {isIOS && "Você será redirecionado para a App Store"}
              {!isAndroid && !isIOS && "Você será redirecionado para a loja de aplicativos"}
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500">
          <p className="mb-2">© 2024 Direito 360° Premium. Todos os direitos reservados.</p>
          <p className="text-sm">A plataforma jurídica que você precisa para sua carreira.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
