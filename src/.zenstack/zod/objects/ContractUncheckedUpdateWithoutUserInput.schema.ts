/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ClauseUncheckedUpdateManyWithoutContractNestedInputObjectSchema } from './ClauseUncheckedUpdateManyWithoutContractNestedInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ContractUncheckedUpdateWithoutUserInput>;
export const ContractUncheckedUpdateWithoutUserInputObjectSchema: SchemaType = z.object({
    id: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), content: z.union([z.string(),
    z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), fileUrl: z.union([z.string(),
    z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), status: z.union([z.string(),
    z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), dateCreated: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), dateUpdated: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), clauses: z.lazy(() => ClauseUncheckedUpdateManyWithoutContractNestedInputObjectSchema).optional()
}).strict() as SchemaType;
