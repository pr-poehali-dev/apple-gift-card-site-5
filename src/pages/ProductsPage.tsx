import GiftCard from "@/components/GiftCard";

const ProductsPage = () => {
  const giftCards = [
    {
      id: 1,
      value: 1000,
      imageSrc: "/placeholder.svg",
    },
    {
      id: 2,
      value: 2500,
      imageSrc: "/placeholder.svg",
    },
    {
      id: 3,
      value: 5000,
      imageSrc: "/placeholder.svg",
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-b from-apple-gray/50 to-white py-16">
        <div className="container-apple text-center">
          <h1 className="text-4xl font-semibold mb-4">Подарочные карты Apple</h1>
          <p className="text-lg text-apple-default/70 max-w-2xl mx-auto">
            Выберите номинал и приобретите подарочную карту для использования в сервисах Apple
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-apple">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {giftCards.map((card) => (
              <GiftCard 
                key={card.id}
                value={card.value}
                imageSrc={card.imageSrc}
              />
            ))}
          </div>
          
          <div className="mt-16 bg-apple-gray/30 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Информация о подарочных картах</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-2">Использование</h3>
                <p className="text-sm text-apple-default/70">
                  Подарочные карты Apple могут быть использованы для покупок в App Store, iTunes Store, 
                  для оплаты подписок Apple Music, Apple TV+, Apple Arcade, iCloud+ и других сервисов Apple.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Активация</h3>
                <p className="text-sm text-apple-default/70">
                  После покупки вы получите код активации на указанный email. 
                  Инструкция по использованию кода доступна в разделе "Инструкции".
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Срок действия</h3>
                <p className="text-sm text-apple-default/70">
                  Подарочные карты Apple не имеют срока действия и могут быть использованы в любое время.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Ограничения</h3>
                <p className="text-sm text-apple-default/70">
                  Подарочные карты нельзя обменять на наличные, перепродать или использовать для покупки 
                  других подарочных карт. Подробные условия использования доступны на сайте Apple.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;