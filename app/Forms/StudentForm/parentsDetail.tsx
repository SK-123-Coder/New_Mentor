import React from 'react';
import { View, Text, TextInput, ScrollView, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

/* -------------------------------- Input ----------------------------------- */
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

const ParentsDetail = () => {
  const fields = [
    { label: "Father's Name", placeholder: "Enter father's name" },
    { label: "Mother's Name", placeholder: "Enter mother's name" },
    { label: "Father's Contact", placeholder: "Mobile no." },
    { label: "Mother's Contact", placeholder: "Mobile no." },
  ];

  // Dummy About Data (Replace with actual backend/user values)
  const aboutData = {
    fullName: "dsda",
    contact: "sadasf",
    gender: "female",
    dob: "2025-11-05",
    course: "sfafsas",
    year: "3rd Year",
    rollNumber: "23CS0012",
  };

  return (
    <SafeAreaView className="flex-1">
      <StatusBar style="light" />

      {/* Background */}
      <View className="absolute inset-0 bg-[#000510]">
        <LinearGradient
          colors={['#000814', '#000b1a', '#020d24', '#040f2e']}
          className="absolute inset-0 opacity-90"
        />
        <LinearGradient
          colors={['rgba(0, 90, 255, 0.18)', 'transparent']}
          start={{ x: 0.3, y: 0.3 }}
          end={{ x: 0.7, y: 0.7 }}
          className="absolute inset-0"
        />
        <LinearGradient
          colors={['rgba(120, 90, 255, 0.22)', 'transparent']}
          start={{ x: 1, y: 1 }}
          end={{ x: 0.4, y: 0.4 }}
          className="absolute inset-0"
        />
        <View className="absolute inset-0 bg-black/40" />
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* ---------------------- Title ---------------------- */}
        <View className="mt-10 mb-6 px-6">
          <Text className="text-white text-4xl font-extrabold text-center">
            Student Information
          </Text>
          <Text className="text-gray-400 text-center mt-3">
            Complete your profile to continue
          </Text>
        </View>

        {/* ---------------------- ABOUT SECTION ---------------------- */}
        <View className="mx-5 bg-[#0b0f1a]/60 border border-white/10 rounded-3xl px-6 py-7 shadow-lg shadow-black/40">
          <Text className="text-white text-3xl font-bold">About</Text>
          <Text className="text-gray-400 mt-1 mb-4">
            Personal information and details
          </Text>

          {/* Each About Field */}
          <View className="my-2">
            <Text className="text-gray-400 text-sm">Full Name</Text>
            <Text className="text-white text-lg font-semibold">{aboutData.fullName}</Text>
          </View>

          <View className="my-2">
            <Text className="text-gray-400 text-sm">Contact Number</Text>
            <Text className="text-white text-lg font-semibold">{aboutData.contact}</Text>
          </View>

          <View className="my-2">
            <Text className="text-gray-400 text-sm">Gender</Text>
            <Text className="text-white text-lg font-semibold">{aboutData.gender}</Text>
          </View>

          <View className="my-2">
            <Text className="text-gray-400 text-sm">Date of Birth</Text>
            <Text className="text-white text-lg font-semibold">{aboutData.dob}</Text>
          </View>

          <View className="my-2">
            <Text className="text-gray-400 text-sm">Course</Text>
            <Text className="text-white text-lg font-semibold">{aboutData.course}</Text>
          </View>

          <View className="my-2">
            <Text className="text-gray-400 text-sm">Year</Text>
            <Text className="text-white text-lg font-semibold">{aboutData.year}</Text>
          </View>

          <View className="my-2">
            <Text className="text-gray-400 text-sm">Roll Number</Text>
            <Text className="text-white text-lg font-semibold">{aboutData.rollNumber}</Text>
          </View>
        </View>

        {/* ---------------------- FORM (Parent Details) ---------------------- */}
        <View className="mx-5 bg-[#0b0f1a]/70 border border-gray-700 rounded-3xl px-5 py-7 mt-8 shadow-lg shadow-black/40">
          <Text className="text-white text-2xl font-bold text-center mb-5">
            Parents Details
          </Text>

          {fields.map((field, index) => (
            <InputField key={index} label={field.label} placeholder={field.placeholder} />
          ))}

          {/* Next Button */}
          <Pressable
            className="bg-blue-600 py-3 rounded-md active:bg-blue-700 mt-6"
            onPress={() => router.push("/Forms/StudentForm/adderessDetail")}
          >
            <Text className="text-center text-white font-semibold text-lg">Next</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ParentsDetail;