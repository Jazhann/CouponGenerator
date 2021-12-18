import { CouponGenerator } from "./couponGeneratorBase";

export class couponGeneratorSecuencial implements CouponGenerator {
    
    getCoupons(amount: number): string[] {
        let coupons = [];
        for (let i = 0; i < amount; i++) {
            coupons.push(i.toString());
        }
        return coupons;
    }
}