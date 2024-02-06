import Link from "next/link";
import { ThemeToggle } from "./Themetoggle";
import { Button } from "@/components/ui/button";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";



export async function Navbar() {
    const { isAuthenticated } = getKindeServerSession();
    return (
        <nav className="border-b bg-background h-[10vh] flex items-center" >
            <div className="container flex items-center justify-between">
                <Link href={"/"}>
                    <h1 className="font-bold text-3xl">NotPadSaaS</h1>
                </Link>

                <div className="flex items-center gap-x-5">
                    <ThemeToggle />

                    {await isAuthenticated() ? (
                        <LogoutLink>
                            <Button>Se déconnecter</Button>
                        </LogoutLink>
                    ) : (
                        <div className="flex items-center gap-x-5">
                            <LoginLink>
                                <Button>Se Connecter</Button>
                            </LoginLink>

                            <RegisterLink>
                                <Button variant="secondary">S&apos;inscrire</Button>
                            </RegisterLink>
                        </div>
                    )}
                </div>

            </div>
        </nav>
    )
}
