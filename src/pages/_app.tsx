import { AuthContextProvider } from "@/flex-ui/contexts/auth-context";
import { ThemeContextProvider } from "@/react-ui/theme";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </ThemeContextProvider>
  );
}

export default MyApp;
