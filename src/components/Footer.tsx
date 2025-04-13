import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-apple-gray/80 py-6 text-sm text-apple-default/80">
      <div className="container-apple">
        <div className="border-b border-apple-default/10 pb-6 mb-6">
          <p>
            Подарочные карты Apple Store доступны в различных номиналах. Они могут быть использованы для покупок в Apple Store, 
            на сайте apple.com, в App Store, iTunes Store и других сервисах Apple.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Магазин</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="hover:text-apple-blue transition-colors">Подарочные карты</Link></li>
              <li><Link to="/instructions" className="hover:text-apple-blue transition-colors">Инструкции</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">О нас</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-apple-blue transition-colors">Политика конфиденциальности</Link></li>
              <li><Link to="/" className="hover:text-apple-blue transition-colors">Условия использования</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Поддержка</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-apple-blue transition-colors">Связаться с нами</Link></li>
              <li><Link to="/instructions" className="hover:text-apple-blue transition-colors">Помощь</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-apple-default/10 text-xs text-apple-default/60">
          <p>© {new Date().getFullYear()} Apple Gift Cards. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;