interface CharacterProps {
  character: string;
  handleSetCharacter: (text: string) => void;
  handleGenerateGridClick: () => void;
}

export const Character = ({ character, handleSetCharacter, handleGenerateGridClick }: CharacterProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <label htmlFor="character" className=" text-xs px-1 py-3 text-gray-500 uppercase">
          character
        </label>
        <input
          type="text"
          placeholder="Character"
          className="border rounded-md w-1/2 px-3 py-2"
          value={character}
          onChange={(e) => {
            handleSetCharacter(e.target.value);
          }}
          maxLength={1}
        />
      </div>

      <div>
        <svg className="fill-gray-500 h-20" viewBox="0 0 60 60">
          <g>
            <path
              d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30
		S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"
            />
            <path
              d="M31,26.021V15.879c0-0.553-0.448-1-1-1s-1,0.447-1,1v10.142c-1.399,0.364-2.494,1.459-2.858,2.858H19c-0.552,0-1,0.447-1,1
		s0.448,1,1,1h7.142c0.447,1.72,2,3,3.858,3c2.206,0,4-1.794,4-4C34,28.02,32.72,26.468,31,26.021z M30,31.879c-1.103,0-2-0.897-2-2
		s0.897-2,2-2s2,0.897,2,2S31.103,31.879,30,31.879z"
            />
            <path d="M30,9.879c0.552,0,1-0.447,1-1v-1c0-0.553-0.448-1-1-1s-1,0.447-1,1v1C29,9.432,29.448,9.879,30,9.879z" />
            <path d="M30,49.879c-0.552,0-1,0.447-1,1v1c0,0.553,0.448,1,1,1s1-0.447,1-1v-1C31,50.326,30.552,49.879,30,49.879z" />
            <path d="M52,28.879h-1c-0.552,0-1,0.447-1,1s0.448,1,1,1h1c0.552,0,1-0.447,1-1S52.552,28.879,52,28.879z" />
            <path d="M9,28.879H8c-0.552,0-1,0.447-1,1s0.448,1,1,1h1c0.552,0,1-0.447,1-1S9.552,28.879,9,28.879z" />
            <path
              d="M44.849,13.615l-0.707,0.707c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293
		s0.512-0.098,0.707-0.293l0.707-0.707c0.391-0.391,0.391-1.023,0-1.414S45.24,13.225,44.849,13.615z"
            />
            <path
              d="M14.444,44.021l-0.707,0.707c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293
		s0.512-0.098,0.707-0.293l0.707-0.707c0.391-0.391,0.391-1.023,0-1.414S14.834,43.631,14.444,44.021z"
            />
            <path
              d="M45.556,44.021c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l0.707,0.707c0.195,0.195,0.451,0.293,0.707,0.293
		s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L45.556,44.021z"
            />
            <path
              d="M15.151,13.615c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l0.707,0.707c0.195,0.195,0.451,0.293,0.707,0.293
		s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L15.151,13.615z"
            />
          </g>
        </svg>
      </div>

      <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded uppercase"
      onClick={()=> handleGenerateGridClick()}>Generate 2D Grid</button>
    </div>
  );
};
