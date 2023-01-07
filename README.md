# Guideline

## Folder Structure
1. assests: chứa images, svg, icon, ...
2. layout: chứa template của trang web: header, footer, main-layout, ...
3. modules: chứa các trang, tính năng hiển thị ở main-layout
4. shared: chứa các thành phần dùng chung cho toàn bộ app
    > shared/components: chứa các components dùng chung
    > shared/models: chứa các kiểu dữ liệu (entity)
    > shared/services: chứa các services dùng để gọi API
    > shared/utils: chứa các hàm dùng chung
    ...

## Code convention
1. Đặt tên
    - Đặt tên biến, tên hàm theo camelCase
    - Đặt tên class, types, interface StudlyCase
    - Đặt tên constant theo SNAKE_CASE
2. Clean code
    - Đặt tên có nghĩa, tên biến là danh từ, tên hàm bắt đầu bằng động từ
    - Viết 1 hàm không nên quá dài, mỗi hàm chỉ làm một nhiệm vụ
    - Viết 1 components không nên quá dài, mỗi components đảm nhiệm 1 vai trò

## Git Instruction
1. Push code (đẩy code lên)
    B1: Check branch 
    B2: Git add .
    B3: Git commit -m"..."
    B4: Git push

2. Pull code (lấy code về)
    B1: Check branch
    B2: Git pull

3. Branch (nhánh)
    - Check branch: git branch
    - Đổi branch: git checkout <branch_name>
    - Tạo branch: git checkout -b <branch_name>
    - Xóa branch: git branch -d <branch_name>

4. Merge 
    - Gộp nhánh: git merge <branch_name>

## Technology
1. Html, SCSS, Typescript
2. Framework: ReactJS