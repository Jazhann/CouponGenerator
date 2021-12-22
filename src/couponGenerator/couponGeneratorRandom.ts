import { CouponGeneratorInterface } from "./couponGeneratorInterface";

export class couponGeneratorRandom implements CouponGeneratorInterface {

    getCoupons(amount: number, length: number): string[] {
        let max = Math.pow(10, length) - 1;
        let coupons = [];
        for (let i = 0; i < amount; i++) {
            let coupon = Math.floor(Math.random() * +max).toString().padStart(length, '0');
            coupons.some(c => c === coupon) ? i-- : coupons.push(coupon);
        }
        return coupons;
    }
}