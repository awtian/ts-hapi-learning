'use strict';
import Hapi from "@hapi/hapi";
import { Request, Server } from "@hapi/hapi";

export let server: Server;


function index(request: Request): string {
  console.log("Processing request", request.info.id);
  return "hello hapi"
}

export const init = async function(): Promise<Server> {
  server = Hapi.server({
    port: process.env.PORT || 4000,
    host: '0.0.0.0'
  })

  // Routes will go here
  server.route({
    method: "GET",
    path: "/",
    handler: index
  })


  return server;
}


export const start = async function (): Promise<void> {
  const {host, port} = server.settings;
  console.log(`Listening on ${host}:${port}`);
  return server.start();
}

process.on('unhandledRejection', (err) => {
  console.error("unhandled rejaction");
  console.error(err);
  process.exit(1);
})