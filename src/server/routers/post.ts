/**
 *
 * This is an example router, you can delete this file and then update `../pages/api/trpc/[trpc].tsx`
 */
import { router, publicProcedure } from '../trpc';

import { waitUntil } from '@vercel/functions';

/**
 * Default selector for Post.
 * It's important to always explicitly say which fields you want to return in order to not leak extra information
 * @see https://github.com/prisma/prisma/issues/9353
 */

export const postRouter = router({
  add: publicProcedure.mutation(async ({ input }) => {
    console.log('ADDING POST IN REAL TIME');
    await new Promise((resolve) => setTimeout(resolve, 200));

    waitUntil(
      (async () => {
        // wait 1 second
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // update post with new title
        console.log('UPDATING POST IN REAL TIME');
      })(),
    );

    return {
      id: '1',
      title: 'New Title',
      text: 'New Text',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }),
});
