import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface UpworkCatalogCardProps {
  title: string;
  description: string;
  url: string;
  image: string;
  price: string;
  type: string;
  icon: React.ReactNode;
}

export function UpworkCatalogCard({
  title,
  description,
  url,
  image,
  price,
  icon,
  type,
}: UpworkCatalogCardProps) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col overflow-hidden">
      {image && (
        <div className="relative w-full h-44 bg-muted">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 400px"
          />
        </div>
      )}
      <div className="flex flex-col flex-1 p-4 gap-2">
        <h3 className="text-lg font-semibold leading-tight">{title}</h3>
        <p className="text-sm text-muted-foreground flex-1 text-ellipsis line-clamp-6">
          {description}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-bold text-primary">{price}</span>
          <Link href={url} target="_blank">
            <Badge className="flex gap-2 px-2 py-1 text-[10px] bg-green-500 hover:bg-green-400">
              {icon}
              {type}
            </Badge>
          </Link>
        </div>
      </div>
    </div>
  );
}
