# Pokémon Browser

A Next.js app for exploring the original 151 Pokémon. Built with the App Router, TypeScript, and Tailwind CSS.

**Live Demo:** [pokemon-next.vercel.app](https://pokemon-next-two-pi.vercel.app/)

---

## Features

- Browse all 151 classic Pokémon in a responsive grid
- Real-time search by name
- Detail pages for each Pokémon with:
  - Official artwork
  - Type badges with type-specific colors
  - Height and weight
  - Base stats
  - Abilities
- Dynamic page titles via `generateMetadata`
- Server-side data fetching
- Responsive layout
- Hover, active, and focus states for all input methods

---

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- PokéAPI (REST)

---

## Architecture

This project demonstrates the Server/Client Component boundary in Next.js:

- **Server Components** (`page.tsx`) fetch data on the server
- **Client Components** (`PokemonBrowser.tsx`) handle interactivity
- Data is passed from server to client as props


---

## Run Locally

```bash
git clone https://github.com/philobster/pokemon-next
cd pokemon-next
npm install
npm run dev