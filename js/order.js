// Order processing and WhatsApp integration

function processOrder(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('fullName').value.trim();
    const deliveryAddress = document.getElementById('deliveryAddress').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const specialInstructions = document.getElementById('specialInstructions').value.trim();
    
    if (!fullName || !deliveryAddress || !phoneNumber) {
        showNotification('Please fill in all required fields');
        return;
    }
    
    const phoneRegex = /^[0-9]{11}$/;
    const cleanPhone = phoneNumber.replace(/\D/g, '');
    let validatedPhone = cleanPhone;
    if (validatedPhone.length === 11 && validatedPhone.startsWith('0')) {
        // OK
    } else if (validatedPhone.length === 10) {
        validatedPhone = '0' + validatedPhone;
    }
    if (!phoneRegex.test(validatedPhone)) {
        showNotification('Please enter a valid 11-digit Nigerian phone number (e.g., 08012345678)');
        return;
    }
    
    const cart = JSON.parse(localStorage.getItem('tapdoshCart')) || [];
    const restaurant = localStorage.getItem('tapdoshCurrentRestaurant') || '';
    
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    // --- MINIMUM ITEMS CHECK ---
    if (typeof checkMinimumItemsRequirement === 'function') {
        const minCheck = checkMinimumItemsRequirement();
        if (minCheck.required && !minCheck.met) {
            showNotification(minCheck.message);
            return;
        }
    }
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal;
    
    let restaurantName = '';
    const restaurantId = restaurant;
    
    if (typeof restaurants !== 'undefined') {
        const restaurantData = restaurants.find(r => r.id === restaurantId);
        if (restaurantData) restaurantName = restaurantData.name;
    }
    
    if (!restaurantName) {
        if (restaurant.includes('olas')) restaurantName = 'Olas Nutrition';
        else if (restaurant.includes('k-bakes')) restaurantName = 'K Bakes';
        else if (restaurant.includes('beiroot')) restaurantName = 'BEIROOT.NG';
        else if (restaurant.includes('sherrif')) restaurantName = 'Sherrif Mai Shayi';
        else if (restaurant.includes('parfait')) restaurantName = 'ParfaitStop';
        else if (restaurant.includes('item7')) restaurantName = 'Item7 Restaurant';
        else if (restaurant.includes('sesede')) restaurantName = 'Sesede Food Restaurant';
        else if (restaurant.includes('mac-dee')) restaurantName = 'MAC-DEE';
        else if (restaurant.includes('alhaja')) restaurantName = 'Alhaja Habibat Restaurant';
        else if (restaurant.includes('abu-adamu')) restaurantName = 'Abu Adamu Fruits';
        else if (restaurant.includes('cake-delight')) restaurantName = 'Cake Delight';
        else if (restaurant.includes('crunch-express')) restaurantName = 'Crunch Express';
        else if (restaurant.includes('farmers-kitchen')) restaurantName = 'The Farmer\'s Kitchen';
        else if (restaurant.includes('safianu')) restaurantName = 'Safianu Brahim Mai Shayi';
        else if (restaurant.includes('mummy-saoban')) restaurantName = 'Mummy Saoban Restaurant';
        else if (restaurant.includes('fatimah')) restaurantName = 'Fatimah A\' Wara & Gurasa';
        else if (restaurant.includes('red-caffino')) restaurantName = 'Red Caffino Restaurant';
        else if (restaurant.includes('fbi-food') || restaurant.includes('F.B.I')) restaurantName = 'Hajia F.B.I food Restaurant';
        else if (restaurant.includes('mm-kilishi') || restaurant.includes('M&M')) restaurantName = 'M&M Kilishi and dambu nama';
        else if (restaurant.includes('bylessh')) restaurantName = 'Bylessh';
        else if (restaurant.includes('tauhii') || restaurant.includes('Wings')) restaurantName = 'Tauhii\'s tasties Wings by tauhida';
        else if (restaurant.includes('icewave')) restaurantName = 'ICEWAVE';
        else if (restaurant.includes('barrys-bliss')) restaurantName = 'Barrys Bliss';
        else if (restaurant.includes('chef-dii')) restaurantName = 'Chef_Dii';
        else restaurantName = 'Restaurant';
    }
    
    if (restaurant.includes('fatimah') && total < 500) {
        showNotification(`Minimum purchase of ₦500 required for ${restaurantName}. Add more items to your cart.`);
        return;
    }
    
    const itemsList = cart.map(item => 
        `• ${item.name} × ${item.quantity} = ₦${(item.price * item.quantity).toLocaleString('en-NG')}`
    ).join('\n');
    
    const message = `Hello TapDosh! I'd like to place an order.

*ORDER DETAILS:*
🏪 Restaurant: ${restaurantName}
👤 Customer: ${fullName}
📞 Phone: ${validatedPhone}
📍 Delivery Address: ${deliveryAddress}

*ORDER ITEMS:*
${itemsList}

*PAYMENT SUMMARY:*
Subtotal: ₦${subtotal.toLocaleString('en-NG')}
Tap Fee: Will be determined by number of take-away/order wraps
*TOTAL: ₦${total.toLocaleString('en-NG')}*

📝 Special Instructions: ${specialInstructions || 'None'}

*IMPORTANT NOTES:*
• Your delivery fee will be determined by your location
• Your tap fee will be determined by number of take-away/order wraps
• Our representative will respond with the exact delivery fee and tap fee
• Payment can be made via bank transfer before order can be placed

Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '2349050270392';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    const confirmationMessage = `Opening WhatsApp to complete your order!\n\nYour order details will be sent to our TapDosh representative.\n\nPlease make sure to send the message when WhatsApp opens.\n\nNote: Your delivery fee will be determined by your location and tap fee by number of take-away/order wraps.`;
    
    if (confirm(confirmationMessage)) {
        localStorage.removeItem('tapdoshCart');
        localStorage.removeItem('tapdoshCurrentRestaurant');
        
        if (typeof updateCartCount === 'function') {
            updateCartCount();
        }
        
        const modal = document.getElementById('checkoutModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        window.open(whatsappURL, '_blank');
        
        setTimeout(() => {
            window.location.href = 'order-success.html';
        }, 1000);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', processOrder);
    }
    
    const phoneInput = document.getElementById('phoneNumber');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 11) {
                value = value.substring(0, 11);
            }
            if (value.length <= 4) {
                value = value;
            } else if (value.length <= 7) {
                value = `${value.substring(0, 4)} ${value.substring(4)}`;
            } else {
                value = `${value.substring(0, 4)} ${value.substring(4, 7)} ${value.substring(7, 11)}`;
            }
            e.target.value = value;
        });
        
        phoneInput.addEventListener('blur', function() {
            let value = this.value.replace(/\D/g, '');
            if (value.length >= 10 && value.length <= 11) {
                if (value.length === 10) {
                    value = '0' + value;
                }
                if (value.length === 11) {
                    this.value = `${value.substring(0, 4)} ${value.substring(4, 7)} ${value.substring(7)}`;
                }
            }
        });
        
        phoneInput.placeholder = '0801 234 5678 (11 digits)';
    }
    
    const formInputs = document.querySelectorAll('#orderForm input, #orderForm textarea');
    formInputs.forEach(input => {
        input.addEventListener('input', () => {
            if (typeof trackUserActivity === 'function') {
                trackUserActivity();
            }
        });
        input.addEventListener('focus', () => {
            if (typeof trackUserActivity === 'function') {
                trackUserActivity();
            }
        });
    });
    
    if (typeof initWhatsAppFloat === 'function') {
        initWhatsAppFloat();
    }
});

function showNotification(message) {
    if (window.showNotification) {
        window.showNotification(message);
        return;
    }
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 15px 20px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        gap: 10px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
            if (style.parentNode) {
                style.parentNode.removeChild(style);
            }
        }, 300);
    }, 3000);
}

window.processOrder = processOrder;
window.showNotification = showNotification;