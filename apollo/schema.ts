import { makeSchema, queryType, objectType } from "@nexus/schema";

const Query = queryType({
  definition(t) {
    t.list.field("albums", {
      type: "Album",
      args: {
        first: "Int",
      },
      resolve(_root, args, ctx) {
        return ctx.prisma.album.findMany({ take: args.first });
      },
    });
  },
});

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
      type: "Artist",
      async resolve(_album, _args, ctx) {
        const artist = await ctx.prisma.artist.findFirst();
        // The ! tells TypeScript to trust us, it won't be null
        return artist!;
      },
    });
  },
});

export const schema = makeSchema({
  types: [Query, Artist, Album],
});
