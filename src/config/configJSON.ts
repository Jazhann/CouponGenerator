import * as fs from "fs";
import { ConfigData, ConfigInterface } from "./configInterface"



export class ConfigJSON implements ConfigInterface{

    getConfig(src): ConfigData {
        let config;
        try {
            config = fs.readFileSync(src);
        } catch (error) {
            throw new Error('Config file not found at: '+ src);
        }
        return JSON.parse(config);
    }

}