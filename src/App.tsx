import { Header } from "./components/header/Header";
import { DefaultLayout } from "./components/template/DefaultLayout";
import { Home } from "./pages/home/Home";

export function App() {
  return (
    <>
      <Header />
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    </>
  );
}
