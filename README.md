## Previous Git Repository

Repo này được phát triển và bảo trì trên repo: [Link repo cũ](https://github.com/hanhkiet/done.git).

## Getting Started

Để chạy được ứng dụng cần làm theo các bước như sau:

1. Download docker

2. Clone this repository:

```bash
   git clone https://github.com/SE109/listify-server.git
```

3. Run app:

- Navigate to the cloned repository:

```bash
   cd listify-server
```

- Run docker command:

```bash
   docker compose up -d
```

4. Kiểm tra Docker desktop có đủ các stack:

- postgres database: 5432
- redis: 6379
- pgadmin: 3030
- server: 5000
- redisinsight: 8001

Ngoài ra có thể không dùng Docker để dựng server lên. Bằng cách install thủ công các stack trên.

5. Migrate database

- Xem hướng dẫn để migrate ở thư mục sau

```bash
    listify-server/src/scripts
```

## Thunder client (API testing)

- (https://github.com/tuannt02/resource/blob/main/listify/thunder-collection_listify.json)
