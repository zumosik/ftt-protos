import * as jspb from 'google-protobuf'



export class FileChunk extends jspb.Message {
  getId(): number;
  setId(value: number): FileChunk;

  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): FileChunk;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileChunk.AsObject;
  static toObject(includeInstance: boolean, msg: FileChunk): FileChunk.AsObject;
  static serializeBinaryToWriter(message: FileChunk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileChunk;
  static deserializeBinaryFromReader(message: FileChunk, reader: jspb.BinaryReader): FileChunk;
}

export namespace FileChunk {
  export type AsObject = {
    id: number,
    content: Uint8Array | string,
  }
}

export class FileId extends jspb.Message {
  getId(): string;
  setId(value: string): FileId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileId.AsObject;
  static toObject(includeInstance: boolean, msg: FileId): FileId.AsObject;
  static serializeBinaryToWriter(message: FileId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileId;
  static deserializeBinaryFromReader(message: FileId, reader: jspb.BinaryReader): FileId;
}

export namespace FileId {
  export type AsObject = {
    id: string,
  }
}

export class FileUploadResponse extends jspb.Message {
  getId(): string;
  setId(value: string): FileUploadResponse;

  getMessage(): string;
  setMessage(value: string): FileUploadResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileUploadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FileUploadResponse): FileUploadResponse.AsObject;
  static serializeBinaryToWriter(message: FileUploadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileUploadResponse;
  static deserializeBinaryFromReader(message: FileUploadResponse, reader: jspb.BinaryReader): FileUploadResponse;
}

export namespace FileUploadResponse {
  export type AsObject = {
    id: string,
    message: string,
  }
}

