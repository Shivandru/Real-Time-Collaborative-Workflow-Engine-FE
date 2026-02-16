export type SessionType = {
    accessToken: string;
    user: {
        userId: string;
        email: string;
        name: string;
        image: string;
    }
}

export type HeadersType = {
    authorization: string;
}