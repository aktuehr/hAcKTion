import { createClient } from 'microcms-js-sdk';
import { serviceDomain } from 'constants/micro-cms';

export const client = createClient({
  serviceDomain: serviceDomain,
  apiKey: process.env.API_KEY,
});