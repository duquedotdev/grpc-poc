var grpc = require("grpc");

function main() {
    var server = new grpc.Server();

    server.bind("127.0.0.1:50051", grpc.ServerCredentials.createInsecure());

    server.start();

    console.log("Server started on port 50051");
}

main();
