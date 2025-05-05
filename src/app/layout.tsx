import ReduxWrapper from "@/components/redux/ReduxWrapper";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ReduxWrapper>{children}</ReduxWrapper>
      </body>
    </html>
  );
}
