import { Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import "../global.css";

export default function Login() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />

      <ScrollView
          contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          paddingHorizontal: 5,
          paddingVertical: 20,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 justify-center items-center px-4">
          <View className="w-full border rounded-xl px-5 py-10 flex flex-col justify-between h-[500px]">
            
            {/* Heading */}
            <View>
              <Text className="text-center text-4xl font-bold">Welcome Back</Text>
              <Text className="text-center text-gray-400 mt-2">Login to continue</Text>
            </View>

            {/* Form */}
            <View className="space-y-5">
              <View>
                <Text className="font-semibold text-xl mb-2">Email</Text>
                <TextInput
                  className="w-full h-12 border border-gray-400 rounded-xl px-4 text-black mb-5"
                  placeholder="Enter your email"
                  placeholderTextColor="#888"
                />

                <Text className="font-semibold text-xl mb-2">Password</Text>
                <TextInput
                  className="w-full h-12 border border-gray-400 rounded-xl px-4 text-black"
                  placeholder="Enter your password"
                  placeholderTextColor="#888"
                  secureTextEntry={true}
                />
              </View>

              <TouchableOpacity className="w-full h-12 bg-black rounded-xl justify-center items-center mt-10">
                <Text className="text-white font-semibold text-lg">Login</Text>
              </TouchableOpacity>
            </View>

            {/* Sign up link */}
            <View className="flex-row justify-center mt-4">
              <Text>
                Don't have an account?{' '}
                <Link href="/signinpage" className="text-blue-600 font-bold">
                  Sign Up
                </Link>
              </Text>
            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}