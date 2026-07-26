"use client";
import { useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;
    const newMessages: Msg[] = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "there is something wrong , try again"}]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="rounded-full bg-black text-white px-4 py-3 shadow-lg"
        >
         Ask me about ahmed 💬
        </button>
      )}

      {open && (
        <div className="w-80 h-96 bg-white rounded-xl shadow-xl flex flex-col border">
          <div className="flex justify-between items-center p-3 border-b">
            <span className="font-semibold text-sm">Ahmed assist</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[80%] ${
                  m.role === "user"
                    ? "bg-black text-white ml-auto"
                    : "bg-gray-100"
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && <div className="text-gray-400 text-xs">writing...</div>}
          </div>

          <div className="p-2 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask ..."
              className="flex-1 border rounded-lg px-2 py-1 text-sm"
            />
            <button
              onClick={sendMessage}
              className="bg-black text-white px-3 rounded-lg text-sm"
            >
              send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}