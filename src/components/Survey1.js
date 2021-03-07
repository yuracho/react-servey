import React from "react";

const Survey1 = ({ firstmane, lastname, email, onText, onNext }) => {
  return (
    <div className="wrap">
      <p>
        <label>성</label>:
        <input
          type="text"
          name="firstname"
          value={firstmane}
          onChange={onText}
        />
      </p>
      <p>
        <label>이름</label>:
        <input type="text" name="lastname" value={lastname} onChange={onText} />
      </p>
      <p>
        <label>이메일</label>:{" "}
        <input type="text" name="email" value={email} onChange={onText} />
      </p>
      <p>
        <button onClick={onNext}>다음</button>
      </p>
    </div>
  );
};

export default Survey1;
