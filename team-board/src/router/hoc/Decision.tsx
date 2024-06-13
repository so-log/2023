import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuth } from '../../common/fuctions/cookie'

const Decision: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth()) navigate("/main");
    else navigate("/login");
  }, [navigate]);

  return <></>;
};

export default Decision;