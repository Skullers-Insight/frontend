import { makeSchema, queryType, objectType } from "nexus";
import path from "path";

const Artist = objectType({
  name: "Artist",
  definition(t) {
    t.int("id");
    t.string("name");
    t.string("url");
  },
});

const Album = objectType({
  name: "Album",
  definition(t) {
    t.int("id");
    t.string("name");
    t.string("year");
    t.field("artist", {
      type: Artist,
      async resolve(_album, _args, _ctx) {
        const artist = await {};
        // The ! tells TypeScript to trust us, it won't be null
        return artist!;
      },
    });
  },
});

const Query = queryType({
  definition(t) {
    t.list.field("albums", {
      type: Album,
      args: {
        first: "Int",
      },
      resolve(_root, args, ctx) {
        return ctx.prisma.album.findMany({ take: args.first });
      },
    });
  },
});

export const schema = makeSchema({
  types: [Query, Artist, Album],
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
