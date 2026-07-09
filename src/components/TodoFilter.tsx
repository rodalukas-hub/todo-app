import type { Filter } from "../types/todo";

type Props = {
  filter: Filter;
  activeCount: number;
  completedCount: number;
  onFilterChange: (filter: Filter) => void;
  onClearCompleted: () => void;
};

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "Alla" },
  { value: "active", label: "Aktiva" },
  { value: "completed", label: "Klara" },
];

export function TodoFilter({
  filter,
  activeCount,
  completedCount,
  onFilterChange,
  onClearCompleted,
}: Props) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-sand pt-4">
      <p className="text-sm text-muted">
        {activeCount} {activeCount === 1 ? "uppgift" : "uppgifter"} kvar
      </p>

      <div className="flex gap-1 rounded-full bg-sand/60 p-1">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => onFilterChange(f.value)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
              filter === f.value
                ? "bg-white text-ink shadow-sm"
                : "text-muted hover:text-ink"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {completedCount > 0 && (
        <button
          type="button"
          onClick={onClearCompleted}
          className="text-xs text-muted transition hover:text-coral"
        >
          Rensa klara
        </button>
      )}
    </div>
  );
}