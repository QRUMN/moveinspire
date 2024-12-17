import React from 'react';
import { 
  Wallet, 
  CreditCard, 
  PlusCircle, 
  ArrowUpRight, 
  ArrowDownLeft,
  DollarSign
} from 'lucide-react';
import { BackButton } from '../../common/BackButton';

const DEMO_TRANSACTIONS = [
  {
    id: 1,
    type: 'credit',
    amount: 50.00,
    description: 'Added funds',
    date: '2024-02-15',
    status: 'completed'
  },
  {
    id: 2,
    type: 'debit',
    amount: 30.00,
    description: 'Hip-Hop Class',
    date: '2024-02-14',
    status: 'completed'
  },
  {
    id: 3,
    type: 'credit',
    amount: 100.00,
    description: 'Referral bonus',
    date: '2024-02-10',
    status: 'completed'
  }
];

const PAYMENT_METHODS = [
  {
    id: 1,
    type: 'visa',
    last4: '4242',
    expiry: '12/24',
    isDefault: true
  },
  {
    id: 2,
    type: 'mastercard',
    last4: '8888',
    expiry: '09/25',
    isDefault: false
  }
];

export function DashboardWallet() {
  const [showAddFunds, setShowAddFunds] = React.useState(false);
  const [amount, setAmount] = React.useState('');

  const handleAddFunds = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle adding funds
    setShowAddFunds(false);
    setAmount('');
  };

  return (
    <div className="space-y-8">
      <div>
        <BackButton to="/dashboard" label="Back to Dashboard" />
        <h1 className="text-2xl font-bold text-gray-900">Wallet</h1>
      </div>

      {/* Balance Card */}
      <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl shadow-lg p-6 text-white">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Wallet className="h-6 w-6 mr-2" />
            <h2 className="text-lg font-semibold">Available Balance</h2>
          </div>
          <button
            onClick={() => setShowAddFunds(true)}
            className="flex items-center px-4 py-2 bg-white/20 rounded-full hover:bg-white/30 transition"
          >
            <PlusCircle className="h-4 w-4 mr-2" />
            Add Funds
          </button>
        </div>
        <div className="text-3xl font-bold mb-4">$120.00</div>
        <div className="text-purple-100">Last updated: Today, 2:30 PM</div>
      </div>

      {/* Add Funds Modal */}
      {showAddFunds && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Add Funds</h3>
            <form onSubmit={handleAddFunds} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Amount
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="0.00"
                    min="1"
                    step="0.01"
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowAddFunds(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                >
                  Add Funds
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        {/* Transaction History */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Transaction History</h2>
          <div className="space-y-4">
            {DEMO_TRANSACTIONS.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition">
                <div className="flex items-center">
                  {transaction.type === 'credit' ? (
                    <ArrowDownLeft className="h-5 w-5 text-green-500 mr-3" />
                  ) : (
                    <ArrowUpRight className="h-5 w-5 text-red-500 mr-3" />
                  )}
                  <div>
                    <div className="font-medium text-gray-900">{transaction.description}</div>
                    <div className="text-sm text-gray-500">{transaction.date}</div>
                  </div>
                </div>
                <div className={`font-medium ${
                  transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.type === 'credit' ? '+' : '-'}${transaction.amount.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Payment Methods</h2>
            <button className="text-purple-600 hover:text-purple-700 font-medium">
              Add New
            </button>
          </div>
          <div className="space-y-4">
            {PAYMENT_METHODS.map((method) => (
              <div key={method.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center">
                  <CreditCard className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">
                      {method.type.charAt(0).toUpperCase() + method.type.slice(1)} •••• {method.last4}
                    </div>
                    <div className="text-sm text-gray-500">Expires {method.expiry}</div>
                  </div>
                </div>
                {method.isDefault && (
                  <span className="text-sm text-purple-600 font-medium">Default</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}