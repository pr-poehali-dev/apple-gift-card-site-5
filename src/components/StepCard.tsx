import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface StepCardProps {
  number: number;
  title: string;
  children: ReactNode;
  icon?: ReactNode;
}

const StepCard = ({ number, title, children, icon }: StepCardProps) => {
  return (
    <Card className="border border-apple-default/10 hover:border-apple-default/20 transition-all duration-300">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-full bg-apple-blue flex items-center justify-center text-white font-medium flex-shrink-0">
            {number}
          </div>
          <div>
            <h3 className="font-medium text-lg mb-2 flex items-center gap-2">
              {title}
              {icon && <span className="text-apple-default/70">{icon}</span>}
            </h3>
            <div className="text-apple-default/70 text-sm">
              {children}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StepCard;