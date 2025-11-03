import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
import { launchImageLibrary } from "react-native-image-picker";

export default function studentForm(){
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


    const [selectedCourse, setSelectedCourse] = useState("");
    const courses = [
        "Computer Science Engineering",
        "Information Technology",
        "Electronics & Communication Engineering",
        "Electrical Engineering",
        "Mechanical Engineering",
        "Civil Engineering",
        "Aerospace Engineering",
        "Chemical Engineering",
        "Biotechnology Engineering",
        "AI & Data Science",
        "Cyber Security",
        "Automobile Engineering",
    ];

    const [gender, setGender] = useState("");
    const genderOptions = ["Male", "Female", "Other", "Prefer not to say"];

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

    const [country, setCountry] = useState("");
    const countryOptions = [
    "India",
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "China",
    "Brazil"
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
                    <Text className="text-center text-xl font-semibold bg-white w-64 p-2 rounded-lg">Student Form</Text>
                </View>

                {/* Form start */}
                    {/* Basic detail */}
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

                        <Text className="text-md font-semibold mt-5 mb-3">Father Name</Text>
                        <TextInput
                            className="w-full h-12 border border-gray-400 rounded-xl px-4 text-black"
                            placeholder="Enter your fathers name"
                            placeholderTextColor="#888"
                        />

                        <Text className="text-md font-semibold mt-5 mb-3">Mother Name</Text>
                        <TextInput
                            className="w-full h-12 border border-gray-400 rounded-xl px-4 text-black"
                            placeholder="Enter your mother name"
                            placeholderTextColor="#888"
                        />

                        <Text className="text-md font-semibold mt-5 mb-3">Age</Text>
                        <TextInput
                            className="w-full h-12 border border-gray-400 rounded-xl px-4 text-black"
                            placeholder="Enter your age"
                            placeholderTextColor="#888"
                        />

                        <Text className="text-md font-semibold mt-5 mb-3">Date of Birth</Text>
                        <TextInput
                            className="w-full h-12 border border-gray-400 rounded-xl px-4 text-black"
                            placeholder="Enter your Date of Birth"
                            placeholderTextColor="#888"
                        />

                        <Text className="text-md font-semibold mb-3 mt-5">Select Gender</Text>
                        <View className="border border-gray-400 rounded-lg bg-white h-12 flex justify-center px-3">
                            <Picker
                            selectedValue={gender}
                            onValueChange={(value) => setGender(value)}
                            >
                            <Picker.Item label="-- Select Gender --" value="" />
                            {genderOptions.map((option, index) => (
                                <Picker.Item key={index} label={option} value={option} />
                            ))}
                            </Picker>
                        </View>

                        <Text className="text-md font-semibold mt-5 mb-3">Mobile No.</Text>
                        <TextInput
                            className="w-full h-12 border border-gray-400 rounded-xl px-4 text-black"
                            placeholder="Enter your mobile number"
                            placeholderTextColor="#888"
                        />

                        <Text className="text-md font-semibold mt-5 mb-3">Fathers mobile No.</Text>
                        <TextInput
                            className="w-full h-12 border border-gray-400 rounded-xl px-4 text-black"
                            placeholder="Enter your mobile number"
                            placeholderTextColor="#888"
                        />

                        <Text className="text-md font-semibold mt-5 mb-3">Mothers mobile No.</Text>
                        <TextInput
                            className="w-full h-12 border border-gray-400 rounded-xl px-4 text-black"
                            placeholder="Enter your mobile number"
                            placeholderTextColor="#888"
                        />

                        <Text className="text-md font-semibold mt-5 mb-3">Fathers occupation</Text>
                        <TextInput
                            className="w-full h-12 border border-gray-400 rounded-xl px-4 text-black"
                            placeholder="Enter your fathers occupation"
                            placeholderTextColor="#888"
                        />

                        <Text className="text-md font-semibold mt-5 mb-3">Mothers occupation</Text>
                        <TextInput
                            className="w-full h-12 border border-gray-400 rounded-xl px-4 text-black"
                            placeholder="Enter your mothers occupation"
                            placeholderTextColor="#888"
                        />

                        <Text className="text-md font-semibold mt-5 mb-3">Gmail</Text>
                        <TextInput
                            className="w-full h-12 border border-gray-400 rounded-xl px-4 text-black"
                            placeholder="Enter your gmail id"
                            placeholderTextColor="#888"
                        />
                    </View>
                    
                    {/* Course detail */}
                    <View className="bg-white rounded-lg mt-5 p-5">
                        <Text className="text-center font-semibold text-xl">Course Deatils</Text>

                        <Text className="text-md font-semibold mt-5 mb-3">Select Course</Text>
                        <View className="border border-gray-400 rounded-xl bg-white h-12 flex justify-center px-3">
                            <Picker
                            selectedValue={selectedCourse}
                            onValueChange={(value) => setSelectedCourse(value)}
                            >
                            <Picker.Item label="-- Course --" value="none" />

                            {courses.map((course, index) => (
                                <Picker.Item key={index} label={course} value={course} />
                            ))}
                            </Picker>
                        </View>

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

                        <Text className="text-md font-semibold mt-5 mb-3">Roll No.</Text>
                        <TextInput
                            className="w-full h-12 border border-gray-400 rounded-xl px-4 text-black"
                            placeholder="Enter your Roll No"
                            placeholderTextColor="#888"
                        />

                        <Text className="text-md font-semibold mt-5 mb-3">Enrollment No.</Text>
                        <TextInput
                            className="w-full h-12 border border-gray-400 rounded-xl px-4 text-black"
                            placeholder="Enter your Enrollment No"
                            placeholderTextColor="#888"
                        />
                    </View>

                    {/* College details */}
                    <View className="bg-white rounded-lg mt-5 p-5">
                        <Text className="text-center font-semibold text-xl">College Deatils</Text>

                        <Text className="text-md font-semibold mt-5 mb-3">College Name</Text>
                        <TextInput
                            className="w-full h-12 border border-gray-400 rounded-xl px-4 text-black"
                            placeholder="Enter your college name"
                            placeholderTextColor="#888"
                        />

                        <Text className="text-md font-semibold mt-5 mb-3">City</Text>
                        <TextInput
                            className="w-full h-12 border border-gray-400 rounded-xl px-4 text-black"
                            placeholder="Enter your city name"
                            placeholderTextColor="#888"
                        />

                        <Text className="text-md font-semibold mt-5 mb-3">State</Text>
                        <TextInput
                            className="w-full h-12 border border-gray-400 rounded-xl px-4 text-black"
                            placeholder="Enter your state"
                            placeholderTextColor="#888"
                        />

                        <Text className="text-md font-semibold mt-5 mb-3">University Name</Text>
                        <TextInput
                            className="w-full h-12 border border-gray-400 rounded-xl px-4 text-black"
                            placeholder="Enter your university name"
                            placeholderTextColor="#888"
                        />
                    </View>

                    {/* Address detail */}
                    <View className="bg-white rounded-lg mt-5 p-5">
                        <Text className="text-center font-semibold text-xl">Adderess Deatils</Text>

                        <Text className="text-md font-semibold mt-5 mb-3">Plot no. / House no.</Text>
                        <TextInput
                            className="w-full h-12 border border-gray-400 rounded-xl px-4 text-black"
                            placeholder="Enter your plot / House no."
                            placeholderTextColor="#888"
                        />

                        <Text className="text-md font-semibold mt-5 mb-3">City</Text>
                        <TextInput
                            className="w-full h-12 border border-gray-400 rounded-xl px-4 text-black"
                            placeholder="Enter your city name"
                            placeholderTextColor="#888"
                        />

                        <Text className="text-md font-semibold mt-5 mb-3">State</Text>
                        <TextInput
                            className="w-full h-12 border border-gray-400 rounded-xl px-4 text-black"
                            placeholder="Enter your state"
                            placeholderTextColor="#888"
                        />

                        <Text className="text-md font-semibold mt-5 mb-3">Pin Code</Text>
                        <TextInput
                            className="w-full h-12 border border-gray-400 rounded-xl px-4 text-black"
                            placeholder="Enter your pin code"
                            placeholderTextColor="#888"
                        />

                        <Text className="text-md font-semibold mb-3 mt-5">Select Country</Text>
                        <View className="border border-gray-400 rounded-lg bg-white h-12 flex justify-center px-3">
                            <Picker
                                selectedValue={country}
                                onValueChange={(value) => setCountry(value)}
                            >
                                <Picker.Item label="-- Select Country --" value="" />
                                {countryOptions.map((option, index) => (
                                    <Picker.Item key={index} label={option} value={option} />
                                ))}
                            </Picker>
                        </View>
                    </View>
                {/* Form end */}
            </ScrollView>
        </SafeAreaView>
    );
}