import { lazy } from "react";

const Home = lazy(() => import("@/features/Home/Home"));
const CaseStudy = lazy(() => import("@/features/CaseStudy/CaseStudy"));
const CaseStudyDetail = lazy(() => import("@/features/CaseStudy/CaseStudyDetail"));

export const routes = [
  {
    path: "",
    element: <Home />
  },
  {
    path: "case-study",
    element: <CaseStudy />
  },
  {
    path: "case-study/:id",
    element: <CaseStudyDetail />
  },
  {
    path: "*",
    element: <div>404 - Page Not Found</div>
  }
];