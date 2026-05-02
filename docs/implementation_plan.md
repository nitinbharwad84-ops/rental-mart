# Task T7.4: Implement Mock CRUD (Add/Edit Order)

Enable full lifecycle management for rental orders through a premium, modal-driven interface.

## User Review Required

> [!IMPORTANT]
> Since we are using mock data, any changes made (Add/Edit/Delete) will be lost upon page refresh. We are simulating the persistence logic that will eventually be connected to a real backend.

## Proposed Changes

### Frontend - Store

#### [MODIFY] `frontend/src/store/useRentalStore.js`
- Implement `addOrder(newOrder)`: Generates a new ID/Order Number and adds to state.
- Implement `updateOrder(id, updatedOrder)`: Finds and merges updates.
- Implement `deleteOrder(id)`: Removes order from state.

### Frontend - Components

#### [NEW] `frontend/src/components/OrderModal.jsx`
- Create a multi-purpose modal for Add/Edit operations.
- Form fields: Customer Name, Order Number, Amount, Status, Pickup Time.
- Visual validation and smooth entrance/exit animations.

#### [NEW] `frontend/src/components/OrderModal.css`
- Premium glassmorphism styles for the modal overlay and form container.

### Frontend - Pages

#### [MODIFY] `frontend/src/pages/Orders.jsx`
- Add state to manage modal visibility and current editing order.
- Connect "New Order" button to open modal in "Add" mode.
- Add "Edit" and "Delete" actions to the table rows.

## Verification Plan

### Automated Tests
- None.

### Manual Verification
1. **Create Order**: Click "New Order", fill form, save, and verify it appears at the top of the list.
2. **Edit Order**: Click "Edit" on an existing order, change the amount or status, save, and verify the update.
3. **Delete Order**: Click "Delete", confirm, and verify it is removed from the list.
4. **Search/Filter**: Ensure newly created orders are correctly filtered and searchable.
