import { Text, View, TextInput, TouchableOpacity, ScrollView, Image } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { launchImageLibrary } from "react-native-image-picker";
import "../global.css";

export default function teachersForm(){

    const [imageUri, setImageUri] = useState<string | null>(null);

    const pickImage = () => {
        launchImageLibrary(
        { mediaType: "photo" },
        (response) => {
            if (response.assets && response.assets.length > 0) {
            setImageUri(response.assets[0].uri || null);
            }
        }
        );
    };

    const [selectedDepartment, setSelectedDepartment] = useState("");
    const departments = [
    "Computer Department",
    "IT Department",
    "ENTC Department",
    "Electrical Department",
    "Mechanical Department",
    "Civil Department",
    "AIML Department",
    "Mechatronics Department",
    "Chemical Department",
    "Instrumentation Department"
    ];

    const [selectedYear, setSelectedYear] = useState("");
    const years = [
    "1st Year",
    "2nd Year",
    "3rd Year",
    "4th Year"
    ];

    const [selectedSemester, setSelectedSemester] = useState("");
    const semesters = [
    "Semester 1",
    "Semester 2",
    "Semester 3",
    "Semester 4",
    "Semester 5",
    "Semester 6",
    "Semester 7",
    "Semester 8"
    ];

    return(
        <SafeAreaView className="bg-[#8F8F8F} px-5 mb-5">
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Heading */}
                <View className="mt-10">
                    <Text className="text-center text-4xl font-bold mb-3">Registration Form</Text>
                    <Text className="text-gray-500 text-center">Please fill the form according to your role.</Text>
                </View>

                {/* Which form */}
                <View className="flex justify-center items-center mt-10">
                    <Text className="text-center text-xl font-semibold bg-white w-64 p-2 rounded-lg">Teachers Form</Text>
                </View>

                <View className="bg-white rounded-lg mt-8 p-5">
                    <Text className="text-center font-semibold text-xl mb-5">Basic Deatils</Text>

                        <View className="flex-1 items-center justify-center bg-white">

                        {/* Profile Image + Add Icon */}
                        <View className="relative">
                            <TouchableOpacity onPress={pickImage}>
                            {imageUri ? (
                                <Image
                                source={{ uri: imageUri }}
                                className="w-32 h-32 rounded-full"
                                />
                            ) : (
                                <View className="w-32 h-32 rounded-full bg-gray-300 items-center justify-center">
                                <Text className="text-gray-600 text-lg">No Image</Text>
                                </View>
                            )}
                            </TouchableOpacity>

                            {/* Add Icon */}
                            <TouchableOpacity
                            onPress={pickImage}
                            className="absolute bottom-0 right-0 bg-blue-500 w-10 h-10 rounded-full items-center justify-center"
                            >
                            <Text className="text-white text-2xl font-bold">+</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Button (Optional) */}
                        <TouchableOpacity
                            onPress={pickImage}
                            className="bg-blue-500 px-4 py-2 mt-6 rounded-xl"
                        >
                            <Text className="text-white font-bold">Select Image</Text>
                        </TouchableOpacity>

                        </View>

                    <Text className="text-md font-semibold mt-5 mb-3">Full Name</Text>
                    <TextInput
                        className="w-full h-12 border border-gray-400 rounded-xl px-4 text-black"
                        placeholder="Enter your full name"
                        placeholderTextColor="#888"
                    />

                    <Text className="text-md font-semibold mt-5 mb-3">Gmail</Text>
                    <TextInput
                        className="w-full h-12 border border-gray-400 rounded-xl px-4 text-black"
                        placeholder="Enter your gmail id"
                        placeholderTextColor="#888"
                    />  

                    <Text className="text-md font-semibold mt-5 mb-3">Mobile no.</Text>
                    <TextInput
                        className="w-full h-12 border border-gray-400 rounded-xl px-4 text-black"
                        placeholder="Enter your mobile no."
                        placeholderTextColor="#888"
                    />

                    <Text className="text-md font-semibold mt-5 mb-3">Select Department</Text>
                    <View className="border border-gray-400 rounded-xl bg-white h-12 flex justify-center px-3">
                        <Picker
                            selectedValue={selectedDepartment}
                            onValueChange={(value) => setSelectedDepartment(value)}
                        >
                            <Picker.Item label="-- Department --" value="none" />
                            {departments.map((dept, index) => (
                                <Picker.Item key={index} label={dept} value={dept} />
                            ))}
                        </Picker>
                    </View>

                    <Text className="text-md font-semibold mt-5 mb-3">Select Year</Text>
                    <View className="border border-gray-400 rounded-xl bg-white h-12 flex justify-center px-3">
                        <Picker
                            selectedValue={selectedYear}
                            onValueChange={(value) => setSelectedYear(value)}
                        >
                            <Picker.Item label="-- Year --" value="none" />

                            {years.map((year, index) => (
                                <Picker.Item key={index} label={year} value={year} />
                            ))}
                        </Picker>
                    </View>

                    <Text className="text-md font-semibold mt-5 mb-3">Select Semester</Text>
                    <View className="border border-gray-400 rounded-xl bg-white h-12 flex justify-center px-3">
                        <Picker
                            selectedValue={selectedSemester}
                            onValueChange={(value) => setSelectedSemester(value)}
                        >
                            <Picker.Item label="-- Semester --" value="none" />

                            {semesters.map((sem, index) => (
                                <Picker.Item key={index} label={sem} value={sem} />
                            ))}
                        </Picker>
                    </View>

                    <Text className="text-md font-semibold mt-5 mb-3">Qualification</Text>
                    <TextInput
                        className="w-full h-12 border border-gray-400 rounded-xl px-4 text-black"
                        placeholder="Enter your qualification"
                        placeholderTextColor="#888"
                    />

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}