import { CreditCard, Home, Settings } from "lucide-react"
import Link from "next/link"

export const navItems = [
    {name: 'Acceuil', href: '/dashboard', icon: Home},
    {name: 'Réglages', href: '/dashboard/settings', icon: Settings},
    {name: 'Abonnement', href: '/dashboard/billing', icon: CreditCard}
]

export function DashboardNav() {
    return <nav className="grid items-start gap-2">{navItems.map((item, index) => (
        <Link key={index} href={item.href}>
            <span>
                <item.icon className="mr-2 h-4 w-4"/>
                <span>{item.name}</span>
            </span>
        </Link>
    ))}</nav>
    
}