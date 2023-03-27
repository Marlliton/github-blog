import { ProfileCard } from "./ProfileCard";
import { PostCard } from "./PosCard";
import { useEffect, useState } from "react";
import { http } from "../../lib/axios";

export function Home() {
  const [posts, setPosts] = useState<any[]>([]);

  function loadPosts() {
    http
      .get("/users/marlliton/repos?type=public&per_page=10&page=1")
      .then((res) => setPosts([...res.data]));
  }

  function filter(query: string) {
    if (query.length) {
      const list = posts.filter(
        (post) => post?.name?.includes(query) || post?.description?.includes(query)
      );

      setPosts(list);
    } else {
      loadPosts();
    }
  }

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className={`flex flex-col`}>
      <ProfileCard />

      <div className="w-full max-w-6xl my-0 mx-auto pt-7">
        <div className="flex justify-between pb-3">
          <h1 className="text-2xl font-bold">Publicações</h1>
          <span className="text-base-span">
            <strong>301</strong> publicações
          </span>
        </div>

        <form>
          <input
            className={`
            w-full p-4 placeholder:text-base-label rounded-lg border border-base-border bg-base-input outline-none focus:ring-2
            focus:ring-offset-2 focus:ring-base-border ring-offset-base-background
          `}
            type="text"
            placeholder="Buscar Projeto"
            onChange={(e) => filter(e.target.value)}
          />
        </form>

        <main
          className={`
          flex flex-wrap gap-8 pt-12
        `}
        >
          {posts &&
            posts.map((post) => (
              <PostCard name={post.name} description={post.description} key={post.id} />
            ))}
        </main>
      </div>
    </div>
  );
}
