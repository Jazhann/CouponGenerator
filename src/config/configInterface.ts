export interface ConfigData {
    amount: number;
    length: number;
    type: string;
}

export interface ConfigInterface {

    getConfig(src: string): ConfigData;
}