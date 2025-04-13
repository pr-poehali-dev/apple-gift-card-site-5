import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-apple-default/10">404</h1>
        <h2 className="text-3xl font-semibold mt-6 mb-4">Страница не найдена</h2>
        <p className="text-apple-default/70 mb-8 max-w-md mx-auto">
          Запрашиваемая страница не существует или была перемещена.
        </p>
        <Button asChild className="apple-button">
          <Link to="/">Вернуться на главную</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;