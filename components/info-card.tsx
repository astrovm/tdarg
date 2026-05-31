import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function InfoCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <Card className="bg-card border shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-base">
          <span className="h-2 w-2 rounded-full bg-foreground/70" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2.5 text-sm">
        {items.map((item) => (
          <div key={item} className="flex gap-2.5">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
              <Check className="h-3.5 w-3.5" />
            </span>
            <span className="leading-relaxed text-muted-foreground">{item}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
