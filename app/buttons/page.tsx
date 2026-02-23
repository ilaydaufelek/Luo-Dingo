import { Button } from "@/components/ui/button"

const ButtonPage=()=>{
    return(
        <div className="flex flex-col p-4 space-y-4 max-w-50 ">
            <Button>Default</Button>
              <Button variant="primary" >primry  </Button>
               <Button variant="primaryOutline">primry outline </Button>
              <Button  variant="secondary" >secondary </Button>
               <Button variant="primaryOutline" >secondary outline </Button>
               <Button variant="danger" >danger  </Button>
               <Button variant="dangerOutline" >danger outline </Button>
               <Button variant="sidebar" >sidebar  </Button>
               <Button variant="sidebarOutline" > sidebar outline </Button>
                  <Button variant="ghost" >ghost  </Button>


        </div>
    )
}

export default ButtonPage