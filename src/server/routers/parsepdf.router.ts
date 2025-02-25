import { z } from 'zod';
import { Trpc } from '@/core/trpc/server';

export const ParsePdfRouter = Trpc.createRouter({
  parsePdf: Trpc.procedure
    .input(z.object({ file: z.string() }))
    .mutation(async ({ ctx, input }) => {
      console.log(`Hello ${ctx.session.user.id}`);

      // const likes = await ctx.database.like.findMany({
      //   where: { tweetId: input.tweetId },
      // });

      // return likes.length;
      return "Hello";
    }),
});