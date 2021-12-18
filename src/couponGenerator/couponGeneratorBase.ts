export interface CouponGenerator {

    getCoupons(amount: number, length?: number): string[];
}