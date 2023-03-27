import { useParams } from "react-router-dom";
import { PostInfo } from "./PostInfo";
import SyntaxHighlighter from "react-syntax-highlighter";
import { agate } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useCallback, useEffect, useState } from "react";
import { http } from "../../lib/axios";

export function Post() {
  const [post, setPost] = useState<any>();
  const { name } = useParams();
  console.log("🚀 ~ file: Post.tsx:8 ~ Post ~ name:", name);

  const loadPost = useCallback(() => {
    http.get(`repos/marlliton/${name}`).then((res) => setPost(res.data));
  }, [name]);

  useEffect(() => {
    if (name) {
      loadPost();
    }
  }, [name, loadPost]);

  const customStyle = {
    backgroundColor: "#112131",
    borderRadius: "8px",
    margin: "40px",
  };
  return (
    <div className="w-full max-w-6xl my-0 mx-auto">
      {post && <PostInfo name={post.name} urlProject={post.html_url} />}
      <div className="flex flex-col gap-3 p-10">
        <p>{post && post.description}</p>
      </div>
      <SyntaxHighlighter language="javascript" style={agate} customStyle={customStyle}>
        {`
          import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
          import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
          const Component = () => {
            const codeString = '(num) => num + 1';
            return (
              <SyntaxHighlighter language="javascript" style={dark}>
                {codeString}
              </SyntaxHighlighter>
            );
          };
        `}
      </SyntaxHighlighter>
    </div>
  );
}
