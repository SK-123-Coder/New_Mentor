import React from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

const LoginPage = () => {
  return (
    <SafeAreaView className="flex-1 bg-black">
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

        {/* CENTER EVERYTHING */}
        <View className="flex-1 justify-center items-center gap-6 px-4">

          {/* Logo */}
          <Image
            source={require('../../assets/images/Logo.png')}
            style={{ width: 130, height: 130, borderRadius: 18 }}
          />

          {/* Header */}
          <View>
            <Text className="text-center text-4xl font-bold text-white tracking-wide">
              Welcome Back
            </Text>
            <Text className="text-center text-gray-300 mt-2 text-base">
              Login to your account
            </Text>
          </View>

          {/* Glassmorphism Form */}
          <View className="w-full bg-white/15 backdrop-blur-2xl p-6 rounded-2xl border border-white/20 shadow-2xl shadow-black/40">

            {/* Email */}
            <View className="mb-5">
              <Text className="mb-2 text-gray-200 font-semibold">Email</Text>
              <TextInput
                className="bg-white/10 text-white border border-white/20 rounded-xl px-4 py-3 text-base"
                placeholder="Enter your email"
                placeholderTextColor="#cbd5e1"
                keyboardType="email-address"
              />
            </View>

            {/* Password */}
            <View className="mb-6">
              <Text className="mb-2 text-gray-200 font-semibold">Password</Text>
              <TextInput
                className="bg-white/10 text-white border border-white/20 rounded-xl px-4 py-3 text-base"
                placeholder="Enter your password"
                placeholderTextColor="#cbd5e1"
                secureTextEntry={true}
              />
            </View>

            {/* Login Button */}
            <Pressable className="bg-blue-600 py-3 rounded-xl active:bg-blue-700 shadow-lg shadow-blue-900/40">
              <Text className="text-center text-white font-semibold text-lg">
                Login
              </Text>
            </Pressable>

          </View>

          {/* Footer */}
          <View className="flex-row items-center mt-2">
            <Text className="text-gray-300 text-base">Don’t have an account? </Text>
            <Pressable onPress={() => router.push('/Login_Signup/signUpPage')}>
              <Text className="text-blue-400 font-bold text-base">Sign Up</Text>
            </Pressable>
          </View>

        </View>
    </SafeAreaView>
  );
};

export default LoginPage;