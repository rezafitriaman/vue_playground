export default {
    namespace: true,
    state() {
        return {
            cart: {
                item: [],
                total: 0,
                qty: 0
            }
        }
    },
    mutation: {
        addProductToCart(state, payload) {
            const productData = payload.product;
            const productInCartIndex = state.item.findIndex(
                (cartItem) => cartItem.productId === productData.id
            );

            if (productInCartIndex >= 0) {
                state.cart.item[productInCartIndex].qty++;
            } else {
                const newItem = {
                    productId: productData.id,
                    title: productData.title,
                    image: productData.image,
                    price: productData.price,
                    qty: 1
                };
                state.item.push(newItem);
            }
            state.qty++;
            state.total += productData.price;
        },
        removeProductFromCart(state, payload) {
            const prodId = payload.productId;
            const productInCartIndex = state.item.findIndex(
                (cartItem) => cartItem.productId === prodId
            );
            const prodData = this.cart.item[productInCartIndex];
            state.item.splice(productInCartIndex, 1);
            state.qty -= prodData.qty;
            state.total -= prodData.price * prodData.qty;
        },
        action: {
            addToCart(context, payload) {
                context.commit('addProductToCart', payload);
            },
            removeFromCart(context, payload) {
                context.commit('removeProductFromCart', payload);
            }
        },
        getters: {
            products(state) {
                return state.items;
            },
            totalSum(state) {
                return state.total;
            },
            quantity(state) {
                return state.qty;
            }
        }
    }
}