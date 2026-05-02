# API Specification (Mocked)

## 1. Authentication
### `POST /auth/login`
- **Request**: `{ email, password }`
- **Response**: `{ user: { id, name, role }, token: "jwt_mock" }`

### `POST /auth/register`
- **Request**: `{ fullName, email, phone, password }`
- **Response**: `{ user: { id, name, role }, success: true }`

## 2. Rental Orders
### `GET /rentals`
- **Query Params**: `filter` (All, Quotation, Reserved, Pickedup), `search`
- **Response**: `[ { id, orderNumber, customerName, amount, status, pickupTime }, ... ]`

### `POST /rentals`
- **Request**: `{ customerName, items: [], amount }`
- **Response**: `{ id, status: "Quotation", success: true }`
