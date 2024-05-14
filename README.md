## Getting Started

First, clone or download the code from the source repository:

```bash
git clone https://github.com/AnikHadi/flightDataShow.git
```

Second, run npm install to get all dependencies & packages:

```bash
npm install
```

Next Step: Create environment file in this project:

Environment variable name is similar to,

```bash
.env.local
```

add the following environment variables:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

DOMAIN_NAME=localhost:3000
```

Run the development server:

```bash

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Live Project Preview

Live Project [Click Hear](https://nextjs.org/docs/deployment)

## Learn More

My Clerk credentials is hear,

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_aW1tdW5lLWNvdWdhci01OC5jbGVyay5hY2NvdW50cy5kZXYk
CLERK_SECRET_KEY=sk_test_IWu2M6JOXup54tnhkd9457H6U0qyZiwadUfQ4dQHS6

## Deploy on Vercel
