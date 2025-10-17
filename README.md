# Snippets - Code Snippet Manager

A modern, full-stack web application for creating, editing, and managing code snippets. Built with Next.js 15, Prisma, and TypeScript.

![Next.js](https://img.shields.io/badge/Next.js-15.5.5-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-6.17.1-2D3748?style=flat&logo=prisma)

## Features

- ✨ Create, view, edit, and delete code snippets
- 💻 Monaco Editor integration for syntax highlighting
- 🎨 Modern UI with Tailwind CSS and shadcn/ui components
- 🗄️ SQLite database with Prisma ORM
- ⚡ Server Actions for seamless data mutations
- 🚀 Optimized with Next.js 15 App Router and Turbopack
- 📱 Responsive design

## Tech Stack

- **Framework:** Next.js 15.5.5 with App Router
- **Language:** TypeScript 5
- **Database:** SQLite with Prisma ORM
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Code Editor:** Monaco Editor
- **Icons:** Lucide React

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 20+ 
- npm, yarn, pnpm, or bun package manager

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd 22_Snippets
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Set up the database

```bash
npx prisma migrate dev
```

This will create the SQLite database and run migrations.

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### 5. Open your browser

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file thanks to Turbopack.

## Project Structure

```
├── prisma/
│   ├── schema.prisma          # Database schema
│   ├── migrations/            # Database migrations
│   └── dev.db                 # SQLite database (generated)
├── src/
│   ├── actions/
│   │   └── index.ts          # Server actions for CRUD operations
│   ├── app/
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page (snippet list)
│   │   └── snippet/
│   │       ├── [id]/         # Dynamic route for viewing snippets
│   │       │   ├── page.tsx
│   │       │   ├── loading.tsx
│   │       │   ├── not-found.tsx
│   │       │   └── edit/     # Edit snippet page
│   │       └── new/          # Create new snippet page
│   ├── components/
│   │   ├── EditSnippetForm.tsx
│   │   └── ui/               # shadcn/ui components
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       └── textarea.tsx
│   └── lib/
│       ├── prisma.ts         # Prisma client instance
│       └── utils.ts          # Utility functions
├── .env                      # Environment variables
└── package.json
```

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run prisma` - Run Prisma CLI commands

### Useful Prisma Commands

```bash
# Open Prisma Studio (Database GUI)
npx prisma studio

# Generate Prisma Client
npx prisma generate

# Reset database
npx prisma migrate reset

# Create a new migration
npx prisma migrate dev --name your_migration_name
```

## Database Schema

```prisma
model Snippet {
  id        Int      @id @default(autoincrement())
  title     String
  code      String
  createdAt DateTime @default(now())
}
```

## Features in Detail

### 📝 Create Snippet
Navigate to `/snippet/new` to create a new code snippet with a title and code content.

### 👀 View Snippet
View individual snippets with syntax highlighting at `/snippet/[id]`.

### ✏️ Edit Snippet
Edit existing snippets using the Monaco Editor at `/snippet/[id]/edit`.

### 🗑️ Delete Snippet
Delete snippets directly from the detail view with server action confirmation.

## Environment Variables

The project uses a `.env` file for environment variables:

```env
DATABASE_URL="file:./dev.db"
```

For PostgreSQL (alternative):
```env
DATABASE_URL="prisma+postgres://localhost:51213/?api_key=..."
```

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [Prisma Documentation](https://www.prisma.io/docs) - learn about Prisma ORM
- [shadcn/ui](https://ui.shadcn.com/) - re-usable component documentation
- [Tailwind CSS](https://tailwindcss.com/docs) - utility-first CSS framework
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) - code editor documentation

## Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build
4. For production, consider migrating to PostgreSQL or another production-ready database

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Database Considerations for Production

For production deployments, consider:
- Migrating from SQLite to PostgreSQL, MySQL, or another production database
- Using Vercel Postgres, Supabase, or PlanetScale
- Updating your `DATABASE_URL` in environment variables
- Running migrations: `npx prisma migrate deploy`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Prisma](https://www.prisma.io/) - Next-generation ORM
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) - VS Code's editor
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide](https://lucide.dev/) - Beautiful & consistent icons

## Author

**Abhay Singh**

---

Made with ❤️ using Next.js and TypeScript
