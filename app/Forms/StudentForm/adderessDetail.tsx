import React from 'react';
import { View, Text, TextInput, ScrollView, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

// Reusable Input Component
const InputField = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <View className="mt-5">
    <Text className="text-gray-200 text-lg font-semibold mb-2">{label}</Text>
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#777"
      className="w-full bg-[#112] border border-gray-600 rounded-xl px-4 py-3 text-base text-white"
    />
  </View>
);

const AddressDetail = () => {
  const fields = [
    { label: 'Plot No.', placeholder: 'Enter Plot/House No.' },
    { label: 'Colony', placeholder: 'Enter colony' },
    { label: 'City', placeholder: 'Enter city' },
    { label: 'State', placeholder: 'Enter your state' },
    { label: 'Pin Code', placeholder: '****' },
    { label: 'Country', placeholder: 'Enter country' },
  ];

  return (
    <SafeAreaView className="flex-1">
      <StatusBar style="light" />

      {/* Dark Premium Gradient Background */}
      <View className="absolute inset-0 bg-[#000510]">
        
        {/* Main linear gradient */}
        <LinearGradient
          colors={['#000814', '#000b1a', '#020d24', '#040f2e']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="absolute inset-0 opacity-90"
        />

        {/* Soft radial glow - left side */}
        <LinearGradient
          colors={['rgba(0, 90, 255, 0.18)', 'transparent']}
          start={{ x: 0.3, y: 0.3 }}
          end={{ x: 0.7, y: 0.7 }}
          className="absolute w-full h-full"
        />

        {/* Subtle purple glow - right bottom */}
        <LinearGradient
          colors={['rgba(120, 90, 255, 0.22)', 'transparent']}
          start={{ x: 1, y: 1 }}
          end={{ x: 0.4, y: 0.4 }}
          className="absolute w-full h-full"
        />

        {/* Very soft dark overlay */}
        <View className="absolute inset-0 bg-black/40" />
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 60 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Title Section */}
        <View className="mt-10 mb-6 px-6">
          <Text className="text-white text-4xl font-extrabold text-center">Student Information</Text>
          <Text className="text-gray-400 text-center mt-3">Complete your profile to continue</Text>
        </View>

        {/* Form Container */}
        <View className="mx-5 bg-[#0b0f1a]/70 border border-gray-700 rounded-3xl px-5 py-7 shadow-lg shadow-black/40">
          <Text className="text-white text-2xl font-bold text-center mb-5">Address Details</Text>

          {fields.map((field, index) => (
            <InputField key={index} label={field.label} placeholder={field.placeholder} />
          ))}

          {/* Next Button */}
          <Pressable
            className="bg-blue-600 py-3 rounded-md active:bg-blue-700 mt-5"
            onPress={() => router.push('/Forms/StudentForm/courseDetail')}
          >
            <Text className="text-center text-white font-semibold text-lg">Next</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddressDetail;