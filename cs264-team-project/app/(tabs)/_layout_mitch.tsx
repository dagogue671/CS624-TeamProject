// File: app/(tabs)/_layout.tsx
import { Stack } from 'expo-router';
import { ItemProvider } from '../context/ItemContext';

export default function Layout() {
  return (
    <ItemProvider>
      <Stack />
    </ItemProvider>
  );
}

