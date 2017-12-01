export interface Order {
    id: number,
    customerName: string,
    orderDate: string,
    customerId: number,
    totalCost: number,
    totalSale: number,
    totalItems: number,
    items: [
        {
            quantity: number,
            productId: number
        }
    ]
}