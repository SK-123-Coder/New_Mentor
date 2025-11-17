import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

// ▼▼ Add Below ▼▼
import { AntDesign } from '@expo/vector-icons';
// ▲▲ Add This Import ▲▲

const SignUpPage = () => {
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0, width: 0 });
  const roleRef = React.useRef(null);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const roles = ["Student", "Teacher", "Admin"];

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

        <View className="flex-1 justify-center items-center gap-6 px-4">

          {/* Logo */}
          <Image
            source={require('../../assets/images/Logo.png')}
            style={{ width: 130, height: 130, borderRadius: 18 }}
          />

          {/* Header */}
          <View>
            <Text className="text-center text-4xl font-bold text-white tracking-wide">
              Create Account
            </Text>
            <Text className="text-center text-gray-300 mt-2 text-base">
              Join us and get started
            </Text>
          </View>

          {/* Form */}
          <View className="w-full bg-white/15 backdrop-blur-2xl p-6 rounded-2xl border border-white/20 shadow-2xl shadow-black/40">

            {/* Full Name */}
            <View className="mb-5">
              <Text className="text-gray-200 font-semibold mb-2">Full Name</Text>
              <TextInput
                className="bg-white/10 text-white border border-white/20 rounded-xl px-4 py-3 text-base"
                placeholder="Enter full name"
                placeholderTextColor="#cbd5e1"
              />
            </View>

            {/* Email */}
            <View className="mb-5">
              <Text className="text-gray-200 font-semibold mb-2">Email</Text>
              <TextInput
                className="bg-white/10 text-white border border-white/20 rounded-xl px-4 py-3 text-base"
                placeholder="Enter email address"
                placeholderTextColor="#cbd5e1"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Role - Improved Dropdown */} 
            <View
              className="mb-5"
              ref={roleRef}
              onLayout={(e) => {
                const layout = e.nativeEvent.layout;
                setDropdownPosition({
                  x: layout.x,
                  y: layout.y + layout.height + 10,
                  width: layout.width,
                });
              }}
            >
              <Text className="text-gray-200 font-semibold mb-2">Role</Text>

              {/* Dropdown Toggle */}
              <TouchableOpacity
                onPress={() => setDropdownOpen(!dropdownOpen)}
                className="
                  bg-white/10 
                  border border-white/20 
                  rounded-xl 
                  px-4 py-3 
                  flex-row justify-between items-center
                  active:bg-white/20
                "
              >
                <Text className={`${selectedRole ? "text-white" : "text-gray-400"} text-base`}>
                  {selectedRole || "Select Role"}
                </Text>
                <AntDesign name={dropdownOpen ? "up" : "down"} size={18} color="#ffffff" />
              </TouchableOpacity>
            </View>

            {/* Beautiful Floating Dropdown */}
            {dropdownOpen && (
              <View
                style={{
                  position: "absolute",
                  top: dropdownPosition.y,
                  left: dropdownPosition.x,
                  width: dropdownPosition.width,
                }}
                className="
                  bg-[#0d1b2a]/100
                  border border-white/25
                  backdrop-blur-3xl
                  rounded-2xl
                  overflow-hidden
                  shadow-[0_0_30px_rgba(0,0,0,0.6)]
                  z-50
                "
              >
                {roles.map((role, index) => (
                  <Pressable
                    key={index}
                    onPress={() => {
                      setSelectedRole(role);
                      setDropdownOpen(false);
                    }}
                    className="
                      px-4 py-3
                      active:bg-white/10
                    "
                    style={{
                      borderBottomWidth: index === roles.length - 1 ? 0 : 1,
                      borderBottomColor: "rgba(255,255,255,0.08)",
                    }}
                  >
                    <Text className="text-white text-base tracking-wide">
                      {role}
                    </Text>
                  </Pressable>
                ))}
              </View>
            )}

            {/* Password */}
            <View className="mb-7">
              <Text className="text-gray-200 font-semibold mb-2">Password</Text>
              <TextInput
                className="bg-white/10 text-white border border-white/20 rounded-xl px-4 py-3 text-base"
                placeholder="Enter password"
                placeholderTextColor="#cbd5e1"
                secureTextEntry
              />
            </View>

            {/* Sign Up Button */}
            <Pressable
              className="bg-blue-600 py-3 rounded-xl active:bg-blue-700 shadow-lg shadow-blue-900/40"
              onPress={() => router.push('/tabs/profileScreen')}
            >
              <Text className="text-center text-white font-semibold text-lg">
                Sign Up
              </Text>
            </Pressable>

          </View>

          {/* Footer */}
          <View className="flex-row items-center mt-2">
            <Text className="text-gray-300 text-base">Already have an account? </Text>
            <Pressable onPress={() => router.push('/Login_Signup/logInPage')}>
              <Text className="text-blue-400 font-bold text-base">Log In</Text>
            </Pressable>
          </View>

        </View>
    </SafeAreaView>
  );
};

export default SignUpPage;