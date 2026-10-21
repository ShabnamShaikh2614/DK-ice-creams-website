import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, Send, Phone, User, MapPin, CheckCircle, Copy } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'dinein' | 'takeaway' | 'delivery'>('takeaway');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [tableOrAddress, setTableOrAddress] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, ci) => acc + ci.item.price * ci.quantity, 0);
  const packagingFee = orderType === 'takeaway' || orderType === 'delivery' ? 10 : 0;
  const grandTotal = subtotal + packagingFee;

  // Generate WhatsApp message text
  const generateOrderMessage = () => {
    let msg = `🍧 *NEW ORDER - DK ICE CREAM & JUICE CENTER* 🍧\n`;
    msg += `📍 *Location*: Sainath Nagar, Hotgi Road, near Asra Chowk, Solapur\n\n`;
    msg += `👤 *Customer*: ${customerName.trim() || 'Guest'}\n`;
    msg += `📞 *Phone*: ${customerPhone.trim() || 'Not specified'}\n`;
    msg += `📦 *Order Type*: ${
      orderType === 'dinein'
        ? `Dine-in (Table/Counter: ${tableOrAddress || 'At Parlor'})`
        : orderType === 'takeaway'
        ? 'Takeaway / Parcel (Pickup in ~15 mins)'
        : `Home Delivery (Address: ${tableOrAddress || 'Solapur City'})`
    }\n\n`;

    msg += `*Ordered Items*:\n`;
    cartItems.forEach((ci, idx) => {
      msg += `${idx + 1}. ${ci.quantity}x ${ci.item.name} - ₹${ci.item.price * ci.quantity}\n`;
      if (ci.customizationNotes) {
        msg += `   └ Notes: ${ci.customizationNotes}\n`;
      }
    });

    msg += `\n💵 *Subtotal*: ₹${subtotal}\n`;
    if (packagingFee > 0) {
      msg += `📦 *Packaging*: ₹${packagingFee}\n`;
    }
    msg += `🧾 *Grand Total*: ₹${grandTotal}\n`;

    if (specialNotes.trim()) {
      msg += `\n📝 *Special Request*: ${specialNotes.trim()}\n`;
    }

    msg += `\n_Sent via DK Ice Cream & Juice Center Web App_`;
    return msg;
  };

  const handleSendWhatsApp = () => {
    const rawMessage = generateOrderMessage();
    const encoded = encodeURIComponent(rawMessage);
    // Solapur parlor contact number
    const whatsappUrl = `https://wa.me/919822054321?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyOrder = () => {
    navigator.clipboard.writeText(generateOrderMessage());
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-stone-900/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-xl flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="p-5 border-b border-stone-200 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-wider">
                <span>DK Order Desk</span>
                <span aria-hidden="true">·</span>
                <span>Asra Chowk, Solapur</span>
              </div>
              <h2 className="text-xl font-bold text-stone-900 font-display mt-0.5">
                Your Fresh Order ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Close cart drawer"
              className="p-2 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body: Scrollable */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            {cartItems.length === 0 ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-2xl">
                  🍧
                </div>
                <h3 className="text-base font-semibold text-stone-900">Your order tray is empty</h3>
                <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                  Explore our menu to add fresh fruit juices, signature royal faloodas, and mastani shakes.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-4 py-2 text-xs font-semibold text-amber-700 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors"
                >
                  Browse Delicious Items
                </button>
              </div>
            ) : (
              <>
                {/* Itemized Cart List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-semibold text-stone-500 uppercase">
                    <span>Items</span>
                    <button
                      onClick={onClearCart}
                      className="text-stone-400 hover:text-rose-600 transition-colors lowercase"
                    >
                      clear all
                    </button>
                  </div>

                  {cartItems.map(ci => (
                    <div 
                      key={ci.id} 
                      className="p-3 bg-stone-50 rounded-lg border border-stone-200 flex items-center justify-between gap-3"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-stone-900 truncate">
                          {ci.item.name}
                        </div>
                        <div className="text-xs font-mono text-stone-500 tabular-nums">
                          ₹{ci.item.price} each
                        </div>
                        {ci.customizationNotes && (
                          <div className="text-[10px] text-stone-500 truncate mt-0.5">
                            {ci.customizationNotes}
                          </div>
                        )}
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-1.5 bg-white border border-stone-200 rounded-md p-1">
                        <button
                          onClick={() => onUpdateQuantity(ci.id, -1)}
                          aria-label="Decrease quantity"
                          className="w-6 h-6 flex items-center justify-center text-stone-600 hover:text-stone-900 rounded hover:bg-stone-100"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold font-mono text-stone-900 tabular-nums">
                          {ci.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(ci.id, 1)}
                          aria-label="Increase quantity"
                          className="w-6 h-6 flex items-center justify-center text-stone-600 hover:text-stone-900 rounded hover:bg-stone-100"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Line Item Total & Delete */}
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold font-mono text-stone-900 tabular-nums">
                          ₹{ci.item.price * ci.quantity}
                        </span>
                        <button
                          onClick={() => onRemoveItem(ci.id)}
                          aria-label="Remove item"
                          className="text-stone-400 hover:text-rose-600 p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Type Tabs */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-2">
                    Order Preference
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setOrderType('takeaway')}
                      className={`p-2.5 text-xs font-semibold rounded-xl border-2 text-center transition-all ${
                        orderType === 'takeaway'
                          ? 'border-pink-500 bg-pink-50 text-pink-900 shadow-xs'
                          : 'border-stone-200 text-stone-600 hover:border-pink-200'
                      }`}
                    >
                      Takeaway / Parcel
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('dinein')}
                      className={`p-2.5 text-xs font-semibold rounded-xl border-2 text-center transition-all ${
                        orderType === 'dinein'
                          ? 'border-sky-500 bg-sky-50 text-sky-900 shadow-xs'
                          : 'border-stone-200 text-stone-600 hover:border-sky-200'
                      }`}
                    >
                      Dine-in Parlor
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('delivery')}
                      className={`p-2.5 text-xs font-semibold rounded-xl border-2 text-center transition-all ${
                        orderType === 'delivery'
                          ? 'border-pink-500 bg-pink-50 text-pink-900 shadow-xs'
                          : 'border-stone-200 text-stone-600 hover:border-pink-200'
                      }`}
                    >
                      Solapur Delivery
                    </button>
                  </div>
                </div>

                {/* Customer Details Form */}
                <div className="space-y-3 pt-2 border-t border-pink-100">
                  <div>
                    <label htmlFor="customer-name" className="block text-xs font-bold text-stone-700 mb-1">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-pink-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        id="customer-name"
                        type="text"
                        value={customerName}
                        onChange={e => setCustomerName(e.target.value)}
                        placeholder="e.g. Rahul Patil"
                        className="w-full pl-8 pr-3 py-2 text-xs bg-pink-50/40 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="customer-phone" className="block text-xs font-bold text-stone-700 mb-1">
                      WhatsApp Mobile Number
                    </label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-sky-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        id="customer-phone"
                        type="tel"
                        value={customerPhone}
                        onChange={e => setCustomerPhone(e.target.value)}
                        placeholder="e.g. 98221XXXXX"
                        className="w-full pl-8 pr-3 py-2 text-xs bg-sky-50/40 border border-sky-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="order-location" className="block text-xs font-bold text-stone-700 mb-1">
                      {orderType === 'dinein'
                        ? 'Table / Token Number'
                        : orderType === 'delivery'
                        ? 'Delivery Address in Solapur'
                        : 'Pickup Note / Vehicle No. (Optional)'}
                    </label>
                    <div className="relative">
                      <MapPin className="w-3.5 h-3.5 text-pink-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        id="order-location"
                        type="text"
                        value={tableOrAddress}
                        onChange={e => setTableOrAddress(e.target.value)}
                        placeholder={
                          orderType === 'dinein'
                            ? 'e.g. Table 4 or Counter'
                            : orderType === 'delivery'
                            ? 'e.g. Near Hotgi Road, Sainath Nagar, Solapur'
                            : 'e.g. Arriving in 15 mins on scooter'
                        }
                        className="w-full pl-8 pr-3 py-2 text-xs bg-pink-50/40 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="special-notes" className="block text-xs font-bold text-stone-700 mb-1">
                      Special Preparation Request (Optional)
                    </label>
                    <textarea
                      id="special-notes"
                      rows={2}
                      value={specialNotes}
                      onChange={e => setSpecialNotes(e.target.value)}
                      placeholder="e.g. Extra baby pink rose syrup, no added sugar in mosambi..."
                      className="w-full p-2.5 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 resize-none"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer: Pricing & Action */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-pink-100 bg-gradient-to-b from-pink-50/50 to-white space-y-3">
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono tabular-nums font-semibold">₹{subtotal}</span>
                </div>
                {packagingFee > 0 && (
                  <div className="flex justify-between text-stone-500">
                    <span>Spill-proof Packaging</span>
                    <span className="font-mono tabular-nums font-semibold">₹{packagingFee}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-extrabold text-stone-900 pt-2 border-t border-pink-200">
                  <span>Grand Total</span>
                  <span className="font-mono tabular-nums text-lg text-pink-600">₹{grandTotal}</span>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="w-full py-3.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 hover:from-emerald-700 hover:to-sky-700 text-white font-bold rounded-xl active:scale-95 transition-all flex items-center justify-center gap-2 text-sm shadow-md shadow-emerald-200"
              >
                <Send className="w-4 h-4" />
                <span>Send Order via WhatsApp (+91 98220 54321)</span>
              </button>

              <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1">
                <button
                  type="button"
                  onClick={handleCopyOrder}
                  className="flex items-center gap-1 hover:text-stone-800 transition-colors"
                >
                  {copiedSuccess ? (
                    <>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-medium">Order copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Order Details</span>
                    </>
                  )}
                </button>
                <span>Pay via UPI / Cash upon pickup</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
