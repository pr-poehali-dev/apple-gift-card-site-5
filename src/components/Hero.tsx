import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-apple text-center">
        <h1 className="text-4xl md:text-6xl font-semibold mb-4">
          Подарочные карты Apple
        </h1>
        <p className="text-xl md:text-2xl text-apple-default/70 max-w-2xl mx-auto mb-8">
          Идеальный подарок для всех, кто любит продукты Apple
        </p>
        <Link to="/products" className="apple-button">
          Купить сейчас
        </Link>
      </div>
    </section>
  );
};

export default Hero;