import deepai from "deepai";

deepai.setApiKey("40c7fefd-dd44-4315-8b8a-0e888da49318");

const callTextGeneratorApi = async (textUrl) => {
  const apiKey = "40c7fefd-dd44-4315-8b8a-0e888da49318";
  const apiUrl = "https://api.deepai.org/api/text-generator";

  try {
    const formData = new FormData();
    formData.append("text", textUrl);

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "api-key": apiKey,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

// Usage example:
callTextGeneratorApi("https://api.deepai.org/api/text-generator");
