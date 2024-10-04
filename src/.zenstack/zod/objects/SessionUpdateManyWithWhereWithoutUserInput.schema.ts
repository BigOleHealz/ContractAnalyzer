/* eslint-disable */
import { z } from 'zod';
import { SessionScalarWhereInputObjectSchema } from './SessionScalarWhereInput.schema';
import { SessionUpdateManyMutationInputObjectSchema } from './SessionUpdateManyMutationInput.schema';
import { SessionUncheckedUpdateManyWithoutUserInputObjectSchema } from './SessionUncheckedUpdateManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutUserInput>;
export const SessionUpdateManyWithWhereWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => SessionScalarWhereInputObjectSchema), data: z.union([z.lazy(() => SessionUpdateManyMutationInputObjectSchema), z.lazy(() => SessionUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict() as SchemaType;
