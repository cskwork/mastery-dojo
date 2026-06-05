import type { Metadata, Viewport } from "next";
import { defaultDomain, learningDomains } from "@/data/dojoDomain";
import { withBasePath } from "@/lib/basePath";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#161a2f" },
    { media: "(prefers-color-scheme: light)", color: "#f1eefb" }
  ]
};

const subjectList = learningDomains.map((domain) => domain.subject.name).join(", ");

export const metadata: Metadata = {
  // Korean is the default language, so the static document title/description ship in Korean.
  title: `MasteryDojo - 기술 도메인 ${learningDomains.length}종 학습 도장`,
  description: `KanaDojo에서 영감을 받은 ${subjectList} 훈련 도장. 짧은 드릴과 타이핑 연습으로 초급부터 숙련까지.`,
  icons: {
    icon: [{ url: withBasePath(defaultDomain.metadata.iconPath), type: "image/svg+xml" }]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('dojo-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t;var l=localStorage.getItem('dojo-language');if(l==='ko'||l==='en')document.documentElement.lang=l;}catch(e){}"
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
