import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-5xl mx-auto flex items-center gap-2 h-full">
        <Button size="lg" variant="ghost" className="flex-1">
          <Image
            className="mr-4 rounded-md"
            width={40}
            height={32}
            src="/tr.svg"
            alt="Turkish"
          />
          Turkish
        </Button>

        <Button size="lg" variant="ghost" className="flex-1">
          <Image
            className="mr-4 rounded-md"
            width={40}
            height={32}
            src="/it.svg"
            alt="Italian"
          />
          Italian
        </Button>

        <Button size="lg" variant="ghost" className="flex-1">
          <Image
            className="mr-4 rounded-md"
            width={40}
            height={32}
            src="/jp.svg"
            alt="Japanese"
          />
          Japanese
        </Button>
      </div>
    </footer>
  );
};