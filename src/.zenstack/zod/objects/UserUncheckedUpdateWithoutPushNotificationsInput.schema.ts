/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { UserStatusSchema } from '../enums/UserStatus.schema';
import { EnumUserStatusFieldUpdateOperationsInputObjectSchema } from './EnumUserStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './AccountUncheckedUpdateManyWithoutUserNestedInput.schema';
import { SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUncheckedUpdateManyWithoutUserNestedInput.schema';
import { ContractUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ContractUncheckedUpdateManyWithoutUserNestedInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUncheckedUpdateWithoutPushNotificationsInput>;
export const UserUncheckedUpdateWithoutPushNotificationsInputObjectSchema: SchemaType = z.object({
    id: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), name: z.union([z.string(),
    z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), email: z.union([z.string(),
    z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), pictureUrl: z.union([z.string(),
    z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), tokenInvitation: z.union([z.string(),
    z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), emailVerified: z.union([z.boolean(),
    z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), stripeCustomerId: z.union([z.string(),
    z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), status: z.union([z.lazy(() => UserStatusSchema),
    z.lazy(() => EnumUserStatusFieldUpdateOperationsInputObjectSchema)]).optional(), globalRole: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), password: z.union([z.string(),
    z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), dateCreated: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), dateUpdated: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(), sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(), contracts: z.lazy(() => ContractUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict() as SchemaType;
