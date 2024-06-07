import { useState } from "react";
import MemoBoard from "./components/MemoBoard";
import MemoElem from "./components/MemoElem";
import MemoInput from "./components/MemoInput";

const App = () => {
  const [memoList, setMemoList] = useState([]);

  return (
    <>
      <MemoBoard>
        {memoList.length ? (
          memoList.map((e) => {
            return (
              <MemoElem key={e.id} id={e.id}>
                {e.content}
              </MemoElem>
            );
          })
        ) : (
          <span>메모를 입력해주세요</span>
        )}
      </MemoBoard>
      <MemoInput />
    </>
  );
};

export default App;
