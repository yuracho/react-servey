import React from "react";

const SurveyReuslt = ({
  firstname,
  lastname,
  email,
  occ,
  tel,
  gender,
  onNext,
  onPrev,
}) => {
  return (
    <div className="wrap">
      <ul>
        <li>
          <span>성</span> : {firstname}
        </li>
        <li>
          <span>이름</span> :{lastname}
        </li>
        <li>
          <span>이메일</span> : {email}
        </li>
        <li>
          <span>직업</span> : {occ}
        </li>
        <li>
          <span>연락처</span> : {tel}
        </li>
        <li>
          <span>성별</span> : {gender}
        </li>
      </ul>
      <p>
        <button onClick={onPrev}>이전</button>
        <button onClick={onNext}>다음</button>
      </p>
    </div>
  );
};

export default SurveyReuslt;
