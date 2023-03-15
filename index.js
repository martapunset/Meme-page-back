const connect = require("./src/db/connect");
const app = require("./src/server");
const config = require("./src/config/config");

const startServer = async () => {
  try {
     connect(config.logger.info("MongoDB connected"));
    app.listen(process.env.PORT, () => {
      config.logger.info(`Server is running in port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Someting went wrong, server crashed!");
  }
};

startServer();
