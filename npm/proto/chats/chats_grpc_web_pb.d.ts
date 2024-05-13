import * as grpcWeb from 'grpc-web';

import * as proto_chats_chats_pb from '../../proto/chats/chats_pb'; // proto import: "proto/chats/chats.proto"


export class ChatServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createChat(
    request: proto_chats_chats_pb.CreateChatRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_chats_chats_pb.CreateChatResponse) => void
  ): grpcWeb.ClientReadableStream<proto_chats_chats_pb.CreateChatResponse>;

  getChat(
    request: proto_chats_chats_pb.GetChatRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_chats_chats_pb.GetChatResponse) => void
  ): grpcWeb.ClientReadableStream<proto_chats_chats_pb.GetChatResponse>;

  updateChat(
    request: proto_chats_chats_pb.UpdateChatRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_chats_chats_pb.UpdateChatResponse) => void
  ): grpcWeb.ClientReadableStream<proto_chats_chats_pb.UpdateChatResponse>;

  deleteChat(
    request: proto_chats_chats_pb.DeleteChatRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_chats_chats_pb.DeleteChatResponse) => void
  ): grpcWeb.ClientReadableStream<proto_chats_chats_pb.DeleteChatResponse>;

}

export class ChatServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createChat(
    request: proto_chats_chats_pb.CreateChatRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_chats_chats_pb.CreateChatResponse>;

  getChat(
    request: proto_chats_chats_pb.GetChatRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_chats_chats_pb.GetChatResponse>;

  updateChat(
    request: proto_chats_chats_pb.UpdateChatRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_chats_chats_pb.UpdateChatResponse>;

  deleteChat(
    request: proto_chats_chats_pb.DeleteChatRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_chats_chats_pb.DeleteChatResponse>;

}

