"use client";
import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Home ( ){
return(
    <div className="max-w-74.5 mx-auto flex-1 w-full flex flex-col xl:flex-row  items-center justify-center p-4 gap-2  " >
    <div className="relative w-60 h-60 lg:w-106 lg:h-106 mb-8 lg:mb-4 shrink-0">
  <Image
    src="/hero.png"
    fill
    alt="Hero"
    className="object-contain"
    priority
  />
</div>
     <div className="flex flex-col items-center gap-y-8" >
        <h1 className="text-xl lg:text-2xl   font-bold text-neutral-600 max-w-120 text-center " >
            Learn practice,and master new languages with Lua Dingo
        </h1>
        <div className="flex flex-col items-center gap-y-3 max-w-82.5" >
        <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
       </ClerkLoading>
       <ClerkLoaded>
          <SignedOut>
            <SignUpButton
            mode="modal" signInFallbackRedirectUrl="/learn" >
            <Button  size="lg" variant="secondary" className="w-full" >
           Get Started
            </Button>
            </SignUpButton>
            <SignInButton
            mode="modal" signUpFallbackRedirectUrl="/learn" >
            <Button  size="lg" variant="primaryOutline" className="w-full mt-2 " >
           I already have an account
            </Button>
            </SignInButton>
        </SignedOut>
        <SignedIn>
            <Button size="lg" variant="secondary" className="w-full" asChild >
            <Link href="/learn" >
            Continue Learning
            </Link>
            </Button>
        </SignedIn>
       </ClerkLoaded>

        </div>
     </div>
    </div>
)
}