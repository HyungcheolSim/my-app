import React, { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
  //isLoggedIn 이라는 변수에 대해 setIsLoggedIn 이라는 메서드로 상태를 관리한다.
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //onClickLogin이 실행되면 setIsLoggedIn 메서드를 통해 isLoggedIn 변수의 상태를 true로 만든다.
  const onClickLogin = () => {
    setIsLoggedIn(true);
  };
  const onClickLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Toolbar isLoggedIn={isLoggedIn} onClickLogin={onClickLogin} onClickLogout={onClickLogout} />
      <div style={{ padding: 16 }}>소플과 함께하는 리액트 공부를 형철심이 하고 있지요!</div>
    </div>
  );
}

export default LandingPage;
