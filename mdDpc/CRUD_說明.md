# Users 資料 CRUD 操作說明

## 資料結構

```json
{
  "id": number,           // 使用者唯一識別碼
  "name": string,         // 使用者名稱
  "email": string,        // 電子郵件（唯一）
  "password": string,     // 密碼
  "createdAt": string,    // 建立時間 (ISO 8601)
  "role": string          // 角色 ("user" | "admin")
}
```

## 1. 新增 (Create)

### 步驟：

1. 讀取 `users.json` 檔案
2. 解析 JSON 資料
3. 產生新的 ID（現有最大 ID + 1）
4. 建立新使用者物件
5. 加入到 users 陣列
6. 寫回檔案

### 範例程式碼 (Node.js)：

```javascript
const fs = require("fs");

function createUser(name, email, password, role = "user") {
  const data = JSON.parse(fs.readFileSync("users.json", "utf8"));
  const newId = Math.max(...data.users.map((u) => u.id)) + 1;

  const newUser = {
    id: newId,
    name,
    email,
    password,
    createdAt: new Date().toISOString(),
    role,
  };

  data.users.push(newUser);
  fs.writeFileSync("users.json", JSON.stringify(data, null, 2));
  return newUser;
}
```

## 2. 讀取 (Read)

### 讀取所有使用者：

```javascript
function getAllUsers() {
  const data = JSON.parse(fs.readFileSync("users.json", "utf8"));
  return data.users;
}
```

### 讀取單一使用者（依 ID）：

```javascript
function getUserById(id) {
  const data = JSON.parse(fs.readFileSync("users.json", "utf8"));
  return data.users.find((user) => user.id === id);
}
```

### 讀取單一使用者（依 Email）：

```javascript
function getUserByEmail(email) {
  const data = JSON.parse(fs.readFileSync("users.json", "utf8"));
  return data.users.find((user) => user.email === email);
}
```

## 3. 修改 (Update)

### 步驟：

1. 讀取 `users.json` 檔案
2. 找到要修改的使用者
3. 更新欄位
4. 寫回檔案

### 範例程式碼：

```javascript
function updateUser(id, updates) {
  const data = JSON.parse(fs.readFileSync("users.json", "utf8"));
  const userIndex = data.users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    throw new Error("使用者不存在");
  }

  data.users[userIndex] = {
    ...data.users[userIndex],
    ...updates,
  };

  fs.writeFileSync("users.json", JSON.stringify(data, null, 2));
  return data.users[userIndex];
}

// 使用範例
updateUser(1, { name: "張三更新", email: "newemail@example.com" });
```

## 4. 刪除 (Delete)

### 步驟：

1. 讀取 `users.json` 檔案
2. 過濾掉要刪除的使用者
3. 寫回檔案

### 範例程式碼：

```javascript
function deleteUser(id) {
  const data = JSON.parse(fs.readFileSync("users.json", "utf8"));
  const filteredUsers = data.users.filter((user) => user.id !== id);

  if (filteredUsers.length === data.users.length) {
    throw new Error("使用者不存在");
  }

  data.users = filteredUsers;
  fs.writeFileSync("users.json", JSON.stringify(data, null, 2));
  return true;
}
```

## 5. 完整範例（包含錯誤處理）

```javascript
const fs = require("fs");
const path = require("path");

class UserManager {
  constructor(filePath = "users.json") {
    this.filePath = filePath;
  }

  // 讀取檔案
  _readData() {
    try {
      const data = fs.readFileSync(this.filePath, "utf8");
      return JSON.parse(data);
    } catch (error) {
      return { users: [] };
    }
  }

  // 寫入檔案
  _writeData(data) {
    fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2), "utf8");
  }

  // 新增
  create(name, email, password, role = "user") {
    const data = this._readData();

    // 檢查 email 是否已存在
    if (data.users.some((u) => u.email === email)) {
      throw new Error("Email 已存在");
    }

    const newId =
      data.users.length > 0 ? Math.max(...data.users.map((u) => u.id)) + 1 : 1;

    const newUser = {
      id: newId,
      name,
      email,
      password,
      createdAt: new Date().toISOString(),
      role,
    };

    data.users.push(newUser);
    this._writeData(data);
    return newUser;
  }

  // 讀取所有
  getAll() {
    return this._readData().users;
  }

  // 讀取單一
  getById(id) {
    const data = this._readData();
    return data.users.find((user) => user.id === id);
  }

  // 更新
  update(id, updates) {
    const data = this._readData();
    const index = data.users.findIndex((user) => user.id === id);

    if (index === -1) {
      throw new Error("使用者不存在");
    }

    data.users[index] = { ...data.users[index], ...updates };
    this._writeData(data);
    return data.users[index];
  }

  // 刪除
  delete(id) {
    const data = this._readData();
    const filteredUsers = data.users.filter((user) => user.id !== id);

    if (filteredUsers.length === data.users.length) {
      throw new Error("使用者不存在");
    }

    data.users = filteredUsers;
    this._writeData(data);
    return true;
  }
}

// 使用範例
const userManager = new UserManager("users.json");

// 新增使用者
const newUser = userManager.create("王五", "wang@example.com", "pass789");

// 讀取所有使用者
const allUsers = userManager.getAll();

// 讀取特定使用者
const user = userManager.getById(1);

// 更新使用者
userManager.update(1, { name: "張三（已修改）" });

// 刪除使用者
userManager.delete(2);
```

## 注意事項

1. **密碼安全**：實際應用中應使用 bcrypt 等工具加密密碼
2. **並發處理**：多人同時操作可能造成資料衝突，建議使用資料庫
3. **資料驗證**：新增/修改前應驗證資料格式
4. **備份**：重要操作前建議備份檔案
5. **效能**：大量資料建議改用資料庫（如 MongoDB, PostgreSQL）
