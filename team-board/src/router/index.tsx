// import { useGetLoginfo } from 'queries/useLoginQuery';
import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import * as Pages from '../pages';
import Decision from './hoc/Decision';

const Router = () => {
  // useGetLoginfo();

  return useRoutes([
    // 처음 들어오는 화면 => accessToken이 있다면 메인, 아니면 로그인 페이지
    { path: '/', index: true, element: <Decision /> },
    // 로그인
    // { path: '/login', element: <Pages.Login_page /> },
    // 메인
    { path: '/main', element: <Pages.MainPage /> },
    // { path: '/user', element: <Pages.User_page /> },
    // 그 외의 라우터 경로는 /notFound 로 이동
    { path: '*', element: <Navigate to="/notFound" replace={false} /> },
  ]);
};

export default Router;