/* eslint-disable */
import { z } from 'zod';
import { AccountScalarWhereInputObjectSchema } from './AccountScalarWhereInput.schema';
import { AccountUpdateManyMutationInputObjectSchema } from './AccountUpdateManyMutationInput.schema';
import { AccountUncheckedUpdateManyWithoutUserInputObjectSchema } from './AccountUncheckedUpdateManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.AccountUpdateManyWithWhereWithoutUserInput>;
export const AccountUpdateManyWithWhereWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => AccountScalarWhereInputObjectSchema), data: z.union([z.lazy(() => AccountUpdateManyMutationInputObjectSchema), z.lazy(() => AccountUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict() as SchemaType;
