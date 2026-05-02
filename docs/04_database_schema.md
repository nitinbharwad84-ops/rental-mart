# Database Schema (Mocked)

*Note: Since the initial implementation uses mock data, this schema serves as the foundation for the future backend integration.*

## 1. `Tenants`
- `id`: UUID (Primary Key)
- `name`: String (Business Name)
- `slug`: String (Subdomain/Slug for SaaS isolation)
- `created_at`: Timestamp

## 2. `Users`
- `id`: UUID (Primary Key)
- `tenant_id`: UUID (Foreign Key to Tenants)
- `full_name`: String
- `email`: String (Unique)
- `phone`: String
- `role`: Enum (Admin, Manager, Staff)
- `avatar_url`: String
- `password_hash`: String
- `created_at`: Timestamp

## 3. `RentalOrders`
- `id`: UUID (Primary Key)
- `tenant_id`: UUID (Foreign Key to Tenants)
- `customer_name`: String
- `order_number`: String (e.g., R0001)
- `amount`: Decimal
- `status`: Enum (Quotation, Reserved, Pickedup, Returned, Cancelled)
- `pickup_time`: Timestamp
- `return_time`: Timestamp
- `created_at`: Timestamp

## 4. `Products`
- `id`: UUID (Primary Key)
- `tenant_id`: UUID (Foreign Key to Tenants)
- `name`: String
- `category`: String
- `quantity`: Integer
- `daily_rate`: Decimal
- `status`: Enum (Available, Rented, Maintenance)
