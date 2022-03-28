// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_rsi_pb = require('../proto/rsi_pb.js');

function serialize_rsi_RsiRequest(arg) {
  if (!(arg instanceof proto_rsi_pb.RsiRequest)) {
    throw new Error('Expected argument of type rsi.RsiRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rsi_RsiRequest(buffer_arg) {
  return proto_rsi_pb.RsiRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rsi_RsiResponse(arg) {
  if (!(arg instanceof proto_rsi_pb.RsiResponse)) {
    throw new Error('Expected argument of type rsi.RsiResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rsi_RsiResponse(buffer_arg) {
  return proto_rsi_pb.RsiResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var RsiServiceService = exports.RsiServiceService = {
  rsi: {
    path: '/rsi.RsiService/Rsi',
    requestStream: false,
    responseStream: false,
    requestType: proto_rsi_pb.RsiRequest,
    responseType: proto_rsi_pb.RsiResponse,
    requestSerialize: serialize_rsi_RsiRequest,
    requestDeserialize: deserialize_rsi_RsiRequest,
    responseSerialize: serialize_rsi_RsiResponse,
    responseDeserialize: deserialize_rsi_RsiResponse,
  },
};

exports.RsiServiceClient = grpc.makeGenericClientConstructor(RsiServiceService);
