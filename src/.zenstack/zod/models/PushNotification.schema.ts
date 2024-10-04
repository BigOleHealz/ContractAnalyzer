/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    id: z.string(),
    endpoint: z.string(),
    subscription: z.string(),
    dateCreated: z.coerce.date().default(() => new Date()),
    dateUpdated: z.coerce.date().default(() => new Date()),
}
).strict();
const relationSchema = z.object({
    user: z.record(z.unknown()),
}
);
const fkSchema = z.object({
    userId: z.string(),
}
);

/**
 * `PushNotification` schema excluding foreign keys and relations.
 */
export const PushNotificationScalarSchema = baseSchema;


/**
 * `PushNotification` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const PushNotificationSchema = PushNotificationScalarSchema.merge(fkSchema).merge(relationSchema.partial());


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const PushNotificationPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const PushNotificationPrismaUpdateSchema = z.object({
    id: z.string(),
    endpoint: z.string(),
    subscription: z.string(),
    dateCreated: z.coerce.date().default(() => new Date()),
    dateUpdated: z.coerce.date().default(() => new Date())
}).partial().passthrough();


/**
 * `PushNotification` schema for create operations excluding foreign keys and relations.
 */
export const PushNotificationCreateScalarSchema = baseSchema.partial({
    id: true, dateCreated: true, dateUpdated: true
});


/**
 * `PushNotification` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const PushNotificationCreateSchema = PushNotificationCreateScalarSchema.merge(fkSchema);


/**
 * `PushNotification` schema for update operations excluding foreign keys and relations.
 */
export const PushNotificationUpdateScalarSchema = baseSchema.partial();


/**
 * `PushNotification` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const PushNotificationUpdateSchema = PushNotificationUpdateScalarSchema.merge(fkSchema.partial());

