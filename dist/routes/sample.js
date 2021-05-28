"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const buy_1 = __importDefault(require("../controllers/buy"));
const router = express_1.default.Router();
router.get('/buy', buy_1.default.buy);
module.exports = router;
//# sourceMappingURL=sample.js.map