/* eslint-disable */
import { z } from 'zod';
import { SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema';
import { SessionUpdateWithoutUserInputObjectSchema } from './SessionUpdateWithoutUserInput.schema';
import { SessionUncheckedUpdateWithoutUserInputObjectSchema } from './SessionUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutUserInput>;
export const SessionUpdateWithWhereUniqueWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => SessionWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => SessionUpdateWithoutUserInputObjectSchema), z.lazy(() => SessionUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict() as SchemaType;
