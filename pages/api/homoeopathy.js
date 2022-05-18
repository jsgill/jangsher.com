// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      title: "Nux Vomica",
      helpsWith: ["Headache", "Blood Pressure", "Digestion"],
      symptoms: ["Easy to anger"],
      content: "Very good general purpose remedy.",
    },
    {
      title: "Arsnicum Album",
      helpsWith: ["Food poisoning", "Cough", "Burning sensations", "Fear"],
      symptoms: ["Burning sensations"],
      content: "Good for fever.",
    },
  ]);
}
