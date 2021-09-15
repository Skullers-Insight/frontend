import { ApolloServer, gql } from "apollo-server-micro";
import Cors from "micro-cors";
import DataLoader from "dataloader";
import { GraphQLResolveInfo } from "graphql";
import { CreateUserArgs } from "./dto/args";
import { AppContext } from "./dto/shared";

const typeDefs = gql`
  type Query {
    albums(first: Int = 25, skip: Int = 0): [Album!]!
  }
  type Artist {
    id: ID!
    name: String!
    url: String!
    albums(first: Int = 25, skip: Int = 0): [Album!]!
  }
  type Album {
    id: ID!
    name: String!
    year: String!
    artist: Artist!
  }
`;

const resolvers = {
  Query: {
    albums: (
      _parent: undefined,
      args: CreateUserArgs,
      _context: AppContext
    ) => {},
  },

  Mutation: {
    createUser: (
      parent: undefined,
      args: CreateUserArgs,
      context: AppContext,
      info: GraphQLResolveInfo
    ) => {
      console.log(parent);
      return context.userService.createUser(args.email, args.password);
    },
  },
};

const loader = {
  artist: new DataLoader((ids: ReadonlyArray<string>) => {
    return new Promise(() => {});
  }),
};

const cors = Cors({
  allowMethods: ["GET", "POST", "OPTIONS"],
});

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return { loader };
  },
});

const handler = apolloServer.createHandler({ path: "/api/graphql" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default cors(handler);
