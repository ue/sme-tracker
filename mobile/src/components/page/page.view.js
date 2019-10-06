import React from 'react';
import { SafeAreaView } from 'react-native';

const Page = ({ children, style }) => (
  <SafeAreaView style={[{ flex: 1 }, style]}>{children}</SafeAreaView>
);

export default Page;
