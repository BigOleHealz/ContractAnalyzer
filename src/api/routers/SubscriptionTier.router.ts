/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.SubscriptionTierInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).subscriptionTier.createMany(input as any))),

        create: procedure.input($Schema.SubscriptionTierInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).subscriptionTier.create(input as any))),

        deleteMany: procedure.input($Schema.SubscriptionTierInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).subscriptionTier.deleteMany(input as any))),

        delete: procedure.input($Schema.SubscriptionTierInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).subscriptionTier.delete(input as any))),

        findFirst: procedure.input($Schema.SubscriptionTierInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).subscriptionTier.findFirst(input as any))),

        findMany: procedure.input($Schema.SubscriptionTierInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).subscriptionTier.findMany(input as any))),

        findUnique: procedure.input($Schema.SubscriptionTierInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).subscriptionTier.findUnique(input as any))),

        updateMany: procedure.input($Schema.SubscriptionTierInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).subscriptionTier.updateMany(input as any))),

        update: procedure.input($Schema.SubscriptionTierInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).subscriptionTier.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.SubscriptionTierCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SubscriptionTierCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SubscriptionTierCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SubscriptionTierCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.SubscriptionTierCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SubscriptionTierCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SubscriptionTierGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SubscriptionTierGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SubscriptionTierCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SubscriptionTierCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SubscriptionTierGetPayload<T>, Context>) => Promise<Prisma.SubscriptionTierGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.SubscriptionTierDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SubscriptionTierDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SubscriptionTierDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SubscriptionTierDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.SubscriptionTierDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SubscriptionTierDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SubscriptionTierGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SubscriptionTierGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SubscriptionTierDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SubscriptionTierDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SubscriptionTierGetPayload<T>, Context>) => Promise<Prisma.SubscriptionTierGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.SubscriptionTierFindFirstArgs, TData = Prisma.SubscriptionTierGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SubscriptionTierFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SubscriptionTierGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SubscriptionTierFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SubscriptionTierFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SubscriptionTierGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SubscriptionTierGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.SubscriptionTierFindManyArgs, TData = Array<Prisma.SubscriptionTierGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.SubscriptionTierFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.SubscriptionTierGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SubscriptionTierFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SubscriptionTierFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.SubscriptionTierGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.SubscriptionTierGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.SubscriptionTierFindUniqueArgs, TData = Prisma.SubscriptionTierGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SubscriptionTierFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SubscriptionTierGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SubscriptionTierFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SubscriptionTierFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SubscriptionTierGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SubscriptionTierGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.SubscriptionTierUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SubscriptionTierUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SubscriptionTierUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SubscriptionTierUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.SubscriptionTierUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SubscriptionTierUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SubscriptionTierGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SubscriptionTierGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SubscriptionTierUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SubscriptionTierUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SubscriptionTierGetPayload<T>, Context>) => Promise<Prisma.SubscriptionTierGetPayload<T>>
            };

    };
}
