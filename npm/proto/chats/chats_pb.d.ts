import * as jspb from 'google-protobuf'



export class Chat extends jspb.Message {
  getId(): string;
  setId(value: string): Chat;

  getName(): string;
  setName(value: string): Chat;

  getOwnerid(): string;
  setOwnerid(value: string): Chat;

  getPeopleInChatidsList(): Array<string>;
  setPeopleInChatidsList(value: Array<string>): Chat;
  clearPeopleInChatidsList(): Chat;
  addPeopleInChatids(value: string, index?: number): Chat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Chat.AsObject;
  static toObject(includeInstance: boolean, msg: Chat): Chat.AsObject;
  static serializeBinaryToWriter(message: Chat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Chat;
  static deserializeBinaryFromReader(message: Chat, reader: jspb.BinaryReader): Chat;
}

export namespace Chat {
  export type AsObject = {
    id: string,
    name: string,
    ownerid: string,
    peopleInChatidsList: Array<string>,
  }
}

export class CreateChatRequest extends jspb.Message {
  getChat(): Chat | undefined;
  setChat(value?: Chat): CreateChatRequest;
  hasChat(): boolean;
  clearChat(): CreateChatRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateChatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateChatRequest): CreateChatRequest.AsObject;
  static serializeBinaryToWriter(message: CreateChatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateChatRequest;
  static deserializeBinaryFromReader(message: CreateChatRequest, reader: jspb.BinaryReader): CreateChatRequest;
}

export namespace CreateChatRequest {
  export type AsObject = {
    chat?: Chat.AsObject,
  }
}

export class CreateChatResponse extends jspb.Message {
  getChat(): Chat | undefined;
  setChat(value?: Chat): CreateChatResponse;
  hasChat(): boolean;
  clearChat(): CreateChatResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateChatResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateChatResponse): CreateChatResponse.AsObject;
  static serializeBinaryToWriter(message: CreateChatResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateChatResponse;
  static deserializeBinaryFromReader(message: CreateChatResponse, reader: jspb.BinaryReader): CreateChatResponse;
}

export namespace CreateChatResponse {
  export type AsObject = {
    chat?: Chat.AsObject,
  }
}

export class GetChatRequest extends jspb.Message {
  getChatId(): string;
  setChatId(value: string): GetChatRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetChatRequest): GetChatRequest.AsObject;
  static serializeBinaryToWriter(message: GetChatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChatRequest;
  static deserializeBinaryFromReader(message: GetChatRequest, reader: jspb.BinaryReader): GetChatRequest;
}

export namespace GetChatRequest {
  export type AsObject = {
    chatId: string,
  }
}

export class GetChatResponse extends jspb.Message {
  getChat(): Chat | undefined;
  setChat(value?: Chat): GetChatResponse;
  hasChat(): boolean;
  clearChat(): GetChatResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChatResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetChatResponse): GetChatResponse.AsObject;
  static serializeBinaryToWriter(message: GetChatResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChatResponse;
  static deserializeBinaryFromReader(message: GetChatResponse, reader: jspb.BinaryReader): GetChatResponse;
}

export namespace GetChatResponse {
  export type AsObject = {
    chat?: Chat.AsObject,
  }
}

export class UpdateChatRequest extends jspb.Message {
  getChat(): Chat | undefined;
  setChat(value?: Chat): UpdateChatRequest;
  hasChat(): boolean;
  clearChat(): UpdateChatRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateChatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateChatRequest): UpdateChatRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateChatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateChatRequest;
  static deserializeBinaryFromReader(message: UpdateChatRequest, reader: jspb.BinaryReader): UpdateChatRequest;
}

export namespace UpdateChatRequest {
  export type AsObject = {
    chat?: Chat.AsObject,
  }
}

export class UpdateChatResponse extends jspb.Message {
  getChat(): Chat | undefined;
  setChat(value?: Chat): UpdateChatResponse;
  hasChat(): boolean;
  clearChat(): UpdateChatResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateChatResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateChatResponse): UpdateChatResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateChatResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateChatResponse;
  static deserializeBinaryFromReader(message: UpdateChatResponse, reader: jspb.BinaryReader): UpdateChatResponse;
}

export namespace UpdateChatResponse {
  export type AsObject = {
    chat?: Chat.AsObject,
  }
}

export class DeleteChatRequest extends jspb.Message {
  getChatId(): string;
  setChatId(value: string): DeleteChatRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteChatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteChatRequest): DeleteChatRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteChatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteChatRequest;
  static deserializeBinaryFromReader(message: DeleteChatRequest, reader: jspb.BinaryReader): DeleteChatRequest;
}

export namespace DeleteChatRequest {
  export type AsObject = {
    chatId: string,
  }
}

export class DeleteChatResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): DeleteChatResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteChatResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteChatResponse): DeleteChatResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteChatResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteChatResponse;
  static deserializeBinaryFromReader(message: DeleteChatResponse, reader: jspb.BinaryReader): DeleteChatResponse;
}

export namespace DeleteChatResponse {
  export type AsObject = {
    message: string,
  }
}

