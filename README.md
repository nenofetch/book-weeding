## Wedding Guest Book (Indonesia)

A simple web app to record and manage wedding guests in Indonesia—who is invited, who attends, and any contributions (money or gifts). It respects Indonesia’s diverse cultures and customs by supporting flexible name formats, notes, and gift types.

### Features
- **Guest list**: add, search, and update invitees and attendees
- **Contributions**: log cash or in-kind gifts with optional notes
- **Cultural context**: capture variations in names, honorifics, and traditions
- **Summary**: quick overview of attendees and contributions

### Purpose
Indonesian weddings involve many guests and varied cultural practices. This app helps families maintain an organized, respectful record of attendance and contributions across different backgrounds and customs.

## Tech Stack

- **Frontend**: SvelteKit 5 with TypeScript
- **Styling**: Tailwind CSS 4 with Forms & Typography plugins
- **Database**: PostgreSQL with Drizzle ORM
- **Development**: Vite for build tooling
- **Containerization**: Docker & Docker Compose
- **Package Manager**: Bun

## Getting Started

### Prerequisites
- [Bun](https://bun.sh/) (recommended) or Node.js
- [Docker](https://www.docker.com/) and Docker Compose

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd book-weeding
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up the database**
   ```bash
   # Start PostgreSQL with Docker
   bun run db:start
   
   # Generate and push database schema
   bun run db:generate
   bun run db:push
   ```

4. **Set environment variables**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="postgresql://root:mysecretpassword@localhost:5432/local"
   ```

5. **Start the development server**
   ```bash
   bun run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run db:start` - Start PostgreSQL database
- `bun run db:studio` - Open Drizzle Studio (database GUI)
- `bun run check` - Run TypeScript checks

### Database Management

- **View data**: `bun run db:studio` opens a web interface at `http://localhost:4983`
- **Schema changes**: Modify `src/lib/server/db/schema.ts`, then run `bun run db:generate` and `bun run db:push`
