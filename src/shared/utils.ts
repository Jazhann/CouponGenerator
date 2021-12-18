export class Utils {
    constructor(){}

    PadLeft(value, length) {
        return (value.toString().length < length) ? this.PadLeft("0" + value, length) : value;
    }

}