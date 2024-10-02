CREATE TYPE UserStatus AS ENUM ('INVITED', 'VERIFIED');
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE "User" (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT,
    email TEXT UNIQUE,
    pictureurl TEXT DEFAULT 'https://i.imgur.com/ZdJSK3Y.jpeg',
    tokenInvitation TEXT,
    emailVerified BOOLEAN,
    stripeCustomerId TEXT,
    status UserStatus DEFAULT 'VERIFIED',
    globalRole TEXT DEFAULT 'USER',
    password TEXT,
    dateCreated TIMESTAMPTZ DEFAULT now(),
    dateUpdated TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE Contract (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    content TEXT,
    fileUrl TEXT,
    status TEXT,
    userId UUID,
    dateCreated TIMESTAMPTZ DEFAULT now(),
    dateUpdated TIMESTAMPTZ DEFAULT now(),
    CONSTRAINT fk_user FOREIGN KEY (userId) REFERENCES "User" (id) ON DELETE SET NULL
);

CREATE TABLE Clause (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    content TEXT,
    isImportant BOOLEAN,
    aiAnalysis TEXT,
    contractId UUID,
    dateCreated TIMESTAMPTZ DEFAULT now(),
    dateUpdated TIMESTAMPTZ DEFAULT now(),
    CONSTRAINT fk_contract FOREIGN KEY (contractId) REFERENCES Contract (id) ON DELETE CASCADE
);

CREATE TABLE PushNotification (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    endpoint TEXT,
    subscription TEXT,
    dateCreated TIMESTAMPTZ DEFAULT now(),
    dateUpdated TIMESTAMPTZ DEFAULT now(),
    userId UUID,
    CONSTRAINT fk_push_user FOREIGN KEY (userId) REFERENCES "User" (id) ON DELETE CASCADE
);

CREATE TABLE Account (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    userId UUID,
    type TEXT,
    provider TEXT,
    providerAccountId TEXT,
    refresh_token TEXT,
    access_token TEXT,
    expires_at INT,
    token_type TEXT,
    scope TEXT,
    id_token TEXT,
    session_state TEXT,
    refresh_token_expires_in INT,
    CONSTRAINT fk_account_user FOREIGN KEY (userId) REFERENCES "User" (id) ON DELETE CASCADE,
    CONSTRAINT unique_provider_account UNIQUE (provider, providerAccountId)
);

CREATE TABLE Session (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    sessionToken TEXT UNIQUE,
    userId UUID,
    expires TIMESTAMPTZ,
    CONSTRAINT fk_session_user FOREIGN KEY (userId) REFERENCES "User" (id) ON DELETE CASCADE
);
