import React from "react";

const Survey2 = ({ occ, tel, gender, onText, onNext, onPrev }) => {
  return (
    <div className="wrap">
      <p>
        <lable>직업</lable>:{" "}
        <input type="text" name="occ" value={occ} onChange={onText} />
      </p>
      <p>
        <lable>연락처</lable>:{" "}
        <input type="text" name="tel" value={tel} onChange={onText} />
      </p>
      <p>
        <lable>성별</lable>:{" "}
        <input type="text" name="gender" value={gender} onChange={onText} />
      </p>
      <p>
        <button onClick={onPrev}>이전</button>
        <button onClick={onNext}>다음</button>
      </p>
    </div>
  );
};

export default Survey2;
