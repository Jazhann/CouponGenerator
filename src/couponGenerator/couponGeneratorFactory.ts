import { CouponGenerator } from "./couponGeneratorBase";
import { couponGeneratorRandom } from "./couponGeneratorRandom";
import { couponGeneratorSecuencial } from "./couponGeneratorSecuencial";

export class CouponGeneratorFactory {
    create(type): CouponGenerator | Error {
        switch(type) {
            case 'secuencial':
                return new couponGeneratorSecuencial();
            case 'random':
                return new couponGeneratorRandom();
            default:
                return new Error('Generator type not supported');
        }
    }
}