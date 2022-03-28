// package: dummy
// file: proto/dummy.proto

import * as jspb from 'google-protobuf';

export class DummyMessage extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DummyMessage.AsObject;
  static toObject(includeInstance: boolean, msg: DummyMessage): DummyMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DummyMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DummyMessage;
  static deserializeBinaryFromReader(message: DummyMessage, reader: jspb.BinaryReader): DummyMessage;
}

export namespace DummyMessage {
  export type AsObject = {
  }
}

