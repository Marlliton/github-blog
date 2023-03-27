import { Routes as RoutersApp, Route } from "react-router-dom";
import { DefaultLayout } from "./components/template/DefaultLayout";
import { Home } from "./pages/home/Home";
import { Post } from "./pages/post/Post";

export function Routes() {
  return (
    <RoutersApp>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/post/:name" element={<Post />} />
      </Route>
    </RoutersApp>
  );
}
