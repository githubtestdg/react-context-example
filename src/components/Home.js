import Footer from "./Footer";
import Header from "./Header";
import { useAuth } from "../context";

export default function Home() {
  const { user } = useAuth();
  return (
    <>
      <Header />
      {user && (
        <div style={{ padding: "10px", border: "10px solid green" }}>
          Bu alanı yalnızca giriş yapanlar görebilir
        </div>
      )}
      <Footer />
    </>
  );
}
