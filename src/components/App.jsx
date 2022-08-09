import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Layout from './Layout';

const HomePage = lazy(() => import('pages/HomePage'));
const AddCardPage = lazy(() => import('pages/AddCardPage'));
const EditCashPage = lazy(() => import('pages/EditCashPage'));

export const App = () => {
  return (
    <Suspense fallback="LOADING...">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-card" element={<AddCardPage />} />
          <Route path="/edit-cash" element={<EditCashPage />} />
        </Route>
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};
