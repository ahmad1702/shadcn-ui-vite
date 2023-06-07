# Shadcn UI Create React App

Example Created By [Ahmad Sandid](https://github.com/ahmad1702). Components by [Shadcn](https://ui.shadcn.com/). Uses [Vite](https://vitejs.dev/).

## How to run 
1. Install Dependencies
   ```bash
   npm i
   ```
2. Run Project
   ```bash
   npm run dev
   ```

## How I did it (if you wanted to do it from scratch)
1. Initialize Project:
   ```bash
   npx create-vite-app (react > typescript)
   ```
2. pnpm add tailwindcss-animate class-variance-authority clsx tailwind-merge lucide-react
3. To add '@' as the absolute important... Add the following to `vite.config.ts`:

   ```typescript
   resolve: {
       alias: {
           ["@"]: "/src",
       },
   },
   ```

   So that your `vite.config.ts` looks like this:

   ```typescript
   import react from "@vitejs/plugin-react";
   import { defineConfig } from "vite";

   // https://vitejs.dev/config/
   export default defineConfig({
     resolve: {
       alias: {
         ["@"]: "/src",
       },
     },
     plugins: [react()],
   });
   ```

4. To add the '@' path to the typescript config file so eslint will view it correctly:

   ```json
   {
     "compilerOptions": {
       "baseUrl": ".",
       "paths": {
         "@/*": ["./src/*"]
       }
     }
   }
   ```

   So that your `tsconfig.json` looks like:

   ```json
   {
     "compilerOptions": {
       "target": "ESNext",
       "lib": ["DOM", "DOM.Iterable", "ESNext"],
       "module": "ESNext",
       "skipLibCheck": true,
       /* Bundler mode */
       "moduleResolution": "bundler",
       "allowImportingTsExtensions": true,
       "resolveJsonModule": true,
       "isolatedModules": true,
       "noEmit": true,
       "jsx": "react-jsx",
       /* Linting */
       "strict": true,
       "noUnusedLocals": true,
       "noUnusedParameters": true,
       "noFallthroughCasesInSwitch": true
     },
     "include": ["src"],
     "references": [
       {
         "path": "./tsconfig.node.json"
       }
     ]
   }
   ```

5. Let's add our first shadcn/ui component run:
   ```bash
   npx shadcn-ui add button
   ```
   and then enter the correct directory when prompted:
   ```
   ./src/components/ui
   ```
6. Delete `src/App.css`

7. You can paste the following in the `App.tsx`:

   ```typescript
   import { useState } from "react";
   import "./App.css";
   import reactLogo from "./assets/react.svg";
   import { Button } from "./components/ui/button";
   import viteLogo from "/vite.svg";

   function App() {
     const [count, setCount] = useState(0);

     return (
       <div className="h-screen flex flex-col justify-center items-center gap-4 bg-background text-foreground">
         <div className="flex gap-2">
           <a href="https://vitejs.dev" target="_blank">
             <img src={viteLogo} className="h-32" alt="Vite logo" />
           </a>
           <a href="https://react.dev" target="_blank">
             <img
               src={reactLogo}
               className="h-32 animate-[spin_5s_linear_infinite]"
               alt="React logo"
             />
           </a>
         </div>
         <h1 className="text-4xl font-semibold">Vite + React</h1>
         <Button className="" onClick={() => setCount((count) => count + 1)}>
           count is {count}
         </Button>
         <p>
           Edit <code>src/App.tsx</code> and save to test HMR
         </p>
         <p className="read-the-docs">
           Click on the Vite and React logos to learn more
         </p>
       </div>
     );
   }

   export default App;
   ```

8. Start the application:
   ```bash
   npm run dev
   ```
