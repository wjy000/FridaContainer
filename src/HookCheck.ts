import {FCAnd} from "../utils/FCAnd";
import {DMLog} from "../utils/dmlog";

var TAG = "Check";

class HookCheck {
    static hook() {
        DMLog.i(TAG, "hook start");

        let FridaActivity = Java.use("zpp.wjy.sweethook.FridaActivity");
        FridaActivity.getMsg.implementation = function () {
            FCAnd.showStacks();
            let msg = this.getMsg();
            return msg + " hooked";
        }
    }
}

export default HookCheck;