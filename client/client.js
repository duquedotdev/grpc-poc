var grpc = require("grpc");
var services = require("../server/dummy_grpc_pb");

function main() {
    console.log("Client started");
    var client = new services.DummyServiceClient(
        "localhost:50051",
        grpc.credentials.createInsecure()
    );
    console.log(client);
}

main();
