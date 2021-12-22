export interface CouponGeneratorInterface {

    getCoupons(amount: number, length: number): string[];
}