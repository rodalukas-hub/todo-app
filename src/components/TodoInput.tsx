import { useState, type FormEvent } from "react";

type Props = {
  onAdd: (text: string) => void;
};

export function TodoInput({ onAdd }: Props) {
  const [text, setText] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onAdd(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Vad behöver du göra?"
        className="flex-1 rounded-xl border border-sand bg-white px-4 py-3 text-ink placeholder:text-muted/60 outline-none transition focus:border-coral focus:ring-2 focus:ring-coral/20"
        aria-label="Ny uppgift"
      />
      <button
        type="submit"
        className="rounded-xl bg-coral px-5 py-3 text-sm font-medium text-white transition hover:bg-coral/90 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={!text.trim()}
      >
        Lägg till
      </button>
    </form>
  );
}