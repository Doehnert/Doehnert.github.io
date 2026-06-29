"use client";

import { FormEvent, useRef, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

const suggestions = [
  "What is Elton's strongest technical experience?",
  "Tell me about his Australian industry experience.",
  "Which integrations has he delivered?",
  "Why would Elton suit a senior engineering role?",
];

const capabilities = [
  "PHP / Laravel",
  "TypeScript",
  "React",
  "Vue / Inertia",
  "Node.js",
  "AI workflows",
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 14-7-4.4 14-3.2-5.4L5 12Zm6.4 1.6 3.3-3.3" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 5h5v5M19 5l-8 8M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" />
    </svg>
  );
}

export default function Home() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  async function askQuestion(value: string) {
    const cleanQuestion = value.trim();
    if (!cleanQuestion || isLoading) return;

    setQuestion("");
    setError("");
    setMessages((current) => [
      ...current,
      { role: "user", content: cleanQuestion },
    ]);
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: cleanQuestion }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          detail?: string;
        } | null;
        throw new Error(
          data?.detail ?? "The assistant could not answer right now.",
        );
      }

      const data: { answer: string } = await response.json();
      setMessages((current) => [
        ...current,
        { role: "assistant", content: data.answer },
      ]);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Unable to reach the curriculum assistant.",
      );
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void askQuestion(question);
  }

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Elton Doehnert home">
          ED<span>.</span>
        </a>
        <div className="nav-links">
          <span className="availability">
            <i />
            Brisbane, Australia
          </span>
          <a href="mailto:eltonfd@gmail.com">Get in touch</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="intro">
          <p className="eyebrow">Senior Full Stack Software Engineer</p>
          <h1>
            Elton
            <br />
            Doehnert<span>.</span>
          </h1>
          <p className="summary">
            Building dependable web and backend systems for more than a decade,
            across Australia, Canada, the USA, and Brazil.
          </p>

          <div className="contact-row">
            <a href="mailto:eltonfd@gmail.com">
              Email <ExternalIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/elton-doehnert-44093927"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ExternalIcon />
            </a>
            <a
              href="https://github.com/Doehnert"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ExternalIcon />
            </a>
          </div>

          <div className="skill-list" aria-label="Core capabilities">
            {capabilities.map((capability) => (
              <span key={capability}>{capability}</span>
            ))}
          </div>
        </div>

        <section className="chat-card" aria-labelledby="chat-title">
          <header className="chat-header">
            <div className="assistant-mark">AI</div>
            <div>
              <p id="chat-title">Ask about Elton</p>
              <span>Answers grounded in his curriculum</span>
            </div>
            <div className="status-dot" title="Assistant ready" />
          </header>

          <div className="conversation" aria-live="polite">
            {messages.length === 0 ? (
              <div className="welcome">
                <p className="welcome-label">Curriculum assistant</p>
                <h2>What would you like to know?</h2>
                <p>
                  Explore Elton&apos;s experience, technical background, and
                  professional track record.
                </p>
                <div className="suggestions">
                  {suggestions.map((suggestion) => (
                    <button
                      type="button"
                      key={suggestion}
                      onClick={() => void askQuestion(suggestion)}
                    >
                      {suggestion}
                      <span>↗</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="messages">
                {messages.map((message, index) => (
                  <div className={`message ${message.role}`} key={index}>
                    <span>{message.role === "user" ? "You" : "AI"}</span>
                    <p>{message.content}</p>
                  </div>
                ))}
                {isLoading && (
                  <div className="message assistant loading">
                    <span>AI</span>
                    <p>
                      <i />
                      <i />
                      <i />
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {error && <p className="error">{error}</p>}

          <form className="ask-form" onSubmit={handleSubmit}>
            <textarea
              ref={inputRef}
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  event.currentTarget.form?.requestSubmit();
                }
              }}
              placeholder="Ask about experience, skills, or projects..."
              aria-label="Question about Elton's curriculum"
              rows={1}
              maxLength={2000}
              disabled={isLoading}
            />
            <button
              type="submit"
              aria-label="Send question"
              disabled={!question.trim() || isLoading}
            >
              <ArrowIcon />
            </button>
          </form>
          <p className="disclaimer">
            AI responses are generated exclusively from Elton&apos;s curriculum.
          </p>
        </section>
      </section>

      <section className="profile-strip">
        <div className="shell profile-grid">
          <article>
            <span>01</span>
            <p>Current focus</p>
            <h3>Care-management software</h3>
            <small>Laravel · Vue · Inertia</small>
          </article>
          <article>
            <span>02</span>
            <p>Experience</p>
            <h3>10+ years in production</h3>
            <small>Web · Backend · Integrations</small>
          </article>
          <article>
            <span>03</span>
            <p>Work rights</p>
            <h3>Australian Permanent Resident</h3>
            <small>Based in Brisbane, QLD</small>
          </article>
        </div>
      </section>

      <footer className="shell">
        <p>Elton Doehnert · Senior Full Stack Software Engineer</p>
        <a href="tel:+61420301998">0420 301 998</a>
      </footer>
    </main>
  );
}
