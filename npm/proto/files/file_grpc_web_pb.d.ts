import * as grpcWeb from 'grpc-web';

import * as proto_files_file_pb from '../../proto/files/file_pb'; // proto import: "proto/files/file.proto"


export class FileServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getFile(
    request: proto_files_file_pb.FileId,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<proto_files_file_pb.FileChunk>;

}

export class FileServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getFile(
    request: proto_files_file_pb.FileId,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<proto_files_file_pb.FileChunk>;

}

