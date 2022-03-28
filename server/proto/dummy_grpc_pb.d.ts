// package: dummy
// file: proto/dummy.proto

import * as grpc from "grpc";
import * as proto_dummy_pb from "../proto/dummy_pb";

interface IDummyServiceService
    extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {}

export const DummyServiceService: IDummyServiceService;
export interface IDummyServiceServer
    extends grpc.UntypedServiceImplementation {}

export interface IDummyServiceClient {}

export class DummyServiceClient
    extends grpc.Client
    implements IDummyServiceClient
{
    constructor(
        address: string,
        credentials: grpc.ChannelCredentials,
        options?: Partial<grpc.ClientOptions>
    );
}
