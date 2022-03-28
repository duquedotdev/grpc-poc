import * as grpc from "@grpc/grpc-js";
import tulind from "tulind";

import greets from "./proto/greet_pb";
import serviceGreet from "./proto/greet_grpc_pb";

import rsis from "./proto/rsi_pb";
import serviceRsi from "./proto/rsi_grpc_pb";

function greet(call: any, callback: any) {
    var greeting = new greets.GreetResponse();
    greeting.setResult(
        "Hello, " +
            call.request.getGreeting().getFirstName() +
            " " +
            call.request.getGreeting().getLastName() +
            "!"
    );
    callback(null, greeting);
}

async function rsi(call: any, callback: any): Promise<String> {
    var rsi = new rsis.RsiResponse();

    var closes = call.request.getCloses().getClosesList();

    var calcRsi = await Promise.resolve(
        tulind.indicators.rsi.indicator([closes], [9])
    );

    rsi.setResult(calcRsi[0][0].toString());

    // console.log(calcRsi[0][0]);

    // console.log(rsi);

    return callback(null, rsi);
}

function main() {
    var server = new grpc.Server();

    server.addService(serviceGreet.GreetServiceService, { greet: greet });
    server.addService(serviceRsi.RsiServiceService, { rsi: rsi });

    server.bindAsync(
        "127.0.0.1:50051",
        grpc.ServerCredentials.createInsecure(),
        (err, port) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Server started");
            server.start();
        }
    );

    // server.start();
}

main();
