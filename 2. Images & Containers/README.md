
`docker build -t simple-web-server-2 .`

```bash
docker images
REPOSITORY            TAG       IMAGE ID       CREATED          SIZE
simple-web-server-2   latest    5e2fbbfba7e5   14 minutes ago   917MB
simple-web-server     latest    92fa0cfacb16   2 days ago       916MB
node                  14        1d12470fa662   18 months ago    912MB
```

`docker run -p 3000:80 simple-web-server-2`

`EXPOSE 80` in the Dockerfile is optional. It documents that a process in the container will expose this port. But you still need to then actually expose the port with `-p` when running `docker run`.

`docker rm $(docker ps -a -q)`