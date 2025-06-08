
import { useState, useEffect } from "react";
import { Star, CheckCircle, Smartphone, Download, BookOpen, Headphones, Heart, FileText, GraduationCap, Scale, MapPin, Monitor, Crown, Shield, ArrowRight, Play, Sparkles } from "lucide-react";
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
    { icon: <Crown className="h-6 w-6" />, text: "Pagamento único - sem mensalidades", highlight: true },
    { icon: <Shield className="h-6 w-6" />, text: "Experiência sem anúncios", highlight: false },
    { icon: <Scale className="h-6 w-6" />, text: "Vade Mecum Pro com comentários em áudio", highlight: false },
    { icon: <Heart className="h-6 w-6" />, text: "Sistema de favoritos personalizado", highlight: false },
    { icon: <FileText className="h-6 w-6" />, text: "Anotações inteligentes", highlight: false },
    { icon: <GraduationCap className="h-6 w-6" />, text: "Acesso exclusivo a cursos jurídicos", highlight: true },
    { icon: <Headphones className="h-6 w-6" />, text: "JuriCast Pro - +100 episódios", highlight: false },
    { icon: <BookOpen className="h-6 w-6" />, text: "Biblioteca com +300 livros jurídicos", highlight: true },
    { icon: <CheckCircle className="h-6 w-6" />, text: "Simulados completos da OAB", highlight: false },
    { icon: <Download className="h-6 w-6" />, text: "Acesso offline ilimitado", highlight: false },
    { icon: <MapPin className="h-6 w-6" />, text: "Mapas mentais exclusivos", highlight: false },
    { icon: <Monitor className="h-6 w-6" />, text: "Sincronização multiplataforma", highlight: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/0 to-slate-950/0"></div>
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-red-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-red-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20 max-w-7xl">
          {/* Header */}
          <div className={`text-center mb-20 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <Scale className="h-16 w-16 text-red-500 mr-6 drop-shadow-2xl" />
                <Sparkles className="h-6 w-6 text-yellow-400 absolute -top-2 -right-2 animate-pulse" />
              </div>
              <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Direito 360°
              </h1>
            </div>
            
            <div className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-3 rounded-full text-lg font-bold mb-10 shadow-2xl shadow-red-600/25 border border-red-400/20">
              <Crown className="h-5 w-5 mr-3" />
              PREMIUM EDITION
              <Sparkles className="h-4 w-4 ml-3 animate-pulse" />
            </div>
            
            <h2 className="text-3xl md:text-4xl text-gray-300 mb-8 font-light max-w-4xl mx-auto leading-relaxed">
              A plataforma jurídica mais <span className="text-transparent bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text font-semibold">completa</span> e <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-semibold">avançada</span>
            </h2>
            <div className="flex items-center justify-center space-x-8 text-xl">
              <div className="flex items-center text-emerald-400 font-semibold">
                <CheckCircle className="h-6 w-6 mr-2" />
                Acesso Vitalício
              </div>
              <div className="h-6 w-px bg-gray-600"></div>
              <div className="flex items-center text-amber-400 font-semibold">
                <Shield className="h-6 w-6 mr-2" />
                Sem Mensalidades
              </div>
            </div>
          </div>

          {/* Price Card */}
          <div className={`max-w-2xl mx-auto mb-24 transition-all duration-1500 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <Card className="relative p-12 text-center bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-slate-700/50 backdrop-blur-xl shadow-2xl shadow-black/50">
              {/* Premium Badge */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  🏆 OFERTA LIMITADA
                </div>
              </div>
              
              <div className="mb-10">
                <div className="text-7xl md:text-8xl font-black text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text mb-4">
                  R$ 39,90
                </div>
                <div className="text-gray-400 text-xl mb-6 line-through">
                  De R$ 197,90
                </div>
                <div className="inline-flex items-center bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 text-emerald-300 px-6 py-3 rounded-full text-lg font-semibold backdrop-blur-sm">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Garantia de 30 dias • Pagamento seguro
                </div>
              </div>
              
              <Button 
                onClick={handlePremiumClick} 
                className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold py-6 text-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-red-600/25 border border-red-400/20"
              >
                <Play className="h-6 w-6 mr-3" />
                GARANTIR ACESSO PREMIUM
                <ArrowRight className="h-6 w-6 ml-3" />
              </Button>
              
              <div className="mt-8 grid grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="flex items-center text-yellow-400 text-lg font-bold mb-2">
                    <Star className="h-5 w-5 mr-1 fill-current" />
                    4.9/5.0
                  </div>
                  <span className="text-gray-400 text-sm">Avaliação</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-emerald-400 text-lg font-bold mb-2">15K+</div>
                  <span className="text-gray-400 text-sm">Usuários</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-blue-400 text-lg font-bold mb-2">99%</div>
                  <span className="text-gray-400 text-sm">Aprovação</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-b from-slate-950/50 to-slate-900/50 backdrop-blur-sm border-y border-slate-800/50">
          <div className="container mx-auto px-4 py-20 max-w-7xl">
            <div className={`mb-20 transition-all duration-1500 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <h3 className="text-5xl md:text-6xl font-black text-center mb-6 text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text">
                Recursos Premium
              </h3>
              <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
                Descubra todos os recursos exclusivos que vão transformar seus estudos jurídicos
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {premiumFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className={`group relative p-8 rounded-2xl transition-all duration-500 hover:scale-105 ${
                      feature.highlight 
                        ? 'bg-gradient-to-br from-red-900/30 to-purple-900/30 border border-red-500/30 shadow-xl shadow-red-600/10' 
                        : 'bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/30 hover:border-slate-500/50'
                    } backdrop-blur-sm`}
                  >
                    {feature.highlight && (
                      <div className="absolute -top-3 -right-3">
                        <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                          ⭐ DESTAQUE
                        </div>
                      </div>
                    )}
                    
                    <div className={`${feature.highlight ? 'text-red-400' : 'text-gray-400 group-hover:text-white'} mb-4 transition-colors duration-300`}>
                      {feature.icon}
                    </div>
                    <p className={`${feature.highlight ? 'text-white font-semibold' : 'text-gray-300 group-hover:text-white'} text-lg leading-relaxed transition-colors duration-300`}>
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div className={`text-center transition-all duration-1500 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-3xl p-16 max-w-4xl mx-auto backdrop-blur-xl border border-slate-700/50 shadow-2xl shadow-black/50">
                <h4 className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text mb-8">
                  Transforme sua carreira jurídica
                </h4>
                <p className="text-gray-300 mb-12 text-xl leading-relaxed max-w-3xl mx-auto">
                  Junte-se a milhares de profissionais que já escolheram a excelência. 
                  Sua jornada para o sucesso começa aqui.
                </p>
                <Button 
                  onClick={handlePremiumClick}
                  className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold px-16 py-6 text-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-red-600/25 border border-red-400/20"
                >
                  <Smartphone className="h-6 w-6 mr-3" />
                  Começar Jornada Premium
                  <Sparkles className="h-5 w-5 ml-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-950/80 border-t border-slate-800/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Scale className="h-8 w-8 text-red-500 mr-3" />
                <span className="text-2xl font-bold text-white">Direito 360°</span>
              </div>
              <p className="text-gray-500 text-lg">
                © 2024 Direito 360° Premium. Transformando carreiras jurídicas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
