import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import prisma from "@/app/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@/components/ui/button";


async function getData(userId: string) {
    const data = await prisma.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            name: true,
            email: true,
            colorScheme: true,
        }
    });

    return data;
}

export default async function SettingPage() {
    const {getUser} = getKindeServerSession()
    const user = await getUser();
    const data = await getData(user?.id as string)

    async function postData(formData: FormData) {
        "use server";

        const name = formData.get("name") as string;
        const colorScheme = formData.get("color")as string;

        await prisma.user.update({
            where: {
                id: user?.id
            },
            data: {
                name: name ?? undefined,
                colorScheme: colorScheme ?? undefined,
            },
        });
    }

    return (
        <div className="grid items-start gap-8">
            <div className="flex items-center justify-between px-2">
                <div className="grid gap-1">
                    <h1 className="text-3xl md:text-4xl">Réglages</h1>
                    <p className="text-lg text-muted-foreground">Réglages de votre profil</p>
                </div>
            </div>

            <Card>
                <form action={postData}>
                    <CardHeader>
                        <CardTitle>Général</CardTitle>
                        <CardDescription>Veuillez fournir des informations générales sur vous. N&apos;oubliez pas de sauvegarder ! </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <div className="space-y-1">
                                <Label>Votre Nom</Label>
                                <Input name="nom" defaultValue={data?.name ?? undefined} type="text" placeholder="Votre Nom" id="name"   />
                            </div>
                            <div className="space-y-1">
                                <Label>Votre Email</Label>
                                <Input name="email" defaultValue={data?.email as string} type="email" placeholder="Votre Email" id="email"  disabled  />
                            </div>

                            <div className="space-y-1">
                                <Label>Thème de couleur</Label>
                                <Select name="color" defaultValue={data?.colorScheme}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Sélectionner  votre couleur" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Couleur</SelectLabel>
                                            <SelectItem value="theme-green">Vert</SelectItem>
                                            <SelectItem value="theme-blue">Bleu</SelectItem>
                                            <SelectItem value="theme-yellow">Jaune</SelectItem>
                                            <SelectItem value="theme-orange">Orange</SelectItem>
                                            <SelectItem value="theme-violet">Violet</SelectItem>
                                            <SelectItem value="theme-red">Rouge</SelectItem>
                                            <SelectItem value="theme-red">Rose</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </CardContent>

                    <CardFooter>
                        <Button>Sauvegarder</Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}