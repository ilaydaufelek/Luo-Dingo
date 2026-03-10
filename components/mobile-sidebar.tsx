import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Sidebar } from "./sidebar";


export const MobileSidebar  = () => {
    return ( 
       <Sheet>
        <SheetTrigger><Menu className="text-white" /></SheetTrigger>
       
        <SheetContent className="z-100"  side="left" >
   <SheetTitle className="hidden" >Menu</SheetTitle>
<Sidebar/>
        </SheetContent>
       </Sheet>
    );
}