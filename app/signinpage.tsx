import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { useRouter } from "expo-router";


export default function SignUp() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const options = ["Student", "Teachers"];

  const handleSelect = (option: string) => {
    setSelected(option);
    setOpen(false);
  };

  const router = useRouter();

  const handleSubmit = () => {
    if (selected === "Student") {
      router.push("/studentform");
    } else if (selected === "Teachers") {   
      router.push("/teachersform");
    } else {
      alert("Please select a role first");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          paddingHorizontal: 20,
          paddingVertical: 40,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="w-full h-[550px] border rounded-xl px-5 py-12 flex flex-col justify-between shadow-md bg-white relative">
          {/* Heading */}
          <View className="mb-8">
            <Text className="text-4xl font-bold text-center">Create Account</Text>
            <Text className="text-gray-400 text-center mt-2">Join us today</Text>
          </View>

          {/* Form Section */}
          <View>
            <View>
                {/* Email Input */}
                <View>
                <Text className="font-semibold text-xl mb-3">Email</Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    className="w-full h-12 border border-gray-400 rounded-xl px-4 text-black"
                    placeholder="Enter your email"
                    placeholderTextColor="#888"
                    keyboardType="email-address"
                />
                </View>

                {/* Role Dropdown */}
                <View className="relative z-10">
                <Text className="font-semibold text-xl mt-5 mb-3">Role</Text>
                <TouchableOpacity
                    className="w-full h-12 border border-gray-400 rounded-xl px-4 flex-row justify-between items-center bg-white"
                    onPress={() => setOpen(!open)}
                    activeOpacity={0.7}
                >
                    <Text className="text-black">{selected || "Select a role"}</Text>
                    <Text className="text-black">{open ? "▲" : "▼"}</Text>
                </TouchableOpacity>

                {open && (
                    <>
                    {/* Full-screen invisible overlay to detect outside taps */}
                    <TouchableWithoutFeedback
                        onPress={() => setOpen(false)}
                    >
                        <View
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: Dimensions.get("window").width,
                            height: Dimensions.get("window").height,
                            zIndex: 1,
                        }}
                        />
                    </TouchableWithoutFeedback>

                    {/* Dropdown menu */}
                    <View className="absolute top-14 left-0 w-full border border-gray-400 rounded-xl bg-white max-h-40 shadow-lg z-20">
                        <ScrollView>
                        {options.map((option) => (
                            <TouchableOpacity
                            key={option}
                            className="px-4 py-3 border-b border-gray-200"
                            onPress={() => handleSelect(option)}
                            activeOpacity={0.7}
                            >
                            <Text className="text-black">{option}</Text>
                            </TouchableOpacity>
                        ))}
                        </ScrollView>
                    </View>
                    </>
                )}
                </View>

                {/* Password Input */}
                <View>
                <Text className="font-semibold text-xl mt-5 mb-3">Password</Text>
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    className="w-full h-12 border border-gray-400 rounded-xl px-4 text-black"
                    placeholder="Enter your password"
                    placeholderTextColor="#888"
                    secureTextEntry={true}
                />
                </View>
            </View>

            <View>
                {/* Sign Up Button */}
                <TouchableOpacity 
                  onPress={handleSubmit} 
                  className="w-full h-12 bg-black rounded-xl justify-center items-center mt-9"
                >
                  <Text className="text-white font-semibold text-lg">Sign Up</Text>
                </TouchableOpacity>
            </View>
          </View>

          {/* Sign in Link */}
          <View className="flex-row justify-center mt-8">
            <Text>
              Don't have an account?{' '}
              <Link href="/loginpage" className="text-blue-600 font-bold">
                Login
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}