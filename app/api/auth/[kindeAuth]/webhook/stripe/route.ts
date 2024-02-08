import { headers } from "next/headers"
import Stripe from "stripe"


export async function POST(req: Request) {
    const body = await req.text()

    const signature = headers().get('Stripe-signature')

    let event: Stripe.Event 

    try {

    } catch (error: unknow) {
        return new Response
    }
}