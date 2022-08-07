import React, { Suspense, useMemo } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import { RoutePath, routes } from "../../routing/routes";
import Modals from "components/Modals";

const defaultLocation = {
  pathname: "/",
  search: "",
  hash: "",
  state: {
    hash: "",
    pathname: "/",
    search: "",
    state: undefined,
  },
};
const AppRouter = () => {
  const location = useLocation<{ background?: any }>();

  const { background, isModal } = useMemo(() => {
    const paths = location.pathname.split("/").filter((val: string) => val);
    const isModal = paths.includes("page");
    let background =
      location.state && location.state.background && isModal
        ? location.state.background
        : defaultLocation;

    let backgroundPaths = [];
    if (background) {
      background = isModal ? background : location;
      backgroundPaths = background.pathname
        .split("/")
        .filter((val: string) => val);
    }

    return { background, isModal };
  }, [location]);

  return (
    <>
      <Switch location={background}>
        {routes.map(({ path, exact, component: Component }, i) => {
          return (
            <Route
              key={`@customRoutes/${i}_${path}`}
              path={path}
              exact={exact}
              render={({ history, location, match }) => {
                console.log(location);
                console.log(history);

                return (
                  <Suspense fallback={null}>
                    <Component />
                  </Suspense>
                );
              }}
            />
          );
        })}
      </Switch>
      <Switch>
        <Suspense fallback={null}>
          <Modals
            isOpen={isModal}
            background={background}
            location={location}
          />
        </Suspense>
      </Switch>
    </>
  );
};

export default AppRouter;
