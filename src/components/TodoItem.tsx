import type { Todo } from "../types/todo";

type Props = {
  todo: Todo;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
};

export function TodoItem({ todo, onToggle, onRemove }: Props) {
  return (
    <li className="group flex items-center gap-3 rounded-xl border border-sand bg-white px-4 py-3 transition hover:shadow-sm">
      <button
        type="button"
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? "Markera som ej klar" : "Markera som klar"}
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition ${
          todo.completed
            ? "border-teal bg-teal text-white"
            : "border-sand bg-cream hover:border-coral"
        }`}
      >
        {todo.completed && (
          <svg viewBox="0 0 12 12" className="h-3 w-3" fill="currentColor">
            <path d="M10.3 3.3a1 1 0 0 1 0 1.4l-4.5 4.5a1 1 0 0 1-1.4 0l-2-2a1 1 0 1 1 1.4-1.4l1.3 1.3 3.8-3.8a1 1 0 0 1 1.4 0z" />
          </svg>
        )}
      </button>

      <span
        className={`flex-1 text-sm leading-relaxed ${
          todo.completed ? "text-muted line-through" : "text-ink"
        }`}
      >
        {todo.text}
      </span>

      <button
        type="button"
        onClick={() => onRemove(todo.id)}
        aria-label="Ta bort uppgift"
        className="rounded-lg px-2 py-1 text-xs text-muted opacity-0 transition group-hover:opacity-100 hover:bg-sand hover:text-coral"
      >
        Ta bort
      </button>
    </li>
  );
}