import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function Page() {
  return (
    <div className="flex items-center justify-center rounded-md bg-zinc-900">
      <SignIn
        appearance={{
          baseTheme: dark,
          elements: {
            card: "bg-transparent shadow-none text-zinc-100",
            dividerLine: "bg-zinc-100",
            dividerText: "text-zinc-100",
            footerActionText: "text-zinc-300",
            footerActionLink: "text-zinc-300 underline hover:text-zinc-100",
            formButtonPrimary: "bg-zinc-200 hover:bg-zinc-100 text-zinc-800",
            formFieldText: "text-rose-400",
            formFieldHintText: "text-zinc-600",
            formFieldInput:
              "bg-zinc-800 border border-zinc-600 text-white rounded-md",
            formFieldErrorText: "text-rose-400",
            formFieldSuccessText: "text-emerald-400",
            formFieldLabel: "text-zinc-100",
            headerTitle: "text-zinc-100",
            headerSubtitle: "text-zinc-100",
            socialButtonsIconButton: "bg-zinc-800 hover:bg-zinc-900 rounded-md"
          }
        }}
      />
    </div>
  );
}
