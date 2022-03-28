// package: rsi
// file: proto/rsi.proto

import * as jspb from 'google-protobuf';

export class Rsi extends jspb.Message {
  clearClosesList(): void;
  getClosesList(): Array<number>;
  setClosesList(value: Array<number>): void;
  addCloses(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Rsi.AsObject;
  static toObject(includeInstance: boolean, msg: Rsi): Rsi.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Rsi, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Rsi;
  static deserializeBinaryFromReader(message: Rsi, reader: jspb.BinaryReader): Rsi;
}

export namespace Rsi {
  export type AsObject = {
    closesList: Array<number>,
  }
}

export class RsiRequest extends jspb.Message {
  hasCloses(): boolean;
  clearCloses(): void;
  getCloses(): Rsi | undefined;
  setCloses(value?: Rsi): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RsiRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RsiRequest): RsiRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RsiRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RsiRequest;
  static deserializeBinaryFromReader(message: RsiRequest, reader: jspb.BinaryReader): RsiRequest;
}

export namespace RsiRequest {
  export type AsObject = {
    closes?: Rsi.AsObject,
  }
}

export class RsiResponse extends jspb.Message {
  getResult(): string;
  setResult(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RsiResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RsiResponse): RsiResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RsiResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RsiResponse;
  static deserializeBinaryFromReader(message: RsiResponse, reader: jspb.BinaryReader): RsiResponse;
}

export namespace RsiResponse {
  export type AsObject = {
    result: string,
  }
}

