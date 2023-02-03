"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_1 = require("mocha");
const chai_1 = require("chai");
const server_1 = require("../../src/server");
(0, mocha_1.describe)("smoke test", () => __awaiter(void 0, void 0, void 0, function* () {
    let server;
    (0, mocha_1.beforeEach)((done) => {
        (0, server_1.init)().then(s => { server = s; done(); });
    });
    (0, mocha_1.afterEach)((done) => {
        server.stop().then(() => done());
    });
    (0, mocha_1.it)("index responds", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield server.inject({
            method: "get",
            url: "/"
        });
        (0, chai_1.expect)(res.statusCode).to.equal(200);
        (0, chai_1.expect)(res.result).to.equal("hello hapi");
    }));
}));
