import { useState } from "react";
import { Button } from "@/components/ui/button";
import GiftCardDisplay from "./GiftCardDisplay";

interface GiftCardProps {
  value: number;
  imageSrc: string;
}

const GiftCard = ({ value, imageSrc }: GiftCardProps) => {
  const [isAdding, setIsAdding] = useState(false);
  
  const handleAddToCart = () => {
    setIsAdding(true);
    
    // Имитация добавления в корзину
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };
  
  const formattedValue = new Intl.NumberFormat('ru-RU').format(value);
  
  return (
    <GiftCardDisplay value={formattedValue} imageSrc={imageSrc}>
      <div className="flex flex-col gap-4">
        <p className="text-sm text-apple-default/70">
          Используйте для покупок в сервисах Apple
        </p>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-lg">{formattedValue} ₽</span>
          <Button 
            className="apple-button"
            disabled={isAdding}
            onClick={handleAddToCart}
          >
            {isAdding ? "Добавляется..." : "Купить"}
          </Button>
        </div>
      </div>
    </GiftCardDisplay>
  );
};

export default GiftCard;