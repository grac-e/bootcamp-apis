import assert from "assert";
import { enoughAirtime } from "../enoughAirtime.js";

describe('The enoughAirtime test', function () {

    it('should calculate if a user will have enough airtime based on their projected usage', function () {
        assert.equal('R16.98', enoughAirtime('call,call,call,data,sms,sms,call,data', 50));
        assert.equal('R0.00', enoughAirtime('data,sms,data,sms', 20))
        assert.equal('R0.00', enoughAirtime('data,data,data', 36));
    });
});