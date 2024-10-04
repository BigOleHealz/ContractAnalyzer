/* eslint-disable */
import { z } from 'zod';
import { ContractScalarWhereInputObjectSchema } from './ContractScalarWhereInput.schema';
import { ContractUpdateManyMutationInputObjectSchema } from './ContractUpdateManyMutationInput.schema';
import { ContractUncheckedUpdateManyWithoutUserInputObjectSchema } from './ContractUncheckedUpdateManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ContractUpdateManyWithWhereWithoutUserInput>;
export const ContractUpdateManyWithWhereWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ContractScalarWhereInputObjectSchema), data: z.union([z.lazy(() => ContractUpdateManyMutationInputObjectSchema), z.lazy(() => ContractUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict() as SchemaType;
