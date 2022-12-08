type UserIdentity = {
    id: string,
    user_id: string,
    identity_data: {
        email: string,
        sub: string
    },
    provider: string,
    last_sign_in_at: string,
    created_at: string,
    updated_at: string,
}

export type User = {
    id: string,
    aud: string,
    role: string,
    email: string,
    email_confirmed_at: string,
    phone: string,
    confirmed_at: string,
    last_sign_in_at: string,
    app_metadata: {
        provider: string,
        providers: string[]
    },
    user_metadata: Record<any, any>,
    identities: UserIdentity[],
    created_at: string,
    updated_at: string
}

export type UserState = {
    user: User | null
}