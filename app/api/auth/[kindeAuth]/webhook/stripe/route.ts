import { headers } from "next/headers"
import { stripe } from "@/app/lib/stripe";
import Stripe from "stripe"


export async function POST(req: Request) {
    const body = await req.text()

    const signature = headers().get('Stripe-signature') as string;

    let event: Stripe.Event

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET as string
        );
    } catch (error: unknown) {
        return new Response('webhook error', { status: 404 });
    }

    const session = event.data.object as Stripe.Checkout.Session;

    if(event.type === 'checkout.session.completed') {
        const subscription = await stripe.subscriptions.retrieve(
            session.subscription as string
        );
    }
}