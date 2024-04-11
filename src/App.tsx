import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-10 text-center text-xl font-bold">Vite + React</h1>
      <div className="mx-auto flex flex-col items-center justify-center gap-4 text-center">
        <section className="flex items-center gap-4">
          <Button
            onClick={() => setCount((count) => count - 1)}
            size="icon"
          >
            <MinusIcon />
          </Button>
          <span className="min-w-14 text-2xl font-bold">{count}</span>
          <Button
            onClick={() => setCount((count) => count + 1)}
            size="icon"
          >
            <PlusIcon />
          </Button>
        </section>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </main>
  );
}

export default App;
