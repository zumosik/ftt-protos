import * as grpcWeb from 'grpc-web';

import * as proto_sso_sso_pb from '../../proto/sso/sso_pb'; // proto import: "proto/sso/sso.proto"


export class AuthClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  register(
    request: proto_sso_sso_pb.RegisterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_sso_sso_pb.RegisterResponse) => void
  ): grpcWeb.ClientReadableStream<proto_sso_sso_pb.RegisterResponse>;

  login(
    request: proto_sso_sso_pb.LoginRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_sso_sso_pb.LoginResponse) => void
  ): grpcWeb.ClientReadableStream<proto_sso_sso_pb.LoginResponse>;

  isAdmin(
    request: proto_sso_sso_pb.IsAdminRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_sso_sso_pb.IsAdminResponse) => void
  ): grpcWeb.ClientReadableStream<proto_sso_sso_pb.IsAdminResponse>;

  getUser(
    request: proto_sso_sso_pb.GetUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_sso_sso_pb.GetUserResponse) => void
  ): grpcWeb.ClientReadableStream<proto_sso_sso_pb.GetUserResponse>;

  getUserByToken(
    request: proto_sso_sso_pb.GetUserByTokenRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_sso_sso_pb.GetUserResponse) => void
  ): grpcWeb.ClientReadableStream<proto_sso_sso_pb.GetUserResponse>;

}

export class AuthPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  register(
    request: proto_sso_sso_pb.RegisterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_sso_sso_pb.RegisterResponse>;

  login(
    request: proto_sso_sso_pb.LoginRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_sso_sso_pb.LoginResponse>;

  isAdmin(
    request: proto_sso_sso_pb.IsAdminRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_sso_sso_pb.IsAdminResponse>;

  getUser(
    request: proto_sso_sso_pb.GetUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_sso_sso_pb.GetUserResponse>;

  getUserByToken(
    request: proto_sso_sso_pb.GetUserByTokenRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_sso_sso_pb.GetUserResponse>;

}

