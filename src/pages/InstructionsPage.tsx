import StepCard from "@/components/StepCard";

const InstructionsPage = () => {
  return (
    <div>
      <section className="bg-gradient-to-b from-apple-gray/50 to-white py-16">
        <div className="container-apple text-center">
          <h1 className="text-4xl font-semibold mb-4">Инструкция по использованию</h1>
          <p className="text-lg text-apple-default/70 max-w-2xl mx-auto">
            Узнайте, как активировать и использовать подарочные карты Apple
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-apple">
          <div className="max-w-3xl mx-auto space-y-6">
            <StepCard number={1} title="Получение кода" icon="📧">
              <p>
                После покупки на указанный вами email придет письмо с кодом активации подарочной карты.
                Это может занять до 15 минут. Проверьте папку "Спам", если письмо не пришло в основной почтовый ящик.
              </p>
            </StepCard>
            
            <StepCard number={2} title="Вход в учетную запись" icon="🔑">
              <p>
                Убедитесь, что вы вошли в свою учетную запись Apple ID на устройстве, 
                на котором планируете использовать подарочную карту.
              </p>
            </StepCard>
            
            <StepCard number={3} title="Активация карты" icon="🎯">
              <p>
                Откройте App Store на iPhone или iPad, iTunes Store на компьютере или apple.com/redeem в браузере.
                Нажмите на свою аватарку профиля и выберите "Погасить подарочную карту или код".
              </p>
            </StepCard>
            
            <StepCard number={4} title="Ввод кода" icon="⌨️">
              <p>
                Введите 16-значный код с подарочной карты. Вы можете также воспользоваться 
                камерой вашего устройства, чтобы отсканировать код (для физических карт).
              </p>
            </StepCard>
            
            <StepCard number={5} title="Подтверждение" icon="✅">
              <p>
                После успешного ввода кода, указанная сумма будет добавлена на ваш счет Apple ID. 
                Вы получите подтверждение с указанием нового баланса.
              </p>
            </StepCard>
            
            <StepCard number={6} title="Использование" icon="🛍️">
              <p>
                Теперь вы можете использовать средства для покупок в App Store, iTunes Store, 
                оплаты подписок Apple Music, Apple TV+, Apple Arcade, iCloud+ и других сервисов Apple.
              </p>
            </StepCard>
          </div>
          
          <div className="mt-16 bg-apple-gray/30 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Часто задаваемые вопросы</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Что делать, если код не работает?</h3>
                <p className="text-sm text-apple-default/70">
                  Убедитесь, что вы правильно ввели код без пробелов. Если проблема не устранена, 
                  обратитесь в нашу службу поддержки с указанием номера заказа.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Можно ли использовать карту частично?</h3>
                <p className="text-sm text-apple-default/70">
                  Да, средства будут добавлены на ваш счет Apple ID, и вы можете использовать их частями для разных покупок.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Есть ли срок действия у подарочных карт?</h3>
                <p className="text-sm text-apple-default/70">
                  Подарочные карты Apple не имеют срока действия. Однако рекомендуется активировать их в течение разумного периода времени.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstructionsPage;