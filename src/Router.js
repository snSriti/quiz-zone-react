import Blog from "./components/Blog";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Statistics from "./components/Statistics";
import Main from "./Main";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      {
        path: "/quiz/:id",
        loader: ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        element: <Quiz></Quiz>,
      },
      { path: "/statistics", element: <Statistics></Statistics> },
      { path: "/blog", element: <Blog></Blog> },
    ],
  },
]);
