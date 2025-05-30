import { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';

type Item = { id: string; name: string; description: string };

type ItemContextType = {
  items: Item[];
  addItem: (name: string, description: string) => void;
  updateItem: (id: string, name: string, description: string) => void;
  deleteItem: (id: string) => void;
};

const ItemContext = createContext<ItemContextType | undefined>(undefined);

export const useItems = () => {
  const ctx = useContext(ItemContext);
  if (!ctx) throw new Error('useItems must be used inside ItemProvider');
  return ctx;
};

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (name: string, description: string) =>
    setItems([...items, { id: uuidv4(), name, description }]);

  const updateItem = (id: string, name: string, description: string) =>
    setItems(items.map(item => (item.id === id ? { id, name, description } : item)));

  const deleteItem = (id: string) =>
    setItems(items.filter(item => item.id !== id));

  return (
    <ItemContext.Provider value={{ items, addItem, updateItem, deleteItem }}>
      {children}
    </ItemContext.Provider>
  );
};

