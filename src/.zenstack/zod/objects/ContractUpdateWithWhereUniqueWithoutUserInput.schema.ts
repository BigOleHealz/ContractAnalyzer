/* eslint-disable */
import { z } from 'zod';
import { ContractWhereUniqueInputObjectSchema } from './ContractWhereUniqueInput.schema';
import { ContractUpdateWithoutUserInputObjectSchema } from './ContractUpdateWithoutUserInput.schema';
import { ContractUncheckedUpdateWithoutUserInputObjectSchema } from './ContractUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ContractUpdateWithWhereUniqueWithoutUserInput>;
export const ContractUpdateWithWhereUniqueWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ContractWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => ContractUpdateWithoutUserInputObjectSchema), z.lazy(() => ContractUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict() as SchemaType;
