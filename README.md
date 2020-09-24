# QuotesWatch

All the ingame persona we will never forget!

Made using NextJs + Firebase Firestore

## Demo

https://quoteswatch.herokuapp.com/

## Config

- Create a firestore root collection named "quotes"

- Add entries with attributes:

  - ID: auto-generated by firestore
  - game: string (Case-sensitive)
  - character: string (Case-sensitive)
  - quote: string (Case-sensitive)

- Create a .env file with firebase access config (sample provided)

- Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### This is a [Next.js](https://nextjs.org/) project.
