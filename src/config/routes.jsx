import React from 'react';
import { useRoutes } from 'react-router-dom';
import Admin from '../pages/Admin/Admin';
import Hv from '../pages/HV/Hv';
import Login from '../pages/Login/Login';
import Qlcc from '../pages/QLCC/Qlcc';
import Gv from '../pages/GV/Gv'
const routes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/admin',
    element: <Admin/>,
  },
  {
    path: '/qlcc',
    element: <Qlcc/>,
  },
  {
    path: '/hocvien',
    element: <Hv/>,
  },
  {
    path: '/giangvien',
    element: <Gv/>,
  },
];

export default function Router() {
  const element = useRoutes(routes);
  return element;
}