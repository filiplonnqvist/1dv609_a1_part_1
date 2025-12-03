// class OrderProcessor {
//     constructor(stockService, paymentService) {
//         this.stockService = stockService;
//         this.paymentService = paymentService;
//     }

//     placeOrder(itemId, cardNumber) {
//         if (!this.stockService.isInStock(itemId)) {
//             throw new Error('Item out of stock');
//         }

//         const paymentResult = this.paymentService.process(cardNumber);
//         return `Order confirmed: ${paymentResult}`;
//     }
// }

// export { OrderProcessor };
