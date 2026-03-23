import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "@/components/organism";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = (formData.get("email") as string) ?? "";
    const password = (formData.get("password") as string) ?? "";

    if (!email.trim() || !password) {
      setError("Introduce email y contraseña");
      return;
    }

    setIsLoading(true);
    // Sin auth real: con cualquier email y contraseña redirige al dashboard
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard", { replace: true });
    }, 500);
  }

  return (
    <div
      className={cn(
        "flex min-h-dvh w-full flex-col items-center justify-center bg-[var(--bg-page)] px-4 py-12 sm:px-6 lg:px-8"
      )}
    >
      <Login onSubmit={handleSubmit} error={error} isLoading={isLoading} />
    </div>
  );
}
