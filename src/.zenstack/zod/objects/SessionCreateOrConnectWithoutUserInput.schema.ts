/* eslint-disable */
import { z } from 'zod';
import { SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema';
import { SessionCreateWithoutUserInputObjectSchema } from './SessionCreateWithoutUserInput.schema';
import { SessionUncheckedCreateWithoutUserInputObjectSchema } from './SessionUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SessionCreateOrConnectWithoutUserInput>;
export const SessionCreateOrConnectWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => SessionWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => SessionCreateWithoutUserInputObjectSchema), z.lazy(() => SessionUncheckedCreateWithoutUserInputObjectSchema)])
}).strict() as SchemaType;
