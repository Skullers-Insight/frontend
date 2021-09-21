import { DateTimeResolver } from "graphql-scalars";
import {
  asNexusMethod,
  intArg,
  makeSchema,
  mutationType,
  objectType,
  queryType,
  stringArg,
} from "nexus";
import path from "path";

// const isAuthenticated = rule({ cache: "contextual" })(
//   async (_parent, _args, { req }, _info) => {
//     return Boolean(session);
//   }
// );

const User = objectType({
  name: "User",
  definition(t) {
    t.string("id");
    t.string("name");
    t.string("email");
    t.string("image");
  },
});

const Query = queryType({
  definition(t) {
    t.list.field("user", {
      type: User,
      args: {
        first: intArg(),
      },
      resolve(_root, { first }, ctx) {
        return ctx.prisma.user.findMany({ take: first as number | undefined });
      },
    });
  },
});

const Mutation = mutationType({
  definition(t) {
    t.nonNull.field("createUser", {
      type: User,
      args: {
        name: stringArg(),
        email: stringArg(),
        image: stringArg(),
      },
      resolve(_root, { name, email, image }, ctx) {
        const user = ctx.prisma.user.create({
          data: {
            name,
            email,
            image,
          },
        });
        return user;
      },
    });
  },
});

export const GQLDate = asNexusMethod(DateTimeResolver, "date");

const baseSchema = makeSchema({
  types: [Query, User, GQLDate, Mutation],
  plugins: [],
  outputs: {
    typegen: path.join(process.cwd(), "generated/nexus-typegen.ts"),
    schema: path.join(process.cwd(), "generated/schema.graphql"),
  },
  contextType: {
    module: path.join(process.cwd(), "apollo/context.ts"),
    export: "Context",
  },
  sourceTypes: {
    modules: [
      {
        module: "@prisma/client",
        alias: "prisma",
      },
    ],
  },
});

export const schema = baseSchema;
