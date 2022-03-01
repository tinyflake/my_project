import dva from "dva";
import "./index.css";

// 1. Initialize初始化dva实例
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model数据注入  类似react-redux(provider)
// app.model(require("./models/sectionA").default);
app.model(require("./models/index").default);

// 4. Router注册路由
app.router(require("./router").default);

// 5. Start启动项目
app.start("#root");
