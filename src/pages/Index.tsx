import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const attractions = [
    {
      id: 1,
      title: "Королевский замок",
      description: "Величественные руины средневекового замка Тевтонского ордена",
      image: "/img/d50599b4-77bc-4a41-b2bc-cafa41c21b3e.jpg",
      rating: 4.8,
      category: "Замки"
    },
    {
      id: 2,
      title: "Кафедральный собор",
      description: "Готический собор XIV века с могилой Иммануила Канта",
      image: "/img/9005a2d6-408a-4e4a-a421-462b58ead230.jpg",
      rating: 4.9,
      category: "История"
    },
    {
      id: 3,
      title: "Музей янтаря",
      description: "Уникальная коллекция прусского золота в башне Дона",
      image: "/img/1069f665-d41a-40c3-b9b1-83758f26d25c.jpg",
      rating: 4.7,
      category: "Музеи"
    }
  ];

  const sections = [
    { name: "Фотогалерея", icon: "Camera", description: "Атмосферные снимки города" },
    { name: "История", icon: "BookOpen", description: "Тысячелетняя история Пруссии" },
    { name: "Замки", icon: "Castle", description: "Крепости Тевтонского ордена" },
    { name: "Музеи", icon: "Building2", description: "Сокровища прусской культуры" },
    { name: "Рестораны", icon: "UtensilsCrossed", description: "Прусская кухня и деликатесы" },
    { name: "Отели", icon: "Bed", description: "Уютные места для ночлега" },
    { name: "Полезная информация", icon: "Info", description: "Карты, маршруты, советы" },
    { name: "Отзывы", icon: "MessageSquare", description: "Мнения путешественников" },
    { name: "Контакты", icon: "Mail", description: "Связь и поддержка" }
  ];

  const languages = ["RU", "EN", "DE", "中文"];

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #F5F5DC 0%, #E6D5A8 50%, #D4C5A9 100%)' }}>
      {/* Header */}
      <header className="bg-medieval-brown/90 backdrop-blur-sm text-medieval-parchment py-4 px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Icon name="Crown" size={32} className="text-medieval-amber" />
            <h1 className="text-2xl font-bold" style={{ fontFamily: 'Cormorant, serif' }}>
              Калининград
            </h1>
            <span className="text-sm text-medieval-amber">• Königsberg</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="text-medieval-parchment hover:text-medieval-amber">
              <Icon name="Map" size={16} className="mr-2" />
              Карта
            </Button>
            <Button variant="ghost" className="text-medieval-parchment hover:text-medieval-amber">
              <Icon name="Calendar" size={16} className="mr-2" />
              События
            </Button>
            <div className="flex space-x-1">
              {languages.map((lang) => (
                <Button
                  key={lang}
                  variant={lang === "RU" ? "default" : "outline"}
                  size="sm"
                  className={`text-xs px-2 py-1 ${
                    lang === "RU" 
                      ? "bg-medieval-amber text-medieval-brown" 
                      : "border-medieval-amber text-medieval-amber hover:bg-medieval-amber hover:text-medieval-brown"
                  }`}
                >
                  {lang}
                </Button>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-medieval-brown mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
            Königsberg
          </h1>
          <p className="text-xl md:text-2xl text-medieval-steel mb-4">
            Средневековая жемчужина на Балтийском море
          </p>
          <p className="text-lg text-medieval-steel/80 max-w-2xl mx-auto mb-8">
            Откройте для себя тысячелетнюю историю древней Пруссии, 
            величественные замки Тевтонского ордена и янтарные сокровища Балтики
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="bg-medieval-amber text-medieval-brown hover:bg-medieval-gold">
              <Icon name="Map" size={20} className="mr-2" />
              Интерактивная карта
            </Button>
            <Button size="lg" variant="outline" className="border-medieval-brown text-medieval-brown hover:bg-medieval-brown hover:text-medieval-parchment">
              <Icon name="Calendar" size={20} className="mr-2" />
              События сегодня
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-medieval-brown">750+</div>
              <div className="text-sm text-medieval-steel">лет истории</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-medieval-brown">15</div>
              <div className="text-sm text-medieval-steel">замков</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-medieval-brown">25</div>
              <div className="text-sm text-medieval-steel">музеев</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-medieval-brown">4.8</div>
              <div className="text-sm text-medieval-steel">рейтинг</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Attractions */}
      <section className="py-16 px-6 bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-medieval-brown mb-12" style={{ fontFamily: 'Cormorant, serif' }}>
            Главные достопримечательности
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {attractions.map((attraction) => (
              <Card key={attraction.id} className="group hover:shadow-xl transition-all duration-300 border-medieval-brown/20 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-medieval-amber text-medieval-brown">
                    {attraction.category}
                  </Badge>
                  <div className="absolute top-4 right-4 bg-white/90 rounded-full px-2 py-1 flex items-center">
                    <Icon name="Star" size={14} className="text-medieval-amber mr-1 fill-current" />
                    <span className="text-sm font-semibold">{attraction.rating}</span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-medieval-brown" style={{ fontFamily: 'Cormorant, serif' }}>
                    {attraction.title}
                  </CardTitle>
                  <CardDescription className="text-medieval-steel">
                    {attraction.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Button variant="outline" className="border-medieval-brown text-medieval-brown hover:bg-medieval-brown hover:text-white">
                      Подробнее
                    </Button>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost">
                        <Icon name="Heart" size={16} />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Icon name="Share2" size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Sections */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-medieval-brown mb-12" style={{ fontFamily: 'Cormorant, serif' }}>
            Разделы сайта
          </h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-medieval-brown/20 cursor-pointer">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-medieval-amber/20 w-fit group-hover:bg-medieval-amber/30 transition-colors">
                    <Icon name={section.icon as any} size={24} className="text-medieval-brown" />
                  </div>
                  <CardTitle className="text-medieval-brown" style={{ fontFamily: 'Cormorant, serif' }}>
                    {section.name}
                  </CardTitle>
                  <CardDescription className="text-medieval-steel">
                    {section.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-medieval-brown text-medieval-parchment">
        <div className="max-w-4xl mx-auto text-center">
          <Icon name="Compass" size={48} className="mx-auto mb-6 text-medieval-amber" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
            Начните своё путешествие
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Спланируйте идеальный маршрут по Калининграду с нашими интерактивными картами и персональными рекомендациями
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-medieval-amber text-medieval-brown hover:bg-medieval-gold">
              <Icon name="Route" size={20} className="mr-2" />
              Построить маршрут
            </Button>
            <Button size="lg" variant="outline" className="border-medieval-amber text-medieval-amber hover:bg-medieval-amber hover:text-medieval-brown">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать гид
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-medieval-steel text-medieval-parchment py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-6 mb-6">
            <Icon name="Crown" size={24} className="text-medieval-amber" />
            <span className="text-lg font-semibold" style={{ fontFamily: 'Cormorant, serif' }}>
              Калининград • Königsberg
            </span>
          </div>
          
          <div className="flex justify-center space-x-6 mb-6">
            <Button variant="ghost" size="sm" className="text-medieval-parchment hover:text-medieval-amber">
              <Icon name="Instagram" size={16} className="mr-2" />
              Instagram
            </Button>
            <Button variant="ghost" size="sm" className="text-medieval-parchment hover:text-medieval-amber">
              <Icon name="Facebook" size={16} className="mr-2" />
              Facebook
            </Button>
            <Button variant="ghost" size="sm" className="text-medieval-parchment hover:text-medieval-amber">
              <Icon name="Youtube" size={16} className="mr-2" />
              YouTube
            </Button>
          </div>
          
          <p className="text-sm opacity-70">
            © 2024 Калининград Туризм. Откройте для себя наследие Пруссии.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;