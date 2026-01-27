class GeneralFunction {
    private base_url = process.env.BACKEND_URL

    public createUrl(apiString: string): string {
        if(!this.base_url){
            throw new Error(`Backend url not present`);
        }
        return `${this.base_url}${apiString}`;
    }
}

export const generalFunction = new GeneralFunction();