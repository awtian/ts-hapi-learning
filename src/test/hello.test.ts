import { Server } from "@hapi/hapi";
import { describe, it, beforeEach, afterEach } from "mocha";
import { expect } from "chai";

import { init } from "../server";

describe("server greets people", async () => {
  let server: Server;
  
  beforeEach((done) => {
    init().then(s => {server = s; done();})
  })
  afterEach((done) => {
    server.stop().then(() => done());
  })

  it("says hello world", async () => {
    const res = await server.inject({
      method: "get",
      url: "/hi"
    })
    expect(res.statusCode).to.equal(200);
    expect(res.result).to.equal("hi world");
  })
})