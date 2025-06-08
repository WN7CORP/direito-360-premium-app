
import { useState, useEffect } from "react";
import { Star, CheckCircle, Smartphone, Download, BookOpen, Headphones, Heart, FileText, GraduationCap, Scale, MapPin, Monitor, Crown, Shield, ArrowRight, Sparkles } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header with Animation */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <Scale className="h-10 w-10 text-amber-400 mr-3 animate-pulse" />
              <Sparkles className="h-4 w-4 text-amber-300 absolute -top-1 -right-1 animate-bounce" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Direito 360°
            </h1>
          </div>
          
          <div className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Crown className="h-4 w-4 mr-2" />
            PREMIUM EDITION
          </div>
          
          <h2 className="text-xl md:text-2xl text-slate-300 mb-4 font-light leading-relaxed">
            A plataforma jurídica completa para seus estudos
          </h2>
          <p className="text-amber-400 font-semibold text-lg">
            Acesso vitalício • Sem mensalidades
          </p>
        </div>

        {/* Price Section with Enhanced Design */}
        <div className={`max-w-md mx-auto mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="p-8 text-center shadow-2xl border-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-amber-500/30 transition-all duration-500">
            <div className="mb-8">
              <div className="text-6xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-3">
                R$ 39,90
              </div>
              <div className="text-slate-300 text-lg mb-3">
                Pagamento único
              </div>
              <div className="flex items-center justify-center text-green-400 text-sm font-medium">
                <CheckCircle className="h-4 w-4 mr-2" />
                Acesso vitalício garantido
              </div>
            </div>
            
            <Button 
              onClick={handlePremiumClick} 
              className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <Crown className="h-5 w-5 mr-2 group-hover:animate-bounce" />
              SER PREMIUM AGORA
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <div className="mt-6 flex items-center justify-center space-x-6 text-slate-400 text-sm">
              <div className="flex items-center hover:text-amber-400 transition-colors duration-300">
                <Star className="h-4 w-4 mr-1 text-yellow-400" />
                <span>4.7 ⭐</span>
              </div>
              <div className="flex items-center hover:text-green-400 transition-colors duration-300">
                <Shield className="h-4 w-4 mr-1 text-green-400" />
                <span>100% Seguro</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Features with Staggered Animation */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Recursos <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Premium</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {premiumFeatures.map((feature, index) => (
              <div 
                key={index} 
                className={`flex items-center space-x-4 p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl hover:bg-slate-700/30 hover:border-amber-500/30 transition-all duration-300 hover:scale-105 group ${isVisible ? 'animate-fade-in' : ''}`}
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <div className="text-amber-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <p className="text-slate-200 text-sm group-hover:text-white transition-colors duration-300">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats with Enhanced Styling */}
        <div className={`grid grid-cols-3 gap-8 mb-16 max-w-lg mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2">10K+</div>
            <div className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300">Usuários</div>
          </div>
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2">4.7★</div>
            <div className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300">Avaliação</div>
          </div>
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2">99%</div>
            <div className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300">Aprovação</div>
          </div>
        </div>

        {/* Final CTA with Enhanced Design */}
        <div className={`text-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 max-w-2xl mx-auto hover:border-amber-500/30 transition-all duration-500">
            <h4 className="text-2xl font-bold text-white mb-4">
              Transforme seus estudos jurídicos
            </h4>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
              Junte-se a milhares de estudantes e profissionais que já escolheram a excelência
            </p>
            <Button 
              onClick={handlePremiumClick}
              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold px-10 py-4 text-lg hover:scale-105 transition-all duration-300 group"
            >
              <Smartphone className="h-5 w-5 mr-2 group-hover:animate-bounce" />
              Começar Agora
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-slate-500 text-sm mt-16">
          <p>© 2024 Direito 360° Premium. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
