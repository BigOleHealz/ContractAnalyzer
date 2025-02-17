/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createContractRouter from "./Contract.router";
import createClauseRouter from "./Clause.router";
import createUserRouter from "./User.router";
import createPushNotificationRouter from "./PushNotification.router";
import createAccountRouter from "./Account.router";
import createSessionRouter from "./Session.router";
import createSubscriptionRouter from "./Subscription.router";
import createSubscriptionTierRouter from "./SubscriptionTier.router";
import { ClientType as ContractClientType } from "./Contract.router";
import { ClientType as ClauseClientType } from "./Clause.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as PushNotificationClientType } from "./PushNotification.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as SessionClientType } from "./Session.router";
import { ClientType as SubscriptionClientType } from "./Subscription.router";
import { ClientType as SubscriptionTierClientType } from "./SubscriptionTier.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        contract: createContractRouter(router, procedure),
        clause: createClauseRouter(router, procedure),
        user: createUserRouter(router, procedure),
        pushNotification: createPushNotificationRouter(router, procedure),
        account: createAccountRouter(router, procedure),
        session: createSessionRouter(router, procedure),
        subscription: createSubscriptionRouter(router, procedure),
        subscriptionTier: createSubscriptionTierRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    contract: ContractClientType<AppRouter>;
    clause: ClauseClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    pushNotification: PushNotificationClientType<AppRouter>;
    account: AccountClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
    subscription: SubscriptionClientType<AppRouter>;
    subscriptionTier: SubscriptionTierClientType<AppRouter>;
}
