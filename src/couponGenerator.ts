import { CouponGeneratorInterface } from "./couponGenerator/couponGeneratorInterface";
import { CouponGeneratorFactory } from "./couponGenerator/couponGeneratorFactory";
import { ConfigFactory } from "./config/configFactory";
import { ConfigData, ConfigInterface } from "./config/configInterface";

export class CouponGenerator {
    generator: CouponGeneratorInterface;
    configurator: ConfigInterface;
    config: ConfigData;

    constructor(
        public configFactory: ConfigFactory,
        public couponsFactory: CouponGeneratorFactory
    ) {}

    initialize(configSrc: string) {
        const fileType = configSrc.split('.').pop();
        try {
            this.configurator = this.configFactory.create(fileType);
            this.config = this.configurator.getConfig(configSrc);
            if (!this.validateConfig()) {
                throw new Error('Configuration not valid');
            }
            this.generator = this.couponsFactory.create(this.config.type);
        } catch ( error ) {
            console.error(error);
            process.exit(1);
        }
    }
    
    getCoupons() {
        return this.generator.getCoupons(this.config.amount, this.config.length);
    }

    private validateConfig() {
        return typeof this.config?.type === 'string' &&
               typeof this.config?.amount === 'number' &&
               typeof this.config?.length === 'number' &&
               !(this.config?.length < this.config?.amount.toString().length);
            
    }
}