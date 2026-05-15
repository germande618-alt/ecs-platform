import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "ECS - Elite Cyber Squad",
  description: "ECS community platform for Fortnite and CS2 tournaments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        {children}

        <Script src="https://telegram.org/js/telegram-web-app.js" />
      </body>
    </html>
  );
}
