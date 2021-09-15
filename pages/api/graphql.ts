import { ApolloServer } from "apollo-server-micro";
import Cors from "micro-cors";
import { schema } from "../../apollo/schema";
import { context } from "../../apollo/context";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

const cors = Cors();

const server = new ApolloServer({
  schema,
  context,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

export const config = {
  api: {
    bodyParser: false,
  },
};

module.exports = server.start().then(() =>
  cors((req, res) => {
    if (req.method === "OPTIONS") {
      res.end();
      return;
    }
    return server.createHandler({ path: "/api/graphql" })(req, res);
  })
);
