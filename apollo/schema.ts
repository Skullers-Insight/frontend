import { makeSchema, queryType, objectType, intArg } from "nexus";
import path from "path";

const User = objectType({
  name: "User",
  definition(t) {
    t.int("id");
    t.string("name");
    t.string("password");
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

export const schema = makeSchema({
  types: [Query, User],
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
