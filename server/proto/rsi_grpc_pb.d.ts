// package: rsi
// file: proto/rsi.proto

import * as grpc from 'grpc';
import * as proto_rsi_pb from '../proto/rsi_pb';

interface IRsiServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  rsi: IRsiServiceService_IRsi;
}

interface IRsiServiceService_IRsi extends grpc.MethodDefinition<proto_rsi_pb.RsiRequest, proto_rsi_pb.RsiResponse> {
  path: '/rsi.RsiService/Rsi'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<proto_rsi_pb.RsiRequest>;
  requestDeserialize: grpc.deserialize<proto_rsi_pb.RsiRequest>;
  responseSerialize: grpc.serialize<proto_rsi_pb.RsiResponse>;
  responseDeserialize: grpc.deserialize<proto_rsi_pb.RsiResponse>;
}

export const RsiServiceService: IRsiServiceService;
export interface IRsiServiceServer extends grpc.UntypedServiceImplementation {
  rsi: grpc.handleUnaryCall<proto_rsi_pb.RsiRequest, proto_rsi_pb.RsiResponse>;
}

export interface IRsiServiceClient {
  rsi(request: proto_rsi_pb.RsiRequest, callback: (error: grpc.ServiceError | null, response: proto_rsi_pb.RsiResponse) => void): grpc.ClientUnaryCall;
  rsi(request: proto_rsi_pb.RsiRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_rsi_pb.RsiResponse) => void): grpc.ClientUnaryCall;
  rsi(request: proto_rsi_pb.RsiRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_rsi_pb.RsiResponse) => void): grpc.ClientUnaryCall;
}

export class RsiServiceClient extends grpc.Client implements IRsiServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public rsi(request: proto_rsi_pb.RsiRequest, callback: (error: grpc.ServiceError | null, response: proto_rsi_pb.RsiResponse) => void): grpc.ClientUnaryCall;
  public rsi(request: proto_rsi_pb.RsiRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_rsi_pb.RsiResponse) => void): grpc.ClientUnaryCall;
  public rsi(request: proto_rsi_pb.RsiRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_rsi_pb.RsiResponse) => void): grpc.ClientUnaryCall;
}

