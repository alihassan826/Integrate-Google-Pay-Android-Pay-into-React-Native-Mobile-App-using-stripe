const express = require('express')
const app = express()
const stripe = require('stripe')('stripe_secret_token');


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/create-payment-intent', async (req, res) => {
    try {

        const paymentIntent = await stripe.paymentIntents.create({
            payment_method_types: ['card'],
            amount: 1099,
            currency: 'usd',
        });

        res.status(200).json(paymentIntent);
    } catch (error) {
        res.status(505).send(JSON.stringify(error))
    }
})

app.listen(3000, () => console.log('Api is running'))
