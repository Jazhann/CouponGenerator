import { CouponGeneratorFactory } from "./couponGenerator/couponGeneratorFactory";
import { Utils } from "./shared/utils";
import config from "./config/config.json";

let generator;
let coupons;
const factory = new CouponGeneratorFactory();
const utils = new Utils();

try {
    generator = factory.create(config.type)
} catch ( error ) {
    console.error(error);
    process.exit(1);
}

if (config.length < config.amount.toString().length) {
    console.error('Length can not be higher than amount length');
    process.exit(1);
}

coupons = generator.getCoupons(config.amount, config.length);
coupons = coupons.map(coupon => utils.PadLeft(coupon, config.length));
console.log(coupons);
