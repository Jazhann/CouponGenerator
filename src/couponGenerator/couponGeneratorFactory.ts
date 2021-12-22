import { CouponGeneratorInterface } from "./couponGeneratorInterface";
import { couponGeneratorRandom } from "./couponGeneratorRandom";
import { couponGeneratorSecuencial } from "./couponGeneratorSecuencial";

export class CouponGeneratorFactory {

    create(type): CouponGeneratorInterface {
        switch(type) {
            case 'secuencial':
                return new couponGeneratorSecuencial();
            case 'random':
                return new couponGeneratorRandom();
            default:
                throw new Error('Generator type not supported');
        }
    }
}