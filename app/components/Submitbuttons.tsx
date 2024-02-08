"use client"

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom"

export function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <>
            {pending ? (
                <Button disabled className="w-fit">
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />Veuillez patienter</Button>
            ) : (
                <Button className="w-fit" type="submit">Sauvegarder maintenant</Button>
            )}
        </>
    );
}

export function StripeSubscritpionCreationButton() {
    const { pending } = useFormStatus()

    return (
        <>
            {pending ? (
                <Button disabled className="w-full">
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />Veuillez patienter
                </Button>
            ) : (
                <Button type="submit" className="w-full">
                    Créer un abonnement
                </Button>
            )}
        </>
    )
}