/* eslint-disable */
import { z } from 'zod';
import { UserStatus } from '@prisma/client';
import { UserStatusSchema } from '../enums/UserStatus.schema';
const baseSchema = z.object({
    id: z.string(),
    name: z.string().nullish(),
    email: z.string().nullish(),
    pictureUrl: z.string().default("https://i.imgur.com/ZdJSK3Y.jpeg").nullish(),
    tokenInvitation: z.string().nullish(),
    emailVerified: z.boolean().nullish(),
    stripeCustomerId: z.string().nullish(),
    status: UserStatusSchema,
    globalRole: z.string().default("USER"),
    password: z.string().nullish(),
    dateCreated: z.coerce.date().default(() => new Date()),
    dateUpdated: z.coerce.date().default(() => new Date()),
}
).strict();
const relationSchema = z.object({
    accounts: z.array(z.unknown()).optional(),
    sessions: z.array(z.unknown()).optional(),
    pushNotifications: z.array(z.unknown()).optional(),
    contracts: z.array(z.unknown()).optional(),
}
);

/**
 * `User` schema excluding foreign keys and relations.
 */
export const UserScalarSchema = baseSchema.omit({
    password: true,
});


/**
 * `User` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const UserSchema = UserScalarSchema.merge(relationSchema.partial());


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const UserPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const UserPrismaUpdateSchema = z.object({
    id: z.string(),
    name: z.string().nullish(),
    email: z.string().nullish(),
    pictureUrl: z.string().default("https://i.imgur.com/ZdJSK3Y.jpeg").nullish(),
    tokenInvitation: z.string().nullish(),
    emailVerified: z.boolean().nullish(),
    stripeCustomerId: z.string().nullish(),
    status: UserStatusSchema,
    globalRole: z.string().default("USER"),
    password: z.string().nullish(),
    dateCreated: z.coerce.date().default(() => new Date()),
    dateUpdated: z.coerce.date().default(() => new Date())
}).partial().passthrough();


/**
 * `User` schema for create operations excluding foreign keys and relations.
 */
export const UserCreateScalarSchema = baseSchema.partial({
    id: true, pictureUrl: true, status: true, globalRole: true, dateCreated: true, dateUpdated: true
});


/**
 * `User` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const UserCreateSchema = baseSchema.partial({
    id: true, pictureUrl: true, status: true, globalRole: true, dateCreated: true, dateUpdated: true
});


/**
 * `User` schema for update operations excluding foreign keys and relations.
 */
export const UserUpdateScalarSchema = baseSchema.partial();


/**
 * `User` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const UserUpdateSchema = UserUpdateScalarSchema;

