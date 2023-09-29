import {loadStripe} from '@stripe/stripe-js';



let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

    // stripePromise = loadStripe('pk_test_51Nv4ptCFqux8KfORgjyFWirE8J8dfzXT4N4W3w9nCk21xUkiUhKzrlFYbyaX0B7hBcm4k0SXqXFe3SvQOAkPKTXO00aesSW3sV');

    
  }

  return stripePromise;
}

export default getStripe;
