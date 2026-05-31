import type { Metadata } from "next";
import { defaultDomain, learningDomains } from "@/data/dojoDomain";
import "./globals.css";

const subjectList = learningDomains.map((domain) => domain.subject.name).join(", ");

export const metadata: Metadata = {
  title: `MasteryDojo - Learn ${learningDomains.length} technical domains`,
  description: `KanaDojo-inspired training for ${subjectList}, with reusable domains for more topics later.`,
  icons: {
    icon: [{ url: defaultDomain.metadata.iconPath, type: "image/svg+xml" }]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('dojo-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t;}catch(e){}"
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
