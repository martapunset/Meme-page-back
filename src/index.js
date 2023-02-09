const connect = require("./db/connect");
const app = require("./server");
const config = require("./config/config");

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
