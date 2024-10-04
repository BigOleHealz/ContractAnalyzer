/* eslint-disable */
import { z } from 'zod';
import { PushNotificationSelectObjectSchema } from './PushNotificationSelect.schema';
import { PushNotificationIncludeObjectSchema } from './PushNotificationInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PushNotificationArgs>;
export const PushNotificationArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => PushNotificationSelectObjectSchema).optional(), include: z.lazy(() => PushNotificationIncludeObjectSchema).optional()
}).strict() as SchemaType;
