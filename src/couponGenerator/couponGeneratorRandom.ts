import { CouponGenerator } from "./couponGeneratorBase";

export class couponGeneratorRandom implements CouponGenerator {
    getCoupons(amount: number, length: number): string[] {
        let max = '';
        while(max.length < length) {
            max += '9';
        }
        let coupons = [];
        for (let i = 0; i < amount; i++) {
            const coupon = Math.floor(Math.random() * +max);
            coupons.some(c => c === coupon.toString()) ? i-- : coupons.push(coupon.toString());
        }
        return coupons;
    }
}