import { AuthProvider } from "./auth";
import { AppRouter } from "./routes/AppRouter";

const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default HeroesApp;
