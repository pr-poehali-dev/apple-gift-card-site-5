import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface GiftCardProps {
  value: string;
  imageSrc: string;
  children?: ReactNode;
}

const GiftCardDisplay = ({ value, imageSrc, children }: GiftCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-[3/2] bg-gradient-to-br from-apple-gray to-white flex items-center justify-center p-4">
        <img 
          src={imageSrc} 
          alt={`Подарочная карта ${value} руб.`} 
          className="max-h-full w-auto object-contain" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium mb-2">Подарочная карта {value} ₽</h3>
        {children}
      </div>
    </Card>
  );
};

export default GiftCardDisplay;