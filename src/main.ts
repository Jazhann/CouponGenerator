import { ConfigFactory } from "./config/configFactory";
import { CouponGenerator } from "./couponGenerator";
import { CouponGeneratorFactory } from "./couponGenerator/couponGeneratorFactory";

const couponGeneratorFactory = new CouponGeneratorFactory();
const configFactory = new ConfigFactory();
const couponGenerator = new CouponGenerator(configFactory, couponGeneratorFactory);
const src = './config.json';

couponGenerator.initialize(src);

const coupons = couponGenerator.getCoupons();
console.log(coupons);
