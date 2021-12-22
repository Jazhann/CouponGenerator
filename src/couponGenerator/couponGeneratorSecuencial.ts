import { CouponGeneratorInterface } from "./couponGeneratorInterface";

export class couponGeneratorSecuencial implements CouponGeneratorInterface {
    
    getCoupons(amount: number, length: number): string[] {
        let coupons = [];
        for (let i = 0; i < amount; i++) {
            coupons.push(i.toString().padStart(length, '0'));
        }
        return coupons;
    }
}