
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

  const premiumFeatures = [
    { icon: <Crown className="h-6 w-6" />, text: "Pagamento único - sem mensalidades", highlight: true },
    { icon: <Shield className="h-6 w-6" />, text: "Sem anúncios", highlight: true },
    { icon: <Scale className="h-6 w-6" />, text: "Vade Mecum Pro com comentários dos artigos em áudio" },
    { icon: <Heart className="h-6 w-6" />, text: "Opção de favoritar conteúdos" },
    { icon: <FileText className="h-6 w-6" />, text: "Sistema de anotações personalizadas" },
    { icon: <GraduationCap className="h-6 w-6" />, text: "Vantagens exclusivas em cursos jurídicos" },
    { icon: <Headphones className="h-6 w-6" />, text: "JuriCast Pro com mais de 100 episódios" },
    { icon: <BookOpen className="h-6 w-6" />, text: "Aulas em áudio das matérias de direito" },
    { icon: <CheckCircle className="h-6 w-6" />, text: "Mais de 500 questões da OAB" },
    { icon: <FileText className="h-6 w-6" />, text: "10 simulados completos da OAB" },
    { icon: <BookOpen className="h-6 w-6" />, text: "Biblioteca com mais de 300 livros jurídicos" },
    { icon: <Download className="h-6 w-6" />, text: "Opção de download para acesso offline" },
    { icon: <FileText className="h-6 w-6" />, text: "Mais de 30 mil modelos de petições" },
    { icon: <MapPin className="h-6 w-6" />, text: "Resumos e mapas mentais exclusivos" },
    { icon: <Monitor className="h-6 w-6" />, text: "Versão desktop disponível" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-950 to-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-red-600/10"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-600/15 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-red-600 to-red-800 rounded-full mb-8 shadow-2xl shadow-red-500/50 animate-pulse">
            <Scale className="h-12 w-12 text-white" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400 to-red-600 opacity-75 animate-ping"></div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent mb-6 tracking-tight">
            Direito 360°
          </h1>
          
          <div className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-full font-bold text-lg mb-8 shadow-lg shadow-red-500/50 animate-bounce">
            <Crown className="h-6 w-6 mr-3" />
            PREMIUM EDITION
            <Zap className="h-6 w-6 ml-3" />
          </div>
          
          <p className="text-2xl md:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
            A plataforma jurídica mais <span className="text-red-400 font-semibold">completa e exclusiva</span> do Brasil. 
            Tenha acesso ilimitado a todo o conteúdo premium com um único pagamento.
          </p>
        </div>

        {/* Premium CTA Section */}
        <div className="text-center mb-20">
          <Card className="bg-gradient-to-r from-red-900/80 to-red-800/80 border-red-500/50 border-2 p-10 max-w-lg mx-auto shadow-2xl shadow-red-500/30 backdrop-blur-sm">
            <div className="mb-8">
              <div className="text-7xl font-black text-red-400 mb-3 tracking-tight">R$ 49,99</div>
              <div className="text-red-200 text-xl font-semibold">Pagamento único</div>
              <div className="text-red-300/80 text-base">Sem mensalidades • Sem anúncios • Acesso vitalício</div>
            </div>
            
            <Button 
              onClick={handlePremiumClick}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-6 text-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/50 border border-red-400/50"
            >
              <Crown className="h-6 w-6 mr-3" />
              QUERO SER PREMIUM AGORA
              <Smartphone className="h-6 w-6 ml-3" />
            </Button>
            
            <div className="mt-6 flex items-center justify-center space-x-4 text-red-300">
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1" />
                <span className="text-sm">Avaliação 5.0</span>
              </div>
              <div className="w-1 h-1 bg-red-400 rounded-full"></div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1" />
                <span className="text-sm">Compra Segura</span>
              </div>
            </div>
            
            <div className="mt-4 text-xs text-red-400/80">
              {isAndroid && "Você será redirecionado para a Google Play Store"}
              {isIOS && "Você será redirecionado para a App Store"}
              {!isAndroid && !isIOS && "Você será redirecionado para a loja de aplicativos"}
            </div>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            Recursos Exclusivos Premium
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Mais de 15 recursos premium que vão transformar seus estudos jurídicos
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className={`${
                  feature.highlight 
                    ? 'bg-gradient-to-br from-red-900/60 to-red-800/60 border-red-500/70 border-2' 
                    : 'bg-gray-900/50 border-gray-700/50'
                } p-6 hover:bg-red-900/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/20 backdrop-blur-sm`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`${feature.highlight ? 'text-red-400' : 'text-red-500'} mt-1 p-2 rounded-lg ${feature.highlight ? 'bg-red-500/20' : 'bg-red-900/30'}`}>
                    {feature.icon}
                  </div>
                  <p className="text-gray-200 leading-relaxed font-medium">{feature.text}</p>
                </div>
                {feature.highlight && (
                  <div className="mt-3 inline-flex items-center text-red-400 text-sm font-semibold">
                    <Star className="h-4 w-4 mr-1" />
                    Destaque Premium
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-gray-900/80 to-red-900/80 rounded-2xl p-8 max-w-4xl mx-auto border border-red-500/30 backdrop-blur-sm">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">50K+</div>
                <div className="text-gray-300">Usuários Premium</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">4.9★</div>
                <div className="text-gray-300">Avaliação nas Lojas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">99%</div>
                <div className="text-gray-300">Aprovação OAB</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-400">
          <p className="mb-2 text-lg">© 2024 Direito 360° Premium. Todos os direitos reservados.</p>
          <p className="text-red-400 font-semibold">A plataforma jurídica premium que você merece.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
