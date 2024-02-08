import { Card, CardContent } from "@/components/ui/card";

export default function Billingage() {
    return (
        <div className="max-w-md mx-auto space-y-4">
            <Card className="flex flex-col">
                <CardContent className="py-8">
                    <div>
                        <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide
                        uppercase bg-primary/10 text-primary">
                            Mensuel
                        </h3>
                    </div>

                    <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                        9.99 € <span className="ml-1 text-2xl text-muted-foreground">/mois</span>
                    </div>
                    <p className="mt-5 text-lg text-muted-foreground">Profiter D&apos;un Accès illimité</p>
                    <p className="mt-5 text-lg text-muted-foreground">Obtenez Un Support prioritaire</p>
                    <p className="mt-5 text-lg text-muted-foreground">Une Synchronisation Multi-Appareils</p>
                </CardContent>
            </Card>
        </div>
    )
}