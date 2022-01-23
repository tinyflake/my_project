import React from "react";
import { Router, Route, Switch } from "dva/router";
import IndexPage from "./routes/IndexPage";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
function RouterConfig({ history }) {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  return (
    //懒加载
    <React.Suspense
      fallback={
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin tip="加载中 ..." indicator={antIcon} />
        </div>
      }
    >
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route
            path="/For_help"
            component={React.lazy(() => import("./routes/For_help"))}
          />
          <Route
            path="/To_help"
            component={React.lazy(() => import("./routes/To_help"))}
          />
          <Route
            path="/join-us"
            component={React.lazy(() => import("./routes/join-us"))}
          />
          <Route
            path="/how-care"
            component={React.lazy(() => import("./routes/how-care"))}
          />
          <Route
            path="/donate"
            component={React.lazy(() => import("./routes/donate"))}
          />
          <Route
            path="/story-wall"
            component={React.lazy(() => import("./routes/story-wall"))}
          />
        </Switch>
      </Router>
    </React.Suspense>
  );
}

export default RouterConfig;
