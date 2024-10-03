import { AddIcon, RemoveIcon } from "@/assets/svgs";
import FormInput from "@/components/FormInput";
import useFormHook from "@/components/useFormHook";
import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";

const Form = () => {
  const {
    values,
    errors,
    handleSubmit,
    handleAddField,
    submitted,
    clearAllInputs,
      removeIndex,
    handleChange
  } = useFormHook();

  return (
    <View
      style={{
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 4,
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
      }}
    >
      <Text
        style={{
          paddingVertical: 8,
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold",
          borderBottomWidth: 2,
          borderBottomColor: "#f0f0f0",
        }}
      >
        Contact Form
      </Text>
      {values?.map((value, index) => (
        <View key={index}>
          <View
            style={{
              paddingHorizontal: 16,
              marginBottom: 8,
              paddingVertical: 12,
              borderTopWidth: index > 0 ? 2 : 0,
              borderTopColor: "#f0f0f0",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#507FDF" }}>
              Form {index + 1}
            </Text>
            {index > 0 && (
              <TouchableOpacity
                onPress={() => removeIndex(index)}
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <RemoveIcon />
                <Text
                  style={{
                    fontSize: 14,
                    color: "#F15846",
                    fontWeight: "500",
                    marginLeft: 8,
                  }}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <FormInput
            type="text"
            label="Name"
            name="name"
            placeholder="-- Enter name --"
            inputType={"input"}
            value={value.name}
            error={errors[index]?.name}
            onChange={(text) => handleChange(index, 'name', text)} 
          />
          <FormInput
            type="email"
            label="Email"
            name="email"
            placeholder="-- Enter email --"
            inputType={"input"}
            value={value.email}
            error={errors[index]?.email}
            onChange={(text) => handleChange(index, 'email', text)} 
          />
          <FormInput
            type="text"
            label="Phone"
            name="phone"
            placeholder="-- Enter phone --"
            inputType={"input"}
            value={value.phone}
            error={errors[index]?.phone}
            onChange={(text) => handleChange(index, 'phone', text)} 
          />
          <FormInput
            type="text"
            label="Message"
            name="message"
            placeholder="-- Enter message --"
            inputType={"textarea"}
            value={value.message}
            error={errors[index]?.message}
            onChange={(text) => handleChange(index, 'message', text)} 
          />
        </View>
      ))}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 16,
        }}
      >
        <TouchableOpacity
          onPress={handleAddField}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <AddIcon />
          <Text
            style={{
              fontSize: 14,
              color: "#1034A6",
              fontWeight: "500",
              marginLeft: 8,
            }}
          >
            Add another
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Button title="Cancel" onPress={clearAllInputs} color="#000" />
          <TouchableOpacity
            onPress={handleSubmit}
            disabled={submitted}
            style={{
              backgroundColor: "#000",
              paddingVertical: 8,
              paddingHorizontal: 16,
              borderRadius: 4,
              marginLeft: 8,
              opacity: submitted ? 0.5 : 1,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "600" }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Form;
