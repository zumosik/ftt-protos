all: generate_go generate_npm

generate_go:
	mkdir -p go && \
	\
	find proto -name "*.proto" -exec protoc -I proto {} \
		--go_out=./go/ --go_opt=paths=source_relative \
		--go-grpc_out=./go/ --go-grpc_opt=paths=source_relative \;


generate_npm:
	mkdir -p npm && \
	grpc_tools_node_protoc -I=. ./proto/*/*.proto \
	 --js_out=import_style=commonjs:./npm \
	 --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:./npm


