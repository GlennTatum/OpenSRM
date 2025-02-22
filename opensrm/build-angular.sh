#!/bin/bash

docker build -t prod-angular/latest .

# docker run -d -p 8080:80 prod-angular/latest # use this command to run the container