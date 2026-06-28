# Project Design: Inventory Management System

Tài liệu này mô tả kiến trúc tổng quan, thiết kế hệ thống và lộ trình phát triển của dự án Hệ thống Quản lý Kho hàng (Inventory Management System).

---

## 1. Tổng quan dự án (Project Overview)
* **Mục tiêu:** Xây dựng hệ thống quản lý kho hàng giúp theo dõi sản phẩm, người dùng và đơn hàng.
* **Đối tượng sử dụng:** Quản lý kho, nhân viên bán hàng.

## 2. Công nghệ sử dụng (Tech Stack)
* **Frontend:** React, Bootstrap.
* **Backend:** Node.js (Express).
* **Database:** PostgreSQL.
* **DevOps/Tools:** Docker, GitHub Actions, Postman, VS Code.

## 3. Kiến trúc & Thiết kế Hệ thống (System Architecture)
*(Phần này bạn sẽ bổ sung dần ở Tuần 2 và Tuần 8)*
* **Mô hình:** Client - Server (Monolith).
* **Database Design (ERD):** Sẽ bao gồm các bảng: `Users`, `Products`, `Orders`, `Order_Items`.

## 4. Lộ trình phát triển & Thực hiện (Development Roadmap)
Dưới đây là kế hoạch chi tiết thực hiện dự án trong vòng 12 tuần:

| Tuần | Trọng tâm | Việc cần làm | Kết quả |
| :--- | :--- | :--- | :--- |
| **1** | Setup + định hướng | Chọn stack, tạo GitHub repo, cài Node.js, PostgreSQL, VS Code, Postman | Có môi trường làm việc sẵn |
| **2** | SQL + Database | Học bảng, khóa chính/ngoại, quan hệ 1-n, CRUD SQL, ERD | Thiết kế được database cho project |
| **3** | Backend nền tảng | Node.js + Express, cấu trúc thư mục, REST API cơ bản | Có API đầu tiên |
| **4** | CRUD API | Làm API cho product, user, order | Backend CRUD chạy được |
| **5** | Authentication | Register/login, password hash, JWT, middleware | Có đăng nhập và phân quyền cơ bản |
| **6** | React cơ bản | React, component, form, gọi API, Bootstrap | Có giao diện tối thiểu |
| **7** | Tích hợp full stack | Kết nối React với backend, làm màn hình login, product list, order list | App chạy end-to-end |
| **8** | Solution architecture | Học layer, client-server, monolith, tách module, error handling, logging | Biết giải thích kiến trúc hệ thống |
| **9** | Docker | Dockerfile, docker-compose, env file | Chạy được toàn bộ hệ thống bằng Docker |
| **10** | CI/CD cơ bản | GitHub Actions hoặc GitLab CI, chạy lint/test | Có pipeline tự động |
| **11** | Security cơ bản | Validate input, CORS, JWT an toàn hơn, npm audit, scan dependency | App sạch và an toàn hơn |
| **12** | Hoàn thiện project | Sửa bug, viết README, chụp ảnh demo, ghi chú kiến thức | Có sản phẩm để đưa vào CV |

---

## 5. Tài liệu hướng dẫn (API Documentation)
*(Sẽ bổ sung chi tiết các endpoint như GET /api/products, POST /api/orders ở Tuần 3-4)*