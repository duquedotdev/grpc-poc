// package: greet
// file: proto/greet.proto

import * as grpc from 'grpc';
import * as proto_greet_pb from '../proto/greet_pb';

interface IGreetServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  greet: IGreetServiceService_IGreet;
}

interface IGreetServiceService_IGreet extends grpc.MethodDefinition<proto_greet_pb.GreetRequest, proto_greet_pb.GreetResponse> {
  path: '/greet.GreetService/Greet'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<proto_greet_pb.GreetRequest>;
  requestDeserialize: grpc.deserialize<proto_greet_pb.GreetRequest>;
  responseSerialize: grpc.serialize<proto_greet_pb.GreetResponse>;
  responseDeserialize: grpc.deserialize<proto_greet_pb.GreetResponse>;
}

export const GreetServiceService: IGreetServiceService;
export interface IGreetServiceServer extends grpc.UntypedServiceImplementation {
  greet: grpc.handleUnaryCall<proto_greet_pb.GreetRequest, proto_greet_pb.GreetResponse>;
}

export interface IGreetServiceClient {
  greet(request: proto_greet_pb.GreetRequest, callback: (error: grpc.ServiceError | null, response: proto_greet_pb.GreetResponse) => void): grpc.ClientUnaryCall;
  greet(request: proto_greet_pb.GreetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_greet_pb.GreetResponse) => void): grpc.ClientUnaryCall;
  greet(request: proto_greet_pb.GreetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_greet_pb.GreetResponse) => void): grpc.ClientUnaryCall;
}

export class GreetServiceClient extends grpc.Client implements IGreetServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public greet(request: proto_greet_pb.GreetRequest, callback: (error: grpc.ServiceError | null, response: proto_greet_pb.GreetResponse) => void): grpc.ClientUnaryCall;
  public greet(request: proto_greet_pb.GreetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_greet_pb.GreetResponse) => void): grpc.ClientUnaryCall;
  public greet(request: proto_greet_pb.GreetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_greet_pb.GreetResponse) => void): grpc.ClientUnaryCall;
}

