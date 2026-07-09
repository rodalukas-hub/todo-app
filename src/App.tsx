import { TodoFilter } from "./components/TodoFilter";
import { TodoInput } from "./components/TodoInput";
import { TodoItem } from "./components/TodoItem";
import { useTodos } from "./hooks/useTodos";

export default function App() {
  const {
    todos,
    filter,
    activeCount,
    completedCount,
    totalCount,
    setFilter,
    addTodo,
    toggleTodo,
    removeTodo,
    clearCompleted,
  } = useTodos();

  return (
    <div className="min-h-screen px-4 py-12 md:py-20">
      <div className="mx-auto max-w-lg">
        <header className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-coral">
            React · TypeScript
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-ink md:text-4xl">
            Todo-app
          </h1>
          <p className="mt-2 text-sm text-muted">
            Lägg till, markera klart, filtrera — sparas automatiskt i webbläsaren.
          </p>
        </header>

        <main className="rounded-2xl border border-sand bg-cream p-6 shadow-sm">
          <TodoInput onAdd={addTodo} />

          <ul className="mt-4 space-y-2">
            {todos.length === 0 ? (
              <li className="rounded-xl border border-dashed border-sand px-4 py-8 text-center text-sm text-muted">
                {totalCount === 0
                  ? "Inga uppgifter ännu. Skriv något ovan!"
                  : filter === "active"
                    ? "Inga aktiva uppgifter — bra jobbat!"
                    : "Inga klara uppgifter ännu."}
              </li>
            ) : (
              todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onRemove={removeTodo}
                />
              ))
            )}
          </ul>

          {totalCount > 0 && (
            <div className="mt-4">
              <TodoFilter
                filter={filter}
                activeCount={activeCount}
                completedCount={completedCount}
                onFilterChange={setFilter}
                onClearCompleted={clearCompleted}
              />
            </div>
          )}
        </main>

        <p className="mt-6 text-center text-xs text-muted">
          Byggd av Roda · Sparas i localStorage
        </p>
      </div>
    </div>
  );
}