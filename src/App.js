import Home from "./components/Home";
import { SiteProvider, AuthProvider } from "./context";

export default function App() {
  return (
    <SiteProvider>
      <AuthProvider>
        <Home />
      </AuthProvider>
    </SiteProvider>
  );
}
