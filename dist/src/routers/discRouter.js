"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const discController_1 = __importDefault(require("../controllers/discController"));
const router = express_1.default.Router();
router.get('/', discController_1.default.getDisc);
router.post('/', discController_1.default.postDisc);
exports.default = router;
