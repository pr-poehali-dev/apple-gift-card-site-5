import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import GiftCardDisplay from "@/components/GiftCardDisplay";

const HomePage = () => {
  return (
    <div>
      <Hero />
      
      <section className="py-16 bg-apple-gray/30">
        <div className="container-apple">
          <h2 className="text-3xl font-semibold text-center mb-12">Выберите свою подарочную карту</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/products" className="block transform transition-transform hover:scale-105">
              <GiftCardDisplay value="1 000" imageSrc="/placeholder.svg">
                <p className="text-sm text-apple-default/70 mb-3">
                  Идеально для небольших покупок в App Store или iTunes
                </p>
                <div className="text-apple-blue font-medium">Подробнее →</div>
              </GiftCardDisplay>
            </Link>
            
            <Link to="/products" className="block transform transition-transform hover:scale-105">
              <GiftCardDisplay value="2 500" imageSrc="/placeholder.svg">
                <p className="text-sm text-apple-default/70 mb-3">
                  Подходит для приобретения подписок и различных сервисов
                </p>
                <div className="text-apple-blue font-medium">Подробнее →</div>
              </GiftCardDisplay>
            </Link>
            
            <Link to="/products" className="block transform transition-transform hover:scale-105">
              <GiftCardDisplay value="5 000" imageSrc="/placeholder.svg">
                <p className="text-sm text-apple-default/70 mb-3">
                  Для тех, кто хочет получить максимум от покупок в Apple
                </p>
                <div className="text-apple-blue font-medium">Подробнее →</div>
              </GiftCardDisplay>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-apple text-center">
          <h2 className="text-3xl font-semibold mb-6">Почему выбирают наши подарочные карты</h2>
          <p className="text-lg text-apple-default/70 max-w-2xl mx-auto mb-12">
            Универсальность, простота использования и элегантный дизайн в стиле Apple
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-xl font-medium mb-2">Идеальный подарок</h3>
              <p className="text-sm text-apple-default/70">
                Подарите близким возможность выбрать то, что они действительно хотят
              </p>
            </div>
            
            <div className="p-6">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-medium mb-2">Универсальность</h3>
              <p className="text-sm text-apple-default/70">
                Используйте для покупок в App Store, iTunes, Apple Music и других сервисах
              </p>
            </div>
            
            <div className="p-6">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-medium mb-2">Безопасность</h3>
              <p className="text-sm text-apple-default/70">
                Гарантированная активация и защита от мошенничества
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <Link to="/instructions" className="text-apple-blue font-medium">
              Узнать больше о использовании подарочных карт →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;