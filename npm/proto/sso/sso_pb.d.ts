import * as jspb from 'google-protobuf'



export class User extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): User;

  getEmail(): string;
  setEmail(value: string): User;

  getPassword(): string;
  setPassword(value: string): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    userId: string,
    email: string,
    password: string,
  }
}

export class IsAdminRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): IsAdminRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsAdminRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IsAdminRequest): IsAdminRequest.AsObject;
  static serializeBinaryToWriter(message: IsAdminRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsAdminRequest;
  static deserializeBinaryFromReader(message: IsAdminRequest, reader: jspb.BinaryReader): IsAdminRequest;
}

export namespace IsAdminRequest {
  export type AsObject = {
    userId: string,
  }
}

export class IsAdminResponse extends jspb.Message {
  getIsAdmin(): boolean;
  setIsAdmin(value: boolean): IsAdminResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsAdminResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IsAdminResponse): IsAdminResponse.AsObject;
  static serializeBinaryToWriter(message: IsAdminResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsAdminResponse;
  static deserializeBinaryFromReader(message: IsAdminResponse, reader: jspb.BinaryReader): IsAdminResponse;
}

export namespace IsAdminResponse {
  export type AsObject = {
    isAdmin: boolean,
  }
}

export class RegisterRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): RegisterRequest;

  getPassword(): string;
  setPassword(value: string): RegisterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterRequest;
  static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
  export type AsObject = {
    email: string,
    password: string,
  }
}

export class RegisterResponse extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): RegisterResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterResponse): RegisterResponse.AsObject;
  static serializeBinaryToWriter(message: RegisterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterResponse;
  static deserializeBinaryFromReader(message: RegisterResponse, reader: jspb.BinaryReader): RegisterResponse;
}

export namespace RegisterResponse {
  export type AsObject = {
    userId: string,
  }
}

export class LoginRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): LoginRequest;

  getPassword(): string;
  setPassword(value: string): LoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    email: string,
    password: string,
  }
}

export class LoginResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): LoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    token: string,
  }
}

export class GetUserRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): GetUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserRequest;
  static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
  export type AsObject = {
    userId: string,
  }
}

export class GetUserResponse extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): GetUserResponse;
  hasUser(): boolean;
  clearUser(): GetUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserResponse): GetUserResponse.AsObject;
  static serializeBinaryToWriter(message: GetUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserResponse;
  static deserializeBinaryFromReader(message: GetUserResponse, reader: jspb.BinaryReader): GetUserResponse;
}

export namespace GetUserResponse {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class GetUserByTokenRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserByTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserByTokenRequest): GetUserByTokenRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserByTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserByTokenRequest;
  static deserializeBinaryFromReader(message: GetUserByTokenRequest, reader: jspb.BinaryReader): GetUserByTokenRequest;
}

export namespace GetUserByTokenRequest {
  export type AsObject = {
  }
}

