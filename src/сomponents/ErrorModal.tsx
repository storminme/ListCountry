'use client';

type ModalProps = {
  message: string;
  action: () => void;
};

export const ErrorModal = ({ message, action }: ModalProps) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
    <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Ошибка</h3>
      <p className="text-gray-600 mb-4">{message}</p>
      <button
        onClick={action}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Понятно
      </button>
    </div>
  </div>
);
