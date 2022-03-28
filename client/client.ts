import grpc from "grpc";
import greets from "../server/proto/greet_pb";
import serviceGreet from "../server/proto/greet_grpc_pb";

import rsi from "../server/proto/rsi_pb";
import serviceRsi from "../server/proto/rsi_grpc_pb";

function greet() {
    const client = new serviceGreet.GreetServiceClient(
        "localhost:50051",
        grpc.credentials.createInsecure()
    );
    const request = new greets.GreetRequest();
    const greeting = new greets.Greeting();

    greeting.setFirstName("Felipe");
    greeting.setLastName("Duque");

    request.setGreeting(greeting);

    client.greet(request, (err: any, response: any) => {
        if (!err) {
            console.log(response.getResult());
        } else {
            console.error(err);
        }
    });
}

function rsiCall() {
    const client = new serviceRsi.RsiServiceClient(
        "localhost:50051",
        grpc.credentials.createInsecure()
    );
    const request = new rsi.RsiRequest();
    const rsiResult = new rsi.Rsi();

    rsiResult.setClosesList([
        0.17, 0.168, 0.177, 0.18, 0.157, 0.166, 0.181, 0.191, 0.16, 0.15,
    ]);

    request.setCloses(rsiResult);

    client.rsi(request, (err: any, response: any) => {
        if (!err) {
            console.log(response.getResult());
        } else {
            console.error(err);
        }
    });
}

function main() {
    greet();
    rsiCall();
}

main();
