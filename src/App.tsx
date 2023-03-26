import { Header } from "./components/header/Header";
import { DefaultLayout } from "./components/template/DefaultLayout";
import { Home } from "./pages/home/Home";
import { Post } from "./pages/post/Post";

export function App() {
  return (
    <>
      <Header />
      <DefaultLayout>
        {/* <Home /> */}
        <Post />
      </DefaultLayout>
    </>
  );
}
