.PHONY: gen gen_sso
gen: gen_sso

.PHONY: gen_sso
gen_sso:
	protoc -I proto proto/sso/*.proto  --go_out=./gen/go/  --go_opt=paths=source_relative  --go-grpc_out=./gen/go/  --go-grpc_opt=paths=source_relative