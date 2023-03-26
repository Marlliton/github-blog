import { PostInfo } from "./PostInfo";
import SyntaxHighlighter from "react-syntax-highlighter";
import { agate } from "react-syntax-highlighter/dist/esm/styles/hljs";

export function Post() {
  const customStyle = {
    backgroundColor: "#112131",
    borderRadius: "8px",
    margin: "40px",
  };
  return (
    <div className="w-full max-w-6xl my-0 mx-auto">
      <PostInfo />
      <div className="flex flex-col gap-3 p-10">
        <p>
          Programming languages all have built-in data structures, but these often differ
          from one language to another. This article attempts to list the built-in data
          structures available in JavaScript and what properties they have. These can be
          used to build other data structures. Wherever possible, comparisons with other
          languages are drawn
        </p>
        <p>
          Dynamic typing JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type, and any
          variable can be assigned (and re-assigned) values of all types:
        </p>
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
