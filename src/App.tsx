import "./App.css";

function App() {
  return (
    <div className="w-screen h-screen p-0 m-0">
      {/* // header! */}
      <div className="w-full h-16 p-5 m-0 flex items-center gap-5">
        <svg
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          height="24px"
          focusable={false}
        >
          <path
            fill="#000"
            stroke="#000"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="1rem"
            d="M88 152h336M88 256h336M88 360h336"
          />
        </svg>

        {/* Rachel-pedia */}
        <div className="flex flex-col items-start justify-center">
          <p className="text-xl font-serif">Rachel-pedia</p>
          <p className="text-xs">rachel's free encyclopedia</p>
        </div>

        <svg
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          height="16px"
          focusable={false}
          className="cursor-pointer justify-self-end"
          onClick={() => {
            alert("you found flag 1");
          }}
        >
          <path
            fill="#000"
            d="M18.383 4.318a1 1 0 0 0-1.09.217a3.248 3.248 0 0 1-4.586 0a5.25 5.25 0 0 0-7.414 0A.997.997 0 0 0 5 5.242v13a1 1 0 1 0 2 0v-4.553a3.248 3.248 0 0 1 4.293.26a5.25 5.25 0 0 0 7.414 0a1 1 0 0 0 .293-.707v-8a1 1 0 0 0-.617-.924"
          />
        </svg>
      </div>

      {/* // top bar (name etc) */}
      <div className="w-full h-16 p-5 m-0 flex items-center gap-5 justify-between">
        <p className="text-4xl font-serif">Rachel Koh</p>

        <div className="flex items-center gap-2">
          <input
            type="text"
            className="px-2 py-1 rounded border border-gray-300"
            placeholder="no flag here"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const target = e.target as HTMLInputElement;
                if (target.value === "rachel{i_found_flag}") {
                  alert("Correct! You found flag 2!");
                } else {
                  alert("rachel{find_the_flag}");
                }
              }
            }}
          />
        </div>
      </div>

      {/* // for other uses, see */}
      <div className="w-full h-8 p-5 m-0 flex items-center gap-5 italic">
        <p>
          for other uses, see{" "}
          <a
            className="cursor-pointer"
            onClick={() => {
              alert("you found flag 3");
            }}
          >
            rachel koh (disambiguation)
          </a>
          .
        </p>
      </div>

      {/* // main content + picture area */}
      <div className="w-full h-max p-5 m-0 flex items-start gap-5">
        {/* // main content */}
        <div className="w-2/3 h-full py-5 m-0 flex flex-col items-start justify-start gap-5 text-left">
          <p>
            {`Rachel Koh is a software developer, computer science student, and
            part-time philosopher of boba. Known for her ability to debug code
            while contemplating the mysteries of quantum entanglement, Koh is a
            rising figure in the tech world—and possibly the multiverse.`}
          </p>

          <p>
            {`Currently studying computer science, Koh has a penchant for side
            projects that spiral into full-blown obsessions. Her GitHub is a
            graveyard of half-finished ideas and brilliant experiments, many of
            which were inspired by her love of apps like Arc, Dia, Cursor, and
            Raycast—tools she describes as "the holy quadrinity of productivity,
            or at least of procrastination with style."`}
          </p>

          <p>
            {`When not pondering the probabilistic nature of quantum mechanics or
            trying to capture the flag (metaphorically, digitally, and
            occasionally in real life), Koh can be found sipping
            ceremonial-grade matcha with the solemnity of a tea monk. Her
            loyalty to Chichasanchen boba is unwavering, and she has been known
            to travel across city lines for the perfect tapioca texture.`}
          </p>

          <p>
            {`Musically, Koh's tastes range from the emotionally devastating
            lyricism of Taylor Swift to the nostalgic harmonies of the
            Carpenters, with a dash of Lady Gaga for theatrical flair. She also
            writes poetry in her spare time, often channeling the existential
            angst of Robert Frost's "The Road Not Taken," though she insists
            she's taken both roads and is still lost.`}
          </p>

          <p>
            {`Her favorite book is Why Buddhism Is True by Robert Wright, which
            she describes as "a helpful guide for staying calm when your code
            won't compile and your quantum simulator crashes."`}
          </p>

          <p>
            {`Koh is a firm believer in clean code, clean matcha, and the
            occasional chaotic good CTF tournament. In fact, you might even find
            a CTF tournament right here, on this very website.`}
          </p>
        </div>

        {/* // picture */}
        <div className="w-1/2 h-full px-6 py-1 m-0 flex flex-col items-center gap-3 border border-stone-600">
          <p className="text-xl font-bold">Rachel Koh</p>
          <div className="w-full h-full">
            <img src="/rachel.jpeg" alt="Rachel Koh" />
            <p className="text-xs">Koh in 2024</p>
          </div>

          <div className="w-full h-full grid grid-cols-2 gap-1 text-left">
            <p className="text-xs font-bold">Born</p>
            <div className="text-xs">
              <p>Rachel Koh Huiqi</p>
              <p>February 31, 9999</p>
              <p>Plutoria, New Republic, Milky Way</p>
            </div>
            <p className="text-xs font-bold">Occupations</p>
            <p className="text-xs">
              software developer, computer science student, philosopher of boba
            </p>

            <p className="text-xs font-bold">Years active</p>
            <p className="text-xs">∞-present</p>

            <p className="text-xs font-bold">Organizations</p>
            <p className="text-xs">
              The Organization of Chichasanchen Boba Enthusiasts
            </p>

            <p className="text-xs font-bold">Website</p>
            <a href="https://kohrachel.com" className="text-xs">
              kohrachel.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
