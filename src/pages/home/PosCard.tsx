export function PostCard() {
  return (
    <div className="flex-1 rounded-lg bg-base-post p-8 min-w-[20rem] sm:min-w-[26rem] overflow-hidden">
      <header className="flex justify-between w-full pb-5">
        <h1 className="text-xl font-bold md:text-2xl">
          <a href="#" className="hover:text-blue-link transition-colors">
            JavaScript data types and data structures
          </a>
        </h1>
        <span className="text-base-span text-xs min-w-max pl-2">Há 1 dia</span>
      </header>
      <p className="truncate-2-lines">
        Lorem ipsum dolor sit amet coipit officia eveniet!Lorem ipsum dolor sit amet
        coipit officia eveniet!Lorem ipsum dolor sit amet coipit officia eveniet!
      </p>
    </div>
  );
}
