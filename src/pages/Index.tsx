
import { useState, useEffect } from "react";
import { Star, CheckCircle, Smartphone, Download, BookOpen, Headphones, Heart, FileText, GraduationCap, Scale, MapPin, Monitor, Crown, Zap, Shield, ArrowRight } from "lucide-react";
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
    {
      icon: <Crown className="h-5 w-5" />,
      text: "Pagamento único - sem mensalidades",
      highlight: true
    },
    {
      icon: <Shield className="h-5 w-5" />,
      text: "Sem anúncios"
    },
    {
      icon: <Scale className="h-5 w-5" />,
      text: "Vade Mecum Pro com comentários em áudio"
    },
    {
      icon: <Heart className="h-5 w-5" />,
      text: "Opção de favoritar conteúdos"
    },
    {
      icon: <FileText className="h-5 w-5" />,
      text: "Sistema de anotações personalizadas"
    },
    {
      icon: <GraduationCap className="h-5 w-5" />,
      text: "Vantagens exclusivas em cursos jurídicos"
    },
    {
      icon: <Headphones className="h-5 w-5" />,
      text: "JuriCast Pro com mais de 100 episódios"
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      text: "Aulas em áudio das matérias de direito"
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      text: "Mais de 500 questões da OAB"
    },
    {
      icon: <FileText className="h-5 w-5" />,
      text: "10 simulados completos da OAB"
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      text: "Biblioteca com mais de 300 livros jurídicos"
    },
    {
      icon: <Download className="h-5 w-5" />,
      text: "Opção de download para acesso offline"
    },
    {
      icon: <FileText className="h-5 w-5" />,
      text: "Mais de 30 mil modelos de petições"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      text: "Resumos e mapas mentais exclusivos"
    },
    {
      icon: <Monitor className="h-5 w-5" />,
      text: "Versão desktop disponível"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-transparent to-red-600/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-8 max-w-6xl relative z-10">
        {/* Hero Section */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-6 group">
            <div className="relative">
              <Scale className="h-10 w-10 text-red-500 mr-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Direito 360°
            </h1>
          </div>
          
          <div className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-2xl shadow-red-600/25 hover:shadow-red-600/40 transition-all duration-300 hover:scale-105">
            <Crown className="h-4 w-4 mr-2 animate-pulse" />
            PREMIUM EDITION
            <Zap className="h-4 w-4 ml-2" />
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
            A plataforma jurídica completa para estudos
          </p>
          <p className="text-lg text-red-400 font-semibold">
            Acesso vitalício • Sem mensalidades
          </p>
        </div>

        {/* Price Card */}
        <div className={`max-w-lg mx-auto mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-red-500/50 border-2 p-8 text-center backdrop-blur-sm shadow-2xl shadow-red-600/10 hover:shadow-red-600/20 transition-all duration-500 hover:scale-105 relative overflow-hidden">
            {/* Card Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent"></div>
            <div className="relative z-10">
              <div className="mb-8">
                <div className="text-5xl md:text-6xl font-bold text-red-500 mb-3 animate-pulse">
                  R$ 39,90
                </div>
                <div className="text-gray-300 text-base font-medium">
                  Pagamento único • Sem mensalidades
                </div>
                <div className="text-green-400 text-sm mt-2 font-semibold">
                  ✓ Acesso vitalício garantido
                </div>
              </div>
              
              <Button 
                onClick={handlePremiumClick} 
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-6 text-lg transition-all duration-300 shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:scale-105 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <Crown className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                SER PREMIUM AGORA
                <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <div className="mt-6 flex items-center justify-center space-x-6 text-gray-400 text-sm">
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1 text-yellow-500" />
                  <span className="font-semibold">4.7 ⭐</span>
                </div>
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-1 text-green-500" />
                  <span>100% Seguro</span>
                </div>
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1 text-blue-500" />
                  <span>Verificado</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Features Grid */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Recursos <span className="text-red-500">Premium</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {premiumFeatures.map((feature, index) => (
              <div 
                key={index} 
                className={`group flex items-center space-x-4 p-5 bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-xl border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-600/10 backdrop-blur-sm ${feature.highlight ? 'ring-2 ring-red-500/30' : ''}`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="text-red-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-3 gap-6 mb-16 max-w-2xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center group hover:scale-105 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2 group-hover:text-red-400">10K+</div>
            <div className="text-gray-400 text-sm group-hover:text-gray-300">Usuários Ativos</div>
          </div>
          <div className="text-center group hover:scale-105 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2 group-hover:text-red-400">4.7★</div>
            <div className="text-gray-400 text-sm group-hover:text-gray-300">Avaliação</div>
          </div>
          <div className="text-center group hover:scale-105 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2 group-hover:text-red-400">99%</div>
            <div className="text-gray-400 text-sm group-hover:text-gray-300">Aprovação</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mb-12 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-red-600/10 to-red-700/10 border border-red-500/30 rounded-2xl p-8 max-w-2xl mx-auto backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Transforme seus estudos jurídicos
            </h3>
            <p className="text-gray-300 mb-6">
              Junte-se a milhares de estudantes e profissionais que já escolheram a excelência
            </p>
            <Button 
              onClick={handlePremiumClick}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 py-3 transition-all duration-300 hover:scale-105 shadow-lg shadow-red-600/30"
            >
              <Smartphone className="h-5 w-5 mr-2" />
              Começar Agora
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center text-gray-500 text-sm transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p>© 2024 Direito 360° Premium. Todos os direitos reservados.</p>
          <p className="mt-2 text-xs">Desenvolvido com excelência para profissionais do direito</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
