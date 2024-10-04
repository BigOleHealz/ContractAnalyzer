/* eslint-disable */
import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(["id", "name", "email", "pictureUrl", "tokenInvitation", "emailVerified", "stripeCustomerId", "status", "globalRole", "password", "dateCreated", "dateUpdated"])
