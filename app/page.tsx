import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";


export default function Home() {
  return (
    <section className="flex items-center justify-center bg-background h-[90vh]">
      <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <div>
            <span className="w-auto px-6 py-3 rounded-full bg-secondary">
              <span className="text-sm font-medium text-primary">Trier facilement vos notes</span>
            </span>

            <h1 className="mt-8 text-3xl font-extrabold tracking-tight lg:text-6xl">Créer une note facilement</h1>

            <p className="max-w-xl mx-auto mt-8 text-base lg:text-xl textsecondary-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis imperdiet eros.
              Vivamus auctor lorem vel enim cursus, sed ornare tortor dictum. Donec in facilisis lacus,
              quis ultricies turpis. Nam at tempus risus. Nulla a ex congue, ullamcorper turpis quis, egestas magna.
            </p>
          </div>

          <div className="flex justify-center max-w-sm mx-auto mt-10">
            <RegisterLink>
            <Button size="lg" className="w-full">
              S&apos;inscrire gratuitement
            </Button>
            </RegisterLink>
          </div>
        </div>
      </div>
    </section>
  );
}
