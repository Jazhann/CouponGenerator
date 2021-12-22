import { ConfigInterface } from "./configInterface";
import { ConfigJSON } from "./configJSON";


export class ConfigFactory {

    create(type): ConfigInterface {
        switch(type) {
            case 'json':
                return new ConfigJSON();
            default:
                throw new Error('Config type not supported');
        }
    }
}