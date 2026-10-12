import { Route, Routes } from "react-router-dom";
import { Home } from "../containers/Home";
import { UserLayout } from "../layouts/UserLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
