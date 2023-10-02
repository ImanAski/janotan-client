import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./styles/App.css";

import Layout from "./components/Layout";
import AcademyPage from "./pages/AcademyPage";
import MainMenuPage from "./pages/MainMenuPage";
import PaymentPage from "./pages/PaymentPage";
import UserProfilePage from "./pages/UserProfilePage";
import SearchPage from "./pages/SearchPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import PageNotFound from "./pages/PageNotFound";
import CoursesPage from "./pages/CoursesPage";
import MicroBooksPage from "./pages/MicroBooksPage";
import HomePage from "./pages/HomePage";
import BlogsPage from "./pages/BlogsPage";
import CounselingPage from "./pages/CounselingPage";
import PodcastPage from "./pages/PodcastPage";
import TherapistsPage from "./pages/TherapistsPage";

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
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<HomePage />} />
              <Route path="academy/:academyBook" element={<AcademyPage />} />
              <Route path="courses/:courseId" element={<CoursesPage />} />
              <Route path="therapists/:name" element={<TherapistsPage />} />
              <Route path="microbooks" element={<MicroBooksPage />} />
              <Route path="blogs" element={<BlogsPage />} />
              <Route path="counseling" element={<CounselingPage />} />
              <Route path="podcast" element={<PodcastPage />} />

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
    </>
  );
}

export default App;
