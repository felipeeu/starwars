
<img src="/public/vercel.svg" alt="Dart Vader" width="30%" />

# Star Wars Challenge   

> May the Force be with you.

## Overview

This project is a simple web application built with [Next.js](https://nextjs.org/) that interacts with the [Star Wars API](https://swapi.dev/). The application allows users to read records related to Star Wars entities.

## Features

- **Filter** : Filter people by planets in real-time
- **Load Item**: Load Items in real-time

## Demo

You can check out the live demo of the project [here](https://starwars-delta-eight.vercel.app/).

## Getting Started

Follow these instructions to set up the project locally:

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/felipeeu/starwars.git
    ```

2. Navigate to the project directory:

    ```bash
    cd starwars
    ```

3. Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```
### Used API Endpoints

- GET `/api/planets` : fetch planets
- GET `/api/people` : fetch people

### Project Structure



```
.
├── next.config.mjs
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── public
│   ├── next.svg
│   └── vercel.svg
├── README.md
├── src
│   └── app
│       ├── api
│       │   └── route.ts
│       ├── Components
│       │   ├── Filter
│       │   │   ├── Filter.tsx
│       │   │   └── index.ts
│       │   ├── Header
│       │   │   ├── Header.tsx
│       │   │   └── index.ts
│       │   ├── index.ts
│       │   ├── ItemCard
│       │   │   ├── index.ts
│       │   │   └── ItemCard.tsx
│       │   ├── ItemList
│       │   │   ├── index.ts
│       │   │   └── ItemList.tsx
│       │   └── Loader
│       │       ├── index.ts
│       │       └── Loader.tsx
│       ├── constants.ts
│       ├── favicon.ico
│       ├── globals.css
│       ├── hooks
│       │   └── useDataRequest.tsx
│       ├── layout.tsx
│       ├── page.tsx
│       └── utils
│           ├── getPlanetByPerson.ts
│           └── getUrlParams.ts
├── tailwind.config.ts
└── tsconfig.json

12 directories, 31 files

```
