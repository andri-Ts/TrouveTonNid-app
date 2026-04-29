import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import ListPage from './pages/listPage/ListPage';
import { Layout, RequireAuthLayout } from './components/layout/Layout';
import Login from './pages/login/Login';
import SinglePage from './pages/singlePage/SinglePage';
import ProfilePage from './pages/profilePage/ProfilePage';
import RegisterPage from './pages/register/RegisterPage';
import ProfileUpdatePage from './pages/profileUpdatePage/ProfileUpdatePage';
import NewPostPage from './pages/newPostPage/NewPostPage';
import { listPageLoader, singlePageLoader } from './lib/loader';
import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/contactPage/ContactPage';

function App() {
  // On crée un router avec l’API moderne de React Router (v6.4+), déclares toutes les routes de ton application dans un tableau.
  const myRouter = createBrowserRouter([
    {
      path: '/', // Route
      element: <Layout />, // le composant affiché pour cette route
      children: [
        // children signifie : “Ces routes seront affichées à l’intérieur du Layout” (comme ca on a le navbar partout)
        {
          index: true, // page par défaut pour "/"
          element: <HomePage />,
        },
        {
          path: 'register',
          element: <RegisterPage />,
        },
        {
          path: 'list', // devient "/list"
          element: <ListPage />,
          loader: listPageLoader,
        },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'single/:id',
          element: <SinglePage />,
          loader: singlePageLoader, // fonciton pour charger les data du back vers la page SinglePage
        },
        {
          path: 'about',
          element: <AboutPage />,
        },
        {
          path: 'contact',
          element: <ContactPage />,
        },
      ],
    },
    // Route protéger, pas accessible sans authentification (via login)
    {
      path: '/',
      element: <RequireAuthLayout />,
      children: [
        {
          path: 'profile-page',
          element: <ProfilePage />,
        },
        {
          path: 'profile-page/update',
          element: <ProfileUpdatePage />,
        },
        {
          path: 'add',
          element: <NewPostPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={myRouter} />;
}

export default App;

/* OU

    <BrowserRouter>
      <Routes>

        // Route parent avec Layout
        <Route path="/" element={<Layout />}>
         //  Routes enfants : s'afficheront dans l'Outlet
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        // Route non trouvée
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>

*/
