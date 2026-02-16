import { HeadersType, SessionType } from "../types/session";

class GeneralFunction {
    private base_url = process.env.NEXT_PUBLIC_BACKEND_URL

    public createUrl(apiString: string): string {
        console.log("base url", this.base_url);
        if(!this.base_url){
            throw new Error(`Backend url not present`);
        }
        return `${this.base_url}${apiString}`;
    }

    public createHeaders(session: SessionType): HeadersType {
        return {
            authorization: `Bearer ${session.accessToken}`,
        }
    }
}

export const generalFunction = new GeneralFunction();