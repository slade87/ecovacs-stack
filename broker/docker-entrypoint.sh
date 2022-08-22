#!/bin/ash
set -e

# Create certificate
if [ ! -f /mosquitto/config/ca.crt ]; then
	echo "Generate Certificates" 
	openssl genrsa -out ca.key 4096
	openssl req -new -nodes -key ca.key -config csrconfig_ca.txt -out ca.csr
	openssl req -x509 -nodes -in ca.csr -days 365 -key ca.key -config certconfig_ca.txt -extensions req_ext -out ca.crt
	openssl genrsa -out server.key 4096
	openssl req -new -nodes -key server.key -config csrconfig_server.txt -out server.csr
	openssl x509 -req -in server.csr -days 365 -CA ca.crt -CAkey ca.key \
    -extfile certconfig_server.txt -extensions req_ext -CAcreateserial -out server.crt

	cp /ca.crt /mosquitto/config/
	cp /server.crt /mosquitto/config/
	cp /server.key /mosquitto/config/

fi

# Set permissions
user="$(id -u)"
if [ "$user" = '0' ]; then
	[ -d "/mosquitto" ] && chown -R mosquitto:mosquitto /mosquitto || true
fi

exec "$@"