/* eslint-disable */
import { z } from 'zod';
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema';
import { AccountUpdateWithoutUserInputObjectSchema } from './AccountUpdateWithoutUserInput.schema';
import { AccountUncheckedUpdateWithoutUserInputObjectSchema } from './AccountUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.AccountUpdateWithWhereUniqueWithoutUserInput>;
export const AccountUpdateWithWhereUniqueWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => AccountWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => AccountUpdateWithoutUserInputObjectSchema), z.lazy(() => AccountUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict() as SchemaType;
