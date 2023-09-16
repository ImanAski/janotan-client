import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./styles/App.css";

import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import AcademyPage from "./pages/AcademyPage";
import MainMenuPage from "./pages/MainMenuPage";
import PaymentPage from "./pages/PaymentPage";
import UserProfilePage from "./pages/UserProfilePage";
import SearchPage from "./pages/SearchPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import PageNotFound from "./pages/PageNotFound";
import Course from "./pages/Course";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter basename="/janotan-client/">
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Navigate replace to="mainpage" />} />
              <Route path="mainpage" element={<MainPage />} />
              <Route path="academy" element={<AcademyPage />} />
              <Route path="courses/:courseId" element={<Course />} />
              <Route path="main-menu" element={<MainMenuPage />} />
              <Route path="payment" element={<PaymentPage />} />
              <Route path="user-profile" element={<UserProfilePage />} />
              <Route path="search" element={<SearchPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="login" element={<LoginPage />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
      {/* <BrowserRouter basename="/janotan-client/">
        <Routes>
          <Route index element={<MainPage />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
